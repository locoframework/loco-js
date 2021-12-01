import processNotification from "./wire/processNotification"
import processSystemNotification from "./line/processSystemNotification"

class Line
  constructor: (cable, notificationCenter, wire) ->
    this.cable = cable
    this.notificationCenter = notificationCenter
    this.wire = wire
    this.connected = false
    this.subscription = null

  connect: ->
    this.subscription = this.cable.subscriptions.create
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
        if this.wire?
          this.wire.uuid = null;
          this.wire.fetchSyncTime({ after: 'connect' });
        this.notificationCenter({ loco: 'disconnected' })
      rejected: =>
        console.log('WS rejected');
        this.notificationCenter({ loco: 'rejected' })
      received: (data) =>
        if data.loco?
          return unless processSystemNotification(data.loco, { line: this, wire: this.wire, processNotification, notificationCenter: this.notificationCenter });
          delete data.loco
        return if Object.keys(data).length is 0
        this.notificationCenter(data)

  send: (payload) -> this.subscription.send(payload)

  pong: ->
    setTimeout =>
      this.send({ loco: { pong: true } });
    , 3000

export default Line