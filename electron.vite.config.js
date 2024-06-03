import { resolve } from 'path';
import {
  bytecodePlugin,
  defineConfig,
  externalizeDepsPlugin,
} from 'electron-vite';

export default defineConfig(() => {

  return {
    main: {
      plugins: [
        externalizeDepsPlugin(),
      ],
      build: {
        outDir: 'dist/main',
        target: 'node18.18',
        rollupOptions: {
          input: {
            index: resolve(__dirname, 'main/src/main.js'),
          },
        },
      },
    },
    preload: {
      plugins: [bytecodePlugin()],
      build: {
        rollupOptions: {
          input: {
            index: resolve(__dirname, 'preload.js'),
          },
          output: {
            dir: resolve(__dirname, 'dist/preload'),
          },
        },
      },
    },
    renderer: {
      root: '.',
      build: {
        rollupOptions: {
          input: {
            index: resolve(__dirname, 'renderer.html'),
          },
          output: {
            dir: resolve(__dirname, 'dist/renderer'),
          },
        },
      },
    },
  };
});
