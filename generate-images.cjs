const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, 'public', 'saad-shaikh-profile.jpg');
const publicDir = path.join(__dirname, 'public');

// Helper function to create an ICO file buffer from multiple PNG buffers (e.g. 16x16, 32x32, 48x48)
function pngsToIco(pngBuffers) {
  const numImages = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 = ICO
  header.writeUInt16LE(numImages, 4);

  const dirSize = 16 * numImages;
  let currentOffset = 6 + dirSize;

  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0); // Width
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1); // Height
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // Image size in bytes
    entry.writeUInt32LE(currentOffset, 12); // Offset to image data
    entries.push(entry);
    currentOffset += item.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map(b => b.buffer)]);
}

/**
 * Creates a borderless circular cropped photo on a transparent square canvas
 * @param {Buffer} inputBuffer - The source image buffer
 * @param {number} size - Target canvas dimensions (e.g., 512, 192, 180, 48, 32, 16)
 */
async function createCircularFavicon(inputBuffer, size) {
  const radius = size / 2;

  // 1. Resize source photo to exact size x size
  const photoResized = await sharp(inputBuffer)
    .resize(size, size, { fit: 'cover', position: 'top' })
    .toBuffer();

  // 2. Pure circular mask for the photo — no border, no stroke, no ring
  const maskSvg = Buffer.from(
    `<svg width="${size}" height="${size}">
      <circle cx="${radius}" cy="${radius}" r="${radius}" fill="black" />
    </svg>`
  );

  return await sharp(photoResized)
    .composite([{ input: maskSvg, blend: 'dest-in' }])
    .png()
    .toBuffer();
}

async function processImages() {
  console.log('Processing profile images and circular favicons from:', inputPath);
  const inputBuffer = fs.readFileSync(inputPath);

  // 1. High-quality WebP at 800x800 for Retina/Desktop displays
  await sharp(inputBuffer)
    .resize(800, 800, { fit: 'cover', position: 'top' })
    .webp({ quality: 90, effort: 6 })
    .toFile(path.join(publicDir, 'saad-shaikh-profile.webp'));
  console.log('Created saad-shaikh-profile.webp (800x800)');

  // 2. High-quality WebP at 400x400 for mobile
  await sharp(inputBuffer)
    .resize(400, 400, { fit: 'cover', position: 'top' })
    .webp({ quality: 86, effort: 6 })
    .toFile(path.join(publicDir, 'saad-shaikh-profile-400.webp'));
  console.log('Created saad-shaikh-profile-400.webp (400x400)');

  // 3. Optimized JPG fallback at 800x800
  const optJpg = await sharp(inputBuffer)
    .resize(800, 800, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'saad-shaikh-profile.jpg'), optJpg);
  console.log('Optimized saad-shaikh-profile.jpg (800x800)');

  // -------------------------------------------------------------
  // CIRCULAR Favicon Generation from Real Photo (Transparent background)
  // -------------------------------------------------------------
  console.log('Generating TRUE CIRCULAR favicons with transparent canvas...');

  // Standard Favicon PNG 512x512 (Borderless Circular)
  const fav512 = await createCircularFavicon(inputBuffer, 512);
  fs.writeFileSync(path.join(publicDir, 'favicon-512.png'), fav512);
  console.log('Created borderless circular favicon-512.png (512x512)');

  // Favicon PNG 192x192 (Borderless Circular)
  const fav192 = await createCircularFavicon(inputBuffer, 192);
  fs.writeFileSync(path.join(publicDir, 'favicon-192.png'), fav192);
  console.log('Created borderless circular favicon-192.png (192x192)');

  // Apple Touch Icon 180x180 (Borderless Circular)
  const appleTouch = await createCircularFavicon(inputBuffer, 180);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleTouch);
  console.log('Created borderless circular apple-touch-icon.png (180x180)');

  // Favicon PNG 48x48 (Borderless Circular)
  const fav48 = await createCircularFavicon(inputBuffer, 48);
  fs.writeFileSync(path.join(publicDir, 'favicon-48.png'), fav48);
  fs.writeFileSync(path.join(publicDir, 'favicon.png'), fav48);
  console.log('Created borderless circular favicon-48.png & favicon.png (48x48)');

  // Favicon PNG 32x32 (Borderless Circular)
  const fav32 = await createCircularFavicon(inputBuffer, 32);
  fs.writeFileSync(path.join(publicDir, 'favicon-32.png'), fav32);

  // Favicon PNG 16x16 (Borderless Circular)
  const fav16 = await createCircularFavicon(inputBuffer, 16);
  fs.writeFileSync(path.join(publicDir, 'favicon-16.png'), fav16);

  // Generate multi-size valid favicon.ico with borderless circular images (16/32/48)
  const icoBuffer = pngsToIco([
    { width: 16, height: 16, buffer: fav16 },
    { width: 32, height: 32, buffer: fav32 },
    { width: 48, height: 48, buffer: fav48 }
  ]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Created borderless circular multi-resolution favicon.ico (16/32/48)');

  // Also create a conventional square favicon fallback as requested in spec
  const squareFav48 = await sharp(inputBuffer)
    .resize(48, 48, { fit: 'cover', position: 'top' })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-square.png'), squareFav48);
  console.log('Created fallback favicon-square.png (48x48)');

  // -------------------------------------------------------------
  // 4. Open Graph Preview Image (1200x630) with Dark Navy Branded Theme
  // -------------------------------------------------------------
  const avatarSize = 420;
  const avatarBuffer = await sharp(inputBuffer)
    .resize(avatarSize, avatarSize, { fit: 'cover', position: 'top' })
    .composite([{
      input: Buffer.from(
        `<svg width="${avatarSize}" height="${avatarSize}">
          <rect x="0" y="0" width="${avatarSize}" height="${avatarSize}" rx="${avatarSize / 2}" fill="black" />
        </svg>`
      ),
      blend: 'dest-in'
    }])
    .png()
    .toBuffer();

  const ogSvg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#080c12" />
          <stop offset="50%" stop-color="#0a0e14" />
          <stop offset="100%" stop-color="#11151c" />
        </linearGradient>
        <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f05335" />
          <stop offset="100%" stop-color="#ff856b" />
        </linearGradient>
        <radialGradient id="glow" cx="80%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#f05335" stop-opacity="0.18" />
          <stop offset="100%" stop-color="#f05335" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Background -->
      <rect width="1200" height="630" fill="url(#bgGrad)" />
      <circle cx="950" cy="315" r="320" fill="url(#glow)" />

      <!-- Left Content: Typography & Brand -->
      <g transform="translate(90, 110)">
        <!-- Location / Status Pill -->
        <rect x="0" y="0" width="280" height="34" rx="17" fill="#11161d" stroke="#202833" stroke-width="1.5" />
        <circle cx="20" cy="17" r="5" fill="#10b981" />
        <text x="36" y="22" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600" fill="#cbd5e1" letter-spacing="1.5">
          PUNE, MAHARASHTRA, INDIA
        </text>

        <!-- Main Name -->
        <text x="0" y="115" font-family="'Plus Jakarta Sans', sans-serif" font-size="64" font-weight="800" fill="#ffffff" letter-spacing="-1">
          Saad Shaikh
        </text>

        <!-- Role Headline -->
        <text x="0" y="175" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="700" fill="#f05335">
          Full-Stack Developer
        </text>

        <!-- Dual-Stack Specialization -->
        <text x="0" y="225" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="500" fill="#94a3b8">
          MERN Stack  •  Java Full-Stack  •  REST APIs
        </text>

        <!-- Description -->
        <text x="0" y="285" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" fill="#cbd5e1">
          Production full-stack applications with React, Node.js,
        </text>
        <text x="0" y="315" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" fill="#cbd5e1">
          MongoDB, Spring Boot, and robust system architecture.
        </text>

        <!-- URL Tag -->
        <rect x="0" y="365" width="370" height="42" rx="10" fill="#11161d" stroke="#f05335" stroke-width="1.5" stroke-opacity="0.5" />
        <text x="20" y="392" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="600" fill="#f05335">
          saadshaikh-portfolio.netlify.app
        </text>
      </g>

      <!-- Right Content: Profile Photo Frame with Orange Border -->
      <circle cx="950" cy="315" r="220" fill="none" stroke="url(#borderGrad)" stroke-width="6" />
      <circle cx="950" cy="315" r="226" fill="none" stroke="#f05335" stroke-width="1.5" stroke-opacity="0.3" />
    </svg>
  `;

  await sharp(Buffer.from(ogSvg))
    .composite([{
      input: avatarBuffer,
      top: 315 - (avatarSize / 2),
      left: 950 - (avatarSize / 2)
    }])
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('Created high-resolution branded og-image.png (1200x630)');
}

processImages().catch(err => {
  console.error('Error generating images:', err);
  process.exit(1);
});
