import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['config/tests/setup-tests.ts'],
    server: {
      deps: {
        inline: ['intergalactic'],
        indent: ['error', 'tab']
      },
    },
  },
});
