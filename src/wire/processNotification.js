import Env from "../env";
import { External, IdentityMap } from "../deps";

const emitSignalToMembers = (
  id,
  signal,
  payload,
  model,
  identity,
  obj = null
) => {
  if (obj === null) obj = new model({ id: id });
  for (const connObj of IdentityMap.findConnected(identity, id)) {
    connObj(signal, payload);
  }
};

const emitSignalToCollection = (signal, payload, identity) => {
  for (const obj of IdentityMap.imap[identity]["collection"]) {
    obj(`${identity} ${signal}`, payload);
  }
};

export default (notification, opts = {}) => {
  if (opts.log) console.log(notification);
  const [className, id, signal, payload] = notification;
  const model = Env.loco.getModelForRemoteName(className);
  const identity = model.getIdentity();
  if (External.NotificationCenter != null) {
    External.NotificationCenter({
      type: `${identity} ${signal}`,
      payload: payload
    });
  }
  if (IdentityMap.imap[identity] === undefined) return;
  if (IdentityMap.imap[identity][id] !== undefined)
    emitSignalToMembers(id, signal, payload, model, identity);
  if (IdentityMap.imap[identity]["collection"] === undefined) return;
  if (IdentityMap.imap[identity]["collection"].length === 0) return;
  emitSignalToCollection(signal, payload, identity);
};
