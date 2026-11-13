// Week 11 (React): compiles week11/src/*.jsx into plain JavaScript in week11/js/,
// then copies each JSX source into week11/index.html between its
// <!-- code:NAME --> and <!-- /code:NAME --> markers, so the code shown on the
// page is always the code that runs.
// Run:  cd tools && npm install && npm run build:week11
import { transform } from 'esbuild';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';

const week = new URL('../week11/', import.meta.url);
const pagePath = new URL('index.html', week);
let page = readFileSync(pagePath, 'utf8');

const escapeHtml = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

for (const file of readdirSync(new URL('src/', week)).filter((f) => f.endsWith('.jsx')).sort()) {
  const name = file.replace(/\.jsx$/, '');
  const source = readFileSync(new URL(`src/${file}`, week), 'utf8');

  // React and ReactDOM come from the UMD builds in week11/vendor (globals).
  const { code } = await transform(source, { loader: 'jsx', jsx: 'transform', target: 'es2018', minify: true });
  writeFileSync(new URL(`js/${name}.js`, week), code);

  const marker = new RegExp(`(<!-- code:${name} -->)[\\s\\S]*?(<!-- /code:${name} -->)`);
  if (!marker.test(page)) throw new Error(`index.html has no code block for ${name}`);
  const block = `<pre><code>${escapeHtml(source.trimEnd())}</code></pre>`;
  page = page.replace(marker, (_, open, close) => `${open}${block}${close}`);
  console.log(`${file}: ${source.length} bytes -> js/${name}.js ${code.length} bytes`);
}

writeFileSync(pagePath, page);
