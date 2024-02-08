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
  Config,
  Controllers,
  I18n,
  IdentityMap,
  Models,
  Validators,
};
