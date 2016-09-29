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
        plug = new App.Services.Plug
        plug.receivedSignal data