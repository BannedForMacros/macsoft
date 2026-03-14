// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ⚠️ Cambia esta URL por tu dominio real cuando lo tengas (ej: https://macsoft.pe)
  site: 'https://macsoft.pe',
  integrations: [tailwind(), react(), sitemap()],
});
