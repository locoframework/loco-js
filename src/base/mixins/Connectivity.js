import { IdentityMap } from "../../deps";
import ArrayUtils from "../../utils/array.coffee";

const Connectivity = {
  connectWith(data, opts = {}) {
    if (data == null) return null;
    if (data.constructor.name !== "Array") data = [data];
    data = ArrayUtils.uniq(data);
    for (const resource of data) {
      if (resource.constructor.name === "Function") {
        const identity = resource.getIdentity();
        IdentityMap.addCollection(identity, { to: this });
        if (opts.receiver != null) {
          this.receivers[identity] = opts.receiver;
        }
      } else {
        IdentityMap.connect(this, { with: resource });
        if (opts.receiver != null) {
          this.receivers[resource.toKey()] = opts.receiver;
        }
      }
    }
  },

  receiverFor(data) {
    if (data.constructor.name === "String") {
      return this.receivers[data] != null ? this.receivers[data] : null;
    }
    if (this.receivers[data.toKey()] != null) {
      return this.receivers[data.toKey()];
    }
    return null;
  }
};

export default Connectivity;
