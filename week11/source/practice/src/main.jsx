import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// In embed mode, tell the Week 11 page how tall this demo is so its iframe fits exactly.
if (window.parent !== window && document.documentElement.classList.contains('embed')) {
  const send = () =>
    window.parent.postMessage(
      { type: 'demo-height', demo: new URLSearchParams(window.location.search).get('demo'), height: document.getElementById('root').offsetHeight },
      '*',
    );
  new ResizeObserver(send).observe(document.getElementById('root'));
}
