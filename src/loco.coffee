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

  init: (opts) ->
    notificationsParams = this._genNotificationsParams(opts)
    this._initWire(notificationsParams, opts.notificationCenter) if notificationsParams?.enable isnt false
    this._initLine(opts.cable, opts.notificationCenter) if opts.cable?
    this.wire.setLine(this.line);
    this._ready =>
      IdentityMap.clear()
      env = initCore(Controllers);
      this.env.namespaceController = env.namespaceController
      this.env.controller = env.controller
      this.env.action = env.action
      opts.postInit() if opts.postInit?

  emit: (payload) -> this.line.send(payload)

  _genNotificationsParams: (opts) ->
    notificationsParams = opts.notifications ? {}
    notificationsParams.protocolWithHost = opts.protocolWithHost
    notificationsParams.env = this.env
    notificationsParams

  _ready: (fn) ->
    cond = if document.attachEvent then document.readyState is "complete" else document.readyState isnt "loading"
    if cond
      fn()
    else
      document.addEventListener 'DOMContentLoaded', fn

  _initWire: (notificationsParams, notificationCenter) ->
    this.wire = new Wire(notificationsParams, notificationCenter)
    this.wire.fetchSyncTime({ after: 'connect' })

  _initLine:(cable, notificationCenter) ->
    this.line = new Line
    this.line.connect(cable, notificationCenter, this.wire)

export default Loco