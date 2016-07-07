# Welcome to Loco-JS

**Loco** is a framework that works on top of [Rails](http://rubyonrails.org). It consists of 2 parts: 

* [**Loco-Rails**](http://github.com/locoframework/loco-rails) - a back-end part
* **Loco-JS** - a front-end part

Loco-JS can work separately with limited functionality and is maintained in this repository. Following sections contain more detailed description of it's internals and API. Loco-JS role in the **Loco** framework is described on [Loco-Rails page](http://github.com/locoframework/loco-rails).

## CoffeeScript naming convention 

Loco-JS uses the following naming convention. It's worth to notice that "**@**" sign is used only to define and call class variables and class methods. Although **this** and **@** are equivalent, this convention improves readability of code imo.

```coffeescript
class Example
  @classVar = 50

  @classMethod: -> 
    "@classVar is #{@classVar}." + "\n" + @_privateClassMethod true
	
  @_privateClassMethod: (sayName = false) -> 
    if sayName
      "Class name is #{@name}"
    else
      "I'm private class method only by convention."

  constructor: (opts = {}) ->
    @iVarA = opts.a ? 0
    @iVarB = opts.b ? 'foo'
		
  instanceMethod: (c) -> 
    classVarVal = this.constructor.classVar
    str = "@iVarA is #{@iVarA}, @iVarB is #{@iVarB}, c is #{c} and @classVar is #{classVarVal}."
    str + '\n' + this._privateInstanceMethod false
	
  _privateInstanceMethod: (explain = true) -> 
    str = if explain then ' only by convention.' else '.'
    "I'm private instance method#{str}"


Example.classVar                   # 50
Example.classMethod()              # "@classVar is 50.
                                   # Class name is Example"
Example._privateClassMethod()      # "I'm private class method only by convention." 
instance = new Example b: 'bar'
instance.instanceMethod()          # "@iVarA is 0, @iVarB is bar, c is undefined and @classVar is 50.
                                   # I'm private instance method."
instance._privateInstanceMethod()  # "I'm private instance method only by convention."
```
Other data structures in CoffeeScript are pretty good explained on the [official page](http://coffeescript.org) and in [CoffeeScript Cookbook](https://coffeescript-cookbook.github.io).

## Dependencies

* [jQuery 2.2.4 or higher](http://jquery.com/download)

Loco-JS has a single dependency. But it's based on [Promises](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) and promises are supported natively only in [some browsers](http://caniuse.com/#feat=promises). So, I recommend to use [lie](https://github.com/calvinmetcalf/lie).
## Getting started

Include [`dist/loco.js`](dist/loco.js) in your application’s JavaScript bundle.

### Installation using Ruby on Rails

Loco-JS is included inside the [`loco-rails`](https://github.com/locoframework/loco-rails) gem. To install:

1. Add `loco-rails` to your Gemfile: `gem 'loco-rails', '~> 1.0.0'`
2. Run `bundle install`.
3. Add `//= require loco-rails` to your JavaScript manifest file (usually at `app/assets/javascripts/application.js`).

### Installation using Bower

```console
$ bower install loco-js --save
```

### Initalization

```coffeescript
loco = new App.Loco
  # set to your Turbolinks version if you have enabled Turbolinks
  turbolinks: false                   # false by default

  # your browser's app will be checking for new notifications periodically via ajax polling
  notifications:
    enable: false                     # false by default
    #pollingTime: 3000                # 3000 ms by default

    # display upcoming notifications in browser's console e.g. for debugging
    #log: true                        # false by default

    #ssl: false                       # your current protocol by default

    # location must the same as where you mount Loco in routes.rb
    #location: 'notification-center'  # 'notification-center' by default

    # max number of notifications that is fetched at once via ajax pooling
    # must be the same as notifications_size defined in initializers/loco.rb
    # next batch of notifications will be fetched immediately after max size is reached
    #size: 100                        # 100 by default

    # after this time your current namespace controller / controller instance method
    # disconnectedForTooLong: will be called with the 'time since disconnection' passed as an argument
    #allowedDisconnectionTime: 10     # 10 by default [sec]
  #locale: 'en'                       # 'en' by default

  # if provided - loco will be using absolute path instead of site-root-relative path in all xhr requests
  #protocolWithHost: 'https://example.com'

  # this method is called at the end, after given controller methods has been called
  # at this time Loco's instance is initialized and you can use it to change behaviour of your browser app
  # e.g. polling interval -> App.Env.loco.getWire().setPollingTime <time>
  #postInit: ->

loco.init()
```

## Usage

After calling `init()` Loco's instance checks `<body>` data attributes:

* data-namespace
* data-controller
* data-action

Then, based on their values, it initializes given controller and calls given methods. Example:

```html
<body data-namespace="Main" data-controller="Pages" data-action="index">
</body>
```

```coffeescript
namespaceController = new App.Controllers.Main
namespaceController.initialize()

controller = new App.Controllers.Main.Pages
controller.initialize()
controller.index()
```

All methods will be called, if are defined. If namespace controller is not defined, Loco will assume `App.Controllers.Pages` as controller.

If you've enabled notifications, Loco will begin checking for them periodically.

## Structure

Type `App` in browser's console and you'll get:

```javascript
Object {
  Controllers: Object,
  Env: Object, 
  Helpers: Object,
  I18n: Object,
  IdentityMap: function IdentityMap(),
  Loco: function Loco(opts),
  Mix: function (),
  Mixins: Object, 
  Models: Object,
  Presenters: Object,
  Services: Object,
  UI: Object, 
  Utils: Object,
  Validators: Object,
  Views: Object,
  Wire: function Wire(opts),
  __proto__: Object
}
```

Let's describe each object / function briefly. I'll be using CoffeeScript nomenclature.

* **Controllers** - a namespace where you define controllers
* **Env** - an object that has following properties:
	* **action** - current action's name (method called on current controller's instance)
	* **controller** - an instance of current controller
	* **loco** - an instance of `App.Loco`. It's the most used instance method `getWire` returns current instance of `App.Wire`
	* **namespaceController** - an instance of current namespace controller
	* **scope** - current scope (used by models to determine URL of resources)
* **Helpers** - a namespace where you define helpers. Member classes:
	* **Text** - has method(s) that returns *text* transformed into HTML using simple formatting rules
* **I18n** - an object that holds localizations. Localizations are objects too
* **IdentityMap** - a class that stores information about *connected* objects
* **Loco** - this class rules everything ;)
* **Mix** - a factory function that generates a `Mixed` superclass (used for implementing mixins)
* **Mixins** - a namespace where mixins are defined
* **Models** - a namespace where you define models
* **Presenters** - an empty namespace where you define presenters
* **Services** - a namespace where you define services. Member classes:
	* **Date** - it's instance methods are useful for formatting `Date` as string
* **UI** - a namespace where UI components are defined. Member classes:
	* **Form** - a class responsible for dealing with forms
* **Utils** - a namespace where utility classes are defined. Members:
	* **Array** - utilities for arrays
	* **Collection** - utilities for collections (arrays and objects)
	* **String** - utilities for strings
* **Validators** - a namespace where validators are defined
* **Views** - a namespace where you define views
* **Wire** - a class that is responsible for fetching notifications

## Models

Following example presents how simple model could look like:

```coffeescript
class App.Models.Article extends App.Models.Base
  @identity = "Article"
  @resources =
    url: '/user/articles', paginate: {per: 100, param: "current-page"}
    main:
      url: '/articles', paginate: {per: 10}
    admin:
      url: '/admin/articles', paginate: {per: 100}

  @attributes =
    title:
      validations:
        presence: true
        length: {within: [3, 255]}
    content:
      validations:
        presence: true
        length: {minimum: 100}
      remoteName: "text"
      type: "String"

  @receivedSignal: (signal, data) ->

  @validate = ["vulgarityLevel"]

  constructor: (data) -> super data

  receivedSignal: (signal, data) ->

  vulgarityLevel: ->
    if this._isVulgar()  # not implemented
      this.addErrorMessage "Article contains strong language.", for: 'base'
```

Let's describe it's *elements*:

* **@identity** *(required)* - this class variable's value should be the same as class name (it's last component). It's required because of minification - all class names will be converted to ~ one character. But, Loco relies on naming.

* **@resources** - this class variable stores information about scopes in your app. You can fetch resources from different sources (API endpoints). So here is a place, where you can define them. Then, you can fetch resources in 2 ways: 
	* by specifing scope in method calls e.g. `App.Models.Article.get 'all', resource: 'main'`
	* by specifing scope globally. You can do this by calling `setScope '<scope name>'` instance method in a namespace controller, usually

* **@attributes** - this class variable stores information about model's attributes. For each attribute you can define: 
	* **validators** - `Absence`, `Confirmation`, `Exclusion`, `Format`, `Inclusion`, `Length`, `Numericality`, `Presence`, `Size` are available
	* **remoteName** - the name of model's attribute and name returned by API endpoint may vary. So here you can define a *binding*.
	* **type** - when assigning values from API endpoint, Loco may convert them to certain types. Available types: `Date`, `Integer`, `Float`, `Boolean`, `Number`, `String`

* **@receivedSignal** - this class method is called when signal, related to any instance of this class, is received

* **@validate** - this class variable contains names of custom validation methods

* **receivedSignal** - this method is automatically called by an instance of a class, when signal related to this object is received

### Fetching a collection of resources (pagination)

Loco-JS requires response from the server in a proper JSON format. It's described on the [Loco-Rails page](http://github.com/locoframework/loco-rails). Here are some examples:

```coffeescript
App.Models.Article.get('all').then (resp) ->
# GET "/user/articles?current-page=1"
# GET "/user/articles?current-page=2"
# GET "/user/articles?current-page=3"
# ...

App.Models.Article.get('all', resource: 'main').then (resp) -> 
# GET "/articles?page=1"
# GET "/articles?page=2"
# GET "/articles?page=3"
# ...

App.Models.Article.get('published', resource: 'admin', page: 2).then (resp) ->
# GET "/admin/articles/published?page=2"
```

TODO: nested resources

### Finding

### Validation

### Dirty object

```coffeescript
receivedSignal: (signal, data) ->
  switch signal
    when 'updated'
      @article.reload().then =>
        @article.changes()
        @article.applyChanges()
```

## Controllers

## Views

## UI.Form

## Development

```console
$ codo src_coffee
```

## Examples

...

## License
Loco-JS is released under the [MIT License](https://opensource.org/licenses/MIT).

## Author

...