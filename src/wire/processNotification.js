import { IdentityMap } from "../deps";
import receivedAlready from "../line/idempotencyKeys";
import getModelForRemoteName from "../getModelForRemoteName.coffee";

const emitMessageToMembers = (
  id,
  name,
  payload,
  model,
  identity,
  obj = null
) => {
  if (obj === null) obj = new model({ id: id });
  for (const connObj of IdentityMap.findConnected(identity, id)) {
    connObj(name, payload);
  }
};

const emitMessageToCollection = (name, payload, identity) => {
  for (const obj of IdentityMap.imap[identity]["collection"].filter(
    (element) => element !== null
  )) {
    obj(`${identity} ${name}`, payload);
  }
};

const sendToNotificationCenter = (notificationCenter, type, payload, emit) => {
  if (notificationCenter == null) return;
  notificationCenter({ type, payload }, emit);
};

const calcType = (className, name, type) => {
  if (className != null && name != null) {
    return `${className} ${name}`;
  }
  return type;
};

export default (notification, opts = {}) => {
  if (opts.log) console.log(notification);
  const [className, id, name, payload] = notification;
  // TODO: use payment.type if present and ignore model existence?
  const type = calcType(className, name, payload.type);
  if (receivedAlready(payload.loco.idempotency_key)) return false;
  delete payload.loco;
  delete payload.type;
  const model = getModelForRemoteName(className);
  if (model === undefined) {
    sendToNotificationCenter(
      opts.notificationCenter,
      type,
      payload,
      opts.emit
    );
    return false;
  }
  const identity = model.getIdentity();
  sendToNotificationCenter(
    opts.notificationCenter,
    `${identity} ${name}`,
    payload,
    opts.emit
  );
  if (IdentityMap.imap[identity] === undefined) return false;
  if (IdentityMap.imap[identity][id] !== undefined)
    emitMessageToMembers(id, name, payload, model, identity);
  if (IdentityMap.imap[identity]["collection"] === undefined) return false;
  if (IdentityMap.imap[identity]["collection"].length === 0) return false;
  emitMessageToCollection(name, payload, identity);
  return true;
};
