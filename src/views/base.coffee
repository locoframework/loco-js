import Connectivity from '../base/mixins/Connectivity'

class Base
  constructor: (opts = {}) ->
    this.views = {}
    this.intervals = {}
    this.receivers = {}
    this.controller = null
    this.delegator = null
    this.setController(opts.controller) if opts.controller?
    this.setDelegator(opts.delegator) if opts.delegator?

  setController: (cntr) -> this.controller = cntr
  getController: -> this.controller

  setView: (key, view) -> this.views[key] = view
  getView: (key) -> this.views[key]
  getViews: -> this.views

  setDelegator: (delegator) -> this.delegator = delegator
  getDelegator: (delegator) -> this.delegator

Object.assign(Base.prototype, Connectivity);

export default Base