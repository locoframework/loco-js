import receivedAlready from "./idempotencyKeys";
import processNotification from "./../wire/processNotification";

export default (
  data, line
) => {
  if (data.ping === true) {
    line.pong();
  }
  if (line.wire == null) return;
  if (typeof data.sync_time === "string") {
    line.wire.syncTime = data.sync_time;
  }
  if (typeof data.uuid === "string") {
    console.log(`uuid: ${data.uuid}`);
    line.wire.uuid = data.uuid;
  }
  if (
    typeof data.notification === "object" &&
    data.notification.constructor.name === "Array"
  ) {
    processNotification(data.notification, {
      log: line.wire.log,
      notificationCenter: line.notificationCenter,
      emit: line.send
    });
  }
  if (typeof data.idempotency_key === "string") {
    if (receivedAlready(data.idempotency_key)) return false;
  }
  return true;
};
