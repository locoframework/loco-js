import Loco from "./loco.coffee";
import {
  IdentityMap,
  Models,
} from "./deps";

const processModels = (opts) => {
  const models = opts.models || {};
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

const subscribe = IdentityMap.subscribe;

export {
  init,
  subscribe,
  Models,
};
