// Minifies the readable sources in assets/src/ into assets/ (the files the pages link to).
// Run:  cd tools && npm install && npm run build
import { transform } from 'lightningcss';
import { readFileSync, writeFileSync } from 'node:fs';

for (const name of ['frame.css', 'site.css']) {
  const src = readFileSync(new URL(`../assets/src/${name}`, import.meta.url));
  const { code } = transform({ filename: name, code: src, minify: true });
  // the sources sit one folder deeper, so fix the font paths for the output location
  const out = code.toString().replaceAll('../fonts/', 'fonts/');
  writeFileSync(new URL(`../assets/${name}`, import.meta.url), out);
  console.log(`${name}: ${src.length} bytes -> ${out.length} bytes`);
}
