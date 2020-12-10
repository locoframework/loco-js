import Env from "../env";
import { External, IdentityMap } from "../deps";
import receivedAlready from "../line/idempotencyKeys";

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
  for (const obj of IdentityMap.imap[identity]["collection"]) {
    obj(`${identity} ${name}`, payload);
  }
};

export default (notification, opts = {}) => {
  if (opts.log) console.log(notification);
  const [className, id, name, payload] = notification;
  if (receivedAlready(payload.loco.idempotency_key)) return false;
  const model = Env.loco.getModelForRemoteName(className);
  const identity = model.getIdentity();
  if (External.NotificationCenter != null) {
    External.NotificationCenter({
      type: `${identity} ${name}`,
      payload: payload
    });
  }
  if (IdentityMap.imap[identity] === undefined) return false;
  if (IdentityMap.imap[identity][id] !== undefined)
    emitMessageToMembers(id, name, payload, model, identity);
  if (IdentityMap.imap[identity]["collection"] === undefined) return false;
  if (IdentityMap.imap[identity]["collection"].length === 0) return false;
  emitMessageToCollection(name, payload, identity);
  return true;
};
