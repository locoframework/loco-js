import Env from './env'
import { External } from './deps'
import processNotification from "./wire/processNotification"
import processSystemNotification from "./line/processSystemNotification"

class Line
  constructor: (notificationCenter) ->
    this.connected = false
    this.subscription = null
    this.notificationCenter = notificationCenter

  connect: ->
    this.subscription = External.cable.subscriptions.create
      channel: "Loco::NotificationCenterChannel"
    ,
      connected: =>
        console.log('WS connected');
        this.connected = true;
        this.notificationCenter({ loco: 'connected' })
        this.pong();
      disconnected: =>
        console.log('WS disconnected');
        this.connected = false
        wire = Env.loco.wire
        if wire?
          wire.uuid = null;
          wire.fetchSyncTime({ after: 'connect' });
        this.notificationCenter({ loco: 'disconnected' })
      rejected: =>
        console.log('WS rejected');
        this.notificationCenter({ loco: 'rejected' })
      received: (data) =>
        if data.loco?
          return unless processSystemNotification(data.loco, { line: this, wire: Env.loco.wire, processNotification, notificationCenter: this.notificationCenter });
          delete data.loco
        return if Object.keys(data).length is 0
        this.notificationCenter(data)

  send: (payload) -> this.subscription.send(payload)

  pong: ->
    setTimeout =>
      this.send({ loco: { pong: true } });
    , 3000

export default Line