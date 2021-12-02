import { initCore, Controllers, IdentityMap } from './deps'
import Wire from './wire.coffee'
import Line from './line.coffee'

class Loco
  constructor: (opts={}) ->
    this.cable = opts.cable
    this.postInit = opts.postInit
    notificationsParams = opts.notifications ? {}
    notificationsParams.protocolWithHost = opts.protocolWithHost
    this.notificationsParams = notificationsParams
    this.notificationCenter = opts.notificationCenter
    this.wire = null
    this.line = null

  getLine: -> this.line?.subscription

  getWire: -> this.wire

  init: (Env) ->
    this._initWire() if this.notificationsParams?.enable isnt false
    this._initLine() if this.cable?
    this.wire.setLine(this.line);
    this._ready =>
      IdentityMap.clear()
      env = initCore(Controllers);
      Env.namespaceController = env.namespaceController;
      Env.controller = env.controller;
      Env.action = env.action;
      this.postInit() if this.postInit?

  emit: (payload) -> this.line.send(payload)

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