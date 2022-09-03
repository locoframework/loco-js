import processNotification from "./wire/processNotification";
import processSystemNotification from "./line/processSystemNotification";

class Line {
  constructor(cable, notificationCenter, wire) {
    this.cable = cable;
    this.notificationCenter = notificationCenter;
    this.wire = wire;
    this.connected = false;
    this.subscription = null;
  }

  connect() {
    this.subscription = this.cable.subscriptions.create(
      {
        channel: "Loco::NotificationCenterChannel",
      },
      {
        connected: () => {
          console.log("WS connected");
          this.connected = true;
          this.notificationCenter({ loco: "connected" });
          this.pong();
        },
        disconnected: () => {
          console.log("WS disconnected");
          this.connected = false;
          if (this.wire !== null) {
            this.wire.uuid = null;
            this.wire.fetchSyncTime({ after: "connect" });
          }
          this.notificationCenter({ loco: "disconnected" });
        },
        rejected: () => {
          console.log("WS rejected");
          this.notificationCenter({ loco: "rejected" });
        },
        received: (data) => {
          if (data.loco != null) {
            const res = processSystemNotification(data.loco, {
              line: this,
              wire: this.wire,
              processNotification,
              notificationCenter: this.notificationCenter,
            });
            if (res !== true) return;
            delete data.loco;
          }
          if (Object.keys(data).length === 0) return;
          this.notificationCenter(data);
        },
      }
    );
  }

  send(payload) {
    this.subscription.send(payload);
  }

  pong() {
    setTimeout(() => this.send({ loco: { pong: true } }), 3000);
  }
}

export default Line;
