/**
 * Gera WebP a partir dos PNG em public/images e cria hero-bg.webp (gradiente leve).
 * Executar após adicionar novos PNG: bun run images:optimize
 */
import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const imagesDir = join(process.cwd(), 'public', 'images');

const heroSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
  <defs>
    <linearGradient id="h" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e3a5f"/>
      <stop offset="45%" stop-color="#1e40af"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#h)"/>
</svg>`;

async function main() {
  await sharp(Buffer.from(heroSvg))
    .webp({ quality: 78, effort: 4 })
    .toFile(join(imagesDir, 'hero-bg.webp'));

  const files = await readdir(imagesDir);
  const pngs = files.filter((f) => f.endsWith('.png'));

  for (const file of pngs) {
    const input = join(imagesDir, file);
    const out = join(imagesDir, file.replace(/\.png$/i, '.webp'));
    await sharp(input).webp({ quality: 82, effort: 5 }).toFile(out);
    console.log('wrote', out);
  }
  console.log('done: hero-bg.webp +', pngs.length, 'converted');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
