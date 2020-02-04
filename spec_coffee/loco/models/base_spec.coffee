describe 'App.Models.Base', ->
  describe '#save', ->
    it 'properly builds URL for nested models', ->
      comment = new App.Models.Article.Comment articleId: 1, author: 'Joe Doe', text: 'foo bar baz'
      comment.save()
      expect(jasmine.Ajax.requests.mostRecent().url).toBe '/user/articles/1/comments'

  describe '#serialize', ->
    it "sets proper key's name for nested models", ->
      comment = new App.Models.Article.Comment articleId: 1, author: 'Joe Doe', text: 'foo bar baz'
      expect(comment.serialize()['comment']).not.toBe(undefined)

  describe '#assignAttr', ->
    it 'assigns Boolean values', ->
      comment = new App.Models.Article.Comment
      comment.assignAttr 'approved', true
      expect(comment.approved).toEqual true

    it 'converts to Boolean values', ->
      comment = new App.Models.Article.Comment
      comment.assignAttr 'approved', '0'
      expect(comment.approved).toEqual false
