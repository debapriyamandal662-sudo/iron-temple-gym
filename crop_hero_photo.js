import sharp from 'sharp';
import path from 'path';

const srcPhoto = 'C:\\Users\\akash\\.gemini\\antigravity\\brain\\baa831e3-24ba-4ed7-b9b9-ac9ed022db36\\.user_uploaded\\media__1785527778057.jpg';
const destPhoto = path.join(process.cwd(), 'public', 'assets', 'anik_hero_cropped.jpg');

async function cropHero() {
  console.log('Cropping lower portion of Olympia stage photo for Hero banner...');
  const image = sharp(srcPhoto);
  const metadata = await image.metadata();

  console.log(`Original image size: ${metadata.width}x${metadata.height}`);

  // We want to crop from top y=0 to height * 0.58 (upper torso, chest, shoulders, and face)
  const cropHeight = Math.round(metadata.height * 0.58);
  const cropWidth = metadata.width;

  await image
    .extract({ left: 0, top: 0, width: cropWidth, height: cropHeight })
    .toFile(destPhoto);

  console.log(`Cropped Hero photo created: ${cropWidth}x${cropHeight} at ${destPhoto}`);
}

cropHero().catch(err => console.error(err));
