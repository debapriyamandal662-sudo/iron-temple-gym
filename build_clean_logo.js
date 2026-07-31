import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const inputPath = 'C:\\Users\\akash\\.gemini\\antigravity\\brain\\baa831e3-24ba-4ed7-b9b9-ac9ed022db36\\.user_uploaded\\media__1785525924858.png';
const assetsDir = path.join(process.cwd(), 'public', 'assets');

async function processLogo() {
  console.log('Processing official logo with sharp...');
  
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  console.log(`Original image metadata: ${metadata.width}x${metadata.height}`);

  // Get raw RGBA buffer
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;

  // Create two buffers:
  // Buffer 1: Navbar Logo (Main "IRON TEMPLE" mark ONLY, bottom tagline removed, black turned transparent)
  // Buffer 2: Footer Logo (Full logo with tagline, black turned transparent)

  const navBuffer = Buffer.alloc(data.length);
  const footerBuffer = Buffer.alloc(data.length);

  // We want to detect the tagline height. The tagline "BY IFBB PRO ANIK GHOSH" is at the bottom ~25-30% of the height.
  // Let's find the horizontal gap between "IRON TEMPLE" and "BY IFBB PRO ANIK GHOSH".
  
  // First, turn black/dark pixels transparent for both buffers
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      
      // Calculate brightness
      const brightness = (r + g + b) / 3;

      if (brightness < 40) {
        // Dark/Black background -> make completely transparent
        navBuffer[idx] = 0;
        navBuffer[idx + 1] = 0;
        navBuffer[idx + 2] = 0;
        navBuffer[idx + 3] = 0;

        footerBuffer[idx] = 0;
        footerBuffer[idx + 1] = 0;
        footerBuffer[idx + 2] = 0;
        footerBuffer[idx + 3] = 0;
      } else {
        // Keep white logo pixels
        footerBuffer[idx] = r;
        footerBuffer[idx + 1] = g;
        footerBuffer[idx + 2] = b;
        footerBuffer[idx + 3] = 255;

        // For Navbar logo, check if y is in the top section (above tagline)
        // Tagline is around y > height * 0.65
        if (y < height * 0.62) {
          navBuffer[idx] = r;
          navBuffer[idx + 1] = g;
          navBuffer[idx + 2] = b;
          navBuffer[idx + 3] = 255;
        } else {
          navBuffer[idx] = 0;
          navBuffer[idx + 1] = 0;
          navBuffer[idx + 2] = 0;
          navBuffer[idx + 3] = 0;
        }
      }
    }
  }

  // Save temporary full transparent PNGs and trim empty edges
  const rawNavPNG = await sharp(navBuffer, { raw: { width, height, channels: 4 } })
    .png()
    .trim() // Sharp trim automatically crops transparent borders!
    .toBuffer();

  const rawFooterPNG = await sharp(footerBuffer, { raw: { width, height, channels: 4 } })
    .png()
    .trim()
    .toBuffer();

  const navPath = path.join(assetsDir, 'logo_navbar.png');
  const footerPath = path.join(assetsDir, 'logo_footer.png');
  const logoPngPath = path.join(assetsDir, 'logo.png');

  fs.writeFileSync(navPath, rawNavPNG);
  fs.writeFileSync(footerPath, rawFooterPNG);
  fs.writeFileSync(logoPngPath, rawNavPNG); // Default logo.png to nav logo for safety

  const navMeta = await sharp(rawNavPNG).metadata();
  const footerMeta = await sharp(rawFooterPNG).metadata();

  console.log(`Navbar Logo created: ${navMeta.width}x${navMeta.height} at ${navPath}`);
  console.log(`Footer Logo created: ${footerMeta.width}x${footerMeta.height} at ${footerPath}`);
}

processLogo().catch(err => console.error(err));
