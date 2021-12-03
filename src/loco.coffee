import { initCore, Controllers, IdentityMap } from './deps'
import Wire from './wire.coffee'
import Line from './line.coffee'

class Loco
  constructor: (opts={}) ->
    this.env = {namespaceController: null, controller: null, action: null}
    this.wire = null
    this.line = null

  getEnv: -> this.env

  getLine: -> this.line?.subscription

  getWire: -> this.wire

  init: (opts) ->
    notificationsParams = this._genNotificationsParams(opts)
    this._initWire(notificationsParams) if notificationsParams?.enable isnt false
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

  _initWire: (notificationsParams) ->
    this.wire = new Wire(notificationsParams)
    this.wire.fetchSyncTime({ after: 'connect' })

  _initLine:(cable, notificationCenter) ->
    this.line = new Line
    this.line.connect(cable, notificationCenter, this.wire)

export default Loco