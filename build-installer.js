const { MSICreator } = require("electron-wix-msi");
const path = require("path");

const APP_DIR = path.resolve(__dirname, "./out/mondomegabits-game-win32-x64");
const OUT_DIR = path.resolve(__dirname, "./out/installer");

const msiCreator = new MSICreator({
  appDirectory: APP_DIR,
  outputDirectory: OUT_DIR,
  description: "The Official Mondo Megabits CCG Video Game",
  name: "Mondo Megabits",
  exe: "mondomegabits-game",
  manufacturer: "COM98 LLC",
  version: "0.0.1",
  icon: path.resolve(__dirname, "./icon.ico"),
  ui: {
    chooseDirectory: true,
  },
});

msiCreator.create().then(() => {
  msiCreator.compile();
});
