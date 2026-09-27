(() => {
  const script = document.currentScript;
  if (!script || !document.body) return;

  const homeUrl = new URL('./index.html', script.src);
  const controls = document.createElement('nav');
  controls.id = 'wp-site-controls';
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
      border: 1px solid #b9c9cc;
      border-radius: 8px;
      background: #fff;
      box-shadow: 0 4px 18px rgba(23, 43, 50, .18);
      font: 600 14px/1.2 system-ui, sans-serif;
    }
    #wp-site-controls a, #wp-site-controls button {
      min-width: 72px;
      min-height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 8px 12px;
      border: 1px solid #cbd9d7;
      border-radius: 5px;
      background: #f5f8f7;
      color: #172b32;
      font: inherit;
      text-decoration: none;
      cursor: pointer;
    }
    #wp-site-controls a { border-color: #136f63; background: #136f63; color: #fff; }
    #wp-site-controls a:focus-visible, #wp-site-controls button:focus-visible { outline: 3px solid #2859a8; outline-offset: 2px; }
    #wp-site-footer {
      margin: 36px 20px 0;
      padding: 18px 0 24px;
      border-top: 1px solid #cbd9d7;
      color: #587078;
      font: 14px/1.5 system-ui, sans-serif;
      text-align: center;
    }
  `;
  document.head.appendChild(styles);
  document.body.append(controls);
})();