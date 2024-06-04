/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
module.exports = {
  npmRebuild: false,
  extends: null,
  appId: '',
  productName: 'Test appp',
  files: [
    '!node_modules',
    '!src/*',
    '!main/*',
    '!preload.js',
    '!renderer.html',
    '!README.md',
    '!electron.vite.config.{js,ts,mjs,cjs}',
    '!electron-builder.config.{js,ts,mjs,cjs}',
    '!dist',
    {
      from: 'dist/main',
      to: 'dist/main',
    },
  ],
  extraMetadata: {
    dependencies: null,
    main: 'dist/main/index.js',
  },
  win: {
    asar: false,
    target: [
      {
        target: 'nsis',
        arch: ['x64'],
      },
    ],
  },
  directories: {
    output: 'release',
  },
};
