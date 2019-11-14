describe 'App.Validators.Format', ->
  beforeEach ->
    @user = new App.Models.User email: 'joe.doe.com'

  afterEach -> App.Env.loco.setLocale 'en'

  it 'supports custom message', ->
    dummy = new App.Models.DummyCustomMsg countryCode: 'PLN'
    dummy.isValid()
    expect(dummy.errors.countryCode[0]).toEqual 'invalid country code'
