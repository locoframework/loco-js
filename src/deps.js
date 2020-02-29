import { init as initCore, Controllers, Views } from "loco-js-core";

import { Config, I18n, IdentityMap, Models, Validators } from "loco-js-model";

import Connectivity from "./base/mixins/Connectivity";

Controllers.Base.prototype.setScope = name => (Config.scope = name);
Controllers.Base.prototype.setResource = name => this.setScope(name);

for (const property in Connectivity) {
  if (Object.prototype.hasOwnProperty.call(Connectivity, property)) {
    Controllers.Base.prototype[property] = Connectivity[property];
    Views.Base.prototype[property] = Connectivity[property];
  }
}

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
