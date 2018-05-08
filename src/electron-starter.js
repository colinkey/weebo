const electron = require("electron");
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const url = require("url");

const DataStore = require("nedb");

const db = new DataStore({
  filename: `${__dirname}\\userData.db`
});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 1000, height: 750, frame: false });

  // and load the index.html of the app.
  mainWindow.loadURL("http://localhost:3000/home");

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on("closed", function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  electron.ipcMain.on("insert-doc", (event, arg) => {
    db.insert(arg, function(err, newDoc) {
      mainWindow.send("send-to-render", newDoc);
    });
  });

  electron.ipcMain.on("update-doc", (event, arg) => {
    db.update(arg[0], { $set: arg[1] }, { returnUpdatedDocs: true }, function(
      err,
      numReplaced,
      affectedDocs
    ) {
      if (err) {
        console.log(err);
      } else {
        mainWindow.send("send-to-render", affectedDocs);
      }
    });
  });

  electron.ipcMain.on("get-initial-data", event => {
    db.find({}, function(err, docs) {
      mainWindow.send("send-initial-data", docs);
    });
  });

  electron.ipcMain.on("send-to-main", (event, arg) => {
    console.log(arg);
    mainWindow.send("send-to-render", `${parseInt(arg) + 2}`);
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

db.loadDatabase();
