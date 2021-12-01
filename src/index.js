import Env from "./env";
import Loco from "./loco.coffee";
import {
  helpers,
  Config,
  Controllers,
  External,
  I18n,
  IdentityMap,
  Models,
  Validators,
} from "./deps";

const getLocale = () => Config.locale;
const setLocale = (locale) => (Config.locale = locale);

const getWire = () => Env.loco.wire;

const getLine = () => Env.loco.line.subscription;

const emit = (args) => Env.loco.emit(args);

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
  External.cable = opts.cable;
  const loco = new Loco(opts);
  loco.init({
    cable: External.cable,
    protocolWithHost: Config.protocolWithHost,
  });
  return loco;
};

const connector = { getLocale, Env, I18n };

const subscribe = IdentityMap.subscribe;

export {
  getLine,
  getLocale,
  setLocale,
  getWire,
  connector,
  emit,
  helpers,
  init,
  subscribe,
  Controllers,
  Env,
  I18n,
  Models,
  Validators,
};
