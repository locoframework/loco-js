module.exports = {
  modulePaths: ["src"],
  moduleFileExtensions: ["js"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};
