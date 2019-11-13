describe 'App.Validators.Confirmation', ->
  beforeEach ->
    @user = new App.Models.User password: 'secret', passwordConfirmation: 'sexret'

  afterEach -> App.Env.loco.setLocale 'en'

  it 'supports custom message', ->
    dummy = new App.Models.DummyCustomMsg accessPassword: 'secret'
    dummy.isValid()
    expect(dummy.errors.accessPasswordConfirmation[0]).toEqual 'different than confirmation'