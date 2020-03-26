import Channels from "./channels";
import Env from "./env";
import Loco from "./loco.coffee";
import {
  helpers,
  Controllers,
  I18n,
  IdentityMap,
  Models,
  Validators
} from "./deps";

const emit = args => Env.loco.emit(args);
const init = opts => new Loco(opts).init();
const connector = { Env, I18n };
const subscribe = IdentityMap.subscribe;

export {
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
