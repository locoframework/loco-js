class App.Utils.Collection
  @find: (collection, func) ->
    for o in collection
      return o if func(o) is true