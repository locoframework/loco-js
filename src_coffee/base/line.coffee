class App.Line
  constructor: (opts = {}) ->

  connect: ->
    App.Channels.Loco.NotificationCenter = App.cable.subscriptions.create
      channel: "Loco::NotificationCenterChannel"
    ,
      connected: ->
        console.log 'ws connected'
        wire = App.Env.loco.getWire()
        wire.disconnect() if wire?
      disconnected: ->
        console.log 'ws disconnected'
        wire = App.Env.loco.getWire()
        wire.connect() if wire?
      received: (data) =>
        console.log data
        if not data.loco?
          notificationCenter = new App.Services.NotificationCenter
          notificationCenter.receivedSignal data
          return
        this._processSystemNotification data.loco

  send: (data) -> App.Channels.Loco.NotificationCenter.send data

  _processSystemNotification: (data) ->
    wire = App.Env.loco.getWire()
    return if not wire?
    if data.uuid?
      wire.setUuid data.uuid
    else if data.notification?
      wire.processNotification data.notification
    else if data.connection_check?
      this.send loco: {connection_check: true}
    else if data.xhr_notifications?
      wire.check()
