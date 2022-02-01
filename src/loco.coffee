import { initCore, Controllers, IdentityMap } from './deps'
import Wire from './wire.coffee'
import Line from './line.coffee'

class Loco
  constructor: (models) ->
    this.env = {namespaceController: null, controller: null, action: null, models: models}
    this.wire = null
    this.line = null

  getEnv: -> this.env

  getLine: -> this.line?.subscription

  getWire: -> this.wire

  setAuthorizationHeader: (val) ->
    for key, model of this.env.models
      model.authorizationHeader = val

  setDisconnectedForTooLong: (fn) ->
    this.wire.setDisconnectedForTooLong(fn);

  init: (opts) ->
    notificationsParams = opts.notifications ? {}
    notificationsParams.protocolWithHost = opts.protocolWithHost
    if notificationsParams?.enable isnt false
      wireOpts = { cookiesByCORS: opts.cookiesByCORS, authorizationHeader: opts.authorizationHeader }
      this.wire = new Wire(notificationsParams, opts.notificationCenter, wireOpts)
      this.wire.fetchSyncTime({ after: 'connect' })
    if opts.cable?
      this.line = new Line
      this.line.connect(opts.cable, opts.notificationCenter)
    if this.wire?
      this.wire.setLine(this.line);
    this._ready =>
      IdentityMap.clear()
      env = initCore(Controllers);
      this.env.namespaceController = env.namespaceController
      this.env.controller = env.controller
      this.env.action = env.action
      opts.postInit() if opts.postInit?

  emit: (payload) -> this.line.send(payload)

  _ready: (fn) ->
    cond = if document.attachEvent then document.readyState is "complete" else document.readyState isnt "loading"
    if cond
      fn()
    else
      document.addEventListener 'DOMContentLoaded', fn

export default Loco