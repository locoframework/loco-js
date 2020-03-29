import Env from './env'
import { External } from './deps'
import processNotification from "./wire/processNotification"

class Line
  constructor: (opts = {}) ->
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
          wire.delayedDisconnection = true
        External.NotificationCenter({ loco: 'connected' })
      disconnected: =>
        console.log('ws disconnected');
        this.connected = false
        wire = Env.loco.wire
        if wire?
          wire.uuid = null
          wire.fetchSyncTime after: 'connect'
        External.NotificationCenter({ loco: 'disconnected' })
      rejected: =>
        console.log('ws rejected');
        External.NotificationCenter({ loco: 'rejected' })
      received: (data) =>
        if data.loco?
          this._processSystemNotification data.loco
          delete data.loco
        return if Object.keys(data).length is 0
        External.NotificationCenter(data)

  isWireAllowed: -> not this.connected

  send: (data) -> this.subscription.send(data)

  _processSystemNotification: (data) ->
    if data.connection_check?
      this.send loco: {connection_check: true}
    wire = Env.loco.wire
    return if not wire?
    if data.sync_time?
      wire.syncTime = data.sync_time
    if data.uuid?
      console.log("uuid: #{data.uuid}");
      wire.uuid = data.uuid
    if data.notification?
      processNotification(data.notification, { log: wire.log })
    if data.xhr_notifications?
      wire.check()
    if data.start_ajax_polling
      console.log("wire connected");
      this.connected = null
      wire.uuid = null
      wire.fetchSyncTime after: 'connect'

export default Line