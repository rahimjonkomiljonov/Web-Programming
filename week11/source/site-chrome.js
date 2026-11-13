// Small Vite plugin shared by the Week 11 apps.
// After the build it adds the course site's header, fonts, base styles and the Home/Back bar
// to the generated index.html, so each React app looks like the rest of the site.
// Paths are relative because the apps are published as sub-folders: /Web-Programming/week11/<app>/

export default function siteChrome({ crumb }) {
  const header = `  <header class="site-header">
    <a class="brand" href="../../index.html"><span class="brand-mark" aria-hidden="true">WP</span>Web Programming</a>
    <div class="crumbs" role="navigation" aria-label="Breadcrumb">
      <a href="../index.html">Week 11</a>
      <span aria-hidden="true">/</span>
      <span aria-current="page">${crumb}</span>
    </div>
  </header>`;

  const head = [
    '<link rel="preload" href="../../assets/fonts/BricolageGrotesque.woff2" as="font" type="font/woff2" crossorigin>',
    '<link rel="preload" href="../../assets/fonts/IBMPlexSans.woff2" as="font" type="font/woff2" crossorigin>',
    '<link rel="stylesheet" href="../../assets/frame.css">',
  ].join('\n    ');

  return {
    name: 'site-chrome',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        return html
          // frame.css must come before the app's own stylesheet
          .replace('<script type="module"', `${head}\n    <script type="module"`)
          .replace('<body>', `<body>\n${header}`)
          .replace('</body>', '  <script src="../../site-nav.js" defer></script>\n</body>');
      },
    },
  };
}
