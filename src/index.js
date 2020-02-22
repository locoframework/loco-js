import Channels from "./channels";
import Env from "./env";
import I18n from "./i18n";
import Loco from "./base/loco.coffee";
import { Controllers, Models, Validators, Views } from "./deps";

const init = opts => new Loco(opts).init();
const connector = { Env, I18n };

export {
  connector,
  init,
  Channels,
  Controllers,
  Env,
  I18n,
  Models,
  Validators,
  Views
};
