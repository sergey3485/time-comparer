import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react({
      babel: {
        plugins: [
          [
            'effector/babel-plugin',
          ],
        ],
      },
    }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      all: true,
      exclude: [
        '.storybook',
        'vite.config.ts',
        'vitest.config.ts',
        'src/vite-env.d.ts',
        'src/styled.d.ts',
        '**/index.ts',
        '**/*.stories.tsx',
        '**/*.styled.ts',
        'src/**/*.test.{ts,tsx}',
      ],
    },
  },
});
