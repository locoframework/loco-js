import Wire from './wire.coffee'
import Line from './line'
import Cable from "./line/cable";

class Loco
  constructor: (models) ->
    this.models = models
    this.wire = null
    this.line = null

  getModels: -> this.models

  getLine: -> this.line

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
      this.wire.fetchSyncTime()
    wsClient = this._initWsClient(opts)
    if wsClient?
      this.line = new Line(wsClient, opts.notificationCenter, this.wire)
      this.line.connect()
      this.wire.setLine(this.line) if this.wire?
    this._ready =>
      opts.postInit() if opts.postInit?

  emit: (payload) -> this.line.send(payload)

  _initWsClient: (opts) ->
    if opts.wsClient?
      opts.wsClient
    else if opts.cable?
      new Cable(opts.cable)
    else
      null

  _ready: (fn) ->
    cond = if document.attachEvent then document.readyState is "complete" else document.readyState isnt "loading"
    if cond
      fn()
    else
      document.addEventListener 'DOMContentLoaded', fn

export default Loco