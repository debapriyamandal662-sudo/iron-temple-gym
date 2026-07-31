import fs from 'fs';
import path from 'path';

const srcLogo = 'C:\\Users\\akash\\.gemini\\antigravity\\brain\\baa831e3-24ba-4ed7-b9b9-ac9ed022db36\\.user_uploaded\\media__1785525378597.jpg';
const assetsDir = path.join(process.cwd(), 'public', 'assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Copy to logo.png and logo.jpg
fs.copyFileSync(srcLogo, path.join(assetsDir, 'logo.png'));
fs.copyFileSync(srcLogo, path.join(assetsDir, 'logo.jpg'));

console.log('Iron Temple logo copied to public/assets/logo.png and public/assets/logo.jpg successfully!');
