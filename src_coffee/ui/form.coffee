class App.UI.Form
  constructor: (opts = {}) ->
    @formId = opts.id
    @obj = opts.for
    @initObj = if opts.initObj? and opts.initObj then true else false
    @delegator = opts.delegator
    @callbackSuccess = opts.callbackSuccess
    @callbackFailure = opts.callbackFailure
    @callbackActive = opts.callbackActive
    @form = this._findForm()
    @submit = null
    @submitVal = null
    if @form?
      @submit = @form.querySelectorAll('input[type="submit"]')[0]
    if @submit?
      @submitVal = @submit.value
    @locale = App.Env.loco.getLocale()

  getObj: -> @obj

  render: ->
    if @initObj
      this._assignAttribs()
      this._handle()
    else if @form?
      this.fill()
      this._handle()

  fill: (attr = null) ->
    return null if not @obj?
    return null if not @obj.constructor.attributes?
    attributes = {}
    if attr?
      attributes[attr] = null
    else
      attributes = @obj.constructor.attributes
    for name, _ of attributes
      remoteName = @obj.getAttrRemoteName name
      query = @form.querySelector "[data-attr=#{remoteName}]"
      continue if query is null
      formEl = query.querySelectorAll "input,textarea,select"
      continue if formEl.length is 0
      if formEl.length is 1
        formEl[0].value = @obj[name]
        continue
      uniqInputTypes = App.Utils.Array.uniq App.Utils.Array.map formEl, (e) -> e.getAttribute 'type'
      if uniqInputTypes.length is 1 and uniqInputTypes[0] is 'radio'
        radioEl = App.Utils.Collection.find formEl, (e) => e.value is String(@obj[name])
        if radioEl?
          radioEl.checked = true
          continue
      if formEl[0].getAttribute("type") isnt "hidden" and formEl[formEl.length - 1].getAttribute('type') isnt "checkbox"
        continue
      formEl[formEl.length - 1].checked = Boolean(@obj[name])

  _findForm: ->
    return document.getElementById("#{@formId}") if @formId?
    if @obj?
      objName = @obj.getIdentity().toLowerCase()
      if @obj.id?
        document.getElementById "edit_#{objName}_#{@obj.id}"
      else
        document.getElementById "new_#{objName}"

  _handle: ->
    @form.addEventListener 'submit', (e) =>
      e.preventDefault()
      return if not this._canBeSubmitted()
      if not @obj?
        this._submitForm()
        return
      this._assignAttribs()
      this._hideErrors()
      if @obj.isInvalid()
        this._renderErrors()
        @delegator[@callbackFailure]() if @callbackFailure?
        return
      this._submittingForm false
      clearForm = if @obj.id? then false else true
      @obj.save()
      .then (data) =>
        this._alwaysAfterRequest()
        if data.success
          this._handleSuccess data, clearForm
        else
          @delegator[@callbackFailure]() if @callbackFailure?
          this._renderErrors()
      .catch (err) => this._connectionError()

  _canBeSubmitted: ->
    return false if App.Utils.Dom.hasClass @submit, 'active'
    return false if App.Utils.Dom.hasClass @submit, 'success'
    return false if App.Utils.Dom.hasClass @submit, 'failure'
    true

  _submitForm: ->
    this._submittingForm()
    url = @form.getAttribute('action') + '.json'
    data = new FormData @form
    request = new XMLHttpRequest()
    request.open 'POST', url
    request.onload = =>
      this._alwaysAfterRequest()
      @submit.blur()
      if this.status >= 200 and this.status < 400
        resp = this.response
        if resp.data.success
          this._handleSuccess resp.data, @form.getAttribute("method") is "POST"
        else
          this._renderErrors resp.data.errors
    request.onerror = =>
      this._alwaysAfterRequest()
      @submit.blur()
      this._connectionError()
    request.send data

  _handleSuccess: (data, clearForm = true) ->
    val = data.flash?.success ? App.I18n[@locale].ui.form.success
    App.Utils.Dom.addClass @submit, 'success'
    @submit.value = val
    if data.access_token?
      App.Env.loco.getWire().setToken data.access_token
    if @callbackSuccess?
      if data.data?
        @delegator[@callbackSuccess](data.data)
      else
        @delegator[@callbackSuccess]()
      return
    setTimeout =>
      @submit.disabled = false
      App.Utils.Dom.removeClass @submit, 'success'
      @submit.value = @submitVal
      selector = ":not([data-loco-not-clear=true])"
      if clearForm
        nodes = @form.querySelectorAll "input:not([type='submit'])#{selector}, textarea#{selector}"
        for node in nodes
          node.value = ''
    , 5000

  _renderErrors: (remoteErrors = null) ->
    return if @obj? and not @obj.errors?
    return if not @obj? and not remoteErrors?
    data = if remoteErrors? then remoteErrors else @obj.errors
    for attrib, errors of data
      remoteName = if @obj? then @obj.getAttrRemoteName(attrib) else attrib
      if remoteName? and attrib isnt "base"
        # be aware of invalid elements's nesting e.g. "div" inside of "p"
        query = @form.querySelector "[data-attr=#{remoteName}]"
        continue if query is null
        nodes = query.querySelectorAll ".errors[data-for=#{remoteName}]"
        continue if nodes.length is 0
        for node in nodes
          node.textContent = errors[0]
        continue
      if attrib is "base" and errors.length > 0
        nodes = document.querySelectorAll ".errors[data-for='base']"
        if nodes.length is 1
          nodes[0].textContent = errors[0]
        else
          @submit.value = errors[0]
    if @submit.value is @submitVal or @submit.value is App.I18n[@locale].ui.form.sending
      @submit.value = App.I18n[@locale].ui.form.errors.invalid_data
    App.Utils.Dom.addClass @submit, 'failure'
    this._showErrors()
    setTimeout =>
      @submit.disabled = false
      App.Utils.Dom.removeClass @submit, 'failure'
      @submit.val = @submitVal
      for node in @form.querySelectorAll('input.invalid, textarea.invalid, select.invalid')
        App.Utils.Dom.removeClass node, 'invalid'
    , 1000

  _assignAttribs: ->
    return null if not @obj.constructor.attributes?
    for name, _ of @obj.constructor.attributes
      remoteName = @obj.getAttrRemoteName name
      query = @form.querySelector "[data-attr=#{remoteName}]"
      continue if query is null
      formEl = query.querySelectorAll "input,textarea,select"
      continue if formEl.length is 0
      if formEl.length is 1
        @obj.assignAttr name, formEl[0].value
        continue
      uniqInputTypes = App.Utils.Array.uniq App.Utils.Array.map formEl, (e) -> e.getAttribute 'type'
      if uniqInputTypes.length is 1 and uniqInputTypes[0] is 'radio'
        radioEl = App.Utils.Collection.find formEl, (e) => e.checked is true
        if radioEl?
          @obj.assignAttr name, radioEl.value
          continue
      if formEl[0].getAttribute("type") isnt "hidden" and formEl[formEl.length - 1].getAttribute('type') isnt "checkbox"
        continue
      if formEl[formEl.length - 1].checked is true
        @obj.assignAttr name, formEl[formEl.length - 1].value
      else
        @obj.assignAttr name, formEl[0].value

  _hideErrors: ->
    for e in @form.querySelectorAll('.errors')
      if e.textContent.trim().length > 0
        e.textContent = ''
        e.style.display = 'none'

  _showErrors: ->
    for e in @form.querySelectorAll('.errors')
      if e.textContent.trim().length > 0
        e.style.display = ''

  _submittingForm: (hideErrors = true) ->
    App.Utils.Dom.removeClass @submit, 'success'
    App.Utils.Dom.removeClass @submit, 'failure'
    App.Utils.Dom.addClass @submit, 'active'
    @submit.value = App.I18n[@locale].ui.form.sending
    @delegator[@callbackActive]() if @callbackActive?
    this._hideErrors() if hideErrors

  _connectionError: ->
    App.Utils.Dom.removeClass @submit, 'active'
    App.Utils.Dom.addClass @submit, 'failure'
    @submit.val = App.I18n[@locale].ui.form.errors.connection
    setTimeout =>
      @submit.disabled = false
      App.Utils.Dom.removeClass @submit, 'failure'
      @submit.val = @submitVal
    , 3000

  _alwaysAfterRequest: ->
    App.Utils.Dom.removeClass @submit, 'active'
