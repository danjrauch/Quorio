import { app, Tray, Menu, nativeImage } from 'electron';
import { QuorioWindow } from './QuorioWindow';

export class TrayMenu {
  // Create a variable to store our tray
  // Public: Make it accessible outside of the class;
  // Readonly: Value can't be changed
  public readonly tray: Tray;

  private __mainWindow: QuorioWindow;

  // Path where should we fetch our icon;
  private iconPath: string = '/assets/white-pawn.png';

  constructor(mainWindow: QuorioWindow) {
    this.tray = new Tray(this.createNativeImage());
    this.__mainWindow = mainWindow;
    // We need to set the context menu to our tray
    this.tray.setContextMenu(this.createMenu());
  }

  createMenu(): Menu {
    // This method will create the Menu for the tray
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Quorio',
        type: 'normal',
        click: () => { 
          this.__mainWindow.window.show();
        }
      },
      {
        label: 'Quit',
        type: 'normal',
        click: () => {
          this.__mainWindow.window.destroy();
          app.quit();
        }
      }
    ]);
    return contextMenu;
  }

  createNativeImage() {
    // Since we never know where the app is installed,
    // we need to add the app base path to it.
    const path = `${app.getAppPath()}${this.iconPath}`;
    const image = nativeImage.createFromPath(path);
    // Marks the image as a template image.
    image.setTemplateImage(true);
    return image;
  }
}