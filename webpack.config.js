const path = require("path");

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
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "loco.js",
    library: { name: "Loco", type: "umd", umdNamedDefine: true },
    globalObject: "window",
    clean: true,
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
