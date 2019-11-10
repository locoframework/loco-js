import Channels from "./channels";
import Controllers from "./controllers";
import Env from "./env";
import I18n from "./i18n";
import Loco from "./base/loco.coffee";
import Services from "./services";
import Views from "./views";
import { Models, Validators } from "./deps";

const connector = { Env, I18n };

export {
  connector,
  Channels,
  Controllers,
  Env,
  I18n,
  Loco,
  Models,
  Services,
  Validators,
  Views
};
