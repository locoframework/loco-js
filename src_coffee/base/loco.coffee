class App.Loco
  constructor: (opts={}) ->
    @wire = null
    @line = null
    @locale = null
    @turbolinks = opts.turbolinks ? false
    @initWire = if opts.notifications?.enable then true else false
    @postInit = opts.postInit
    this.setLocale opts.locale ? 'en'
    this.setProtocolWithHost opts.protocolWithHost
    notificationsParams = opts.notifications ? {}
    notificationsParams.protocolWithHost = @protocolWithHost
    @notificationsParams = notificationsParams

  getWire: -> @wire

  getLine: -> @line

  getLocale: -> @locale
  setLocale: (locale) -> @locale = locale

  getProtocolWithHost: -> @protocolWithHost
  setProtocolWithHost: (val) ->
    if not val?
      @protocolWithHost = null
      return
    if val[val.length - 1] is '/'
      val = val[0..val.length - 2]
    @protocolWithHost = val

  init: ->
    App.Env.loco = this
    if @initWire
      @wire = new App.Wire @notificationsParams
      @wire.fetchSyncTime connect: true
    if App.cable?
      @line = new App.Line
      @line.connect()
    if @turbolinks
      event = if Number(@turbolinks) >= 5 then "turbolinks:load" else "page:change"
      jQuery(document).on event, =>
        this.flow()
        @postInit() if @postInit?
    else
      jQuery =>
        this.flow()
        @postInit() if @postInit?

  flow: ->
    App.IdentityMap.clear()

    namespace_name = $('body').data 'namespace'
    controller_name = $('body').data 'controller'
    action_name = $('body').data 'action'

    App.Env.action = action_name

    if App.Controllers[namespace_name]?
      App.Env.namespaceController = new App.Controllers[namespace_name]
      if App.Controllers[namespace_name][controller_name]?
        App.Env.controller = new App.Controllers[namespace_name][controller_name]
      App.Env.namespaceController.initialize() if App.Env.namespaceController.initialize?
      if App.Env.controller?
        App.Env.namespaceController.setSubController App.Env.controller
        App.Env.controller.setSuperController App.Env.namespaceController
        App.Env.controller.initialize() if App.Env.controller.initialize?
        App.Env.controller[action_name]() if App.Env.controller[action_name]?
    else if App.Controllers[controller_name]
      App.Env.controller = new App.Controllers[controller_name]
      App.Env.controller.initialize() if App.Env.controller.initialize?
      App.Env.controller[action_name]() if App.Env.controller[action_name]?

    if @wire?
      @wire.resetSyncTime()
      @wire.fetchSyncTime()

  emit: (data) -> @line.send data

  getModels: ->
    models = []
    regExp = /^[A-Z]/
    for func, _ of App.Models
      continue if !regExp.exec(func) or func is "Base"
      models.push func
      for innerFunc, _ of App.Models[func]
        models.push "#{func}.#{innerFunc}" if regExp.exec innerFunc
    models

  getModelForRemoteName: (remoteName) ->
    for model in this.getModels()
      parts = model.split "."
      if parts.length is 1
        return App.Models[parts[0]] if App.Models[parts[0]].getRemoteName() is remoteName
      else if parts.length is 2
        return App.Models[parts[0]][parts[1]] if App.Models[parts[0]][parts[1]].getRemoteName() is remoteName