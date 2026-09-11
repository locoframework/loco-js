import { IdentityMap } from "../deps.js";
import receivedAlready from "../line/idempotencyKeys.js";
import getModelForRemoteName from "../getModelForRemoteName.js";

const emitMessageToMembers = (id, name, payload, identity) => {
  for (const connObj of IdentityMap.findConnected(identity, id)) {
    connObj(name, payload);
  }
};

const emitMessageToCollection = (name, payload, identity) => {
  for (const obj of IdentityMap.imap[identity]["collection"].filter(
    (element) => element !== null,
  )) {
    obj(`${identity} ${name}`, payload);
  }
};

// Passing `syncTime` marks this notification as record-scoped, and so
// replayable after a snapshot replaces the collection it wrote to. The tail it
// lands in belongs to one Loco instance, reached through `handled`.
const sendToNotificationCenter = ({
  notificationCenter,
  payload,
  emit,
  type,
  handled,
  syncTime,
}) => {
  if (notificationCenter == null) return;
  const deliver =
    type == null
      ? () => notificationCenter(payload, emit)
      : () => notificationCenter({ type, payload }, emit);
  deliver();
  if (syncTime != null) handled?.record(syncTime, deliver);
};

const supportLocoJsModel = ({
  model,
  id,
  name,
  payload,
  notificationCenter,
  emit,
  handled,
  syncTime,
}) => {
  const identity = model.getIdentity();
  sendToNotificationCenter({
    notificationCenter,
    payload,
    emit,
    type: `${identity} ${name}`,
    handled,
    syncTime,
  });
  if (IdentityMap.imap[identity] === undefined) return false;
  if (IdentityMap.imap[identity][id] !== undefined)
    emitMessageToMembers(id, name, payload, identity);
  if (IdentityMap.imap[identity]["collection"] === undefined) return false;
  if (IdentityMap.imap[identity]["collection"].length === 0) return false;
  emitMessageToCollection(name, payload, identity);
};

export default (
  notification,
  { log, notificationCenter, emit, handled } = {},
) => {
  if (log) console.log(notification);
  const [className, id, name, data] = notification;
  if (receivedAlready(data.loco.idempotency_key)) return false;

  const syncTime = data.loco.sync_time;
  delete data.loco;
  const payload = data.payload ?? data;
  const type =
    className != null && name != null ? `${className} ${name}` : data.type;
  if (className == null && name == null) {
    sendToNotificationCenter({
      notificationCenter,
      payload,
      emit,
      type,
      handled,
    });
    return true;
  }

  const model = getModelForRemoteName(className);
  if (model === undefined) {
    sendToNotificationCenter({
      notificationCenter,
      payload,
      emit,
      type,
      handled,
      syncTime,
    });
    return false;
  }

  supportLocoJsModel({
    model,
    id,
    name,
    payload,
    notificationCenter,
    emit,
    handled,
    syncTime,
  });
  return true;
};
