import processSystemNotification from "./line/processSystemNotification";
import Cable from "./line/cable";

class Line {
  constructor(consumer, notificationCenter, wire) {
    this.client = new Cable(consumer);
    this.notificationCenter = notificationCenter;
    this.wire = wire;
    this.isConnected = false;
  }

  connect() {
    this.client.connect(this);
  }

  send(payload) {
    this.client.send(payload);
  }

  pong() {
    setTimeout(() => this.send({ loco: { pong: true } }), 3000);
  }

  connected() {
    console.log("WS connected");
    this.isConnected = true;
    this.notificationCenter({ loco: "connected" });
    this.pong();
  }

  disconnected() {
    console.log("WS disconnected");
    this.isConnected = false;
    if (this.wire !== null) {
      this.wire.uuid = null;
      this.wire.fetchSyncTime({ after: "connect" });
    }
    this.notificationCenter({ loco: "disconnected" });
  }

  rejected() {
    console.log("WS rejected");
    this.notificationCenter({ loco: "rejected" });
  }

  received(data) {
    if (data.loco != null) {
      const res = processSystemNotification(data.loco, this);
      if (res !== true) return;
      delete data.loco;
    }
    if (Object.keys(data).length === 0) return;
    this.notificationCenter(data);
  }
}

export default Line;
