import fs from 'fs';
import path from 'path';

function findImages(dir, fileList = []) {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      try {
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          if (!filePath.includes('node_modules') && !filePath.includes('.git')) {
            findImages(filePath, fileList);
          }
        } else {
          if (/\.(png|jpg|jpeg|webp)$/i.test(file)) {
            fileList.push({ path: filePath, mtime: stat.mtimeMs, size: stat.size });
          }
        }
      } catch (e) {}
    }
  } catch (e) {}
  return fileList;
}

const searchDirs = [
  'C:\\Users\\akash\\.gemini\\antigravity',
  'C:\\Users\\akash\\AppData\\Local\\Temp'
];

let allImages = [];
searchDirs.forEach(d => {
  findImages(d, allImages);
});

allImages.sort((a, b) => b.mtime - a.mtime);

console.log('Recent 10 images found:');
allImages.slice(0, 10).forEach(img => {
  console.log(`${img.path} (${Math.round(img.size/1024)} KB, ${new Date(img.mtime).toISOString()})`);
});
