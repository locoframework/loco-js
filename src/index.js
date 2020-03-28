import Channels from "./channels";
import Env from "./env";
import Loco from "./loco.coffee";
import {
  helpers,
  Config,
  Controllers,
  I18n,
  IdentityMap,
  Models,
  Validators
} from "./deps";

const emit = args => Env.loco.emit(args);

const init = opts => {
  Config.locale = opts.locale || "en";
  Config.protocolWithHost = opts.protocolWithHost;
  new Loco(opts).init();
};

const getLocale = () => Config.locale;
const setLocale = locale => (Config.locale = locale);

const connector = { getLocale, Env, I18n };

const subscribe = IdentityMap.subscribe;

export {
  getLocale,
  setLocale,
  connector,
  emit,
  helpers,
  init,
  subscribe,
  Channels,
  Controllers,
  Env,
  I18n,
  Models,
  Validators
};
