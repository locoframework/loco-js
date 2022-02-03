import processNotification from "./wire/processNotification"
import processSystemNotification from "./line/processSystemNotification"

class Line
  constructor: () ->
    this.connected = false
    this.subscription = null

  connect: (cable, notificationCenter, wire) ->
    this.subscription = cable.subscriptions.create
      channel: "Loco::NotificationCenterChannel"
    ,
      connected: =>
        console.log('WS connected');
        this.connected = true;
        notificationCenter({ loco: 'connected' })
        this.pong();
      disconnected: =>
        console.log('WS disconnected');
        this.connected = false
        if wire?
          wire.uuid = null;
          wire.fetchSyncTime({ after: 'connect' });
        notificationCenter({ loco: 'disconnected' })
      rejected: =>
        console.log('WS rejected');
        notificationCenter({ loco: 'rejected' })
      received: (data) =>
        if data.loco?
          return unless processSystemNotification(data.loco, { line: this, wire, processNotification, notificationCenter });
          delete data.loco
        return if Object.keys(data).length is 0
        notificationCenter(data)

  send: (payload) -> this.subscription.send(payload)

  pong: ->
    setTimeout =>
      this.send({ loco: { pong: true } });
    , 3000

export default Line