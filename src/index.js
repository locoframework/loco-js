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

const getLocale = () => Config.locale;
const setLocale = (locale) => (Config.locale = locale);

const init = (opts) => {
  for (const i of Object.keys(opts.controllers || {})) {
    Controllers[i] = opts.controllers[i];
  }
  for (const i of Object.keys(opts.models || {})) {
    Models[i] = opts.models[i];
  }
  Config.locale = opts.locale || "en";
  Config.protocolWithHost = opts.protocolWithHost;
  Config.cookiesByCORS = opts.cookiesByCORS || false;
  const loco = new Loco(opts);
  loco.init();
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
