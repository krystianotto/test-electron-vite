/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
module.exports = {
  extends: null,
  appId: '',
  productName: 'Test appp',
  files: [
    '!node_modules',
    {
      from: '../dist/main',
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
    output: '../release',
  },
};
