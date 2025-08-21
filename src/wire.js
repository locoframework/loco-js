import ObjectUtils from "./utils/object";
import openRequest from "./wire/openRequest";
import processNotification from "./wire/processNotification";

class Wire {
  constructor(opts, notificationCenter, reqOpts) {
    this.pollingTime = opts.pollingTime ?? 3000;
    this.log = !!opts.log;
    this.ssl = opts.ssl;
    this.location = opts.location ?? "notification-center";
    this.size = opts.size ?? 100;
    this.protocolWithHost = opts.protocolWithHost;
    this.notificationCenter = notificationCenter;
    this.reqOpts = reqOpts;
    this.syncTime = null;
    this.token = null;
    this.pollingInterval = null;
    this.uuid = null;
    this.line = null;
  }

  setLine(line) {
    this.line = line;
  }

  setPollingTime(val) {
    this.pollingTime = val;
    if (this.line?.isConnected) return;
    this.disconnect();
    this.connect();
  }

  connect() {
    this.check();
    this.pollingInterval = setInterval(() => {
      if (this.line?.isConnected) {
        this.disconnect();
        return;
      }
      this.check();
    }, this.pollingTime);
  }

  disconnect() {
    window.clearInterval(this.pollingInterval);
  }

  check() {
    const url = `${this._getURL()}?${ObjectUtils.toURIParams(this._requestParams())}`;
    const request = openRequest("GET", url, this.reqOpts);
    request.onload = (e) => {
      if (e.target.status >= 200 && e.target.status < 400) {
        const data = JSON.parse(e.target.response);
        this.syncTime = data[1];
        const notifications = data[0];
        if (notifications.length === 0) return;

        for (const notification of notifications) {
          processNotification(notification, {
            log: this.log,
            notificationCenter: this.notificationCenter,
            emit: (payload) => this.line?.send(payload),
          });
        }

        if (notifications.length === this.size) this.check();
      }
    };
    request.send();
  }

  _requestParams() {
    const params = { synced_at: this.syncTime };
    if (this.token != null) params.token = this.token;
    if (this.uuid != null) params.uuid = this.uuid;
    return params;
  }

  _getURL() {
    let [protocol, , host] = window.location.href.split("/");
    if (this.protocolWithHost != null) {
      [protocol, host] = this.protocolWithHost.split("//");
    }
    if (this.ssl != null) {
      protocol = this.ssl ? "https:" : "http:";
    }
    return `${protocol}//${host}/${this.location}`;
  }
}

export default Wire;
