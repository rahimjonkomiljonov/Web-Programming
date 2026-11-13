import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import siteChrome from '../site-chrome.js';

// base './' keeps every asset path relative, so the build works from /Web-Programming/week11/practice/
export default defineConfig({
  plugins: [react(), siteChrome({ crumb: 'Class practice' })],
  base: './',
  build: { outDir: '../../practice', emptyOutDir: true },
});
