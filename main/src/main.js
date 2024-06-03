import { app } from 'electron';

import {getNativeNode} from 'test-module';

const gotTheLock = app.requestSingleInstanceLock();

const init = () => {
  getNativeNode();
}

if (!gotTheLock) {
  app.quit();
} else {
  init();
}