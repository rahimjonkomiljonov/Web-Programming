(() => {
  const script = document.currentScript;
  if (!script || !document.body) return;

  // Skip link for pages that do not ship their own (WCAG 2.4.1)
  const main = document.querySelector('main');
  if (main && !document.querySelector('.skip-link')) {
    if (!main.id) main.id = 'main-content';
    const skip = document.createElement('a');
    skip.className = 'skip-link';
    skip.href = '#' + main.id;
    skip.textContent = 'Skip to main content';
    document.body.prepend(skip);
  }

  const homeUrl = new URL('./index.html', script.src);

  // A plain div (not <nav>) so exercise pages with their own "nav { ... }" CSS cannot restyle it.
  const controls = document.createElement('div');
  controls.id = 'wp-site-controls';
  controls.setAttribute('role', 'group');
  controls.setAttribute('aria-label', 'Site navigation');

  const homeLink = document.createElement('a');
  homeLink.href = homeUrl.href;
  homeLink.textContent = 'Home';

  const backButton = document.createElement('button');
  backButton.type = 'button';
  backButton.textContent = 'Back';
  backButton.addEventListener('click', () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.assign(homeUrl.href);
    }
  });

  controls.append(homeLink, backButton);

  const footer = document.querySelector('#wp-site-footer, body > footer') || document.createElement('footer');
  footer.id = 'wp-site-footer';
  footer.textContent = 'Created by Rahimjon | Student ID: 202438377';
  if (!footer.isConnected) document.body.appendChild(footer);

  // Same look on every page, including the Week 3 CSS exercises that keep their own styles.
  const styles = document.createElement('style');
  styles.textContent = `
    body { padding-bottom: max(82px, calc(env(safe-area-inset-bottom) + 72px)) !important; }
    #wp-site-controls {
      position: fixed;
      z-index: 2147483647;
      right: max(14px, env(safe-area-inset-right));
      bottom: max(14px, env(safe-area-inset-bottom));
      display: flex;
      gap: 6px;
      padding: 6px;
      border: 1.5px solid #1c1b19;
      border-radius: 999px;
      background: #1c1b19;
      box-shadow: 0 8px 22px rgba(28, 27, 25, 0.28);
      font: 600 14px/1.2 "IBM Plex Sans", system-ui, sans-serif;
    }
    #wp-site-controls a, #wp-site-controls button {
      min-width: 72px;
      min-height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 8px 16px;
      border: 0;
      border-radius: 999px;
      box-shadow: none;
      font: inherit;
      text-decoration: none;
      cursor: pointer;
      transform: none;
      transition: background-color 120ms ease;
    }
    #wp-site-controls a { background: #f6d04d; color: #1c1b19; }
    #wp-site-controls a:hover { background: #fde68a; color: #1c1b19; }
    #wp-site-controls button { background: rgba(246, 241, 231, 0.14); color: #f6f1e7; }
    #wp-site-controls button:hover { background: rgba(246, 241, 231, 0.26); color: #f6f1e7; }
    #wp-site-controls a:focus-visible, #wp-site-controls button:focus-visible { outline: 3px solid #fff; outline-offset: 2px; }
    .skip-link { position: absolute; left: -9999px; top: 0.5rem; }
    .skip-link:focus { left: 0.5rem; z-index: 2147483647; padding: 0.6rem 1rem; background: #1c1b19; color: #f6f1e7; border: 2px solid #f6d04d; border-radius: 8px; font: 600 14px/1.2 "IBM Plex Sans", system-ui, sans-serif; }
    #wp-site-footer {
      margin: 36px 20px 0;
      padding: 18px 0 24px;
      border-top: 1.5px dashed #b9ae96;
      color: #5c564a;
      font: 500 13px/1.5 "IBM Plex Mono", ui-monospace, Consolas, monospace;
      text-align: center;
    }
  `;
  document.head.appendChild(styles);
  document.body.append(controls);
})();
