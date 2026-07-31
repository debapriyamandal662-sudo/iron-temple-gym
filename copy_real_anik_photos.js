import fs from 'fs';
import path from 'path';

const userUploadedDir = 'C:\\Users\\akash\\.gemini\\antigravity\\brain\\baa831e3-24ba-4ed7-b9b9-ac9ed022db36\\.user_uploaded';
const assetsDir = path.join(process.cwd(), 'public', 'assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Map the uploaded files:
// 242 KB = Olympia stage posing photo
// 89 KB = Arm workout side profile photo
// 115 KB = Intense front portrait photo

const photoMap = {
  'media__1785525060660.jpg': ['anik_olympia_stage.jpg', 'anik_hero.jpg', 'ig_post_1.jpg'],
  'media__1785525060665.jpg': ['anik_gym_workout.jpg', 'ig_post_5.jpg'],
  'media__1785525060671.jpg': ['anik_portrait_real.jpg', 'anik_portrait.jpg', 'ig_post_2.jpg']
};

for (const [srcFile, destFiles] of Object.entries(photoMap)) {
  const srcPath = path.join(userUploadedDir, srcFile);
  if (fs.existsSync(srcPath)) {
    for (const destName of destFiles) {
      const destPath = path.join(assetsDir, destName);
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${srcFile} -> ${destName}`);
    }
  } else {
    console.error(`Source file not found: ${srcPath}`);
  }
}

console.log('Real Anik Ghosh photos integrated successfully!');
