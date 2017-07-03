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
      formEl = @formJQ.find("[data-attr=#{remoteName}]").find "input,textarea,select"
      if formEl.length is 1
        formEl.val @obj[name]
        continue
      uniqInputTypes = App.Utils.Array.uniq App.Utils.Array.map formEl, (e) -> $(e).attr 'type'
      if uniqInputTypes.length is 1 and uniqInputTypes[0] is 'radio'
        radioEl = App.Utils.Collection.find formEl, (e) => $(e).val() is String(@obj[name])
        if radioEl?
          $(radioEl).prop 'checked', true
          continue
      if formEl.first().attr("type") isnt "hidden" and formEl.last().attr('type') isnt "checkbox"
        continue
      formEl.last().prop 'checked', Boolean(@obj[name])

  _findForm: ->
    return document.getElementById("#{@formId}") if @formId?
    if @obj?
      objName = @obj.getIdentity().toLowerCase()
      if @obj.id?
        document.getElementById "edit_#{objName}_#{@obj.id}"
      else
        document.getElementById "new_#{objName}"

  _handle: ->
    @formJQ.on 'submit', (e) =>
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
    return false if @submitJQ.hasClass 'active'
    return false if @submitJQ.hasClass 'success'
    return false if @submitJQ.hasClass 'failure'
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
    @submitJQ.addClass('success').val val
    if data.access_token?
      App.Env.loco.getWire().setToken data.access_token
    if @callbackSuccess?
      if data.data?
        @delegator[@callbackSuccess](data.data)
      else
        @delegator[@callbackSuccess]()
      return
    setTimeout =>
      @submitJQ.removeAttr('disabled').removeClass('success').val @submitVal
      selector = ":not([data-loco-not-clear=true])"
      if clearForm
        @formJQ.find("input:not([type='submit'])#{selector}, textarea#{selector}").val ''
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
    @formJQ.find('.errors').each (index, e) =>
      if $(e).text().trim().length > 0
        $(e).text ""
        $(e).hide()

  _showErrors: ->
    @formJQ.find('.errors').each (index, e) =>
      if $(e).text().trim().length > 0
        $(e).show()

  _submittingForm: (hideErrors = true) ->
    @submitJQ.removeClass('success').removeClass('failure').addClass('active').val App.I18n[@locale].ui.form.sending
    @delegator[@callbackActive]() if @callbackActive?
    this._hideErrors() if hideErrors

  _connectionError: ->
    @submitJQ.removeClass('active').addClass('failure').val App.I18n[@locale].ui.form.errors.connection
    setTimeout =>
      @submitJQ.removeAttr('disabled').removeClass('failure').val @submitVal
    , 3000

  _alwaysAfterRequest: ->
    @submitJQ.removeClass("active")
