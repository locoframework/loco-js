import Loco from "./loco.coffee";
import {
  IdentityMap,
  Models,
} from "./deps";

const processModels = (opts) => {
  const models = opts.models || {};
  for (const i of Object.keys(models)) {
    Models[i] = models[i];
    if (opts.protocolWithHost != null) {
      Models[i].protocolWithHost = opts.protocolWithHost;
    }
    if (opts.authorizationHeader != null) {
      Models[i].authorizationHeader = opts.authorizationHeader;
    }
    if (opts.cookiesByCORS != null) {
      Models[i].cookiesByCORS = opts.cookiesByCORS;
    }
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
