class App.Line
  constructor: (opts = {}) ->

  connect: ->
    App.Channels.Loco.NotificationCenter = App.cable.subscriptions.create
      channel: "Loco::NotificationCenterChannel"
    ,
      connected: ->
        console.log 'ws connected'
      disconnected: ->
        console.log 'ws disconnected'
      received: (data) =>
        if not data.loco?
          notificationCenter = new App.Services.NotificationCenter
          notificationCenter.receivedSignal data
          return
        wire = App.Env.loco.getWire()
        return if not wire?
        if data.loco.uuid?
          wire.setUuid data.loco.uuid
        else if data.loco.notification?
          wire.processNotification data.loco.notification
        else if data.loco.connection_check?
          this.send loco: {connection_check: true}

  send: (data) -> App.Channels.Loco.NotificationCenter.send data