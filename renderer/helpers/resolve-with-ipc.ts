import electron from 'electron';

// prevent SSR webpacking
const ipcRenderer = electron.ipcRenderer || false;

export function resolve(pathname) {
  if (ipcRenderer) {
    return ipcRenderer.sendSync('resolve', pathname);
  }
}
