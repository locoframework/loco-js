import Connectivity from '../base/mixins/Connectivity';
import { Config } from '../deps';

class Base
  constructor: ->
    this.views = {}
    this.receivers = {}
    this.subController = null
    this.superController = null
    this.params = this.__fetchParams()

  setView: (key, view) -> this.views[key] = view
  getView: (key) -> this.views[key]
  getViews: -> this.views

  setSubController: (cntrlr) -> this.subController = cntrlr
  getSubController: -> this.subController

  setSuperController: (cntrlr) -> this.superController = cntrlr
  getSuperController: -> this.superController

  setResource: (name) -> this.setScope name
  setScope: (name) -> Config.scope = name

  __fetchParams: ->
    params = {}
    match = /https?:\/\/.+\/\w+\/(\d+)/.exec window.location.href
    id = if match? then match[1] else null
    params["id"] = parseInt(id) if id?
    splitUrl = window.location.href.split '?'
    if splitUrl.length is 1
      return params
    paramsString = splitUrl[splitUrl.length - 1]
    paramsArray = paramsString.split('&').map (s) -> s.split '='
    for arr in paramsArray
      key = decodeURIComponent arr[0]
      val = decodeURIComponent arr[1]
      if val?
        val = val.replace /\+/g, " "
      params[key] = val
    params

Object.assign(Base.prototype, Connectivity);

export default Base
