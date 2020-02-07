import { Config, Deps, IdentityMap, Models } from '../deps'
import Wire from './wire.coffee'
import Line from './line.coffee'
import Env from '../env'
import Controllers from '../controllers'

class Loco
  constructor: (opts={}) ->
    this.wire = null
    this.line = null
    this.startWire = if opts.notifications?.enable then true else false
    this.postInit = opts.postInit
    this.setLocale opts.locale ? 'en'
    this.setProtocolWithHost opts.protocolWithHost
    notificationsParams = opts.notifications ? {}
    notificationsParams.protocolWithHost = this.getProtocolWithHost()
    this.notificationsParams = notificationsParams
    Deps.cable = opts.cable
    Deps.NotificationCenter = opts.notificationCenter

  getWire: -> this.wire

  getLine: -> this.line

  getLocale: -> Config.locale
  setLocale: (locale) -> Config.locale = locale

  getProtocolWithHost: -> Config.protocolWithHost
  setProtocolWithHost: (val) -> Config.protocolWithHost = val

  init: ->
    Env.loco = this
    this.initWire()
    this.initLine()
    this.ready =>
      this.flow()
      this.postInit() if this.postInit?

  ready: (fn) ->
    cond = if document.attachEvent then document.readyState is "complete" else document.readyState isnt "loading"
    if cond
      fn()
    else
      document.addEventListener 'DOMContentLoaded', fn

  initWire: ->
    return if not this.startWire
    this.wire = new Wire this.notificationsParams
    this.wire.fetchSyncTime after: 'connect'

  initLine: ->
    return unless Deps.cable?
    this.line = new Line
    this.line.connect()

  flow: ->
    IdentityMap.clear()

    namespace_name = document.getElementsByTagName('body')[0].getAttribute 'data-namespace'
    controller_name = document.getElementsByTagName('body')[0].getAttribute 'data-controller'
    action_name = document.getElementsByTagName('body')[0].getAttribute 'data-action'

    Env.action = action_name

    if Controllers[namespace_name]?
      Env.namespaceController = new Controllers[namespace_name]
      if Controllers[namespace_name][controller_name]?
        Env.controller = new Controllers[namespace_name][controller_name]
      Env.namespaceController.constructor.initialize() if Env.namespaceController.constructor.initialize?
      Env.namespaceController.initialize() if Env.namespaceController.initialize?
      if Env.controller?
        Env.namespaceController.setSubController Env.controller
        Env.controller.setSuperController Env.namespaceController
        Env.controller.constructor.initialize() if Env.controller.constructor.initialize?
        Env.controller.initialize() if Env.controller.initialize?
        Env.controller.constructor[action_name]() if Env.controller.constructor[action_name]?
        Env.controller[action_name]() if Env.controller[action_name]?
    else if Controllers[controller_name]
      Env.controller = new Controllers[controller_name]
      Env.controller.constructor.initialize() if Env.controller.constructor.initialize?
      Env.controller.initialize() if Env.controller.initialize?
      Env.controller.constructor[action_name]() if Env.controller.constructor[action_name]?
      Env.controller[action_name]() if Env.controller[action_name]?

    if this.wire?
      this.wire.resetSyncTime()
      this.wire.fetchSyncTime()

  emit: (data) -> this.line.send data

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