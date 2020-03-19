import Channels from './channels'
import Env from './env'
import { Deps } from './deps'
import processNotification from "./wire/processNotification"

class Line
  constructor: (opts = {}) ->
    this.connected = false

  connect: ->
    Channels.Loco.NotificationCenter = Deps.cable.subscriptions.create
      channel: "Loco::NotificationCenterChannel"
    ,
      connected: =>
        console.log('ws connected');
        this.connected = true
        wire = Env.loco.getWire()
        if wire?
          wire.setDelayedDisconnection()
        Deps.NotificationCenter({ loco: 'connected' })
      disconnected: =>
        console.log('ws disconnected');
        this.connected = false
        wire = Env.loco.getWire()
        if wire?
          wire.setUuid null
          wire.fetchSyncTime after: 'connect'
        Deps.NotificationCenter({ loco: 'disconnected' })
      rejected: =>
        console.log('ws rejected');
        Deps.NotificationCenter({ loco: 'rejected' })
      received: (data) =>
        if data.loco?
          this._processSystemNotification data.loco
          delete data.loco
        return if Object.keys(data).length is 0
        Deps.NotificationCenter(data)

  isWireAllowed: -> not this.connected

  send: (data) -> Channels.Loco.NotificationCenter.send(data)

  _processSystemNotification: (data) ->
    if data.connection_check?
      this.send loco: {connection_check: true}
    wire = Env.loco.getWire()
    return if not wire?
    if data.sync_time?
      wire.setSyncTime data.sync_time
    if data.uuid?
      console.log("uuid: #{data.uuid}");
      wire.setUuid data.uuid
    if data.notification?
      processNotification(data.notification, { log: wire.getLog() })
    if data.xhr_notifications?
      wire.check()
    if data.start_ajax_polling
      console.log("wire connected");
      this.connected = null
      wire.setUuid null
      wire.fetchSyncTime after: 'connect'

export default Line