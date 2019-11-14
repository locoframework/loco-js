describe 'App.Validators.Exclusion', ->
  beforeEach ->
    @dummy = new App.Models.Dummy author: 'admin'

  afterEach -> App.Env.loco.setLocale 'en'

  it 'supports i18n', ->
    App.Env.loco.setLocale 'pl'
    @dummy.isValid()
    expect(@dummy.errors.author[0]).toEqual "jest zarezerwowane"

  it 'supports custom message', ->
    dcm = new App.Models.DummyCustomMsg author: 'admin'
    dcm.isValid()
    expect(dcm.errors.author[0]).toEqual 'being an admin is not for u'