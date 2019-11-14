describe 'App.Validators.Inclusion', ->
  beforeEach ->
    @dummy = new App.Models.Dummy rate: 'decent'

  afterEach -> App.Env.loco.setLocale 'en'

  it 'supports custom message', ->
    dcm = new App.Models.DummyCustomMsg rate: 'decent'
    dcm.isValid()
    expect(dcm.errors.rate[0]).toEqual 'value is not good'