import Loco from "./loco";
import { setIdentityMap, setModels, Models } from "./deps";

const normalizeModels = (models) => {
  if (Array.isArray(models)) {
    return Object.fromEntries(models.map((m) => [m.identity, m]));
  }
  return models || {};
};

const processModels = (opts) => {
  const models = normalizeModels(opts.models);
  if (Models === null) return models;
  for (const i of Object.keys(models)) {
    Models[i] = models[i];
  }
  return models;
};

const init = (opts) => {
  const models = processModels(opts);
  const loco = new Loco(models);
  loco.init(opts);
  return loco;
};

let subscribe = () => {};

const connectWithModel = (connector) => {
  setIdentityMap(connector.IdentityMap);
  setModels(connector.Models);
  subscribe = connector.IdentityMap.subscribe;
};

export { init, subscribe, connectWithModel };
