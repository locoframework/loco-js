module.exports = {
  modulePaths: ["src"],
  "moduleFileExtensions": [
    "js",
    "coffee"
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.coffee$": "<rootDir>/test/js/preprocessor.js"
  },
  verbose: true
};
