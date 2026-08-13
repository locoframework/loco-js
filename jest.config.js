export default {
  modulePaths: ["src"],
  testEnvironment: "jsdom",
  // ponytail: Wire.check() fires a real XHR under jsdom, leaving sockets open
  // at teardown; stub XMLHttpRequest for every suite
  setupFilesAfterEnv: ["<rootDir>/__mock__/xhr.js"],
};
