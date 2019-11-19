describe 'App.Validators.Length', ->
  beforeEach ->
    @tooLongTitle = "Migrations are stored as files in the db/migrate directory, one for each migration class. The name of the file is of the form YYYYMMDDHHMMSS_create_products.rb, that is to say a UTC timestamp identifying the migration followed by an underscore followed by the name of the migration."
    @article = new App.Models.Article title: 'ab'

  afterEach -> App.Env.loco.setLocale 'en'

  describe 'custom message support', ->

    beforeEach ->
      @dummy = new App.Models.DummyCustomMsg shortDesc: 'foo bar', lang: 'PLN'

    it 'has the same custom message for "minimum" violation', ->
      @dummy.isValid()
      expect(@dummy.errors.shortDesc[0]).toEqual 'length is bloody wrong'

    it 'has the same custom message for "maximum" violation', ->
      @dummy.shortDesc = @tooLongTitle
      @dummy.isValid()
      expect(@dummy.errors.shortDesc[0]).toEqual 'length is bloody wrong'

    it 'has the same custom message for "is" violation', ->
      @dummy.isValid()
      expect(@dummy.errors.lang[0]).toEqual 'length is not what I expect'