import Loco from "./loco.coffee";
import {
  helpers,
  Config,
  Controllers,
  I18n,
  IdentityMap,
  Models,
  Validators,
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
  }
  return models;
};

const getLocale = () => Config.locale;
const setLocale = (locale) => (Config.locale = locale);

const init = (opts) => {
  Config.locale = opts.locale || "en";
  Config.cookiesByCORS = opts.cookiesByCORS || false;
  for (const i of Object.keys(opts.controllers || {})) {
    Controllers[i] = opts.controllers[i];
  }
  const models = processModels(opts);
  const loco = new Loco(models);
  loco.init(opts);
  return loco;
};

const createConnector = (loco) => ({ getLocale, loco, I18n });

const subscribe = IdentityMap.subscribe;

export {
  getLocale,
  setLocale,
  createConnector,
  helpers,
  init,
  subscribe,
  Controllers,
  I18n,
  Models,
  Validators,
};
