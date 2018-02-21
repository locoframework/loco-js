![logo](https://raw.githubusercontent.com/artofcodelabs/artofcodelabs.github.io/master/assets/ext/loco_logo_trans_sqr-300px.png)

# 🚧 This documentation is under construction. Come back soon! 🚧

# 🧐 What is Loco-JS?

**Loco-JS** is a front-end framework similar to recently released [Stimulus](https://stimulusjs.org) in a fact that it doesn't want to take over your entire front-end.  
The difference is that **Loco-JS** was originally designed in 2016 and it works in more generic fashion. **Loco-JS** teams up well with tools like [React](https://reactjs.org) or [Vue](https://reactjs.org) for crafting a view layer.

Architecturally - Loco-JS is a front-end part of [**Loco-Rails**](http://github.com/locoframework/loco-rails), which can be used separately (with limited functionality).

And **Loco-Rails** is a back-end part of the whole [**Loco**](http://github.com/locoframework) framework and it requires **Loco-JS** to work.

**Loco-Rails** is just a concept that simplifies communication between front-end and back-end code. You can implement it in other languages or frameworks as well.  
I am a Rails programmer that's why I created **Loco** for **Rails**.

This is how it can be visualized:

```
Loco Framework
|
|--- Loco-Rails (back-end part)
|
|--- Loco-JS (front-end part / can be used separately)
        |
        |--- Loco-JS-Model (model part / can be used separately)
        |
        |--- other parts of Loco-JS
```

Following sections contain more detailed description of its internals and API.

# ⛑ But how is Loco supposed to help?

* by providing logical structure for JavaScript code. You exactly know where to start, when looking for JavaScript code that runs current page (**Loco-JS**)
* you have models that protect from sending invalid data to API endpoints. They also facilitate fetching objects of given type from the server ([**Loco-JS-Model**](https://github.com/locoframework/loco-js-model/))
* you can easily assign a model to the form what will enrich it with fields' validation (**Loco-JS**)
* you can connect models with controllers and views, so they will be notified about every change made to a given model on the server side. This change is going to be emitted as a signal to the front-end code. And signal is just a fancy name for JS object (**Loco**)
* allows you to send messages over WebSockets in both directions with just a one line of code on each side (**Loco**)
* respects permissions (you can send messages only to specified, signed in on the server, models _e.g. given admin or user_) (**Loco**)
* solves other common problems

# 🦕 Origins

**Loco** framework was created back in 2016. The main reason for it was a need to make my life easier as a full-stack developer.
I was using [Coffeescript](http://coffeescript.org) on the front-end back then and [Ruby on Rails](http://rubyonrails.org) on the back-end.

I still use **Rails** but my front-end toolbox has changed a bit. Now I work with modern goodies such as **ES6**, [Webpack](https://webpack.js.org), [Babel](https://babeljs.io), [React](https://reactjs.org), [Redux](https://redux.js.org)... and **Loco-JS** obviously :)

**Loco-Rails** enriches Ruby on Rails. It's a functionality layer that works on top of Rails to simplify communication between front-end na back-end code. It is a concept that utilizes good parts of Rails to make this communication straightforward.

But **Loco-JS** can be used standalone to give a structure to a JavaScript code, for example.  
[**Loco-JS-Model**](https://github.com/locoframework/loco-js-model/) can be used without Rails as well and in cooperation with other modern tools such as React and Redux. You have to follow only a few rules of formatting JSON responses from the server.

# 🔬 Tech stack of Loco-JS

The Origins explain why some parts of **Loco-JS** are still written in CoffeeScript.	 It shouldn't worry you though unless you want to contribute.

What's more important is that all Loco-JS' modules are transpiled and bundled using modern tools such as **Babel** and **Webpack** accordingly. Loco-JS works well as a part of modern JavaScript ecosystem alongside libraries such as React.  
In the future, while adding features, all modules will be rewritten to Javascript.

# 🤝 Dependencies

🎊 Loco-JS has no external dependencies. 🎉

It depends only on Loco-JS-Model which is an internal part of Loco-JS but can be used separately as well.  
Although, [class properties transform](https://babeljs.io/docs/plugins/transform-class-properties/) Babel plugin may be helpful to support static class properties, which are useful in defining models.  
Additionally, if you want to use Loco-JS with Loco-Rails and send or receive signals / messages over WebSocket connection, you have to pair up Loco-JS with [Action Cable](https://www.npmjs.com/package/actioncable).

# 📥 Installation

```bash
$ npm install --save loco-js
```

If you want to use Loco-JS by a script tag, without the module bundler, it's exposed as an `App` global variable.

# 🎬 Initialization

```javascript
import { Loco } from "loco-js";

const loco = new Loco({
  // set to your Turbolinks version if you use Loco-JS with Loco-Rails
  // and have enabled Turbolinks
  turbolinks: false,                   // false by default
  
  // the browser's app will start to receive signals / notifications from
  // the server either via WebSockets or AJAX polling (if WebSocket connection
  // can't be established). Loco-JS can even switch between WebSockets and AJAX
  // polling depending on the momentary availability. This works if you use
  // Loco-JS with Loco-Rails.
  notifications: {
    enable: true,                      // false by default
    //pollingTime: 3000,               // 3000 ms by default (for AJAX polling)
    
    // display upcoming notifications in browser's console e.g. for debugging
    //log: true,                       // false by default
    
    //ssl: false,                      // your current protocol by default
    
    // location must be the same as where you mounted Loco-Rails in routes.rb
    //location: "notification-center", // 'notification-center' by default
    
    // max number of notifications fetched at once via ajax pooling
    // must be the same as notifications_size defined in initializers/loco.rb
    // next batch of notifications will be fetched immediately after 
    // max size is reached
    //size: 100,                       // 100 by default
    
    // after specified time your current (namespace) controller instance method
    // disconnectedForTooLong will be called with the "time since disconnection"
    // passed as an argument
    //allowedDisconnectionTime: 10     // 10 by default [sec]
  },
  
  //locale: "en",                      // "en" by default
  
  // if provided - Loco-JS will be using absolute path 
  // instead of site-root-relative path in all xhr requests
  //protocolWithHost: "https://example.com",
  
  // this method is called at the end, after given controller's
  // method has been called. At this moment Loco's instance is initialized 
  // and you can use it to change some settings of the browser's app
  // e.g. polling interval -> Env.loco.getWire().setPollingTime(<time>);
  postInit: () => {}
});

loco.init();
```

# 👷🏻‍♂️ How does it work?

After document is loaded, Loco-JS' instance checks following `<body>`'s data attributes:

* data-namespace
* data-controller
* data-action

Then, based on their values, it initializes given controllers and calls given methods. Example:

```html
<body data-namespace="Main" data-controller="Pages" data-action="index">
</body>
```

Loco-JS will act like this (simplified version):

```javascript
import { Controllers } from "loco-js";

namespaceController = new Controllers.Main;
namespaceController.initialize();

controller = new Controllers.Main.Pages;
controller.initialize();
controller.index();
```

What's important is that Loco-JS looks not only for instance methods but static ones as well. If some controller is not defined, Loco-JS skips it. The same situation is with methods. You don't have to create controllers for every page that you have too. You can use Loco-JS only on desired ones. It does not want to take over your front-end. Augment with JavaScript only those pages that you want instead.

If namespace controller is not defined, Loco-JS will assume `Controllers.Pages` as a controller.

If you use Loco-JS along with Loco-Rails - after calling specified methods, Loco-JS will try to establish WebSocket connection with the server and will be waiting for signals / notifications.  
If WebSocket connection can't be established, Loco-JS will start periodically checking for new notifications via AJAX polling.

# 🔩 Merging classes

As you can see in the previous section, Loco-JS must have an access to all defined controllers to initialize them and to call given methods on them. Therefore, they have to be merged with `Controllers` object which Loco-JS exports.

```javascript
// javascripts/index.js (entry point)

import { Controllers } from "loco-js";

import Admin from "./controllers/admin"; // namespace controller
import User from "./controllers/user";   // namespace controller

Object.assign(Controllers, {
  Admin,
  User
});
```

```javascript
// javascripts/controllers/admin.js (namespace controller)

import { Controllers } from "loco-js";

import Coupons from "./admin/coupons"; // Coupons controller
import Plans from "./admin/plans";     // Plans controller 

class Admin extends Controllers.Base {}

Object.assign(Admin, {
  Coupons,
  Plans
});

export default Admin;
```

You don't have to define namespace controllers. You can merge controllers directly with exported `Controllers` object.

Remember to polyfill `Object.assign` or assign controllers using a different method.

Loco-JS exports also, among others, the `Models` object. Remember to do the same with all defined models - merge them with this object.

# 🏛 Structure

Loco-JS exports following structure:

```javascript
export {
  Channels,    // object                 - since ver. 1.3
  Controllers, // object
  Deps,        // object
  Env,         // object
  Helpers,     // object
  I18n,        // object
  Line,        // function (class)       - since ver. 1.3
  Loco,        // function (class)
  Mix,         // function (mixin class)
  Mixins,      // object
  Models,      // object
  Presenters,  // object
  Services,    // object
  UI,          // object
  Utils,       // object
  Validators,  // object
  Views,       // object
  Wire         // function (class)
};
```

Brief explanation of each element:

* **Channels** - the namespace where `ActionCable`'s subscriptions are created
* **Controllers** - the object that you have to merge all custom controllers with. It contains `Base` class for custom controllers
* **Deps** - this is an abbreviation of "dependencies". This object has 2 properties:
    * **cable** - if you want to send and receive signals / messages through WebSockets, assign consumer to this property by invoking `ActionCable.createConsumer();`
    * **NotificationCenter** - you have to assign a custom class to this property that is going to receive notifications sent via WebSockets
* **Env** - this object holds environmental informations. Its properties:
    * **action** - the value of the `data-action` attribute of `<body>`. This is also the name of the method that is called on the current controller
    * **controller** - the instance of the current controller
    * **namespaceController** - the instance of the current namespace controller
    * **loco** - the instance of `Loco` (see _Initialization_ section). Its most important instance methods are:
        * `getWire` - returns the current instance of `Wire`
        * `setLocale` / `getLocale` - allows to set / get current locale
    
        Look at [source code](https://github.com/locoframework/loco-js/blob/master/src/base/loco.coffee) for all.
* **Helpers** - the namespace where helpers are defined. Helpers are classes facilitating things like transforming text, converting numbers to currencies etc. Members:
    * **Text** - has method(s) that returns *text* transformed into HTML by using simple formatting rules
* **I18n** - the object that holds localizations. Localizations are objects as well
* **Line** - the class responsible for sending and receiving messages over WebSocket connection
* **Loco** - this class rules everything ;)
* **Mix** - the factory function that generates a `Mixed` superclass (used for implementing mixins)
* **Mixins** - the namespace where mixins are defined
* **Models** - the object which all custom models should be merged with. It contains `Base` class for custom models
* **Presenters** - the empty object that you can merge your custom presenters with. Presenters can be used to hold functions used to present models or their attributes.  
_Deprecated! It will be removed in the future. Store presenters on your own. This object doesn't have to be exported._ 
* **Services** - the namespace where service classes are defined. Members:
    * **Date** - its instance methods are useful for converting `Date` to a string
* **UI** - the namespace where classes that interact with the HTML are defined. Members:
    * **Form** - the class responsible for dealing with forms
* **Utils** - the namespace in which the classes containing the utility methods for the given data type are defined. Members: `Array`, `Collection`, `Dom`, `Object`, `String`
* **Validators** - the namespace where validators are defined and where custom validators should also be merged
* **Views** - the namespace where `Base` class for custom Views is defined
* **Wire** - the class responsible for fetching signals / notifications 

# 📡 Models

The model layer has been extracted to a separate [repository](https://github.com/locoframework/loco-js-model) and it can be used standalone as well. If you want to look at how to integrate [React](https://reactjs.org), [Redux](https://redux.js.org) and **Loco-JS-Model**, 🎁[**this repository**](https://github.com/artofcodelabs/front-end-boilerplate)🎁 may be a good starting point. 

## Nesting models 🏺

If you want to have two models with the same name or maybe you want to reflect a server architecture, you can even nest models. But only one-level nesting is allowed.

```javascript
// models/Coupon/Unit.js

import { Models } from "loco-js";

class Unit extends Models.Base {
  static identity = "Coupon.Unit";

  static remoteName = "Coupon::Unit"; // the name of the corresponding model
                                      // on the server side (Ruby syntax)

  static resources = {
    // ...
  };

  static attributes = {
    // ...
  };
}

export default Unit;
```

Remember to merge all defined models with the exported `Models` object:

```javascript
// models/index.js

import { Models } from "loco-js";

import Coupon from "./Coupon";
import Unit from "./Coupon/Unit";
import Admin from "./Admin";

Object.assign(Coupon, {
  Unit
});

Object.assign(Models, {
  Admin,
  Coupon
});
```

Loco-JS will be able to find the correct model in this situation if you emit a signal for the corresponding model on the server side.

# 🕹 Controllers

Like it's already been said - given method of given controller is called automatically based on HTML `<body>`'s attributes. 

Exemplary controller:

```javascript
// controllers/admin/coupons.js

import { Controllers } from "loco-js";

import New from "views/admin/coupons/new";
import List from "views/admin/coupons/list";

class Coupons extends Controllers.Base {
  static identity = "Coupons"; // persist the name of the class because
                               // it is going to be minified in production
                               // and knowing the name of the current controller
                               // can be useful (see the section about Line)
  
  // Loco-JS supports static and instance methods
  static index() {
    new List().render();
  }

  new() {
    const view = new New({ planId: this.params.id });
    this.setView("new", view); // assigning the instance of currently rendered
                               // view to the controller's property gives 
                               // a possibility to call other methods on it
                               // in the next life cycle
                               // (see the section about Line)
    view.render();
  }
}

export default Coupons;
```

To see all convenient properties and methods of the base class, other than `params` presented above, look at the [source code](https://github.com/locoframework/loco-js/blob/master/src/controllers/base.coffee).

Remember to merge all custom controllers with the `Controllers` object exported by Loco-JS (see the _Merging classes_ section). Optionally, you can use the namespace controller to set the default scope for models (`setResource` / `setScope`) methods.

# ⬇️ Previous doc

## Connectivity

`App.Mixins.Connectivity` is a mixin, which is included in `App.Controllers.Base` and `App.Views.Base` base classes. It has very important instance method `connectWith`. You will use this method probably always inside instance methods of controllers and views. `connectWith` accepts 2 arguments. The first one can be an object or an array. Allowed are instances of models and class names of models. Example:

```coffeescript
this.connectWith [App.Models.Article, App.Models.Article.Comment, user]
this.connectWith article, receiver: "_articleReceivedSignal"
```

The second argument is optional and should be an object with *receiver* property. It specifies which method will be called when notification / signal related to connected object / objects is received.

If you pass a class name (or names) as connected object then you will receive notifications / signals related to all instances of this class.

Check *Examples* section for real-life usage.

## Controllers

`App.Controllers.Base` base class is pretty straightforward. Just look at the source code for more details about implemented methods. More important things are:

* `params` property - an object with URL params
* `setScope` / `setResource` method - sets default scope for all models (which URL is used for fetching resources)

## Views

`App.Views.Base` base class is also straightforward and source code is self-explanatory. For more use cases check *Examples* section.

## App.UI.Form

This class is responsible for handling forms. It converts attributes of model's instance to the values of corresponding form elements. It's constructor accepts an object with following properties (all are optional):

* **id** *(String)* - HTML **id** attribute of the form. If you don't pass this property, it will be resolved based on *Ruby on Rails* naming convention.
* **for** *(Object)* - an instance of a model that is connected with the form
* **initObj** *(Boolean)* - whether to initialize passed object based on values of corresponding form's elements.
* **delegator** *(Object)* - an object to which the following methods are delegated to
* **callbackSuccess** *(String)*
* **callbackFailure** *(String)*
* **callbackActive** *(String)*

Following HTML code shows how a form should be structured. What is important - all tags related to given attribute, should be wrapped by a tag with **field** class and proper **data-attr** attribute. The value of this attribute should match the **remote name** of given attribute (name of the corresponding attribute on the server side). Look at how errors are expressed. The tag is irrelevant, only **errors** class and **data-for** HTML attribute are important.

Example:

```html
<form class="edit_article" id="edit_article_42" action="/user/articles/42"
  accept-charset="UTF-8" method="post">

  <input name="utf8" type="hidden" value="&#x2713;" />
  <input type="hidden" name="_method" value="patch" />
  <input type="hidden" name="authenticity_token" value="secret" />

  <div class="field" data-attr="title">
    <label for="article_title">Title</label><br>
    <input type="text" value="A few examples" name="article[title]" id="article_title" />
    <span class="errors" data-for="title"></span>
  </div>

  <div class="field" data-attr="text">
    <label for="article_text">Text</label><br>
    <textarea name="article[text]" id="article_text"></textarea>
    <span class="errors" data-for="text"></span>
  </div>

  <div>
    <input type="submit" name="commit" value="Update Article" />
    <span class="errors" data-for="base"></span>
  </div>
</form>
```

TODO: JS example + how it works desc

## App.Wire

Instance of this class works internally and is responsible for fetching notifications. Following code shows - how to get this instance during runtime:

```coffeescript
App.Env.loco.getWire()
```

The constructor takes an object whose many properties have been described in the *initialization* section, earlier. All methods are rather straightforward and self-explanatory, but you should pay attention to the `setToken` one. When `@token` is not null, it is automatically appended to the requests that are responsible for fetching notifications. So it allows to fetch notifications assigned to given token.

## App.Line (since ver. 1.3)

Instance of this class works internally and is responsible for sending and receiving messages over WebSocket connection. Loco-JS automatically creates instance of `App.Line` and subscribes to `Loco::NotificationCenterChannel` if discovers `ActionCable`'s consumer under `App.cable`. Following code shows - how to get this instance during runtime:

```coffeescript
App.Env.loco.getLine()
```

### Sending messages

```coffeescript
App.Env.loco.getLine().send({})

# or using shortcut:
App.Env.loco.emit({})
```

### Receiving messages

Loco-Rails delivers `loco:install` generator that creates following class at *JS-ASSETS-ROOT/services/notification_center.coffee*

```coffeescript
class App.Services.NotificationCenter
  receivedSignal: (data) ->
```

Every time a message is sent from the server, `receivedSignal` instance method is called.

## Development

### Development and testing

Look inside `gulpfile.js` for more details.

## Examples

* examine `test/dummy` app inside [Loco-Rails project](http://github.com/locoframework/loco-rails) for real-life use cases of almost all Loco's features in various scenarios

# 📈 Changelog

## Major releases 🎙

### 1.5

* Loco-JS dropped the dependency on jQuery. So it has no external dependencies officially 🎉

Informations about all releases are published on [Twitter](https://twitter.com/artofcode_co)

# License 📜
Loco-JS is released under the [MIT License](https://opensource.org/licenses/MIT).

# Author 👨‍🏭

Zbigniew Humeniuk from [Art of Code](http://artofcode.co)
