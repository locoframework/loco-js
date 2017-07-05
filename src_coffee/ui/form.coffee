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
    @submit = @form.querySelectorAll('input[type="submit"]')[0]
    @submitVal = @submit.value
    @locale = App.Env.loco.getLocale()
    # TODO: remove
    @formJQ = $(@form)
    @submitJQ = $(@submit)

  getObj: -> @obj

  render: ->
    if @initObj
      this._assignAttribs()
    else
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
    url = @formJQ.attr('action') + '.json'
    jqxhr = $.post url, @formJQ.serialize()
    jqxhr.always =>
      this._alwaysAfterRequest()
      @submitJQ.blur()
    jqxhr.fail => this._connectionError()
    jqxhr.done (data) =>
      if data.success
        this._handleSuccess data, @formJQ.attr("method") is "POST"
      else
        this._renderErrors data.errors

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
        @formJQ.find("[data-attr=#{remoteName}]").find(".errors[data-for=#{remoteName}]").text errors[0]
        continue
      if attrib is "base" and errors.length > 0
        if $(".errors[data-for='base']").length is 1
          $(".errors[data-for='base']").text errors[0]
        else
          @submitJQ.val errors[0]
    if @submitJQ.val() is @submitVal or @submitJQ.val() is App.I18n[@locale].ui.form.sending
      @submitJQ.val App.I18n[@locale].ui.form.errors.invalid_data
    @submitJQ.addClass 'failure'
    this._showErrors()
    setTimeout =>
      @submitJQ.removeAttr('disabled').removeClass('failure').val @submitVal
      @formJQ.find('input.invalid, textarea.invalid, select.invalid').removeClass 'invalid'
    , 1000

  _assignAttribs: ->
    return null if not @obj.constructor.attributes?
    for name, _ of @obj.constructor.attributes
      remoteName = @obj.getAttrRemoteName name
      formEl = @formJQ.find("[data-attr=#{remoteName}]").find "input,textarea,select"
      if formEl.length is 1
        @obj.assignAttr name, formEl.val()
        continue
      uniqInputTypes = App.Utils.Array.uniq App.Utils.Array.map formEl, (e) -> $(e).attr 'type'
      if uniqInputTypes.length is 1 and uniqInputTypes[0] is 'radio'
        radioEl = App.Utils.Collection.find formEl, (e) => $(e).is ':checked'
        if radioEl?
          @obj.assignAttr name, $(radioEl).val()
          continue
      if formEl.first().attr("type") isnt "hidden" and formEl.last().attr('type') isnt "checkbox"
        continue
      if formEl.last().is ":checked"
        @obj.assignAttr name, formEl.last().val()
      else
        @obj.assignAttr name, formEl.first().val()

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
