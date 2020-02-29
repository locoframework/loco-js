import Channels from "./channels";
import Env from "./env";
import Loco from "./base/loco.coffee";
import { Controllers, I18n, Models, Validators, Views } from "./deps";

const emit = args => Env.loco.emit(args);
const init = opts => new Loco(opts).init();
const connector = { Env, I18n };

export {
  connector,
  emit,
  init,
  Channels,
  Controllers,
  Env,
  I18n,
  Models,
  Validators,
  Views
};
