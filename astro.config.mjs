import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://wecleanshine.com',
  server: { port: 3000 },
  integrations: [tailwind()],
  /** Inline all page CSS — evita esperar pelo segundo pedido HTTP do _astro/*.css (FCP/LCP no PSI). */
  build: {
    inlineStylesheets: 'always',
  },
  compressHTML: true,
});
