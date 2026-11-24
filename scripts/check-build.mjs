// Prüft den Produktionsbuild: jede HTML-Seite braucht noindex, genau eine H1, lang="de".
import { readdirSync, readFileSync, statSync } from 'node:fs';
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
  if (!/<meta name="robots" content="noindex"\s*\/?>/.test(html)) errors.push('noindex fehlt');
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) errors.push(`${h1} H1`);
  if (!/<html lang="de"/.test(html)) errors.push('lang="de" fehlt');
  if (/Vertrieb\s*\|/i.test(html)) errors.push('alte Vertriebszeile?');
  console.log(`${errors.length ? 'FEHLER' : 'ok    '} ${file.replace(dist, '/')}${errors.length ? ' – ' + errors.join(', ') : ''}`);
  if (errors.length) failed = true;
}
const robots = readFileSync(join(dist, 'robots.txt'), 'utf8');
if (/Disallow:\s*\/\s*$/m.test(robots)) { console.log('FEHLER robots.txt blockiert'); failed = true; }
process.exit(failed ? 1 : 0);
