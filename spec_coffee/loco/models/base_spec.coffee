describe 'App.Models.Base', ->

  describe '#assignAttr', ->
    it 'assigns Boolean values', ->
      comment = new App.Models.Article.Comment
      comment.assignAttr 'approved', true
      expect(comment.approved).toEqual true

    it 'converts to Boolean values', ->
      comment = new App.Models.Article.Comment
      comment.assignAttr 'approved', '0'
      expect(comment.approved).toEqual false
