import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/hash-empire/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Hash Empire, Idle Tech Tycoon',
        short_name: 'Hash Empire',
        theme_color: '#070b1c',
        background_color: '#070b1c',
        display: 'standalone',
        orientation: 'portrait',
      },
    }),
  ],
});
