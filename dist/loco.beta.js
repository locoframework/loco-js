(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("loco-js-model"));
	else if(typeof define === 'function' && define.amd)
		define(["loco-js-model"], factory);
	else if(typeof exports === 'object')
		exports["App"] = factory(require("loco-js-model"));
	else
		root["App"] = factory(root["LocoModel"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Env = {
  loco: null,
  namespaceController: null,
  controller: null,
  action: null,
  scope: null
};

exports.default = Env;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mix;

Mix = function Mix(base) {
  var Mixed, i, method, mixin, name, ref;
  Mixed = function (_base) {
    _inherits(Mixed, _base);

    function Mixed() {
      _classCallCheck(this, Mixed);

      return _possibleConstructorReturn(this, (Mixed.__proto__ || Object.getPrototypeOf(Mixed)).apply(this, arguments));
    }

    return Mixed;
  }(base);
  //earlier mixins override later ones

  for (var _len = arguments.length, mixins = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    mixins[_key - 1] = arguments[_key];
  }

  for (i = mixins.length - 1; i >= 0; i += -1) {
    mixin = mixins[i];
    ref = mixin.prototype;
    for (name in ref) {
      method = ref[name];
      Mixed.prototype[name] = method;
    }
  }
  return Mixed;
};

exports.default = Mix;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _locoJsModel = __webpack_require__(0);

var _array = __webpack_require__(4);

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
          _locoJsModel.IdentityMap.addCollection(identity, {
            to: this
          });
          if (opts.receiver != null) {
            results.push(this.receivers[identity] = opts.receiver);
          } else {
            results.push(void 0);
          }
        } else {
          _locoJsModel.IdentityMap.connect(this, {
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = __webpack_require__(10);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Controllers = { Base: _base2.default };

exports.default = Controllers;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _env = __webpack_require__(1);

var _env2 = _interopRequireDefault(_env);

var _locoJsModel = __webpack_require__(0);

var _object = __webpack_require__(12);

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
      if (_locoJsModel.IdentityMap.imap[identity] == null) {
        return;
      }
      if (_locoJsModel.IdentityMap.imap[identity][id] != null) {
        obj = _locoJsModel.IdentityMap.find(identity, id);
        if (obj["receivedSignal"] != null) {
          obj.receivedSignal(signal, payload);
        }
        this._emitSignalToMembers(id, signal, payload, model, identity);
      }
      if (model["receivedSignal"] != null) {
        model.receivedSignal(signal, payload);
      }
      if (_locoJsModel.IdentityMap.imap[identity]["collection"] == null) {
        return;
      }
      if (_locoJsModel.IdentityMap.imap[identity]["collection"].length === 0) {
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
      if (Object.keys(_locoJsModel.IdentityMap.imap).length === 0 && this.token == null && this.syncTime != null) {
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
      ref = _locoJsModel.IdentityMap.findConnected(identity, id);
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
      ref = _locoJsModel.IdentityMap.imap[identity]["collection"];
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _locoJsModel = __webpack_require__(0);

var Models = { Base: _locoJsModel.Base };

exports.default = Models;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wire = exports.Views = exports.Validators = exports.Models = exports.Loco = exports.I18n = exports.Env = exports.Controllers = undefined;

var _locoJsModel = __webpack_require__(0);

var _base = __webpack_require__(9);

var _base2 = _interopRequireDefault(_base);

var _controllers = __webpack_require__(5);

var _controllers2 = _interopRequireDefault(_controllers);

var _env = __webpack_require__(1);

var _env2 = _interopRequireDefault(_env);

var _loco = __webpack_require__(11);

var _loco2 = _interopRequireDefault(_loco);

var _models = __webpack_require__(7);

var _models2 = _interopRequireDefault(_models);

var _wire = __webpack_require__(6);

var _wire2 = _interopRequireDefault(_wire);

var _en = __webpack_require__(15);

var _en2 = _interopRequireDefault(_en);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var I18n = { en: _en2.default };
var Views = { Base: _base2.default };

exports.Controllers = _controllers2.default;
exports.Env = _env2.default;
exports.I18n = I18n;
exports.Loco = _loco2.default;
exports.Models = _models2.default;
exports.Validators = _locoJsModel.Validators;
exports.Views = Views;
exports.Wire = _wire2.default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mix = __webpack_require__(2);

var _mix2 = _interopRequireDefault(_mix);

var _connectivity = __webpack_require__(3);

var _connectivity2 = _interopRequireDefault(_connectivity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base;

Base = function (_Mix) {
  _inherits(Base, _Mix);

  function Base() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Base);

    var _this = _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).call(this, opts));

    _this.views = {};
    _this.intervals = {};
    _this.receivers = {};
    _this.controller = null;
    _this.delegator = null;
    if (opts.controller != null) {
      _this.setController(opts.controller);
    }
    if (opts.delegator != null) {
      _this.setDelegator(opts.delegator);
    }
    return _this;
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
}((0, _mix2.default)(_connectivity2.default));

exports.default = Base;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mix = __webpack_require__(2);

var _mix2 = _interopRequireDefault(_mix);

var _connectivity = __webpack_require__(3);

var _connectivity2 = _interopRequireDefault(_connectivity);

var _env = __webpack_require__(1);

var _env2 = _interopRequireDefault(_env);

var _array = __webpack_require__(4);

var _array2 = _interopRequireDefault(_array);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base;

Base = function (_Mix) {
  _inherits(Base, _Mix);

  function Base() {
    _classCallCheck(this, Base);

    var _this = _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).call(this));

    _this.views = {};
    _this.receivers = {};
    _this.subController = null;
    _this.superController = null;
    _this.params = _this.__fetchParams();
    return _this;
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
      return App.Env.scope = name;
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
}((0, _mix2.default)(_connectivity2.default));

exports.default = Base;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _locoJsModel = __webpack_require__(0);

var _wire = __webpack_require__(6);

var _wire2 = _interopRequireDefault(_wire);

var _line = __webpack_require__(13);

var _line2 = _interopRequireDefault(_line);

var _env = __webpack_require__(1);

var _env2 = _interopRequireDefault(_env);

var _controllers = __webpack_require__(5);

var _controllers2 = _interopRequireDefault(_controllers);

var _models = __webpack_require__(7);

var _models2 = _interopRequireDefault(_models);

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
    this.locale = null;
    this.turbolinks = (ref = opts.turbolinks) != null ? ref : false;
    this.startWire = ((ref1 = opts.notifications) != null ? ref1.enable : void 0) ? true : false;
    this.postInit = opts.postInit;
    this.setLocale((ref2 = opts.locale) != null ? ref2 : 'en');
    this.setProtocolWithHost(opts.protocolWithHost);
    notificationsParams = (ref3 = opts.notifications) != null ? ref3 : {};
    notificationsParams.protocolWithHost = this.protocolWithHost;
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
      return this.locale;
    }
  }, {
    key: 'setLocale',
    value: function setLocale(locale) {
      return this.locale = locale;
    }
  }, {
    key: 'getProtocolWithHost',
    value: function getProtocolWithHost() {
      return this.protocolWithHost;
    }
  }, {
    key: 'setProtocolWithHost',
    value: function setProtocolWithHost(val) {
      if (val == null) {
        this.protocolWithHost = null;
        return;
      }
      if (val[val.length - 1] === '/') {
        val = val.slice(0, +(val.length - 2) + 1 || 9e9);
      }
      return this.protocolWithHost = val;
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
      if (App.cable == null) {
        return;
      }
      this.line = new _line2.default();
      return this.line.connect();
    }
  }, {
    key: 'flow',
    value: function flow() {
      var action_name, controller_name, namespace_name;
      _locoJsModel.IdentityMap.clear();
      namespace_name = document.getElementsByTagName('body')[0].getAttribute('data-namespace');
      controller_name = document.getElementsByTagName('body')[0].getAttribute('data-controller');
      action_name = document.getElementsByTagName('body')[0].getAttribute('data-action');
      _env2.default.action = action_name;
      if (_controllers2.default[namespace_name] != null) {
        _env2.default.namespaceController = new _controllers2.default[namespace_name]();
        if (_controllers2.default[namespace_name][controller_name] != null) {
          _env2.default.controller = new _controllers2.default[namespace_name][controller_name]();
        }
        if (_env2.default.namespaceController.initialize != null) {
          _env2.default.namespaceController.initialize();
        }
        if (_env2.default.controller != null) {
          _env2.default.namespaceController.setSubController(_env2.default.controller);
          _env2.default.controller.setSuperController(_env2.default.namespaceController);
          if (_env2.default.controller.initialize != null) {
            _env2.default.controller.initialize();
          }
          if (_env2.default.controller[action_name] != null) {
            _env2.default.controller[action_name]();
          }
        }
      } else if (_controllers2.default[controller_name]) {
        _env2.default.controller = new _controllers2.default[controller_name]();
        if (_env2.default.controller.initialize != null) {
          _env2.default.controller.initialize();
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
      for (func in _models2.default) {
        _ = _models2.default[func];
        if (!regExp.exec(func) || func === "Base") {
          continue;
        }
        models.push(func);
        ref = _models2.default[func];
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
          if (_models2.default[parts[0]].getRemoteName() === remoteName) {
            return _models2.default[parts[0]];
          }
        } else if (parts.length === 2) {
          if (_models2.default[parts[0]][parts[1]].getRemoteName() === remoteName) {
            return _models2.default[parts[0]][parts[1]];
          }
        }
      }
    }
  }]);

  return Loco;
}();

exports.default = Loco;

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _channels = __webpack_require__(14);

var _channels2 = _interopRequireDefault(_channels);

var _env = __webpack_require__(1);

var _env2 = _interopRequireDefault(_env);

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

      return _channels2.default.Loco.NotificationCenter = App.cable.subscriptions.create({
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
      var notificationCenter;
      notificationCenter = new App.Services.NotificationCenter();
      return notificationCenter.receivedSignal(data);
    }
  }]);

  return Line;
}();

exports.default = Line;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Channels = {
  Loco: {}
};

exports.default = Channels;

/***/ }),
/* 15 */
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

/***/ })
/******/ ]);
});