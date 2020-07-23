/* eslint-env node */

module.exports = {
  modulePaths: ["src"],
  moduleFileExtensions: ["js", "coffee"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.coffee$": "<rootDir>/jest.coffeescript.preprocessor.js"
  }
};
