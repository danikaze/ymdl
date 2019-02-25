import { join } from 'path';
import { app } from 'electron';
import { createWindow } from './helpers/create-window';
import { exitOnChange } from './helpers/exit-on-change';

const isProd = process.env.NODE_ENV === 'production';

if (!isProd) {
  exitOnChange();

  const userDataPath = app.getPath('userData');
  app.setPath('userData', `${userDataPath} (development)`);
}

app.on('ready', () => {
  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
  });

  if (isProd) {
    const homeFile = join(app.getAppPath(), 'app/home/index.html');
    mainWindow.loadFile(homeFile);
  } else {
    const homeUrl = 'http://localhost:8888/home';
    mainWindow.loadURL(homeUrl);
    mainWindow.webContents.openDevTools();
  }
});

app.on('window-all-closed', () => {
  app.quit();
});
