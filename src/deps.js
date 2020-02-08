import { init as initCore, Controllers, Views } from "loco-js-core";

import {
  Base,
  Config,
  I18n,
  IdentityMap,
  Models,
  Validators
} from "loco-js-model";

import Connectivity from './base/mixins/Connectivity'

Controllers.Base.prototype.setScope = name => Config.scope = name;
Controllers.Base.prototype.setResource = name => this.setScope(name);

Object.assign(Controllers.Base.prototype, Connectivity);
Object.assign(Views.Base.prototype, Connectivity);

const Deps = {
  cable: null,
  NotificationCenter: null
};

export { initCore, Base, Config, Controllers, Deps, I18n, IdentityMap, Models, Validators, Views };
