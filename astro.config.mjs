import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://wecleanshine.com',
  server: { port: 3000 },
  integrations: [tailwind()],
  /**
   * `always` inchava o HTML com todo o Tailwind e o Lighthouse 13 falhava auditorias (Erro!) e às vezes NO_LCP.
   * `auto` mantém CSS externo quando faz sentido — PSI analisa ficheiros normalmente.
   */
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
