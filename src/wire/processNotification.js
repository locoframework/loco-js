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
  const deliver = () => notificationCenter({ type, payload }, emit);
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
  const {
    loco: { idempotency_key, sync_time: syncTime },
    type: name,
    payload: emitted,
    obj_class: className,
    obj_id: id,
  } = notification;
  if (receivedAlready(idempotency_key)) return false;

  // handlers get the record subject's id inside the payload
  const payload = id == null ? emitted : { ...emitted, id };

  // with a subject `type` is the event, e.g. "Article" + "created"
  const type = className == null ? name : `${className} ${name}`;
  if (className == null) {
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
