const { app, BrowserWindow } = require('electron');
const { join } = require('path');

let mainWindow = null;

app.on('ready', () => {
  console.log('Hello from Electron');
  mainWindow = new BrowserWindow();
  // mainWindow.webContents.loadFile(join(__dirname, 'index.html'));
  mainWindow.webContents.loadFile('./app/index.html');
  // mainWindow.webContents.loadFile('index.html'); // ERROR -> this points to bookmarker/index.html
});
