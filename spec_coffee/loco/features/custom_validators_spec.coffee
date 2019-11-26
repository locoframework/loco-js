describe 'Custom validators', ->
  afterEach -> App.Env.loco.setLocale 'en'

  it 'supports i18n', ->
    App.Env.loco.setLocale 'pl'
    comment = new App.Models.Article.Comment text: 'Trochę ciepłych słów + KuRwA na końcu.'
    expect(comment.isInvalid()).toBe true
    expect(comment.errors.text[0]).toEqual 'zawiera mocny język.'