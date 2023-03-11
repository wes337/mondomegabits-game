const { app, BrowserWindow, Menu } = require("electron");

const createWindow = () => {
  const mainWindow = new BrowserWindow();

  // mainWindow.maximize();
  // mainWindow.loadURL("http://localhost:3000");

  mainWindow.setFullScreen(true);
  mainWindow.setResizable(false);
  mainWindow.loadFile("./dist/index.html");

  Menu.setApplicationMenu(null);

  return mainWindow;
};

app.whenReady().then(() => {
  let mainWindow = createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      mainWindow = createWindow();
    }
  });

  const { webContents } = mainWindow;

  webContents.on("did-finish-load", () => {
    webContents.setZoomFactor(1);
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
