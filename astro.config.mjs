// @ts-check
import { defineConfig } from 'astro/config';

// Vorschau auf GitHub Pages unter https://cosmo-hl.github.io/dr-tiffert-vorschau/
export default defineConfig({
  site: 'https://cosmo-hl.github.io',
  base: '/dr-tiffert-vorschau/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
