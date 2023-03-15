const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.coffee$/,
        use: [
          {
            loader: "coffee-loader",
            options: {
              transpile: {
                presets: ["@babel/preset-env"],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "loco.js",
    library: "Loco",
    libraryTarget: "umd",
  },
  externals: {
    "loco-js-model": {
      commonjs: "loco-js-model",
      commonjs2: "loco-js-model",
      amd: "loco-js-model",
      root: "LocoModel",
    },
  },
};
