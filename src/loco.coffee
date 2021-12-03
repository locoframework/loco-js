import { initCore, Controllers, IdentityMap } from './deps'
import Wire from './wire.coffee'
import Line from './line.coffee'

class Loco
  constructor: (opts={}) ->
    this.cable = opts.cable
    this.postInit = opts.postInit
    this.env = {namespaceController: null, controller: null, action: null}
    this.notificationsParams = this._genNotificationsParams(opts)
    this.notificationCenter = opts.notificationCenter
    this.wire = null
    this.line = null

  getEnv: -> this.env

  getLine: -> this.line?.subscription

  getWire: -> this.wire

  init: () ->
    this._initWire() if this.notificationsParams?.enable isnt false
    this._initLine() if this.cable?
    this.wire.setLine(this.line);
    this._ready =>
      IdentityMap.clear()
      env = initCore(Controllers);
      this.env.namespaceController = env.namespaceController
      this.env.controller = env.controller
      this.env.action = env.action
      this.postInit() if this.postInit?

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

  _initWire: ->
    this.wire = new Wire(this.notificationsParams)
    this.wire.fetchSyncTime({ after: 'connect' })

  _initLine: ->
    this.line = new Line
    this.line.connect(this.cable, this.notificationCenter, this.wire)

export default Loco