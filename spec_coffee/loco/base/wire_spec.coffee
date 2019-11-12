describe "App.Wire", ->
  beforeEach ->
    @wire = new App.Wire {}

  afterEach ->
    @wire.disconnect()

  describe "#setSize", ->
    it "can set max size of notifications", ->
      @wire.setSize 10
      expect(@wire.getSize()).toEqual 10