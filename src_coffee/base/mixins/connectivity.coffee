class App.Mixins.Connectivity
  connectWith: (data, opts = {}) ->
    return null if not data?
    if data.constructor.name isnt "Array"
      data = [data]
    data = App.Utils.Array.uniq data
    for resource in data
      if resource.constructor.name is "Function"
        identity = resource.getIdentity()
        App.IdentityMap.addCollection identity, to: this
        @receivers[identity] = opts.receiver if opts.receiver?
      else
        App.IdentityMap.connect this, with: resource
        @receivers[resource.toKey()] = opts.receiver if opts.receiver?

  receiverFor: (data) ->
    if data.constructor.name is "String"
      return if @receivers[data]? then @receivers[data] else null
    return @receivers[data.toKey()] if @receivers[data.toKey()]?
    null
