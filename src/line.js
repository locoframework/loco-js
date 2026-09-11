import processEnvelope from "./line/processEnvelope.js";

class Line {
  constructor(client, notificationCenter, wire) {
    this.client = client;
    this.notificationCenter = notificationCenter;
    this.wire = wire;
    this.isConnected = false;
    this.disconnectWire = false;
  }

  connect() {
    this.client.connect(this);
  }

  disconnect({ all = false } = {}) {
    this.disconnectWire = all;
    return this.client.disconnect();
  }

  send(payload) {
    return this.isConnected ? this.client.send(payload) : false;
  }

  pong() {
    setTimeout(() => this.send({ loco: { pong: true } }), 3000);
  }

  connected() {
    console.log("WS connected");
    this.isConnected = true;
    if (this.wire !== null) {
      this.wire.check();
    }
    this.notificationCenter({ loco: "connected" });
    this.pong();
  }

  disconnected() {
    console.log("WS disconnected");
    this.isConnected = false;
    if (this.wire !== null) {
      this.wire.uuid = null;
      if (!this.disconnectWire) {
        this.wire.connect();
      }
    }
    this.disconnectWire = false;
    this.notificationCenter({ loco: "disconnected" });
  }

  rejected() {
    console.log("WS rejected");
    this.notificationCenter({ loco: "rejected" });
  }

  received(data) {
    if (data.loco != null) {
      const res = processEnvelope(data.loco, this);
      if (res !== true) return;
      delete data.loco;
    }
    if (Object.keys(data).length === 0) return;
    this.notificationCenter(data);
  }
}

export default Line;
