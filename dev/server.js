import path from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";

import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";

import webpackConfig from "../webpack.config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const compiler = webpack(webpackConfig);

app.use(express.json());

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  }),
);

// notifications queued by /api/notify, drained by Wire's polling
let pending = [];

app.get("/notification-center", (_, res) => {
  const batch = pending;
  pending = [];
  res.json([batch, new Date().toISOString()]);
});

app.post("/api/notify", (req, res) => {
  const { id = 1, name = "created" } = req.body ?? {};
  pending.push([
    "Article",
    id,
    name,
    { id, loco: { idempotency_key: randomUUID() } },
  ]);
  res.json({ success: true });
});

// TODO: Requires ../../loco-js-model built with 'npm run build'
app.get("/loco-model.mjs", (_, res) => {
  const file = path.resolve(
    __dirname,
    "../../loco-js-model/dist/loco-model.mjs",
  );
  res.sendFile(file, (err) => {
    if (err)
      res
        .status(404)
        .type("js")
        .send(
          `throw new Error("loco-js-model build not found at ${file} — clone it next to this repo and run 'npm run build' there.");`,
        );
  });
});

app.get("/{:page}", (req, res) => {
  res.sendFile(path.join(__dirname, `${req.params.page || "index"}.html`));
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!\n");
});
