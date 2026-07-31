import fs from 'fs';
import path from 'path';

const newPhoto = 'C:\\Users\\akash\\.gemini\\antigravity\\brain\\baa831e3-24ba-4ed7-b9b9-ac9ed022db36\\.user_uploaded\\media__1785527778057.jpg';
const assetsDir = path.join(process.cwd(), 'public', 'assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

fs.copyFileSync(newPhoto, path.join(assetsDir, 'anik_olympia_stage.jpg'));
fs.copyFileSync(newPhoto, path.join(assetsDir, 'anik_hero.jpg'));
fs.copyFileSync(newPhoto, path.join(assetsDir, 'ig_post_1.jpg'));

console.log('Updated anik_olympia_stage.jpg with the 453KB crisp uncropped photo successfully!');
