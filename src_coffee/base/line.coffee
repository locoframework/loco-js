class App.Line
  constructor: (opts = {}) ->

  connect: ->
    App.Channels.Loco.NotificationCenter = App.cable.subscriptions.create
      channel: "Loco::NotificationCenterChannel"
    ,
      connected: ->
        console.log 'ws connected'
        wire = App.Env.loco.getWire()
        if wire?
          wire.disconnect()
      disconnected: ->
        console.log 'ws disconnected'
        wire = App.Env.loco.getWire()
        if wire?
          wire.setUuid null
          wire.fetchSyncTime connect: true
      rejected: -> console.log 'ws rejected'
      received: (data) =>
        if data.loco?
          this._processSystemNotification data.loco
          delete data.loco
        return if Object.keys(data).length is 0
        notificationCenter = new App.Services.NotificationCenter
        notificationCenter.receivedSignal data

  send: (data) -> App.Channels.Loco.NotificationCenter.send data

  _processSystemNotification: (data) ->
    if data.connection_check?
      this.send loco: {connection_check: true}
    wire = App.Env.loco.getWire()
    return if not wire?
    if data.sync_time?
      wire.setSyncTime data.sync_time
    if data.uuid?
      console.log "uuid: #{data.uuid}"
      wire.setUuid data.uuid
    if data.notification?
      wire.processNotification data.notification
    if data.xhr_notifications?
      wire.check()
    if data.start_ajax_polling
      console.log "wire connected"
      wire.setUuid null
      wire.fetchSyncTime connect: true