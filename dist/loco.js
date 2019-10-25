(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("loco-js-model"));
	else if(typeof define === 'function' && define.amd)
		define(["loco-js-model"], factory);
	else if(typeof exports === 'object')
		exports["App"] = factory(require("loco-js-model"));
	else
		root["App"] = factory(root["LocoModel"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_13__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deps", function() { return Deps; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_loco_js_model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_loco_js_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_loco_js_model__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_loco_js_model__, "Base")) __webpack_require__.d(__webpack_exports__, "Base", function() { return __WEBPACK_IMPORTED_MODULE_0_loco_js_model__["Base"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_loco_js_model__, "Config")) __webpack_require__.d(__webpack_exports__, "Config", function() { return __WEBPACK_IMPORTED_MODULE_0_loco_js_model__["Config"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_loco_js_model__, "I18n")) __webpack_require__.d(__webpack_exports__, "I18n", function() { return __WEBPACK_IMPORTED_MODULE_0_loco_js_model__["I18n"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_loco_js_model__, "IdentityMap")) __webpack_require__.d(__webpack_exports__, "IdentityMap", function() { return __WEBPACK_IMPORTED_MODULE_0_loco_js_model__["IdentityMap"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_loco_js_model__, "Models")) __webpack_require__.d(__webpack_exports__, "Models", function() { return __WEBPACK_IMPORTED_MODULE_0_loco_js_model__["Models"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_loco_js_model__, "Validators")) __webpack_require__.d(__webpack_exports__, "Validators", function() { return __WEBPACK_IMPORTED_MODULE_0_loco_js_model__["Validators"]; });


var Deps = {
  cable: null,
  NotificationCenter: null
};



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var Env = {
  loco: null,
  namespaceController: null,
  controller: null,
  action: null
};

/* harmony default export */ __webpack_exports__["default"] = (Env);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _deps = __webpack_require__(0);

var _array = __webpack_require__(3);

var _array2 = _interopRequireDefault(_array);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Connectivity;

Connectivity = function () {
  function Connectivity() {
    _classCallCheck(this, Connectivity);
  }

  _createClass(Connectivity, [{
    key: 'connectWith',
    value: function connectWith(data) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var i, identity, len, resource, results;
      if (data == null) {
        return null;
      }
      if (data.constructor.name !== "Array") {
        data = [data];
      }
      data = _array2.default.uniq(data);
      results = [];
      for (i = 0, len = data.length; i < len; i++) {
        resource = data[i];
        if (resource.constructor.name === "Function") {
          identity = resource.getIdentity();
          _deps.IdentityMap.addCollection(identity, {
            to: this
          });
          if (opts.receiver != null) {
            results.push(this.receivers[identity] = opts.receiver);
          } else {
            results.push(void 0);
          }
        } else {
          _deps.IdentityMap.connect(this, {
            with: resource
          });
          if (opts.receiver != null) {
            results.push(this.receivers[resource.toKey()] = opts.receiver);
          } else {
            results.push(void 0);
          }
        }
      }
      return results;
    }
  }, {
    key: 'receiverFor',
    value: function receiverFor(data) {
      if (data.constructor.name === "String") {
        if (this.receivers[data] != null) {
          return this.receivers[data];
        } else {
          return null;
        }
      }
      if (this.receivers[data.toKey()] != null) {
        return this.receivers[data.toKey()];
      }
      return null;
    }
  }]);

  return Connectivity;
}();

exports.default = Connectivity;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArrayUtils;

ArrayUtils = function () {
  function ArrayUtils() {
    _classCallCheck(this, ArrayUtils);
  }

  _createClass(ArrayUtils, null, [{
    key: "map",
    value: function map(arr, func) {
      var i, len, newArr, o;
      newArr = [];
      for (i = 0, len = arr.length; i < len; i++) {
        o = arr[i];
        newArr.push(func(o));
      }
      return newArr;
    }
  }, {
    key: "uniq",
    value: function uniq(arr) {
      var i, len, newArr, o;
      newArr = [];
      for (i = 0, len = arr.length; i < len; i++) {
        o = arr[i];
        if (newArr.indexOf(o) === -1) {
          newArr.push(o);
        }
      }
      return newArr;
    }
  }]);

  return ArrayUtils;
}();

exports.default = ArrayUtils;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deps__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__locales_en_coffee__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__locales_en_coffee___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__locales_en_coffee__);



__WEBPACK_IMPORTED_MODULE_0__deps__["I18n"].en = __WEBPACK_IMPORTED_MODULE_1__locales_en_coffee___default.a;

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__deps__["I18n"]);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var Channels = {
  Loco: {}
};

/* harmony default export */ __webpack_exports__["default"] = (Channels);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_base_coffee__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_base_coffee___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__controllers_base_coffee__);


var Controllers = { Base: __WEBPACK_IMPORTED_MODULE_0__controllers_base_coffee___default.a };

/* harmony default export */ __webpack_exports__["default"] = (Controllers);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _channels = __webpack_require__(5);

var _channels2 = _interopRequireDefault(_channels);

var _env = __webpack_require__(1);

var _env2 = _interopRequireDefault(_env);

var _deps = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line;

Line = function () {
  function Line() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Line);

    this.connected = false;
  }

  _createClass(Line, [{
    key: 'connect',
    value: function connect() {
      var _this = this;

      return _channels2.default.Loco.NotificationCenter = _deps.Deps.cable.subscriptions.create({
        channel: "Loco::NotificationCenterChannel"
      }, {
        connected: function connected() {
          var wire;
          console.log('ws connected');
          _this.connected = true;
          wire = _env2.default.loco.getWire();
          if (wire != null) {
            wire.setDelayedDisconnection();
          }
          return _this._sendNotification({
            loco: 'connected'
          });
        },
        disconnected: function disconnected() {
          var wire;
          console.log('ws disconnected');
          _this.connected = false;
          wire = _env2.default.loco.getWire();
          if (wire != null) {
            wire.setUuid(null);
            wire.fetchSyncTime({
              after: 'connect'
            });
          }
          return _this._sendNotification({
            loco: 'disconnected'
          });
        },
        rejected: function rejected() {
          console.log('ws rejected');
          return _this._sendNotification({
            loco: 'rejected'
          });
        },
        received: function received(data) {
          if (data.loco != null) {
            _this._processSystemNotification(data.loco);
            delete data.loco;
          }
          if (Object.keys(data).length === 0) {
            return;
          }
          return _this._sendNotification(data);
        }
      });
    }
  }, {
    key: 'isWireAllowed',
    value: function isWireAllowed() {
      return !this.connected;
    }
  }, {
    key: 'send',
    value: function send(data) {
      return _channels2.default.Loco.NotificationCenter.send(data);
    }
  }, {
    key: '_processSystemNotification',
    value: function _processSystemNotification(data) {
      var wire;
      if (data.connection_check != null) {
        this.send({
          loco: {
            connection_check: true
          }
        });
      }
      wire = _env2.default.loco.getWire();
      if (wire == null) {
        return;
      }
      if (data.sync_time != null) {
        wire.setSyncTime(data.sync_time);
      }
      if (data.uuid != null) {
        console.log('uuid: ' + data.uuid);
        wire.setUuid(data.uuid);
      }
      if (data.notification != null) {
        wire.processNotification(data.notification);
      }
      if (data.xhr_notifications != null) {
        wire.check();
      }
      if (data.start_ajax_polling) {
        console.log("wire connected");
        this.connected = null;
        wire.setUuid(null);
        return wire.fetchSyncTime({
          after: 'connect'
        });
      }
    }
  }, {
    key: '_sendNotification',
    value: function _sendNotification(data) {
      if (_deps.Deps.NotificationCenter['receivedSignal'] != null) {
        return _deps.Deps.NotificationCenter.receivedSignal(data);
      } else {
        return new _deps.Deps.NotificationCenter().receivedSignal(data);
      }
    }
  }]);

  return Line;
}();

exports.default = Line;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _env = __webpack_require__(1);

var _env2 = _interopRequireDefault(_env);

var _deps = __webpack_require__(0);

var _object = __webpack_require__(9);

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wire;

Wire = function () {
  function Wire() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Wire);

    var ref, ref1, ref2, ref3;
    this.syncTime = null;
    this.token = null;
    this.pollingInterval = null;
    this.pollingTime = (ref = opts.pollingTime) != null ? ref : 3000;
    this.log = opts.log != null && opts.log ? true : false;
    this.ssl = opts.ssl;
    this.location = (ref1 = opts.location) != null ? ref1 : 'notification-center';
    this.size = (ref2 = opts.size) != null ? ref2 : 100;
    this.protocolWithHost = opts.protocolWithHost;
    this.allowedDisconnectionTime = (ref3 = opts.allowedDisconnectionTime) != null ? ref3 : 10;
    this.disconnectedSinceTime = null;
    this.uuid = null;
    this.delayedDisconnection = false;
  }

  _createClass(Wire, [{
    key: 'setToken',
    value: function setToken(token) {
      return this.token = token;
    }
  }, {
    key: 'getSyncTime',
    value: function getSyncTime() {
      return this.syncTime;
    }
  }, {
    key: 'setSyncTime',
    value: function setSyncTime(val) {
      return this.syncTime = val;
    }
  }, {
    key: 'resetSyncTime',
    value: function resetSyncTime() {
      return this.syncTime = null;
    }
  }, {
    key: 'getPollingTime',
    value: function getPollingTime() {
      return this.pollingTime;
    }
  }, {
    key: 'setPollingTime',
    value: function setPollingTime(val) {
      this.pollingTime = val;
      this.disconnect();
      return this.connect();
    }
  }, {
    key: 'getPollingInterval',
    value: function getPollingInterval() {
      return this.pollingInterval;
    }
  }, {
    key: 'getSSL',
    value: function getSSL() {
      return this.ssl;
    }
  }, {
    key: 'setSSL',
    value: function setSSL(val) {
      return this.ssl = val;
    }
  }, {
    key: 'getLocation',
    value: function getLocation() {
      return this.location;
    }
  }, {
    key: 'setLocation',
    value: function setLocation(val) {
      return this.location = val;
    }
  }, {
    key: 'getSize',
    value: function getSize() {
      return this.size;
    }
  }, {
    key: 'setSize',
    value: function setSize(val) {
      return this.size = val;
    }
  }, {
    key: 'getAllowedDisconnectionTime',
    value: function getAllowedDisconnectionTime() {
      return this.allowedDisconnectionTime;
    }
  }, {
    key: 'setAllowedDisconnectionTime',
    value: function setAllowedDisconnectionTime(val) {
      return this.allowedDisconnectionTime = val;
    }
  }, {
    key: 'getUuid',
    value: function getUuid() {
      return this.uuid;
    }
  }, {
    key: 'setUuid',
    value: function setUuid(val) {
      return this.uuid = val;
    }
  }, {
    key: 'setDelayedDisconnection',
    value: function setDelayedDisconnection() {
      return this.delayedDisconnection = true;
    }
  }, {
    key: 'connect',
    value: function connect() {
      var _this = this;

      var line;
      line = _env2.default.loco.getLine();
      if (line != null && !line.isWireAllowed()) {
        return;
      }
      return this.pollingInterval = setInterval(function () {
        _this.check();
        if (_this.delayedDisconnection) {
          _this.delayedDisconnection = false;
          return _this.disconnect();
        }
      }, this.pollingTime);
    }
  }, {
    key: 'disconnect',
    value: function disconnect() {
      return window.clearInterval(this.pollingInterval);
    }
  }, {
    key: 'disableNotifications',
    value: function disableNotifications() {
      console.log('Wire#disableNotifications - DEPRECATED');
      return this.disconnect();
    }
  }, {
    key: 'processNotification',
    value: function processNotification(notification) {
      var className, id, identity, model, obj, payload, signal;
      if (this.log) {
        console.log(notification);
      }

      var _notification = _slicedToArray(notification, 4);

      className = _notification[0];
      id = _notification[1];
      signal = _notification[2];
      payload = _notification[3];

      model = _env2.default.loco.getModelForRemoteName(className);
      identity = model.getIdentity();
      if (_deps.IdentityMap.imap[identity] == null) {
        return;
      }
      if (_deps.IdentityMap.imap[identity][id] != null) {
        obj = _deps.IdentityMap.find(identity, id);
        if (obj["receivedSignal"] != null) {
          obj.receivedSignal(signal, payload);
        }
        this._emitSignalToMembers(id, signal, payload, model, identity);
      }
      if (model["receivedSignal"] != null) {
        model.receivedSignal(signal, payload);
      }
      if (_deps.IdentityMap.imap[identity]["collection"] == null) {
        return;
      }
      if (_deps.IdentityMap.imap[identity]["collection"].length === 0) {
        return;
      }
      return this._emitSignalToCollection(signal, payload, identity);
    }
  }, {
    key: 'processSignal',
    value: function processSignal(notification) {
      return this.processNotification(notification);
    }
  }, {
    key: 'check',
    value: function check() {
      var _this2 = this;

      var request;
      if (Object.keys(_deps.IdentityMap.imap).length === 0 && this.token == null && this.syncTime != null) {
        return;
      }
      request = new XMLHttpRequest();
      request.open('GET', this._getURL() + '?' + _object2.default.toURIParams(this._requestParams()));
      request.onload = function (e) {
        var data, i, len, notification, notifications;
        if (e.target.status >= 200 && e.target.status < 400) {
          data = JSON.parse(e.target.response);
          _this2.disconnectedSinceTime = null;
          _this2.syncTime = data[1];
          notifications = data[0];
          if (notifications.length === 0) {
            return;
          }
          for (i = 0, len = notifications.length; i < len; i++) {
            notification = notifications[i];
            _this2.processNotification(notification);
          }
          if (notifications.length === _this2.size) {
            return _this2.check();
          }
        } else if (e.target.status >= 500) {
          return _this2._handleDisconnection();
        }
      };
      request.onerror = function () {
        return _this2._handleDisconnection();
      };
      return request.send();
    }
  }, {
    key: 'fetchSyncTime',
    value: function fetchSyncTime() {
      var _this3 = this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var request;
      request = new XMLHttpRequest();
      request.open('GET', this._getURL() + '/sync-time');
      request.onerror = function () {
        if (opts.after != null) {
          return _this3[opts.after]();
        }
      };
      request.onload = function (e) {
        var data;
        if (e.target.status >= 200 && e.target.status < 400) {
          data = JSON.parse(e.target.response);
          _this3.syncTime = data.sync_time;
          if (opts.after != null) {
            return _this3[opts.after]();
          }
        } else if (e.target.status >= 500) {
          if (opts.after != null) {
            return _this3[opts.after]();
          }
        }
      };
      return request.send();
    }
  }, {
    key: '_emitSignalToMembers',
    value: function _emitSignalToMembers(id, signal, payload, model, identity) {
      var obj = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

      var connObj, i, len, ref, results;
      if (obj == null) {
        obj = new model({
          id: id
        });
      }
      ref = _deps.IdentityMap.findConnected(identity, id);
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        connObj = ref[i];
        if (connObj.receiverFor(obj) != null) {
          results.push(connObj[connObj.receiverFor(obj)](signal, payload));
        } else if (connObj["receivedSignal"] != null) {
          results.push(connObj.receivedSignal(signal, payload));
        } else {
          results.push(void 0);
        }
      }
      return results;
    }
  }, {
    key: '_emitSignalToCollection',
    value: function _emitSignalToCollection(signal, payload, identity) {
      var i, len, obj, ref, results;
      ref = _deps.IdentityMap.imap[identity]["collection"];
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        obj = ref[i];
        if (obj.receiverFor(identity) != null) {
          results.push(obj[obj.receiverFor(identity)](identity + ' ' + signal, payload));
        } else if (obj["receivedSignal"] != null) {
          results.push(obj.receivedSignal(identity + ' ' + signal, payload));
        } else {
          results.push(void 0);
        }
      }
      return results;
    }
  }, {
    key: '_requestParams',
    value: function _requestParams() {
      var params;
      params = {
        synced_at: this.syncTime
      };
      if (this.token != null) {
        params.token = this.token;
      }
      if (this.uuid != null) {
        params.uuid = this.uuid;
      }
      return params;
    }
  }, {
    key: '_getURL',
    value: function _getURL() {
      var _, host, protocol;

      var _window$location$href = window.location.href.split('/');

      var _window$location$href2 = _slicedToArray(_window$location$href, 3);

      protocol = _window$location$href2[0];
      _ = _window$location$href2[1];
      host = _window$location$href2[2];

      if (this.protocolWithHost != null) {
        var _protocolWithHost$spl = this.protocolWithHost.split('//');

        var _protocolWithHost$spl2 = _slicedToArray(_protocolWithHost$spl, 2);

        protocol = _protocolWithHost$spl2[0];
        host = _protocolWithHost$spl2[1];
      }
      if (this.ssl != null) {
        protocol = this.ssl ? 'https:' : "http:";
      }
      return protocol + '//' + host + '/' + this.location;
    }
  }, {
    key: '_handleDisconnection',
    value: function _handleDisconnection() {
      var ctrl, diffInSec, ref;
      if (this.disconnectedSinceTime == null) {
        this.disconnectedSinceTime = new Date();
      }
      diffInSec = (new Date() - this.disconnectedSinceTime) / 1000;
      ctrl = (ref = _env2.default.namespaceController) != null ? ref : _env2.default.controller;
      if (diffInSec > this.allowedDisconnectionTime && ctrl['disconnectedForTooLong'] != null) {
        return ctrl.disconnectedForTooLong(this.disconnectedSinceTime);
      }
    }
  }]);

  return Wire;
}();

exports.default = Wire;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectUtils;

ObjectUtils = function () {
  function ObjectUtils() {
    _classCallCheck(this, ObjectUtils);
  }

  _createClass(ObjectUtils, null, [{
    key: "toURIParams",
    value: function toURIParams(obj) {
      var key, str, val;
      str = "";
      for (key in obj) {
        val = obj[key];
        if (str !== "") {
          str += "&";
        }
        str += key + "=" + encodeURIComponent(val);
      }
      return str;
    }
  }]);

  return ObjectUtils;
}();

exports.default = ObjectUtils;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_array_coffee__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_array_coffee___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils_array_coffee__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_collection_coffee__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_collection_coffee___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils_collection_coffee__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom_coffee__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom_coffee___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils_dom_coffee__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_object_coffee__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_object_coffee___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__utils_object_coffee__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_string_coffee__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_string_coffee___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utils_string_coffee__);






var Utils = {
  Array: __WEBPACK_IMPORTED_MODULE_0__utils_array_coffee___default.a,
  Collection: __WEBPACK_IMPORTED_MODULE_1__utils_collection_coffee___default.a,
  Dom: __WEBPACK_IMPORTED_MODULE_2__utils_dom_coffee___default.a,
  Object: __WEBPACK_IMPORTED_MODULE_3__utils_object_coffee___default.a,
  String: __WEBPACK_IMPORTED_MODULE_4__utils_string_coffee___default.a
};

/* harmony default export */ __webpack_exports__["default"] = (Utils);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Presenters", function() { return Presenters; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__channels__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__i18n__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_line_coffee__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_line_coffee___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__base_line_coffee__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_loco_coffee__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_loco_coffee___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__base_loco_coffee__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mixins__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ui__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__base_wire_coffee__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__base_wire_coffee___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__base_wire_coffee__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__deps__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Channels", function() { return __WEBPACK_IMPORTED_MODULE_0__channels__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Controllers", function() { return __WEBPACK_IMPORTED_MODULE_1__controllers__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Deps", function() { return __WEBPACK_IMPORTED_MODULE_13__deps__["Deps"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Env", function() { return __WEBPACK_IMPORTED_MODULE_2__env__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Helpers", function() { return __WEBPACK_IMPORTED_MODULE_3__helpers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "I18n", function() { return __WEBPACK_IMPORTED_MODULE_4__i18n__["default"]; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return __WEBPACK_IMPORTED_MODULE_5__base_line_coffee___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Loco", function() { return __WEBPACK_IMPORTED_MODULE_6__base_loco_coffee___default.a; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Mixins", function() { return __WEBPACK_IMPORTED_MODULE_7__mixins__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Models", function() { return __WEBPACK_IMPORTED_MODULE_13__deps__["Models"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return __WEBPACK_IMPORTED_MODULE_8__services__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UI", function() { return __WEBPACK_IMPORTED_MODULE_9__ui__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return __WEBPACK_IMPORTED_MODULE_10__utils__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return __WEBPACK_IMPORTED_MODULE_13__deps__["Validators"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Views", function() { return __WEBPACK_IMPORTED_MODULE_11__views__["a"]; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Wire", function() { return __WEBPACK_IMPORTED_MODULE_12__base_wire_coffee___default.a; });















var Presenters = {};



/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _connectivity = __webpack_require__(2);

var _connectivity2 = _interopRequireDefault(_connectivity);

var _deps = __webpack_require__(0);

var _array = __webpack_require__(3);

var _array2 = _interopRequireDefault(_array);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base;

Base = function () {
  function Base() {
    _classCallCheck(this, Base);

    this.views = {};
    this.receivers = {};
    this.subController = null;
    this.superController = null;
    this.params = this.__fetchParams();
  }

  _createClass(Base, [{
    key: 'setView',
    value: function setView(key, view) {
      return this.views[key] = view;
    }
  }, {
    key: 'getView',
    value: function getView(key) {
      return this.views[key];
    }
  }, {
    key: 'getViews',
    value: function getViews() {
      return this.views;
    }
  }, {
    key: 'setSubController',
    value: function setSubController(cntrlr) {
      return this.subController = cntrlr;
    }
  }, {
    key: 'getSubController',
    value: function getSubController() {
      return this.subController;
    }
  }, {
    key: 'setSuperController',
    value: function setSuperController(cntrlr) {
      return this.superController = cntrlr;
    }
  }, {
    key: 'getSuperController',
    value: function getSuperController() {
      return this.superController;
    }
  }, {
    key: 'setResource',
    value: function setResource(name) {
      return this.setScope(name);
    }
  }, {
    key: 'setScope',
    value: function setScope(name) {
      return _deps.Config.scope = name;
    }
  }, {
    key: '__fetchParams',
    value: function __fetchParams() {
      var arr, i, id, key, len, match, params, paramsArray, paramsString, splitUrl, val;
      params = {};
      match = /https?:\/\/.+\/\w+\/(\d+)/.exec(window.location.href);
      id = match != null ? match[1] : null;
      if (id != null) {
        params["id"] = parseInt(id);
      }
      splitUrl = window.location.href.split('?');
      if (splitUrl.length === 1) {
        return params;
      }
      paramsString = splitUrl[splitUrl.length - 1];
      paramsArray = _array2.default.map(paramsString.split('&'), function (s) {
        return s.split('=');
      });
      for (i = 0, len = paramsArray.length; i < len; i++) {
        arr = paramsArray[i];
        key = decodeURIComponent(arr[0]);
        val = decodeURIComponent(arr[1]);
        if (val != null) {
          val = val.replace(/\+/g, " ");
        }
        params[key] = val;
      }
      return params;
    }
  }]);

  return Base;
}();

Object.assign(Base.prototype, _connectivity2.default);

exports.default = Base;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_text_coffee__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_text_coffee___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__helpers_text_coffee__);


var Helpers = {
  Text: __WEBPACK_IMPORTED_MODULE_0__helpers_text_coffee___default.a
};

/* harmony default export */ __webpack_exports__["a"] = (Helpers);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Text;

Text = function () {
  function Text() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Text);
  }

  _createClass(Text, [{
    key: 'simpleFormat',
    value: function simpleFormat(str) {
      str = str.replace(/\r\n?/, "\n");
      str = str.trim();
      if (str.length > 0) {
        str = str.replace(/\n\n+/g, '</p><p>');
        str = str.replace(/\n/g, '<br>');
        str = '<p>' + str + '</p>';
      }
      return str;
    }
  }]);

  return Text;
}();

exports.default = Text;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var en;

en = {
  variants: {},
  models: {},
  attributes: {},
  ui: {
    form: {
      sending: "Sending...",
      success: "Success",
      errors: {
        connection: "Connection Error",
        invalid_data: "Invalid data"
      }
    }
  },
  date: {
    formats: {
      default: "%Y-%m-%d",
      short: "%b %d",
      long: "%B %d, %Y"
    },
    day_names: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    abbr_day_names: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    month_names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    abbr_month_names: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  errors: {
    messages: {
      accepted: "must be accepted",
      blank: "can't be blank",
      confirmation: "doesn't match %{attribute}",
      empty: "can't be empty",
      equal_to: "must be equal to %{count}",
      even: "must be even",
      exclusion: "is reserved",
      greater_than: "must be greater than %{count}",
      greater_than_or_equal_to: "must be greater than or equal to %{count}",
      inclusion: "is not included in the list",
      invalid: "is invalid",
      less_than: "must be less than %{count}",
      less_than_or_equal_to: "must be less than or equal to %{count}",
      not_a_number: "is not a number",
      not_an_integer: "must be an integer",
      odd: "must be odd",
      present: "must be blank",
      too_long: {
        one: "is too long (maximum is 1 character)",
        other: "is too long (maximum is %{count} characters)"
      },
      too_short: {
        one: "is too short (minimum is 1 character)",
        other: "is too short (minimum is %{count} characters)"
      },
      wrong_length: {
        one: "is the wrong length (should be 1 character)",
        other: "is the wrong length (should be %{count} characters)"
      },
      other_than: "must be other than %{count}"
    }
  }
};

exports.default = en;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _deps = __webpack_require__(0);

var _wire = __webpack_require__(8);

var _wire2 = _interopRequireDefault(_wire);

var _line = __webpack_require__(7);

var _line2 = _interopRequireDefault(_line);

var _env = __webpack_require__(1);

var _env2 = _interopRequireDefault(_env);

var _controllers = __webpack_require__(6);

var _controllers2 = _interopRequireDefault(_controllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loco;

Loco = function () {
  function Loco() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Loco);

    var notificationsParams, ref, ref1, ref2, ref3;
    this.wire = null;
    this.line = null;
    this.turbolinks = (ref = opts.turbolinks) != null ? ref : false;
    this.startWire = ((ref1 = opts.notifications) != null ? ref1.enable : void 0) ? true : false;
    this.postInit = opts.postInit;
    this.setLocale((ref2 = opts.locale) != null ? ref2 : 'en');
    this.setProtocolWithHost(opts.protocolWithHost);
    notificationsParams = (ref3 = opts.notifications) != null ? ref3 : {};
    notificationsParams.protocolWithHost = this.getProtocolWithHost();
    this.notificationsParams = notificationsParams;
  }

  _createClass(Loco, [{
    key: 'getWire',
    value: function getWire() {
      return this.wire;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'getLocale',
    value: function getLocale() {
      return _deps.Config.locale;
    }
  }, {
    key: 'setLocale',
    value: function setLocale(locale) {
      return _deps.Config.locale = locale;
    }
  }, {
    key: 'getProtocolWithHost',
    value: function getProtocolWithHost() {
      return _deps.Config.protocolWithHost;
    }
  }, {
    key: 'setProtocolWithHost',
    value: function setProtocolWithHost(val) {
      return _deps.Config.protocolWithHost = val;
    }
  }, {
    key: 'init',
    value: function init() {
      var _this = this;

      var event;
      _env2.default.loco = this;
      this.initWire();
      this.initLine();
      if (this.turbolinks) {
        event = Number(this.turbolinks) >= 5 ? "turbolinks:load" : "page:change";
        return document.addEventListener(event, function () {
          _this.flow();
          if (_this.postInit != null) {
            return _this.postInit();
          }
        });
      } else {
        return this.ready(function () {
          _this.flow();
          if (_this.postInit != null) {
            return _this.postInit();
          }
        });
      }
    }
  }, {
    key: 'ready',
    value: function ready(fn) {
      var cond;
      cond = document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading";
      if (cond) {
        return fn();
      } else {
        return document.addEventListener('DOMContentLoaded', fn);
      }
    }
  }, {
    key: 'initWire',
    value: function initWire() {
      if (!this.startWire) {
        return;
      }
      this.wire = new _wire2.default(this.notificationsParams);
      return this.wire.fetchSyncTime({
        after: 'connect'
      });
    }
  }, {
    key: 'initLine',
    value: function initLine() {
      if (_deps.Deps.cable == null) {
        return;
      }
      this.line = new _line2.default();
      return this.line.connect();
    }
  }, {
    key: 'flow',
    value: function flow() {
      var action_name, controller_name, namespace_name;
      _deps.IdentityMap.clear();
      namespace_name = document.getElementsByTagName('body')[0].getAttribute('data-namespace');
      controller_name = document.getElementsByTagName('body')[0].getAttribute('data-controller');
      action_name = document.getElementsByTagName('body')[0].getAttribute('data-action');
      _env2.default.action = action_name;
      if (_controllers2.default[namespace_name] != null) {
        _env2.default.namespaceController = new _controllers2.default[namespace_name]();
        if (_controllers2.default[namespace_name][controller_name] != null) {
          _env2.default.controller = new _controllers2.default[namespace_name][controller_name]();
        }
        if (_env2.default.namespaceController.constructor.initialize != null) {
          _env2.default.namespaceController.constructor.initialize();
        }
        if (_env2.default.namespaceController.initialize != null) {
          _env2.default.namespaceController.initialize();
        }
        if (_env2.default.controller != null) {
          _env2.default.namespaceController.setSubController(_env2.default.controller);
          _env2.default.controller.setSuperController(_env2.default.namespaceController);
          if (_env2.default.controller.constructor.initialize != null) {
            _env2.default.controller.constructor.initialize();
          }
          if (_env2.default.controller.initialize != null) {
            _env2.default.controller.initialize();
          }
          if (_env2.default.controller.constructor[action_name] != null) {
            _env2.default.controller.constructor[action_name]();
          }
          if (_env2.default.controller[action_name] != null) {
            _env2.default.controller[action_name]();
          }
        }
      } else if (_controllers2.default[controller_name]) {
        _env2.default.controller = new _controllers2.default[controller_name]();
        if (_env2.default.controller.constructor.initialize != null) {
          _env2.default.controller.constructor.initialize();
        }
        if (_env2.default.controller.initialize != null) {
          _env2.default.controller.initialize();
        }
        if (_env2.default.controller.constructor[action_name] != null) {
          _env2.default.controller.constructor[action_name]();
        }
        if (_env2.default.controller[action_name] != null) {
          _env2.default.controller[action_name]();
        }
      }
      if (this.wire != null) {
        this.wire.resetSyncTime();
        return this.wire.fetchSyncTime();
      }
    }
  }, {
    key: 'emit',
    value: function emit(data) {
      return this.line.send(data);
    }
  }, {
    key: 'getModels',
    value: function getModels() {
      var _, func, innerFunc, models, ref, regExp;
      models = [];
      regExp = /^[A-Z]/;
      for (func in _deps.Models) {
        _ = _deps.Models[func];
        if (!regExp.exec(func) || func === "Base") {
          continue;
        }
        models.push(func);
        ref = _deps.Models[func];
        for (innerFunc in ref) {
          _ = ref[innerFunc];
          if (regExp.exec(innerFunc)) {
            models.push(func + '.' + innerFunc);
          }
        }
      }
      return models;
    }
  }, {
    key: 'getModelForRemoteName',
    value: function getModelForRemoteName(remoteName) {
      var i, len, model, parts, ref;
      ref = this.getModels();
      for (i = 0, len = ref.length; i < len; i++) {
        model = ref[i];
        parts = model.split(".");
        if (parts.length === 1) {
          if (_deps.Models[parts[0]].getRemoteName() === remoteName) {
            return _deps.Models[parts[0]];
          }
        } else if (parts.length === 2) {
          if (_deps.Models[parts[0]][parts[1]].getRemoteName() === remoteName) {
            return _deps.Models[parts[0]][parts[1]];
          }
        }
      }
    }
  }]);

  return Loco;
}();

exports.default = Loco;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_mixins_connectivity_coffee__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_mixins_connectivity_coffee___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__base_mixins_connectivity_coffee__);


var Mixins = {
  Connectivity: __WEBPACK_IMPORTED_MODULE_0__base_mixins_connectivity_coffee___default.a
};

/* harmony default export */ __webpack_exports__["a"] = (Mixins);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_date_coffee__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_date_coffee___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_date_coffee__);


var Services = {
  Date: __WEBPACK_IMPORTED_MODULE_0__services_date_coffee___default.a
};

/* harmony default export */ __webpack_exports__["a"] = (Services);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _i18n = __webpack_require__(4);

var _i18n2 = _interopRequireDefault(_i18n);

var _env = __webpack_require__(1);

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Date;

Date = function () {
  function Date(date) {
    _classCallCheck(this, Date);

    this.date = date;
  }

  _createClass(Date, [{
    key: 'toString',
    value: function toString() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

      var skope;
      skope = _i18n2.default[_env2.default.loco.getLocale()].date.formats;
      switch (format) {
        case 'default':
          return this.strftime(skope.default);
        case 'short':
          return this.strftime(skope.short);
        case 'long':
          return this.strftime(skope.long);
        default:
          return console.log('Services.Date#toString: unknown format.');
      }
    }
  }, {
    key: 'strftime',
    value: function strftime(str) {
      var _this = this;

      var skope;
      skope = _i18n2.default[_env2.default.loco.getLocale()];
      str = str.replace('%Y', function (x) {
        return _this.date.getFullYear();
      });
      str = str.replace('%y', function (x) {
        return _this.date.getFullYear().toString().slice(-2);
      });
      str = str.replace('%m', function (x) {
        var month;
        month = _this.date.getMonth() + 1;
        if (month >= 10) {
          return month;
        } else {
          return '0' + month;
        }
      });
      str = str.replace('%b', function (x) {
        return skope.date.abbr_month_names[_this.date.getMonth()];
      });
      str = str.replace('%B', function (x) {
        return skope.date.month_names[_this.date.getMonth()];
      });
      str = str.replace('%d', function (x) {
        if (_this.date.getDate() >= 10) {
          return _this.date.getDate();
        } else {
          return '0' + _this.date.getDate();
        }
      });
      str = str.replace('%H', function (x) {
        if (_this.date.getHours() >= 10) {
          return _this.date.getHours();
        } else {
          return '0' + _this.date.getHours();
        }
      });
      str = str.replace('%M', function (x) {
        if (_this.date.getMinutes() >= 10) {
          return _this.date.getMinutes();
        } else {
          return '0' + _this.date.getMinutes();
        }
      });
      return str = str.replace('%S', function (x) {
        if (_this.date.getSeconds() >= 10) {
          return _this.date.getSeconds();
        } else {
          return '0' + _this.date.getSeconds();
        }
      });
    }
  }]);

  return Date;
}();

exports.default = Date;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_form_coffee__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_form_coffee___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ui_form_coffee__);


var UI = {
  Form: __WEBPACK_IMPORTED_MODULE_0__ui_form_coffee___default.a
};

/* harmony default export */ __webpack_exports__["a"] = (UI);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(10);

var _utils2 = _interopRequireDefault(_utils);

var _i18n = __webpack_require__(4);

var _i18n2 = _interopRequireDefault(_i18n);

var _env = __webpack_require__(1);

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form;

Form = function () {
  function Form() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Form);

    this.formId = opts.id;
    this.obj = opts.for;
    this.initObj = opts.initObj != null && opts.initObj ? true : false;
    this.delegator = opts.delegator;
    this.callbackSuccess = opts.callbackSuccess;
    this.callbackFailure = opts.callbackFailure;
    this.callbackActive = opts.callbackActive;
    this.form = this._findForm();
    this.submit = null;
    this.submitVal = null;
    if (this.form != null) {
      this.submit = this.form.querySelector('[type="submit"]');
    }
    if (this.submit != null) {
      this.submitVal = this.submit.value;
    }
    this.locale = _env2.default.loco.getLocale();
  }

  _createClass(Form, [{
    key: 'getObj',
    value: function getObj() {
      return this.obj;
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.initObj) {
        this._assignAttribs();
        return this._handle();
      } else if (this.form != null) {
        this.fill();
        return this._handle();
      }
    }
  }, {
    key: 'fill',
    value: function fill() {
      var _this = this;

      var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var _, attributes, formEl, name, query, radioEl, remoteName, results, uniqInputTypes;
      if (this.obj == null) {
        return null;
      }
      if (this.obj.constructor.attributes == null) {
        return null;
      }
      attributes = {};
      if (attr != null) {
        attributes[attr] = null;
      } else {
        attributes = this.obj.constructor.attributes;
      }
      results = [];
      for (name in attributes) {
        _ = attributes[name];
        remoteName = this.obj.getAttrRemoteName(name);
        query = this.form.querySelector('[data-attr=' + remoteName + ']');
        if (query === null) {
          continue;
        }
        formEl = query.querySelectorAll("input,textarea,select");
        if (formEl.length === 0) {
          continue;
        }
        if (formEl.length === 1) {
          formEl[0].value = this.obj[name];
          continue;
        }
        uniqInputTypes = _utils2.default.Array.uniq(_utils2.default.Array.map(formEl, function (e) {
          return e.getAttribute('type');
        }));
        if (uniqInputTypes.length === 1 && uniqInputTypes[0] === 'radio') {
          radioEl = _utils2.default.Collection.find(formEl, function (e) {
            return e.value === String(_this.obj[name]);
          });
          if (radioEl != null) {
            radioEl.checked = true;
            continue;
          }
        }
        if (formEl[0].getAttribute("type") !== "hidden" && formEl[formEl.length - 1].getAttribute('type') !== "checkbox") {
          continue;
        }
        results.push(formEl[formEl.length - 1].checked = Boolean(this.obj[name]));
      }
      return results;
    }
  }, {
    key: '_findForm',
    value: function _findForm() {
      var objName;
      if (this.formId != null) {
        return document.getElementById('' + this.formId);
      }
      if (this.obj != null) {
        objName = this.obj.getIdentity().toLowerCase();
        if (this.obj.id != null) {
          return document.getElementById('edit_' + objName + '_' + this.obj.id);
        } else {
          return document.getElementById('new_' + objName);
        }
      }
    }
  }, {
    key: '_handle',
    value: function _handle() {
      var _this2 = this;

      return this.form.addEventListener('submit', function (e) {
        var clearForm;
        e.preventDefault();
        if (!_this2._canBeSubmitted()) {
          return;
        }
        if (_this2.obj == null) {
          _this2._submitForm();
          return;
        }
        _this2._assignAttribs();
        _this2._hideErrors();
        if (_this2.obj.isInvalid()) {
          _this2._renderErrors();
          if (_this2.callbackFailure != null) {
            _this2.delegator[_this2.callbackFailure]();
          }
          return;
        }
        _this2._submittingForm(false);
        clearForm = _this2.obj.id != null ? false : true;
        return _this2.obj.save().then(function (data) {
          _this2._alwaysAfterRequest();
          if (data.success) {
            return _this2._handleSuccess(data, clearForm);
          } else {
            if (_this2.callbackFailure != null) {
              _this2.delegator[_this2.callbackFailure]();
            }
            return _this2._renderErrors();
          }
        }).catch(function (err) {
          return _this2._connectionError();
        });
      });
    }
  }, {
    key: '_canBeSubmitted',
    value: function _canBeSubmitted() {
      if (this.submit == null) {
        return true;
      }
      if (_utils2.default.Dom.hasClass(this.submit, 'active')) {
        return false;
      }
      if (_utils2.default.Dom.hasClass(this.submit, 'success')) {
        return false;
      }
      if (_utils2.default.Dom.hasClass(this.submit, 'failure')) {
        return false;
      }
      return true;
    }
  }, {
    key: '_submitForm',
    value: function _submitForm() {
      var _this3 = this;

      var data, ref, req, url;
      this._submittingForm();
      url = this.form.getAttribute('action') + '.json';
      data = new FormData(this.form);
      req = new XMLHttpRequest();
      req.open('POST', url);
      req.setRequestHeader("X-CSRF-Token", (ref = document.querySelector("meta[name='csrf-token']")) != null ? ref.content : void 0);
      req.onload = function (e) {
        _this3._alwaysAfterRequest();
        if (_this3.submit != null) {
          _this3.submit.blur();
        }
        if (e.target.status >= 200 && e.target.status < 400) {
          data = JSON.parse(e.target.response);
          if (data.success) {
            return _this3._handleSuccess(data, _this3.form.getAttribute("method") === "POST");
          } else {
            return _this3._renderErrors(data.errors);
          }
        } else if (e.target.status >= 500) {
          return _this3._connectionError();
        }
      };
      req.onerror = function () {
        _this3._alwaysAfterRequest();
        if (_this3.submit != null) {
          _this3.submit.blur();
        }
        return _this3._connectionError();
      };
      return req.send(data);
    }
  }, {
    key: '_handleSuccess',
    value: function _handleSuccess(data) {
      var _this4 = this;

      var clearForm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var ref, ref1, val;
      val = (ref = (ref1 = data.flash) != null ? ref1.success : void 0) != null ? ref : _i18n2.default[this.locale].ui.form.success;
      if (this.submit != null) {
        _utils2.default.Dom.addClass(this.submit, 'success');
        this.submit.value = val;
      }
      if (data.access_token != null) {
        _env2.default.loco.getWire().setToken(data.access_token);
      }
      if (this.callbackSuccess != null) {
        if (data.data != null) {
          this.delegator[this.callbackSuccess](data.data);
        } else {
          this.delegator[this.callbackSuccess]();
        }
        return;
      }
      return setTimeout(function () {
        var i, len, node, nodes, results, selector;
        if (_this4.submit != null) {
          _this4.submit.disabled = false;
          _utils2.default.Dom.removeClass(_this4.submit, 'success');
          _this4.submit.value = _this4.submitVal;
        }
        selector = ":not([data-loco-not-clear=true])";
        if (clearForm) {
          nodes = _this4.form.querySelectorAll('input:not([type=\'submit\'])' + selector + ', textarea' + selector);
          results = [];
          for (i = 0, len = nodes.length; i < len; i++) {
            node = nodes[i];
            results.push(node.value = '');
          }
          return results;
        }
      }, 5000);
    }
  }, {
    key: '_renderErrors',
    value: function _renderErrors() {
      var _this5 = this;

      var remoteErrors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var attrib, data, errors, i, len, node, nodes, query, remoteName;
      if (this.obj != null && this.obj.errors == null) {
        return;
      }
      if (this.obj == null && remoteErrors == null) {
        return;
      }
      data = remoteErrors != null ? remoteErrors : this.obj.errors;
      for (attrib in data) {
        errors = data[attrib];
        remoteName = this.obj != null ? this.obj.getAttrRemoteName(attrib) : attrib;
        if (remoteName != null && attrib !== "base") {
          // be aware of invalid elements's nesting e.g. "div" inside of "p"
          query = this.form.querySelector('[data-attr=' + remoteName + ']');
          if (query === null) {
            continue;
          }
          nodes = query.querySelectorAll('.errors[data-for=' + remoteName + ']');
          if (nodes.length === 0) {
            continue;
          }
          for (i = 0, len = nodes.length; i < len; i++) {
            node = nodes[i];
            node.textContent = errors[0];
          }
          continue;
        }
        if (attrib === "base" && errors.length > 0) {
          nodes = document.querySelectorAll(".errors[data-for='base']");
          if (nodes.length === 1) {
            nodes[0].textContent = errors[0];
          } else if (this.submit != null) {
            this.submit.value = errors[0];
          }
        }
      }
      if (this.submit != null) {
        if (this.submit.value === this.submitVal || this.submit.value === _i18n2.default[this.locale].ui.form.sending) {
          this.submit.value = _i18n2.default[this.locale].ui.form.errors.invalid_data;
        }
        _utils2.default.Dom.addClass(this.submit, 'failure');
      }
      this._showErrors();
      return setTimeout(function () {
        var j, len1, ref, results;
        if (_this5.submit != null) {
          _this5.submit.disabled = false;
          _utils2.default.Dom.removeClass(_this5.submit, 'failure');
          _this5.submit.value = _this5.submitVal;
        }
        ref = _this5.form.querySelectorAll('input.invalid, textarea.invalid, select.invalid');
        results = [];
        for (j = 0, len1 = ref.length; j < len1; j++) {
          node = ref[j];
          results.push(_utils2.default.Dom.removeClass(node, 'invalid'));
        }
        return results;
      }, 1000);
    }
  }, {
    key: '_assignAttribs',
    value: function _assignAttribs() {
      var _, formEl, name, query, radioEl, ref, remoteName, results, uniqInputTypes;
      if (this.obj.constructor.attributes == null) {
        return null;
      }
      ref = this.obj.constructor.attributes;
      results = [];
      for (name in ref) {
        _ = ref[name];
        remoteName = this.obj.getAttrRemoteName(name);
        query = this.form.querySelector('[data-attr=' + remoteName + ']');
        if (query === null) {
          continue;
        }
        formEl = query.querySelectorAll("input,textarea,select");
        if (formEl.length === 0) {
          continue;
        }
        if (formEl.length === 1) {
          this.obj.assignAttr(name, formEl[0].value);
          continue;
        }
        uniqInputTypes = _utils2.default.Array.uniq(_utils2.default.Array.map(formEl, function (e) {
          return e.getAttribute('type');
        }));
        if (uniqInputTypes.length === 1 && uniqInputTypes[0] === 'radio') {
          radioEl = _utils2.default.Collection.find(formEl, function (e) {
            return e.checked === true;
          });
          if (radioEl != null) {
            this.obj.assignAttr(name, radioEl.value);
            continue;
          }
        }
        if (formEl[0].getAttribute("type") !== "hidden" && formEl[formEl.length - 1].getAttribute('type') !== "checkbox") {
          continue;
        }
        if (formEl[formEl.length - 1].checked === true) {
          results.push(this.obj.assignAttr(name, formEl[formEl.length - 1].value));
        } else {
          results.push(this.obj.assignAttr(name, formEl[0].value));
        }
      }
      return results;
    }
  }, {
    key: '_hideErrors',
    value: function _hideErrors() {
      var e, i, len, ref, results;
      ref = this.form.querySelectorAll('.errors');
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        e = ref[i];
        if (e.textContent.trim().length > 0) {
          e.textContent = '';
          results.push(e.style.display = 'none');
        } else {
          results.push(void 0);
        }
      }
      return results;
    }
  }, {
    key: '_showErrors',
    value: function _showErrors() {
      var e, i, len, ref, results;
      ref = this.form.querySelectorAll('.errors');
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        e = ref[i];
        if (e.textContent.trim().length > 0) {
          results.push(e.style.display = 'block');
        } else {
          results.push(void 0);
        }
      }
      return results;
    }
  }, {
    key: '_submittingForm',
    value: function _submittingForm() {
      var hideErrors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this.submit != null) {
        _utils2.default.Dom.removeClass(this.submit, 'success');
        _utils2.default.Dom.removeClass(this.submit, 'failure');
        _utils2.default.Dom.addClass(this.submit, 'active');
        this.submit.value = _i18n2.default[this.locale].ui.form.sending;
      }
      if (this.callbackActive != null) {
        this.delegator[this.callbackActive]();
      }
      if (hideErrors) {
        return this._hideErrors();
      }
    }
  }, {
    key: '_connectionError',
    value: function _connectionError() {
      var _this6 = this;

      if (this.submit == null) {
        return;
      }
      _utils2.default.Dom.removeClass(this.submit, 'active');
      _utils2.default.Dom.addClass(this.submit, 'failure');
      this.submit.value = _i18n2.default[this.locale].ui.form.errors.connection;
      return setTimeout(function () {
        _this6.submit.disabled = false;
        _utils2.default.Dom.removeClass(_this6.submit, 'failure');
        return _this6.submit.value = _this6.submitVal;
      }, 3000);
    }
  }, {
    key: '_alwaysAfterRequest',
    value: function _alwaysAfterRequest() {
      if (this.submit == null) {
        return;
      }
      return _utils2.default.Dom.removeClass(this.submit, 'active');
    }
  }]);

  return Form;
}();

exports.default = Form;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CollectionUtils;

CollectionUtils = function () {
  function CollectionUtils() {
    _classCallCheck(this, CollectionUtils);
  }

  _createClass(CollectionUtils, null, [{
    key: "find",
    value: function find(collection, func) {
      var i, len, o;
      for (i = 0, len = collection.length; i < len; i++) {
        o = collection[i];
        if (func(o) === true) {
          return o;
        }
      }
    }
  }]);

  return CollectionUtils;
}();

exports.default = CollectionUtils;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DomUtils;

DomUtils = function () {
  function DomUtils() {
    _classCallCheck(this, DomUtils);
  }

  _createClass(DomUtils, null, [{
    key: 'hasClass',
    value: function hasClass(el, className) {
      if (el.classList) {
        return el.classList.contains(className);
      } else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
      }
    }
  }, {
    key: 'addClass',
    value: function addClass(el, className) {
      if (el.classList) {
        return el.classList.add(className);
      } else {
        return el.className += ' ' + className;
      }
    }
  }, {
    key: 'removeClass',
    value: function removeClass(el, className) {
      if (el.classList) {
        return el.classList.remove(className);
      } else {
        return el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    }
  }]);

  return DomUtils;
}();

exports.default = DomUtils;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringUtils;

StringUtils = function () {
  function StringUtils() {
    _classCallCheck(this, StringUtils);
  }

  _createClass(StringUtils, null, [{
    key: "last",
    value: function last(s) {
      return s[s.length - 1];
    }
  }]);

  return StringUtils;
}();

exports.default = StringUtils;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_base_coffee__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_base_coffee___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_base_coffee__);


var Views = {
  Base: __WEBPACK_IMPORTED_MODULE_0__views_base_coffee___default.a
};

/* harmony default export */ __webpack_exports__["a"] = (Views);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _connectivity = __webpack_require__(2);

var _connectivity2 = _interopRequireDefault(_connectivity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base;

Base = function () {
  function Base() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Base);

    this.views = {};
    this.intervals = {};
    this.receivers = {};
    this.controller = null;
    this.delegator = null;
    if (opts.controller != null) {
      this.setController(opts.controller);
    }
    if (opts.delegator != null) {
      this.setDelegator(opts.delegator);
    }
  }

  _createClass(Base, [{
    key: 'setController',
    value: function setController(cntr) {
      return this.controller = cntr;
    }
  }, {
    key: 'getController',
    value: function getController() {
      return this.controller;
    }
  }, {
    key: 'setView',
    value: function setView(key, view) {
      return this.views[key] = view;
    }
  }, {
    key: 'getView',
    value: function getView(key) {
      return this.views[key];
    }
  }, {
    key: 'getViews',
    value: function getViews() {
      return this.views;
    }
  }, {
    key: 'setDelegator',
    value: function setDelegator(delegator) {
      return this.delegator = delegator;
    }
  }, {
    key: 'getDelegator',
    value: function getDelegator(delegator) {
      return this.delegator;
    }
  }]);

  return Base;
}();

Object.assign(Base.prototype, _connectivity2.default);

exports.default = Base;

/***/ })
/******/ ]);
});