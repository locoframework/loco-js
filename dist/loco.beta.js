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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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
exports.Views = exports.Validators = exports.Models = exports.Controllers = undefined;

var _locoJsModel = __webpack_require__(0);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Controllers = {};
var Models = { Base: _locoJsModel.Base };
var Views = { Base: _base2.default };

exports.Controllers = Controllers;
exports.Models = Models;
exports.Validators = _locoJsModel.Validators;
exports.Views = Views;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mix = __webpack_require__(3);

var _mix2 = _interopRequireDefault(_mix);

var _connectivity = __webpack_require__(4);

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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _locoJsModel = __webpack_require__(0);

var _array = __webpack_require__(5);

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
/* 5 */
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

/***/ })
/******/ ]);
});