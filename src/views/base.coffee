import Connectivity from '../base/mixins/connectivity.coffee'

class Base
  constructor: (opts = {}) ->
    @views = {}
    @intervals = {}
    @receivers = {}
    @controller = null
    @delegator = null
    this.setController(opts.controller) if opts.controller?
    this.setDelegator(opts.delegator) if opts.delegator?

  setController: (cntr) -> @controller = cntr
  getController: -> @controller

  setView: (key, view) -> @views[key] = view
  getView: (key) -> @views[key]
  getViews: -> @views

  setDelegator: (delegator) -> @delegator = delegator
  getDelegator: (delegator) -> @delegator

Object.assign(Base.prototype, Connectivity);

export default Base