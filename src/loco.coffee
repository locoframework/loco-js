import { IdentityMap } from './deps'
import Wire from './wire.coffee'
import Line from './line'

class Loco
  constructor: (models) ->
    this.models = models
    this.wire = null
    this.line = null

  getModels: -> this.models

  getLine: -> this.line?.subscription

  getWire: -> this.wire

  setAuthorizationHeader: (val) ->
    for key, model of this.models
      model.authorizationHeader = val

  setDisconnectedForTooLong: (fn) ->
    this.wire.setDisconnectedForTooLong(fn);

  init: (opts) ->
    notificationsParams = opts.notifications ? {}
    notificationsParams.protocolWithHost = opts.protocolWithHost
    if notificationsParams.enable isnt false
      wireOpts = { cookiesByCORS: opts.cookiesByCORS, authorizationHeader: opts.authorizationHeader }
      this.wire = new Wire(notificationsParams, opts.notificationCenter, wireOpts)
      this.wire.fetchSyncTime({ after: 'connect' })
    if opts.cable?
      this.line = new Line(opts.cable, opts.notificationCenter, this.wire)
      this.line.connect()
    if this.wire?
      this.wire.setLine(this.line);
    this._ready =>
      IdentityMap.clear() if IdentityMap isnt null
      opts.postInit() if opts.postInit?

  emit: (payload) -> this.line.send(payload)

  _ready: (fn) ->
    cond = if document.attachEvent then document.readyState is "complete" else document.readyState isnt "loading"
    if cond
      fn()
    else
      document.addEventListener 'DOMContentLoaded', fn

export default Loco