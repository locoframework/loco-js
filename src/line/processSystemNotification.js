import receivedAlready from "./idempotencyKeys";

export default (data, { line, wire, processNotification }) => {
  if (data.connection_check === true) {
    line.send({ loco: { connection_check: true } });
  }
  if (wire == null) return;
  if (typeof data.sync_time === "string") {
    wire.syncTime = data.sync_time;
  }
  if (typeof data.uuid === "string") {
    console.log(`uuid: ${data.uuid}`);
    wire.uuid = data.uuid;
  }
  if (
    typeof data.notification === "object" &&
    data.notification.constructor.name === "Array"
  ) {
    processNotification(data.notification, { log: wire.log });
  }
  if (typeof data.idempotency_key === "string") {
    if (receivedAlready(data.idempotency_key)) return false;
  }
  return true;
};
