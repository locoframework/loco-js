import receivedAlready from "./idempotencyKeys.js";
import processNotification from "./../wire/processNotification.js";

export default (
  { ping, sync_time, uuid, notification, idempotency_key },
  line,
) => {
  if (ping === true) {
    line.pong();
  }
  if (line.wire == null) return;
  if (typeof sync_time === "string") {
    line.wire.syncTime = sync_time;
  }
  if (typeof uuid === "string") {
    console.log(`uuid: ${uuid}`);
    line.wire.uuid = uuid;
  }
  if (Array.isArray(notification)) {
    processNotification(notification, {
      log: line.wire.log,
      notificationCenter: line.notificationCenter,
      emit: line.send,
      handled: line.wire.handled,
    });
  }
  if (typeof idempotency_key === "string") {
    if (receivedAlready(idempotency_key)) return false;
  }
  return true;
};
