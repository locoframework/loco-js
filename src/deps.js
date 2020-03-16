import { init as initCore, Controllers, Views } from "loco-js-core";

import { Config, I18n, IdentityMap, Models, Validators } from "loco-js-model";

Controllers.Base.prototype.setScope = name => (Config.scope = name);
Controllers.Base.prototype.setResource = name => this.setScope(name);

const Deps = {
  cable: null,
  NotificationCenter: null
};

export {
  initCore,
  Config,
  Controllers,
  Deps,
  I18n,
  IdentityMap,
  Models,
  Validators,
  Views
};
