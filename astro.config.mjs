import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://wecleanshine.com',
  server: { port: 3000 },
  integrations: [tailwind()],
  /** Inline CSS when small enough — fewer render-blocking round-trips (helps FCP/LCP vs NO_LCP timeouts). */
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
