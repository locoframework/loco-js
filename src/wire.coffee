import Env from './env'
import { IdentityMap } from './deps'
import ObjectUtils from './utils/object.coffee'
import processNotification from "./wire/processNotification"

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

  setSyncTime: (val) -> this.syncTime = val
  resetSyncTime: -> this.syncTime = null

  setPollingTime: (val) ->
    this.pollingTime = val
    this.disconnect()
    this.connect()

  setSSL: (val) -> this.ssl = val

  setLocation: (val) -> this.location = val

  setSize: (val) -> this.size = val

  setAllowedDisconnectionTime: (val) -> this.allowedDisconnectionTime = val

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
        processNotification(notification, { log: this.log }) for notification in notifications
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