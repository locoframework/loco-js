import { initCore, Controllers, IdentityMap, Models } from './deps'
import Wire from './wire.coffee'
import Line from './line.coffee'
import Env from './env'

class Loco
  constructor: (opts={}) ->
    this.wire = null
    this.line = null
    this.postInit = opts.postInit
    notificationsParams = opts.notifications ? {}
    notificationsParams.protocolWithHost = opts.protocolWithHost
    this.notificationsParams = notificationsParams

  init: (opts) ->
    Env.loco = this
    this.initWire()
    this.initLine(opts.cable)
    this.ready =>
      IdentityMap.clear()
      env = initCore(Controllers);
      Env.namespaceController = env.namespaceController;
      Env.controller = env.controller;
      Env.action = env.action;
      this.postInit() if this.postInit?

  ready: (fn) ->
    cond = if document.attachEvent then document.readyState is "complete" else document.readyState isnt "loading"
    if cond
      fn()
    else
      document.addEventListener 'DOMContentLoaded', fn

  initWire: ->
    return if this.notificationsParams?.enable is false
    this.wire = new Wire(this.notificationsParams)
    this.wire.fetchSyncTime({ after: 'connect' })

  initLine: (cable) ->
    return unless cable?
    this.line = new Line
    this.line.connect()

  emit: (payload) -> this.line.send(payload)

  getModels: ->
    models = []
    regExp = /^[A-Z]/
    for func, _ of Models
      continue if !regExp.exec(func) or func is "Base"
      models.push func
      for innerFunc, _ of Models[func]
        models.push "#{func}.#{innerFunc}" if regExp.exec innerFunc
    models

  getModelForRemoteName: (remoteName) ->
    for model in this.getModels()
      parts = model.split "."
      if parts.length is 1
        return Models[parts[0]] if Models[parts[0]].getRemoteName() is remoteName
      else if parts.length is 2
        return Models[parts[0]][parts[1]] if Models[parts[0]][parts[1]].getRemoteName() is remoteName

export default Loco