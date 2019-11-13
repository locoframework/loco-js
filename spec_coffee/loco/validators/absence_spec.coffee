describe 'App.Validators.Absence', ->
  afterEach -> App.Env.loco.setLocale 'en'

  it 'supports i18n', ->
    App.Env.loco.setLocale 'pl'
    dummy = new App.Models.Dummy blankAttrib: 0
    dummy.isValid()
    expect(dummy.errors.blankAttrib[0]).toEqual "musi być puste"

  it 'supports custom message', ->
    dummy = new App.Models.DummyCustomMsg blankAttrib: 0
    dummy.isValid()
    expect(dummy.errors.blankAttrib[0]).toEqual 'only blank dude'
