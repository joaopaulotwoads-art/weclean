/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts}'],
  theme: {
    extend: {
      colors: {
        shine: {
          navy: '#0f172a',
          'navy-deep': '#020617',
          slate: '#1e293b',
          /** Hero — azul mais vivo, mantém contraste com texto branco */
          hero: {
            start: '#3d7ec4',
            mid: '#52aee8',
            end: '#2563a8',
          },
          /** Tons “limpeza” / frescos */
          clean: '#f0f9ff',
          mist: '#e2e8f0',
          fresh: '#93c5fd',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
