import { IdentityMap } from "../deps";
import receivedAlready from "../line/idempotencyKeys";
import getModelForRemoteName from "../getModelForRemoteName";

const emitMessageToMembers = (
  id,
  name,
  payload,
  model,
  identity,
  obj = null,
) => {
  if (obj === null) obj = new model({ id: id });
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

const sendToNotificationCenter = (
  notificationCenter,
  payload,
  emit,
  type = null,
) => {
  if (notificationCenter == null) return;
  if (type == null) {
    notificationCenter(payload, emit);
  } else {
    notificationCenter({ type, payload }, emit);
  }
};

const supportLocoJsModel = (
  model,
  id,
  name,
  payload,
  notificationCenter,
  emit,
) => {
  const identity = model.getIdentity();
  sendToNotificationCenter(
    notificationCenter,
    payload,
    emit,
    `${identity} ${name}`,
  );
  if (IdentityMap.imap[identity] === undefined) return false;
  if (IdentityMap.imap[identity][id] !== undefined)
    emitMessageToMembers(id, name, payload, model, identity);
  if (IdentityMap.imap[identity]["collection"] === undefined) return false;
  if (IdentityMap.imap[identity]["collection"].length === 0) return false;
  emitMessageToCollection(name, payload, identity);
};

export default (notification, opts = {}) => {
  if (opts.log) console.log(notification);
  const [className, id, name, data] = notification;
  if (receivedAlready(data.loco.idempotency_key)) return false;
  delete data.loco;
  const payload = data.payload ?? data;
  const type =
    className != null && name != null ? `${className} ${name}` : data.type;
  if (className == null && name == null) {
    sendToNotificationCenter(opts.notificationCenter, payload, opts.emit, type);
    return true;
  }
  const model = getModelForRemoteName(className);
  if (model === undefined) {
    sendToNotificationCenter(opts.notificationCenter, payload, opts.emit, type);
    return false;
  }
  supportLocoJsModel(
    model,
    id,
    name,
    payload,
    opts.notificationCenter,
    opts.emit,
  );
  return true;
};
