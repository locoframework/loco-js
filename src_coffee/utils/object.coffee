class App.Utils.Object
  @toURIParams: (obj) ->
    str = ""
    for key, val of obj
      if str isnt ""
        str += "&"
      str += (key + "=" + encodeURIComponent(val))
    str
