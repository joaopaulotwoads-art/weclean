import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://wecleanshine.com',
  server: { port: 3000 },
  integrations: [react(), tailwind()],
});
