import { init as initCore, helpers } from "loco-js-core";

import { Config, I18n, IdentityMap, Models, Validators } from "loco-js-model";

class Base {
  setScope(name) {
    Config.scope = name;
  }

  setResource(name) {
    this.setScope(name);
  }
}

const Controllers = { Base };

export {
  initCore,
  helpers,
  Config,
  Controllers,
  I18n,
  IdentityMap,
  Models,
  Validators,
};
