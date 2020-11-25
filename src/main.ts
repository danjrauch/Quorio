import { app, BrowserWindow } from 'electron';
import { TrayMenu } from '@/electron/TrayMenu';
import { QuorioWindow } from '@/electron/QuorioWindow';

interface AppElements {
  tray: TrayMenu | null;
  windows: QuorioWindow[];
}

const appElements: AppElements = {
  tray: null,
  windows: [],
};

app.on('ready', () => {
  appElements.windows.push(new QuorioWindow());
  appElements.tray = new TrayMenu(appElements.windows[0]);
});