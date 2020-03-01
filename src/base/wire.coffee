import Env from '../env'
import { Deps, IdentityMap } from '../deps'
import ObjectUtils from '../utils/object.coffee'

class Wire
  constructor: (opts = {}) ->
    this.syncTime = null
    this.token = null
    this.pollingInterval = null
    this.pollingTime = opts.pollingTime ? 3000
    this.log = if opts.log? and opts.log then true else false
    this.ssl = opts.ssl
    this.location = opts.location ? 'notification-center'
    this.size = opts.size ? 100
    this.protocolWithHost = opts.protocolWithHost
    this.allowedDisconnectionTime = opts.allowedDisconnectionTime ? 10
    this.disconnectedSinceTime = null
    this.uuid = null
    this.delayedDisconnection = false

  setToken: (token) -> this.token = token

  getSyncTime: -> this.syncTime
  setSyncTime: (val) -> this.syncTime = val
  resetSyncTime: -> this.syncTime = null

  getPollingTime: -> this.pollingTime
  setPollingTime: (val) ->
    this.pollingTime = val
    this.disconnect()
    this.connect()

  getPollingInterval: -> this.pollingInterval

  getSSL: -> this.ssl
  setSSL: (val) -> this.ssl = val

  getLocation: -> this.location
  setLocation: (val) -> this.location = val

  getSize: -> this.size
  setSize: (val) -> this.size = val

  getAllowedDisconnectionTime: -> this.allowedDisconnectionTime
  setAllowedDisconnectionTime: (val) -> this.allowedDisconnectionTime = val

  getUuid: -> this.uuid
  setUuid: (val) -> this.uuid = val

  setDelayedDisconnection: -> this.delayedDisconnection = true

  connect: ->
    line = Env.loco.getLine()
    if line? and !line.isWireAllowed()
      return
    this.pollingInterval = setInterval =>
      this.check()
      if this.delayedDisconnection
        this.delayedDisconnection = false
        this.disconnect()
    , this.pollingTime

  disconnect: -> window.clearInterval this.pollingInterval

  disableNotifications: ->
    console.log 'Wire#disableNotifications - DEPRECATED'
    this.disconnect()

  processNotification: (notification) ->
    console.log notification if this.log
    [className, id, signal, payload] = notification
    model = Env.loco.getModelForRemoteName(className);
    identity = model.getIdentity();
    Deps.NotificationCenter({ signal: "#{identity} #{signal}", payload: payload }) if Deps.NotificationCenter?
    return if not IdentityMap.imap[identity]?
    if IdentityMap.imap[identity][id]?
      obj = IdentityMap.find identity, id
      #if obj["receivedSignal"]?
      #  obj.receivedSignal signal, payload
      this._emitSignalToMembers id, signal, payload, model, identity
    #if model["receivedSignal"]?
    #  model.receivedSignal signal, payload
    return if not IdentityMap.imap[identity]["collection"]?
    return if IdentityMap.imap[identity]["collection"].length is 0
    this._emitSignalToCollection signal, payload, identity

  processSignal: (notification) -> this.processNotification notification

  check: ->
    return if Object.keys(IdentityMap.imap).length is 0 and not this.token? and this.syncTime?
    request = new XMLHttpRequest()
    request.open 'GET', this._getURL() + '?' + ObjectUtils.toURIParams(this._requestParams())
    request.onload = (e) =>
      if e.target.status >= 200 and e.target.status < 400
        data = JSON.parse e.target.response
        this.disconnectedSinceTime = null
        this.syncTime = data[1]
        notifications = data[0]
        return if notifications.length is 0
        this.processNotification notification for notification in notifications
        this.check() if notifications.length is this.size
      else if e.target.status >= 500
        this._handleDisconnection()
    request.onerror = =>
      this._handleDisconnection()
    request.send()

  fetchSyncTime: (opts = {}) ->
    request = new XMLHttpRequest()
    request.open 'GET', "#{this._getURL()}/sync-time"
    request.onerror = =>
      this[opts.after]() if opts.after?
    request.onload = (e) =>
      if e.target.status >= 200 and e.target.status < 400
        data = JSON.parse e.target.response
        this.syncTime = data.sync_time
        this[opts.after]() if opts.after?
      else if e.target.status >= 500
        this[opts.after]() if opts.after?
    request.send()

  _emitSignalToMembers: (id, signal, payload, model, identity, obj = null) ->
    if not obj?
      obj = new model id: id
    for connObj in IdentityMap.findConnected identity, id
      if connObj.receiverFor(obj)?
        connObj[connObj.receiverFor(obj)] signal, payload
      else if connObj["receivedSignal"]?
        connObj.receivedSignal signal, payload

  _emitSignalToCollection: (signal, payload, identity) ->
    for obj in IdentityMap.imap[identity]["collection"]
      if obj.receiverFor(identity)?
        obj[obj.receiverFor(identity)]("#{identity} #{signal}", payload)
      else if obj["receivedSignal"]?
        obj.receivedSignal("#{identity} #{signal}", payload)

  _requestParams: ->
    params = {synced_at: this.syncTime}
    if this.token? then params.token = this.token
    if this.uuid? then params.uuid = this.uuid
    params

  _getURL: ->
    [protocol, _, host] = window.location.href.split '/'
    if this.protocolWithHost?
      [protocol, host] = this.protocolWithHost.split '//'
    if this.ssl?
      protocol = if this.ssl then 'https:' else "http:"
    "#{protocol}//#{host}/#{this.location}"

  _handleDisconnection: ->
    if not this.disconnectedSinceTime?
      this.disconnectedSinceTime = new Date()
    diffInSec = (new Date() - this.disconnectedSinceTime) / 1000
    ctrl = Env.namespaceController ? Env.controller
    if diffInSec > this.allowedDisconnectionTime and ctrl['disconnectedForTooLong']?
      ctrl.disconnectedForTooLong this.disconnectedSinceTime

export default Wire