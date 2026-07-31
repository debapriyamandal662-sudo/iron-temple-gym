import fs from 'fs';
import path from 'path';
import https from 'https';

const assetsDir = path.join(process.cwd(), 'public', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const imagesToDownload = [
  {
    filename: 'anik_hero.jpg',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85'
  },
  {
    filename: 'anik_portrait.jpg',
    url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=85'
  },
  {
    filename: 'trainer_rajesh.jpg',
    url: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=85'
  },
  {
    filename: 'trainer_priya.jpg',
    url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=85'
  },
  {
    filename: 'trainer_vikram.jpg',
    url: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=85'
  },
  {
    filename: 'gym_facility_1.jpg',
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=85'
  },
  {
    filename: 'gym_facility_2.jpg',
    url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=85'
  },
  {
    filename: 'gym_facility_3.jpg',
    url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=85'
  },
  {
    filename: 'gym_facility_4.jpg',
    url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=85'
  },
  {
    filename: 'gym_facility_5.jpg',
    url: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=800&q=85'
  },
  {
    filename: 'gym_facility_6.jpg',
    url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=85'
  },
  {
    filename: 'ig_post_1.jpg',
    url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=85'
  },
  {
    filename: 'ig_post_2.jpg',
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=85'
  },
  {
    filename: 'ig_post_3.jpg',
    url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=85'
  },
  {
    filename: 'ig_post_4.jpg',
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=85'
  },
  {
    filename: 'ig_post_5.jpg',
    url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=85'
  },
  {
    filename: 'ig_post_6.jpg',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=85'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading photo assets to public/assets/...');
  for (const img of imagesToDownload) {
    const dest = path.join(assetsDir, img.filename);
    try {
      await downloadFile(img.url, dest);
      console.log(`Downloaded ${img.filename}`);
    } catch (err) {
      console.error(`Failed to download ${img.filename}:`, err.message);
    }
  }
  console.log('Done downloading photos!');
}

run();
