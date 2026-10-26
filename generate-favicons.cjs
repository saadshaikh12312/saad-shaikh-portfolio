const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'public', 'saad-shaikh-profile.webp');
const publicDir = path.join(__dirname, 'public');

async function createCircular(size) {
  const radius = size / 2;
  const resized = await sharp(srcPath)
    .resize(size, size, { fit: 'cover', position: 'center' })
    .toBuffer();

  const maskSvg = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${radius}" cy="${radius}" r="${radius}" fill="black" /></svg>`
  );

  return await sharp(resized)
    .composite([{ input: maskSvg, blend: 'dest-in' }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

function pngsToIco(pngBuffers) {
  const numImages = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(numImages, 4);

  const dirSize = 16 * numImages;
  let currentOffset = 6 + dirSize;

  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(item.buffer.length, 8);
    entry.writeUInt32LE(currentOffset, 12);
    entries.push(entry);
    currentOffset += item.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map(b => b.buffer)]);
}

async function run() {
  console.log('Generating clean circular favicons from source:', srcPath);
  
  if (!fs.existsSync(srcPath)) {
    throw new Error(`Source file not found at ${srcPath}`);
  }

  // 1. Primary Favicon 192x192 (Square canvas, true circular mask, no borders, clean transparent background)
  const fav192 = await createCircular(192);
  fs.writeFileSync(path.join(publicDir, 'favicon.png'), fav192);
  fs.writeFileSync(path.join(publicDir, 'favicon-192.png'), fav192);
  console.log('Created public/favicon.png (192x192, 48px multiple for Google Search) and favicon-192.png');

  // 2. 96x96 Favicon
  const fav96 = await createCircular(96);
  fs.writeFileSync(path.join(publicDir, 'favicon-96.png'), fav96);
  console.log('Created public/favicon-96.png (96x96, 48px multiple for Google Search)');

  // 3. 48x48 Favicon
  const fav48 = await createCircular(48);
  fs.writeFileSync(path.join(publicDir, 'favicon-48.png'), fav48);
  console.log('Created public/favicon-48.png (48x48)');

  // 4. 32x32 & 16x16 standard browser sizes
  const fav32 = await createCircular(32);
  fs.writeFileSync(path.join(publicDir, 'favicon-32.png'), fav32);
  const fav16 = await createCircular(16);
  fs.writeFileSync(path.join(publicDir, 'favicon-16.png'), fav16);
  console.log('Created public/favicon-32.png and public/favicon-16.png');

  // 5. Apple Touch Icon 180x180
  const appleTouch = await createCircular(180);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleTouch);
  console.log('Created public/apple-touch-icon.png (180x180)');

  // 6. Multi-resolution ICO (16, 32, 48)
  const ico = pngsToIco([
    { width: 16, height: 16, buffer: fav16 },
    { width: 32, height: 32, buffer: fav32 },
    { width: 48, height: 48, buffer: fav48 }
  ]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico);
  console.log('Created public/favicon.ico containing 16x16, 32x32, 48x48');
}

run().catch(err => {
  console.error('Favicon generation error:', err);
  process.exit(1);
});
