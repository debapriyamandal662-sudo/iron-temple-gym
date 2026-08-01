import fs from 'fs';
import path from 'path';

const artifactsDir = 'C:\\Users\\akash\\.gemini\\antigravity\\brain\\baa831e3-24ba-4ed7-b9b9-ac9ed022db36';
const publicAssetsDir = path.join(process.cwd(), 'public', 'assets');

if (!fs.existsSync(publicAssetsDir)) {
  fs.mkdirSync(publicAssetsDir, { recursive: true });
}

const files = fs.readdirSync(artifactsDir);

files.forEach(file => {
  if (file.startsWith('blog_hypertrophy_')) {
    fs.copyFileSync(path.join(artifactsDir, file), path.join(publicAssetsDir, 'blog_hypertrophy.jpg'));
    console.log(`Copied ${file} -> blog_hypertrophy.jpg`);
  }
  if (file.startsWith('blog_nutrition_')) {
    fs.copyFileSync(path.join(artifactsDir, file), path.join(publicAssetsDir, 'blog_nutrition.jpg'));
    console.log(`Copied ${file} -> blog_nutrition.jpg`);
  }
  if (file.startsWith('blog_contest_prep_')) {
    fs.copyFileSync(path.join(artifactsDir, file), path.join(publicAssetsDir, 'blog_contest_prep.jpg'));
    console.log(`Copied ${file} -> blog_contest_prep.jpg`);
  }
});

console.log('Blog images copied to public/assets/ successfully!');
