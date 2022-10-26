const { app, BrowserWindow } = require("electron");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  //remove default menu from chromium
  mainWindow.setMenu(null);

  mainWindow.loadFile("index.html");
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

app.whenReady().then(createWindow);
