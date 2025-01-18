const { app, ipcMain, BrowserWindow, Menu } = require("electron");
const path = require("path");

let mainWindow;
let loginWindow;
let dashboardWindow;

// Start Loading Window
function createMainWindow() {
  // Create the main window and set to "mainWindow"
  mainWindow = new BrowserWindow({
    width: 300,
    height: 100,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "../src/renderer/preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.setMenu(null);

  mainWindow.loadURL("http://localhost:3000");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

ipcMain.on("open-menu", () => {
  if (dashboardWindow) return;

  dashboardWindow = new BrowserWindow({
    width: 600,
    height: 500,
    minWidth: 500,
    minHeight: 350,
    webPreferences: {
      preload: path.join(__dirname, "../src/renderer/preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // loginWindow.hide();
  loginWindow.close();
  dashboardWindow.setMenu(null);

  dashboardWindow.loadURL("http://localhost:3000/mainmenu-window");

  dashboardWindow.on("closed", () => {
    dashboardWindow = null;
  });
});
function openLoginWindow() {
  if (loginWindow) return;

  // Login Window
  loginWindow = new BrowserWindow({
    width: 300,
    height: 350,
    minWidth: 300,
    minHeight: 350,
    maxWidth: 500,
    maxHeight: 500,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "../src/renderer/preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  mainWindow.hide();

  loginWindow.setMenu(null);
  loginWindow.loadURL("http://localhost:3000/login-window"); // React route

  loginWindow.on("closed", () => {
    loginWindow = null;
    // mainWindow.show();
  });
}
ipcMain.on("open-login-window", () => {
  openLoginWindow();
});
ipcMain.on("exit-app", () => {
  app.quit();
});
ipcMain.on("logout", () => {
  openLoginWindow();
  dashboardWindow.close();
});
app.on("window-all-closed", () => {
  if (process.platform === "darwin") app.quit();
});
