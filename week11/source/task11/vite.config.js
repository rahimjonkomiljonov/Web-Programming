import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import siteChrome from '../site-chrome.js';

// base './' keeps every asset path relative, so the build works from /Web-Programming/week11/practice/
export default defineConfig({
  plugins: [react(), siteChrome({ crumb: 'Task 11-A' })],
  base: './',
  build: { outDir: '../../task11', emptyOutDir: true },
});
