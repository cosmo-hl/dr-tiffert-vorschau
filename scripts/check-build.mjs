// Prüft den Produktionsbuild für www.dr-tiffert.de:
// - normale Seiten: kein noindex, Canonical auf www.dr-tiffert.de, genau eine H1, lang="de"
// - Weiterleitungen und 404: noindex
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
});
let failed = false;
for (const file of walk(dist)) {
  const html = readFileSync(file, 'utf8');
  const errors = [];
  const noindex = /<meta name="robots" content="noindex"\s*\/?>/.test(html);
  const redirect = /http-equiv="refresh"/.test(html);
  const is404 = file.endsWith('/404.html');
  if (redirect || is404) {
    if (!noindex) errors.push('noindex fehlt');
  } else {
    if (noindex) errors.push('noindex auf öffentlicher Seite');
    if (!/<link rel="canonical" href="https:\/\/www\.dr-tiffert\.de\//.test(html)) errors.push('Canonical fehlt');
  }
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) errors.push(`${h1} H1`);
  if (!/<html lang="de"/.test(html)) errors.push('lang="de" fehlt');
  if (/Vorschau|dr-tiffert-vorschau/.test(html)) errors.push('Vorschau-Rest');
  if (/Vertrieb\s*\|/i.test(html)) errors.push('alte Vertriebszeile?');
  console.log(`${errors.length ? 'FEHLER' : 'ok    '} ${file.replace(dist, '/')}${errors.length ? ' – ' + errors.join(', ') : ''}`);
  if (errors.length) failed = true;
}
const robots = readFileSync(join(dist, 'robots.txt'), 'utf8');
if (/Disallow:\s*\/\s*$/m.test(robots)) { console.log('FEHLER robots.txt blockiert'); failed = true; }
if (!existsSync(join(dist, 'CNAME')) || readFileSync(join(dist, 'CNAME'), 'utf8').trim() !== 'www.dr-tiffert.de') { console.log('FEHLER CNAME'); failed = true; }
if (!existsSync(join(dist, 'sitemap.xml'))) { console.log('FEHLER sitemap.xml fehlt'); failed = true; }
process.exit(failed ? 1 : 0);
