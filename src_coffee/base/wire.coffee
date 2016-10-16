class App.Wire
  constructor: (opts = {}) ->
    @syncTime = null
    @token = null
    @pollingInterval = null
    @pollingTime = opts.pollingTime ? 3000
    @log = if opts.log? and opts.log then true else false
    @ssl = opts.ssl
    @location = opts.location ? 'notification-center'
    @size = opts.size ? 100
    @protocolWithHost = opts.protocolWithHost
    @allowedDisconnectionTime = opts.allowedDisconnectionTime ? 10
    @disconnectedSinceTime = null
    @uuid = null

  setToken: (token) -> @token = token

  getSyncTime: -> @syncTime
  setSyncTime: (val) -> @syncTime = val
  resetSyncTime: -> @syncTime = null

  getPollingTime: -> @pollingTime
  setPollingTime: (val) ->
    @pollingTime = val
    this.disconnect()
    this.connect()

  getPollingInterval: -> @pollingInterval

  getSSL: -> @ssl
  setSSL: (val) -> @ssl = val

  getLocation: -> @location
  setLocation: (val) -> @location = val

  getSize: -> @size
  setSize: (val) -> @size = val

  getAllowedDisconnectionTime: -> @allowedDisconnectionTime
  setAllowedDisconnectionTime: (val) -> @allowedDisconnectionTime = val

  getUuid: -> @uuid
  setUuid: (val) -> @uuid = val

  connect: ->
    line = App.Env.loco.getLine()
    if line? and !line.isWireAllowed()
      return
    @pollingInterval = setInterval =>
      this.check()
    , @pollingTime

  disconnect: -> window.clearInterval @pollingInterval

  disableNotifications: ->
    console.log 'App.Wire#disableNotifications - DEPRECATED'
    this.disconnect()

  processNotification: (notification) ->
    console.log notification if @log
    [className, id, signal, payload] = notification
    model = App.Env.loco.getModelForRemoteName className
    identity = model.getIdentity()
    return if not App.IdentityMap.imap[identity]?
    if App.IdentityMap.imap[identity][id]?
      obj = App.IdentityMap.find identity, id
      if obj["receivedSignal"]?
        obj.receivedSignal signal, payload
      this._emitSignalToMembers id, signal, payload, model, identity
    if model["receivedSignal"]?
      model.receivedSignal signal, payload
    return if not App.IdentityMap.imap[identity]["collection"]?
    return if App.IdentityMap.imap[identity]["collection"].length is 0
    this._emitSignalToCollection signal, payload, identity

  processSignal: (notification) -> this.processNotification notification

  check: ->
    return if Object.keys(App.IdentityMap.imap).length is 0 and not @token? and @syncTime?
    jqxhr = $.ajax method: "GET", url: this._getURL(), data: this._requestParams()
    jqxhr.always ->
    jqxhr.fail =>
      this._handleDisconnection()
    jqxhr.done (data) =>
      @disconnectedSinceTime = null
      @syncTime = data[1]
      notifications = data[0]
      return if notifications.length is 0
      this.processNotification notification for notification in notifications
      this.check() if notifications.length is @size

  fetchSyncTime: (opts = {}) ->
    jqxhr = $.ajax method: "GET", url: "#{this._getURL()}/sync-time"
    jqxhr.always ->
    jqxhr.fail =>
      this[opts.after]() if opts.after?
    jqxhr.done (data) =>
      @syncTime = data.sync_time
      this[opts.after]() if opts.after?

  _emitSignalToMembers: (id, signal, payload, model, identity, obj = null) ->
    if not obj?
      obj = new model id: id
    for connObj in App.IdentityMap.findConnected identity, id
      if connObj.receiverFor(obj)?
        connObj[connObj.receiverFor(obj)] signal, payload
      else if connObj["receivedSignal"]?
        connObj.receivedSignal signal, payload

  _emitSignalToCollection: (signal, payload, identity) ->
    for obj in App.IdentityMap.imap[identity]["collection"]
      if obj.receiverFor(identity)?
        obj[obj.receiverFor(identity)] "#{identity} #{signal}", payload
      else if obj["receivedSignal"]?
        obj.receivedSignal "#{identity} #{signal}", payload

  _requestParams: ->
    params = {synced_at: @syncTime}
    if @token? then params.token = @token
    if @uuid? then params.uuid = @uuid
    params

  _getURL: ->
    [protocol, _, host] = window.location.href.split '/'
    if @protocolWithHost?
      [protocol, host] = @protocolWithHost.split '//'
    if @ssl?
      protocol = if @ssl then 'https:' else "http:"
    "#{protocol}//#{host}/#{@location}"

  _handleDisconnection: ->
    if not @disconnectedSinceTime?
      @disconnectedSinceTime = new Date()
    diffInSec = (new Date() - @disconnectedSinceTime) / 1000
    ctrl = App.Env.namespaceController ? App.Env.controller
    if diffInSec > @allowedDisconnectionTime and ctrl['disconnectedForTooLong']?
      ctrl.disconnectedForTooLong @disconnectedSinceTime