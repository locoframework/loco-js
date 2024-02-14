import { Config, IdentityMap, Models, Validators } from "loco-js-model";

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
  IdentityMap,
  Models,
  Validators,
};
