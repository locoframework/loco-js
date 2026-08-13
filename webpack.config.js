import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "production",
  devtool: "source-map",
  entry: "./src/index.js",
  experiments: { outputModule: true },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "loco.mjs",
    library: { type: "module" },
    clean: true,
  },
};
