import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';

const createWindow = (): void => {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    minWidth: 1000,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  console.log('Development mode: ', isDev);

  win.loadURL(
    isDev ? 'http://localhost:9000' : `file://${app.getAppPath()}/index.html`,
  );
};

app.on('ready', createWindow);
