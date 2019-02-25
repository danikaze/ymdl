import electron from 'electron';
import Link from 'next/link';

// prevent SSR webpacking
const ipcRenderer = electron.ipcRenderer || false;

export class LinkWithIpc extends Link {
  public linkClicked = (e) => {
    e.preventDefault();

    if (ipcRenderer) {
      const resolved = ipcRenderer.sendSync('resolve', this.props.href);
      ipcRenderer.send('load', resolved);
    }
  }
}
