import fs from 'fs';
import path from 'path';

const srcPhoto = 'C:\\Users\\akash\\.gemini\\antigravity\\brain\\baa831e3-24ba-4ed7-b9b9-ac9ed022db36\\.user_uploaded\\media__1785526605519.jpg';
const assetsDir = path.join(process.cwd(), 'public', 'assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

fs.copyFileSync(srcPhoto, path.join(assetsDir, 'anik_gym_workout.jpg'));
fs.copyFileSync(srcPhoto, path.join(assetsDir, 'ig_post_5.jpg'));

console.log('Updated anik_gym_workout.jpg with high-res photo successfully!');
