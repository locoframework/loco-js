import Wire from "./wire.js";
import Line from "./line.js";
import Cable from "./line/cable.js";

class Loco {
  constructor(models) {
    this.models = models;
    this.wire = null;
    this.line = null;
  }

  getModels() {
    return this.models;
  }

  getLine() {
    return this.line;
  }

  getWire() {
    return this.wire;
  }

  setAuthorizationHeader(val) {
    for (const key in this.models) {
      if (Object.prototype.hasOwnProperty.call(this.models, key)) {
        this.models[key].authorizationHeader = val;
      }
    }
  }

  init(opts) {
    const notificationsParams = opts.notifications ?? {};
    notificationsParams.protocolWithHost = opts.protocolWithHost;

    if (notificationsParams.enable !== false) {
      const wireOpts = {
        cookiesByCORS: opts.cookiesByCORS,
        authorizationHeader: opts.authorizationHeader,
      };
      this.wire = new Wire(
        notificationsParams,
        opts.notificationCenter,
        wireOpts,
      );
      this.wire.connect();
    }

    const wsClient = this.#initWsClient(opts);
    if (wsClient != null) {
      this.line = new Line(wsClient, opts.notificationCenter, this.wire);
      this.line.connect();
      if (this.wire) this.wire.setLine(this.line);
    }

    this.#ready(() => {
      opts.postInit?.();
    });
  }

  #initWsClient(opts) {
    if (opts.wsClient != null) return opts.wsClient;
    if (opts.cable != null) return new Cable(opts.cable);
    return null;
  }

  #ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }
}

export default Loco;
