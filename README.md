![logo](https://raw.githubusercontent.com/artofcodelabs/artofcodelabs.github.io/master/assets/ext/loco_logo_trans_sqr-300px.png)

# 🧐 What is Loco-JS?

**Loco-JS** is a front-end framework similar to [Stimulus](https://stimulusjs.org) in terms of not wanting to take over your entire front-end.
**Loco-JS** was originally designed in 2016, and it works in a more generically. **Loco-JS** teams up well with tools like [React](https://reactjs.org) or [Vue](https://reactjs.org) for crafting a view layer.

Architecturally - Loco-JS is a front-end part of the [**Loco**](http://github.com/locoframework) framework.

[**Loco-Rails**](http://github.com/locoframework/loco-rails) is a back-end part of the **Loco** framework, and it requires **Loco-JS** to work.

**Loco** framework is a concept that simplifies communication between front-end and back-end code. It can be implemented in any language or framework.
I am a Rails programmer. That's why I created **Loco** for **Rails**.

This is how it can be visualized:

```
Loco Framework
|
|--- Loco-Rails (back-end part)
|       |
|       |--- Loco-Rails-Core (logical structure for JS / can be used separately with Loco-JS-Core)
|
|--- Loco-JS (front-end part)
        |
        |--- Loco-JS-Core (logical structure for JS / can be used separately)
        |
        |--- Loco-JS-Model (model part / can be used separately)
        |
        |--- other built-in parts of Loco-JS

        Loco-JS-UI - connects models with UI elements (a separate library)
```


# ⛑ But how is Loco supposed to help?

* by providing a logical structure for a JavaScript code. You exactly know where to start looking for a JavaScript code that runs a current page ([**Loco-JS-Core**](https://github.com/locoframework/loco-js-core/))
* you have models that protect API endpoints from sending invalid data. They also facilitate fetching objects of a given type from the server ([**Loco-JS-Model**](https://github.com/locoframework/loco-js-model/))
* you can easily assign a model to a form enriching this form with fields' validation ([**Loco-JS-UI**](https://github.com/locoframework/loco-js-ui/))
* you can subscribe to a model or a collection of models on the front-end by passing a function. Front-end and back-end models can be connected. This function is called when a notification for a given model is sent on the server-side. (**Loco**)
* it allows sending messages over WebSockets in both directions with just a single line of code on each side (**Loco**)
* it respects permissions. You can filter out sent messages if a sender is not signed in as a given resource, _for example, a given admin or user_) (**Loco**)

# 🤝 Dependencies

🎊 Loco-JS has no external dependencies. 🎉

It depends only on [**Loco-JS-Core**](https://github.com/locoframework/loco-js-core/) and [**Loco-JS-Model**](https://github.com/locoframework/loco-js-model/), which are internal parts of Loco-JS but can be used separately. They don't have external dependencies too.  
Although [@babel/plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) may be helpful to support static class properties, which are useful in defining models.  
Additionally, if you want to send or receive messages over a WebSocket connection, you have to pair up Loco-JS with [Action Cable](https://www.npmjs.com/package/actioncable).

# 📥 Installation

```bash
$ npm install --save loco-js
```

If you want to use Loco-JS with a `<script>` tag, without a module bundler, it's exposed as the `Loco` global variable.

# 🎬 Initialization

```javascript
import { init } from "loco-js";
import { createConsumer } from "@rails/actioncable";

import Coupon from "./models/Coupon";
import Unit from "./models/Coupon/Unit";           // nested model
import Admin from "./models/Admin";

import AdminController from "./controllers/admin"; // namespace controller
import Users from "./controllers/users";

import Coupons from "./controllers/admin/coupons"; // Coupons controller
import Plans from "./controllers/admin/plans";     // Plans controller

Coupon.Unit = Unit;

AdminController.Coupons = Coupons;
AdminController.Plans = Plans;

const NotificationCenter = data => {
  switch (data.type) {
    case "PING":
      // do something
      break;
  }
};

init({
  // (optional) assign a consumer if you want to send and receive messages through WebSockets
  cable: createConsumer(),
  
  controllers: {
    Admin: AdminController,
    Users
  },
  
  locale: "en",                          // (optional) "en" by default

  models: {                              // specifying models here is required 
    Admin,                               // to receive messages sent from the server 
    Coupon                               // and related to given models
  },  

  // (optional) assign a custom function to this property that will receive 
  // notifications sent from the server
  notificationCenter: NotificationCenter,
  
  // the browser's app will start to receive notifications from
  // the server either via WebSockets or AJAX polling if a WebSocket connection
  // can't be established. Loco-JS can even switch between WebSockets and AJAX
  // polling depending on the momentary availability. This works if you use
  // Loco-JS with Loco-Rails.
  notifications: {
    enable: true,                        // (optional) true by default
    
    pollingTime: 3000,                   // (optional) 3000 ms by default (for AJAX polling)

    // display upcoming notifications in browser's console e.g. for debugging
    log: true,                           // (optional) false by default

    ssl: false,                          // (optional) your current protocol by default

    // location must be the same as where you mounted Loco-Rails in routes.rb
    location: "notification-center",     // (optional) 'notification-center' by default

    // max number of notifications fetched at once via ajax pooling
    // must be the same as notifications_size defined in initializers/loco.rb;
    // next batch of notifications will be fetched immediately after max size is reached
    size: 100,                           // (optional) 100 by default

    // your current (namespace) controller instance method disconnectedForTooLong 
    // will be called after a specified time with the "time since disconnection"
    // passed as an argument
    allowedDisconnectionTime: 10         // (optional) 10 by default [sec]
  },

  // (optional) if provided - Loco-JS uses an absolute path
  // instead of a site-root-relative path in all XHR requests
  protocolWithHost: "https://example.com",
  
  // send and receive cookies by a CORS request 
  cookiesByCORS: false  // (optional) false by default

  // (optional) this method is called at the end, after a given controller's
  // method has been called. You can use it to change some settings based on other conditions
  // e.g. polling interval: getWire().setPollingTime(1000);
  postInit: () => {}
});
```

# 👷🏻‍♂️ How does it work?

If you use Loco-JS along with Loco-Rails - after calling specified methods, Loco-JS tries to establish WebSocket connection with the server and is waiting for messages.

If WebSocket connection can't be established, Loco-JS starts periodically checking for new notifications via AJAX polling.

# 🏛 Structure

Loco-JS exports the following structure:

```javascript
export {
  getLine,
  getLocale,
  setLocale,
  getWire,
  connector,   // object
  emit,
  helpers,     // object
  init,
  subscribe,
  Controllers, // object
  Env,         // object
  I18n,        // object
  Models,      // object
  Validators   // object
};
```

A brief explanation of each element:

* **getLine** - function returns the working instance of the **Line** class responsible for sending and receiving messages over a WebSocket connection
* **getLocale** - function returns configured locale
* **setLocale** - function allows setting a locale
* **getWire** - function returns the working instance of the **Wire** class responsible for fetching notifications from the server
* **connector** - an object that connects Loco-JS with its inner parts that work independently and plug-ins like Loco-JS-Core, Loco-JS-Model, Loco-JS-UI
* **emit** - function sends messages over a WebSocket connection to the server
* **helpers** - object containing helper functions. It is imported from [**Loco-JS-Core**](https://github.com/locoframework/loco-js-core). Read its README for more information.
* **init** - a function used to initialize Loco-JS 
* **subscribe** - a function used to receive notifications when a given object or all objects of a given class are changed on the server-side
* **Controllers** - object that contains the `Base` class for custom controllers
* **Env** - object holding environmental information. Its properties:
    * **action** - the value of the `data-action` attribute of `<body>`. This is also the name of the method that is called on the current controller
    * **controller** - the instance of the current controller
    * **namespaceController** - the instance of the current namespace controller
    * **loco** - the running instance of `Loco`
* **I18n** - object holding localizations. Localizations are objects as well
* **Models** - object that contains the `Base` class for custom models
* **Validators** - object containing all validators and the `Base` class for custom ones. All custom validators should be merged with this object

# 📡 Models

The model layer has been extracted to a separate [repository](https://github.com/locoframework/loco-js-model), and it can be used standalone as well. 🎁[**This repository**](https://github.com/artofcodelabs/front-end-boilerplate)🎁 may be a good starting point if you want to look at how to integrate [React](https://reactjs.org), [Redux](https://redux.js.org), and **Loco-JS-Model**.

## Nesting models 🏺

If you want to have two models with the same name or maybe you want to reflect a server architecture, you can nest models. But only one-level nesting is allowed.

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

Revisit *Initialization* to see how to connect both models and pass to `init()` function.  
Loco-JS will be able to find the correct model in this situation when you send a notification for the given model on the server-side.

# 🕹 Controllers

The concept of controllers is described in [**Loco-JS-Core**](https://github.com/locoframework/loco-js-core) project that can be used standalone and is a Loco-JS dependency.

Optionally, you can use a custom namespace controller to set the default scope for models using `setResource` / `setScope` methods. These methods are implemented in the base class `Controllers.Base`.

```javascript
// controllers/Admin.js

import { Controllers } from "loco-js";

class Admin extends Controllers.Base {
  initialize() {
    this.setScope("admin");
  }
}
```

# 🔌 The subscribe function

This function allows subscribing to a given object or a class of objects by passing a function. Front-end and back-end models can be connected. This function is called when a notification for a given model is sent on the server-side.

*Example:*

```javascript
// views/user/rooms/List.js

import { subscribe } from "loco-js";

import Room from "models/Room";

const memberJoined = roomId => {
  const node = membersNode(roomId);
  node.textContent = parseInt(node.text()) + 1;
};

const memberLeft = roomId => {
  const node = membersNode(roomId);
  node.textContent = parseInt(node.text()) - 1;
};

const membersNode = roomId => {
  document.querySelector(`#room_${roomId} td.members`);
};

const renderRoom = room => {
  `
  <tr id='room_${room.id}'>
    ...
  </tr>
  `;
};

const receivedMessage = (type, data) => {
  switch (type) {
    case "Room member_joined":
      memberJoined(data.room_id);
      break;
    case "Room member_left":
      memberLeft(data.room_id);
      break;
    case "Room created": {
      document
        .getElementById("rooms_list")
        .insertAdjacentHTML("beforeend", renderRoom(data.room));
      break;
    }
    case "Room destroyed": {
      const roomNode = document.getElementById(`room_${data.room_id}`);
      roomNode.parentNode.removeChild(roomNode);
    }
  }
};

export default function() {
  subscribe({ to: Room, with: receivedMessage });
}
```

`subscribe` returns a function that can be called if you want to **unsubscribe**.

If you use Loco-Rails on the back-end and send notification for a given instance of `Room` model, like:

```ruby
# you can do it anywhere, in Rails Console for example
include Loco::Emitter

emit @room, :created, data: { room: { id: @room.id, name: @room.name } }
```

On the front-end side:

1. Loco-JS receives a notification in the following format `["Room", 123, "created", { room: { id: 123, name: "Room #123" } }]`
2. `receivedMessage` method is called with `"Room created"` and `{ room: { id: 123, name: "Room #123" } }` as arguments

The example above shows subscribing to all instances of the given class by passing a model class name (`Room`). It may be useful, for example, if you want to be notified when an object is created on the server-side. The front-end equivalent (Loco-JS-Model) does not exist yet, so you have to subscribe to the whole model class.

A function that receives notifications (`receivedMessage` in this case) gets the first argument in the form of `"${model class name} ${notification name}"` if you subscribe to the whole class of objects. This function receives the first argument in the form of only the `"${notification name}"` if you subscribe to a model instance.  

It is possible to subscribe to more than one object by passing an array `subscribe({ to: [Room, User, comment1, post2], with: customFunc })`

From the internal point of view, the `subscribe` function cares about an instance class name and its **ID**. So it does not have to be a "real" model instance, you can pass a shallow object like `subscribe({ to: new User({ id: data.id }), with: receivedMessage })` if you want to subscribe to the instance of User with a given ID. 

All notifications are also sent to the `notificationCenter` (see *Receiving messages* section).

# 📩 Receiving messages

Every time the back-end sends a message to the front-end over a WebSocket connection like this:

```ruby
include Loco::Emitter

# emit_to method emits a message over a WebSocket connection
# to all Hub members in this example
# Hub is a Loco-Rails concept that matches to a virtual room where you can add/remove members
emit_to Hub.get('chat_room_1'),
        type: 'NEW_MESSAGE',
        message: 'Hello chat members!',
        author: 'Mr. Admin'
```

a custom function is called that must be assigned to the `notificationCenter` property during initialization if you want to receive messages from the server. 

```javascript
import { init } from "loco-js";
import { createConsumer } from "@rails/actioncable";

import NotificationCenter from "services/NotificationCenter";

init({
  // ...
  cable: createConsumer(),
  notificationCenter: NotificationCenter,
  // ...
});
```

```javascript
// services/NotificationCenter.js

import { Env } from "loco-js";

import { addArticles } from "actions";
import store from "store";

import Article from "models/Article";

import RoomsController from "controllers/user/Rooms";
import UserController from "controllers/User";

const getCallbackForReceivedMessage = () => {
  const nullCallback = () => {};
  // break if current namespace controller is not UserController
  if (Env.namespaceController.constructor !== UserController)
    return nullCallback;
  if (Env.controller.constructor !== RoomsController) return nullCallback;
  // break if current action is not "show"
  if (Env.action !== "show") return nullCallback;
  return Env.controller.callbacks["receivedMessage"];
};

const articleCreated = async ({ id }) => {
  if (Env.namespaceController.constructor !== UserController) return;
  const article = await Article.find({ id, abbr: true });
  store.dispatch(addArticles([article]));
};

export default data => {
  switch (data.type) {
    case "NEW_MESSAGE":
      getCallbackForReceivedMessage()(data.message, data.author);
      break;
    case "Article created":
      articleCreated(data.payload);
      break;
  }
};
```

Sending and receiving messages over a WebSocket connection only works if you use Loco-Rails on the back-end, and it requires [Action Cable](https://www.npmjs.com/package/actioncable) as a front-end dependency. It can be skipped if you are not interested in WebSocket communication.  
Internally, Loco-JS uses an instance of a class called `Line` for sending and receiving messages over a WebSocket connection. You can fetch this instance using the `getLine` function. But there is rarely a need for this.

Loco-Rails can also send notifications assigned to a given model instance. These notifications are typically delivered to Loco-JS via Ajax Polling or a WebSocket connection if it's established. They end up in the `notificationCenter` too. The `type` property of these notification consists of the name of the model and a notification's name _(e.g. "Article created")_. The class responsible for fetching this type of notifications is called `Wire`. On the back-end side, notifications assigned to a model instance can be sent using the `emit` method. 

```ruby
include Loco::Emitter

emit(@article, :created, for: current_user)
```

If you are interested in receiving _"system"_ notifications about the WebSocket connection lifecycle: `connected` / `disconnected` / `rejected`, look at the `loco` property of a notification.

## Wire 🚠

An instance of this class works internally and is responsible for fetching notifications. You can fetch this instance using `getWire` function.
`Wire` class's constructor takes an object whose many properties have been described in the *Initialization* section (look at the `notifications` property).

💥 In normal conditions, Wire checks and fetches notifications via AJAX polling. But if you have an established WebSocket connection, it stops polling and waits for notifications, transmitted through WebSockets. These notifications are sent using the `emit` method on the server-side.
In case of losing the WebSocket connection, it can automatically switch to AJAX polling.

Useful accessors and methods:

* `wire.token = token` - when a token is set, it is automatically appended to the requests that fetch notifications. So it allows you to fetch notifications assigned to a given token. It is useful when you want to send a notification, on the back-end, to a user that is not authenticated in the system _(e.g., you want to notify a user that has confirmed his email address successfully via clicking on a link and is now able to sign in)_

```javascript
import { getWire } from "loco-js";

const wire = getWire();

wire.token = "foobarbaz";
```

On the back-end, you can send notifications for a given token now.

```ruby
include Loco::Emitter

emit Coupon.last, :updated, { data: { foo: 'bar' }, for: 'foobarbaz' }
```

* `setPollingTime(value)` - this method changes the time interval of fetching notifications from the server via AJAX polling if you don't have a WebSocket connection. It accepts values in milliseconds (default is 3000)

# 🚚 Sending messages

You can send messages over WebSocket connection after initializing Loco-JS properly (see _Initialization_ and _Receiving messages_ sections).

```javascript
import { emit } from "loco-js";

emit({ type: "PING", user_id: 123 });
```

To see how to receive messages on the back-end, look at the [Loco-Rails documentation](https://github.com/locoframework/loco-rails#notification-center).

# 🇵🇱 i18n

Loco-JS supports internationalization. The following example shows how to set up a different default language.

First of all, create a translation in a given language. Loco-JS consists internally of a few parts (see _What is Loco-JS?_ section). Each lib can contain its localization file, which exports a simple JavaScript object. Their properties are not conflicting. So it is possible to create a one localization file that combines several files from different Loco-JS' parts ([example translation to the Polish language](https://github.com/locoframework/loco-rails/blob/master/test/dummy/frontend/js/locales/base/pl.js)).

Loco-JS must have all translations assigned to the `I18n` object. You can add your custom locales to the `I18n` object too.

```javascript
// locales/base/pl.js

import { I18n } from "loco-js";

I18n.pl = {
  // ...
  errors: {
    messages: {
      accepted: "musi zostać zaakceptowane",
      blank: "nie może być puste",
      confirmation: "nie zgadza się z polem %{attribute}",
      empty: "nie może być puste",
      // ...
    }
  }
};
```
You can specify a default locale during initialization (see _Initialization_ section) or by using `setLocale` function.

# 👩🏽‍🔬 Tests

```bash
$ npm run test
```

# 📈 Changelog

## Major releases 🎙

### 5.0  _(2020-12-22)_

* notifications are enabled by default
* custom controllers and models are passed to Loco-JS during the initialization
* Loco-JS does not process the same notification more times (an idempotency key is included)

### 4.1  _(2020-09-06)_

* Ability to receive & send cookies by a CORS request

### 4.0 _(2020-07-23)_

* Code has been extracted to Loco-JS-Core and Loco-JS-UI
* the `notificationCenter` is more powerful and receives all messages
* **Breaking changes**:
    * `Channels`, `Deps`, `Helpers`, `Line`, `Loco`, `Mix`, `Mixins`, `Presenters`, `Services`, `UI`, `Utils`, `Views`, `Wire` are no longer exported
    * use `emit()` instead of `Env.loco.emit()`
    * you have to import `helpers` and use `helpers.params` instead of `this.params` in controllers
    * an initialization with `init` method
    * use `subscribe` instead of `connectWith`

### 3.2

* loco-js-model ver. 0.3

### 3.1

* Static methods in controllers are also called

### 3.0

* Relying on `App` global variable has been removed
* Static `receivedSignal` is supported

### 2.1

* No need to assign to the `App` global variable

### 2.0

* Architectural changes (Webpack, ES6 modules etc.)

### 1.5

* Loco-JS dropped the dependency on jQuery. So it has no external dependencies officially 🎉

### 1.3

* Line

Informations about all releases are published on [Twitter](https://twitter.com/artofcode_co)

# 📜 License

Loco-JS is released under the [MIT License](https://opensource.org/licenses/MIT).

# 👨‍🏭 Author

Zbigniew Humeniuk from [Art of Code](http://artofcode.co)
