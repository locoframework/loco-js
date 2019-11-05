/* eslint-env node */

const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.coffee$/,
        use: [
          {
            loader: "coffee-loader",
            options: {
              transpile: {
                presets: ["@babel/preset-env"]
              }
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "loco.js",
    library: "App",
    libraryTarget: "umd"
  },
  externals: {
    "loco-js-model": {
      commonjs: "loco-js-model",
      commonjs2: "loco-js-model",
      amd: "loco-js-model",
      root: "LocoModel"
    }
  }
};
