import eslint from '@rollup/plugin-eslint';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    {
      ...eslint({
        include: 'src/**/*.+(js|jsx)',
      }),
      enforce: 'pre',
    },
    jsconfigPaths(),
  ],
});
