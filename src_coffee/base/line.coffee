class App.Line
  constructor: (opts = {}) ->

  connect: ->
    App.Channels.Loco.NotificationCenter = App.cable.subscriptions.create
      channel: "Loco::NotificationCenterChannel"
    ,
      connected: ->
        console.log 'connected'
      disconnected: ->
        console.log 'disconnected'
      received: (data) ->
        if not data.loco?
          notificationCenter = new App.Services.NotificationCenter
          notificationCenter.receivedSignal data
          return
        if data.loco.uuid?
          wire = App.Env.loco.getWire()
          return if not wire?
          wire.setUuid data.loco.uuid

  send: (data) -> App.Channels.Loco.NotificationCenter.send data