import Env from './env'
import { External } from './deps'
import processNotification from "./wire/processNotification"
import processSystemNotification from "./line/processSystemNotification"

class Line
  constructor: ->
    this.connected = false
    this.subscription = null

  connect: ->
    this.subscription = External.cable.subscriptions.create
      channel: "Loco::NotificationCenterChannel"
    ,
      connected: =>
        console.log('ws connected');
        this.connected = true
        wire = Env.loco.wire
        if wire?
          wire.disconnect();
        External.NotificationCenter({ loco: 'connected' })
      disconnected: =>
        console.log('ws disconnected');
        this.connected = false
        wire = Env.loco.wire
        if wire?
          wire.uuid = null;
          wire.fetchSyncTime({ after: 'connect' });
        External.NotificationCenter({ loco: 'disconnected' })
      rejected: =>
        console.log('ws rejected');
        External.NotificationCenter({ loco: 'rejected' })
      received: (data) =>
        if data.loco?
          return unless processSystemNotification(data.loco, { line: this, wire: Env.loco.wire, processNotification });
          delete data.loco
        return if Object.keys(data).length is 0
        External.NotificationCenter(data)

  send: (data) -> this.subscription.send(data)

export default Line