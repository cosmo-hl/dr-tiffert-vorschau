// @ts-check
import { defineConfig } from 'astro/config';

// Live unter https://www.dr-tiffert.de (GitHub Pages mit eigener Domain, siehe public/CNAME)
export default defineConfig({
  site: 'https://www.dr-tiffert.de',
  base: '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
