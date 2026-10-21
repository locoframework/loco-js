import processNotification from "./../wire/processNotification.js";

// Every server message is `{ loco: {...} }`; a notification also carries
// `type` and `payload` next to it, a control message (ping, uuid) does not.
export default (data, line) => {
  const { ping, uuid, sync_time } = data.loco;
  if (ping === true) {
    line.pong();
  }
  if (line.wire == null) return;
  if (typeof uuid === "string") {
    console.log(`uuid: ${uuid}`);
    line.wire.uuid = uuid;
  }
  if (data.payload === undefined) return;
  if (typeof sync_time === "string") {
    line.wire.syncTime = sync_time;
  }
  processNotification(data, {
    log: line.wire.log,
    notificationCenter: line.notificationCenter,
    emit: line.send,
    handled: line.wire.handled,
  });
};
