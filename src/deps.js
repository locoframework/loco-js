import { init as initCore } from "loco-js-core";

import {
  Base,
  Config,
  I18n,
  IdentityMap,
  Models,
  Validators
} from "loco-js-model";

const Deps = {
  cable: null,
  NotificationCenter: null
};

export { initCore, Base, Config, Deps, I18n, IdentityMap, Models, Validators };
