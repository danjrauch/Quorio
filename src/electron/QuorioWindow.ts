import { app, BrowserWindow } from 'electron';

export class QuorioWindow {
  public readonly window: BrowserWindow;

  constructor() {
    this.window = this.createWindow();
  }

  createWindow(): BrowserWindow {
    const window = new BrowserWindow({
      width: 800,
      height: 800,
      //show: false, // This will the window hidden in launch time.
      webPreferences: {
        nodeIntegration: true
      }
    });

    window.on('minimize', (event: Electron.Event) => {
      event.preventDefault();
      window.hide();
    });
  
    window.on('close', (event: Electron.Event) => {
      event.preventDefault();
      window.hide();
    });

    // Load our index.html
    window.loadURL(`file://${app.getAppPath()}/index.html`)
    return window;
  }
}