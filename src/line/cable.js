class Cable {
  constructor(consumer) {
    this.consumer = consumer;
    this.subscription = null;
  }

  connect(line) {
    this.subscription = this.consumer.subscriptions.create(
      {
        channel: "Loco::NotificationCenterChannel",
      },
      {
        connected: () => { line.connected() },
        disconnected: () => { line.disconnected(); },
        rejected: () => { line.rejected() },
        received: (data) => { line.received(data) },
      }
    );
  }

  disconnect() {
    this.subscription.disconnected();
  }

  send(payload) {
    this.subscription.send(payload);
  }
}

export default Cable;