
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import environment from 'vite-plugin-environment';
import path from 'path';

dotenv.config();

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:4943',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    react(),
    environment('all', { prefix: 'CANISTER_' }),
    environment('all', { prefix: 'DFX_' }),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, 'src/assets*'),
          dest: '.'
        },
        {
          src: path.resolve(__dirname, `src/.well-known`),
          dest: '.'
        },
      ]
    }),
  ],
  cacheDir: '../node_modules/.vite',
});
