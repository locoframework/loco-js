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
  Validators
} from "./deps";

const getLocale = () => Config.locale;
const setLocale = locale => (Config.locale = locale);

const getWire = () => Env.loco.wire;

const getLine = () => Env.loco.line.subscription;

const emit = args => Env.loco.emit(args);

const init = opts => {
  Config.locale = opts.locale || "en";
  Config.protocolWithHost = opts.protocolWithHost;
  Config.cookiesByCORS = opts.cookiesByCORS || false;
  External.cable = opts.cable;
  External.NotificationCenter = opts.notificationCenter;
  new Loco(opts).init({
    cable: External.cable,
    protocolWithHost: Config.protocolWithHost
  });
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
  Validators
};
