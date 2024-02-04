module.exports = {
  modulePaths: ["src"],
  moduleFileExtensions: ["js", "coffee"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.coffee$": "<rootDir>/jest.coffeescript.preprocessor.js",
  },
};
