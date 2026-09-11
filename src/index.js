import Loco from "./loco.js";
import { setDeps, Models } from "./deps.js";

const init = (opts) => {
  const models = Array.isArray(opts.models)
    ? Object.fromEntries(opts.models.map((m) => [m.identity, m]))
    : (opts.models ?? {});
  if (Models !== null) Object.assign(Models, models);
  const loco = new Loco(models);
  loco.init(opts);
  return loco;
};

let subscribe = () => {};

const connectWithModel = (connector) => {
  setDeps(connector);
  subscribe = connector.IdentityMap.subscribe;
};

export { init, subscribe, connectWithModel };
