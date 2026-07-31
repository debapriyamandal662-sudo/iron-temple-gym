import fs from 'fs';
import path from 'path';

const newLogoPath = 'C:\\Users\\akash\\.gemini\\antigravity\\brain\\baa831e3-24ba-4ed7-b9b9-ac9ed022db36\\.user_uploaded\\media__1785525924858.png';
const assetsDir = path.join(process.cwd(), 'public', 'assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

fs.copyFileSync(newLogoPath, path.join(assetsDir, 'logo.png'));
fs.copyFileSync(newLogoPath, path.join(assetsDir, 'logo.jpg'));

console.log('Successfully updated logo.png and logo.jpg with the high-resolution horizontal brand logo!');
