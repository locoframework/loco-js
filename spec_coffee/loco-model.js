var LocoModel =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _validators = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base;

exports.Base = Base = function () {
  var Base = function () {
    _createClass(Base, null, [{
      key: 'instance',
      value: function instance(obj, attr, opts) {
        var sharedInstance, validatorName;
        validatorName = this.identity;
        if (this.sharedInstances[validatorName] == null) {
          this.sharedInstances[validatorName] = new _validators.Validators[validatorName]();
        }
        sharedInstance = this.sharedInstances[validatorName];
        sharedInstance.assignAttribs(obj, attr, opts);
        return sharedInstance;
      }
    }]);

    function Base() {
      _classCallCheck(this, Base);

      this.obj = null;
      this.attr = null;
      this.val = null;
      this.opts = null;
    }

    _createClass(Base, [{
      key: 'assignAttribs',
      value: function assignAttribs(obj, attr, opts) {
        this.obj = obj;
        this.attr = attr;
        this.val = this.obj[this.attr];
        return this.opts = opts;
      }
    }]);

    return Base;
  }();

  ;

  Base.sharedInstances = {};

  return Base;
}();

exports.Base = Base;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LocalEnv = {
  loco: {
    getLocale: function getLocale() {
      return 'en';
    },
    protocolWithHost: function protocolWithHost() {
      return null;
    }
  },
  scope: null
};

var Env = function Env() {
  if (typeof window === 'undefined') {
    return LocalEnv;
  }
  return window.App === undefined ? LocalEnv : window.App.Env;
};

exports.Env = Env;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I18n = undefined;

var _en = __webpack_require__(9);

var I18n = {
  en: _en.en
};

exports.I18n = I18n;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Validators = undefined;

var _absence = __webpack_require__(8);

var _confirmation = __webpack_require__(10);

var _exclusion = __webpack_require__(11);

var _format = __webpack_require__(12);

var _inclusion = __webpack_require__(13);

var _length = __webpack_require__(4);

var _numericality = __webpack_require__(14);

var _presence = __webpack_require__(15);

var _size = __webpack_require__(16);

var Validators = {
  Absence: _absence.Absence,
  Confirmation: _confirmation.Confirmation,
  Exclusion: _exclusion.Exclusion,
  Format: _format.Format,
  Inclusion: _inclusion.Inclusion,
  Length: _length.Length,
  Numericality: _numericality.Numericality,
  Presence: _presence.Presence,
  Size: _size.Size
};

exports.Validators = Validators;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Length = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _i18n = __webpack_require__(2);

var _env = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Length;

exports.Length = Length = function () {
  var Length = function (_Base) {
    _inherits(Length, _Base);

    function Length() {
      _classCallCheck(this, Length);

      return _possibleConstructorReturn(this, (Length.__proto__ || Object.getPrototypeOf(Length)).call(this));
    }

    _createClass(Length, [{
      key: 'validate',
      value: function validate() {
        var message;
        if (this.val == null) {
          return;
        }
        message = this._range()[0] != null && this._range()[1] != null && this._range()[0] === this._range()[1] && this.val.length !== this._range()[0] ? this._selectErrorMessage('wrong_length', this._range()[0]) : this._range()[0] != null && this.val.length < this._range()[0] ? this._selectErrorMessage('too_short', this._range()[0]) : this._range()[1] != null && this.val.length > this._range()[1] ? this._selectErrorMessage('too_long', this._range()[1]) : null;
        if (message === null) {
          return;
        }
        return this.obj.addErrorMessage(message, {
          for: this.attr
        });
      }
    }, {
      key: '_range',
      value: function _range() {
        var from, to;
        from = this.opts.minimum || this.opts.is || this.opts.within != null && this.opts.within[0] || null;
        to = this.opts.maximum || this.opts.is || this.opts.within != null && this.opts.within[1] || null;
        return [from, to];
      }
    }, {
      key: '_selectErrorMessage',
      value: function _selectErrorMessage(msg, val) {
        var i, len, message, ref, variant;
        if (val === 1) {
          return _i18n.I18n[(0, _env.Env)().loco.getLocale()].errors.messages[msg].one;
        }
        message = null;
        ref = ['few', 'many'];
        for (i = 0, len = ref.length; i < len; i++) {
          variant = ref[i];
          if (this._checkVariant(variant, val)) {
            message = _i18n.I18n[(0, _env.Env)().loco.getLocale()].errors.messages[msg][variant];
            break;
          }
        }
        if (message == null) {
          message = _i18n.I18n[(0, _env.Env)().loco.getLocale()].errors.messages[msg].other;
        }
        if (this.opts.message != null) {
          message = this.opts.message;
        }
        if (/%{count}/.exec(message)) {
          message = message.replace('%{count}', val);
        }
        return message;
      }
    }, {
      key: '_checkVariant',
      value: function _checkVariant(variant, val) {
        if (_i18n.I18n[(0, _env.Env)().loco.getLocale()].variants[variant] == null) {
          return;
        }
        return _i18n.I18n[(0, _env.Env)().loco.getLocale()].variants[variant](val);
      }
    }]);

    return Length;
  }(_base.Base);

  ;

  Length.identity = "Length";

  return Length;
}();

exports.Length = Length;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IdentityMap;

exports.IdentityMap = IdentityMap = function () {
  var IdentityMap = function () {
    function IdentityMap() {
      _classCallCheck(this, IdentityMap);
    }

    _createClass(IdentityMap, null, [{
      key: "clear",
      value: function clear() {
        return this.imap = {};
      }
    }, {
      key: "add",
      value: function add(obj) {
        var identity;
        identity = obj.getIdentity();
        if (this.imap[identity] == null) {
          this.imap[identity] = {};
        }
        if (this.imap[identity][obj.id] == null) {
          this.imap[identity][obj.id] = [];
        }
        return this.imap[identity][obj.id][0] = obj;
      }
    }, {
      key: "connect",
      value: function connect(obj) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var model;
        model = opts.with;
        this.add(model);
        return this.imap[model.getIdentity()][model.id].push(obj);
      }
    }, {
      key: "addCollection",
      value: function addCollection(identity) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (this.imap[identity] == null) {
          this.imap[identity] = {};
        }
        if (this.imap[identity]["collection"] == null) {
          this.imap[identity]["collection"] = [];
        }
        if (this.imap[identity]["collection"].indexOf(opts.to) !== -1) {
          return;
        }
        return this.imap[identity]["collection"].push(opts.to);
      }
    }, {
      key: "all",
      value: function all(identity) {
        var arr, id, objs, ref;
        if (this.imap[identity] == null) {
          return null;
        }
        arr = [];
        ref = this.imap[identity];
        for (id in ref) {
          objs = ref[id];
          if (id === "collection") {
            continue;
          }
          arr.push(objs[0]);
        }
        return arr;
      }
    }, {
      key: "find",
      value: function find(klass, id) {
        if (this.imap[klass] && this.imap[klass][id]) {
          return this.imap[klass][id][0];
        } else {
          return null;
        }
      }
    }, {
      key: "findConnected",
      value: function findConnected(klass, id) {
        var arr;
        if (this.imap[klass] && this.imap[klass][id] && this.imap[klass][id].length > 1) {
          arr = this.imap[klass][id];
          return arr.slice(1, +(arr.length - 1) + 1 || 9e9);
        } else {
          return [];
        }
      }
    }]);

    return IdentityMap;
  }();

  ;

  // Ex.
  // @imap = {
  //   Post: {
  //     1: [
  //       #<Post id:1>
  //     ],
  //     10: [
  //       #<Post id:10>
  //     ],
  //     collection: [
  //       #<Posts>
  //     ]
  //   }
  // }
  IdentityMap.imap = {};

  return IdentityMap;
}();

exports.IdentityMap = IdentityMap;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Validators = exports.IdentityMap = exports.Base = undefined;

var _base = __webpack_require__(7);

var _identity_map = __webpack_require__(5);

var _base2 = __webpack_require__(0);

var _validators = __webpack_require__(3);

_validators.Validators.Base = _base2.Base;

exports.Base = _base.Base;
exports.IdentityMap = _identity_map.IdentityMap;
exports.Validators = _validators.Validators;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _validators = __webpack_require__(3);

var _env = __webpack_require__(1);

var _utils = __webpack_require__(17);

var _identity_map = __webpack_require__(5);

var _models = __webpack_require__(19);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base;

exports.Base = Base = function () {
  // Ex.
  // class App.Models.Post extends App.Models.Base
  //   @identity = "Post"  # required

  //   @resources =
  //     url: "/posts"  # optional
  //     paginate: {per: 100, param: "page"}  # param is optional

  //   @attributes =
  //     validatedAt:
  //       type: "Date"
  //       remoteName: "updated_at"
  //       validations:
  //         presence: true
  function Base() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Base);

    this.id = null;
    this.errors = null;
    this.resource = data.resource;
    if (this.constructor.attributes != null) {
      this.__initAttributes();
    }
    if (data != null) {
      this.__assignAttributes(data);
    }
  }

  _createClass(Base, [{
    key: 'setResource',
    value: function setResource(name) {
      return this.resource = name;
    }
  }, {
    key: 'getIdentity',
    value: function getIdentity() {
      return this.constructor.getIdentity();
    }
  }, {
    key: 'getAttrRemoteName',
    value: function getAttrRemoteName(attr) {
      if (this.constructor.attributes == null) {
        return null;
      }
      if (this.constructor.attributes[attr] == null) {
        return null;
      }
      return this.constructor.attributes[attr].remoteName || attr;
    }
  }, {
    key: 'getAttrName',
    value: function getAttrName(remoteName) {
      var config, name, ref;
      if (this.constructor.attributes == null) {
        return remoteName;
      }
      if (this.constructor.attributes[remoteName] != null) {
        return remoteName;
      }
      ref = this.constructor.attributes;
      for (name in ref) {
        config = ref[name];
        if (config.remoteName === remoteName) {
          return name;
        }
      }
      return remoteName;
    }
  }, {
    key: 'getAttrType',
    value: function getAttrType(attrName) {
      if (this.constructor.attributes == null) {
        return null;
      }
      if (this.constructor.attributes[attrName] == null) {
        return null;
      }
      return this.constructor.attributes[attrName].type;
    }
  }, {
    key: 'assignAttr',
    value: function assignAttr(attrName, val) {
      var attrType;
      attrType = this.getAttrType(attrName);
      if (val == null) {
        this[attrName] = null;
        return;
      }
      switch (attrType) {
        case "Date":
          val = new Date(Date.parse(val));
          break;
        case "Integer":
        case "Int":
          val = parseInt(val);
          break;
        case "Float":
          val = parseFloat(val);
          break;
        case "Boolean":
        case "Bool":
          val = typeof val === 'boolean' ? val : Boolean(parseInt(val));
          break;
        case "Number":
          val = Number(val);
          break;
        case "String":
          val = String(val);
      }
      return this[attrName] = val;
    }
  }, {
    key: 'attributes',
    value: function attributes() {
      var _, attribs, name, ref;
      attribs = {
        id: this.id
      };
      if (this.constructor.attributes == null) {
        return attribs;
      }
      ref = this.constructor.attributes;
      for (name in ref) {
        _ = ref[name];
        attribs[name] = this[name];
      }
      return attribs;
    }
  }, {
    key: 'isValid',
    value: function isValid() {
      var config, j, len, meth, name, pvs, ref, ref1, ref2, validationName, validationSettings, validator;
      if (this.constructor.attributes == null) {
        return true;
      }
      this.errors = null;
      ref = this.constructor.attributes;
      for (name in ref) {
        config = ref[name];
        if (config.validations == null) {
          continue;
        }
        ref1 = config.validations;
        for (validationName in ref1) {
          validationSettings = ref1[validationName];
          if (this.id != null && validationSettings.on === "create") {
            continue;
          }
          if (this.id == null && validationSettings.on === "update") {
            continue;
          }
          if (validationSettings.if != null && !validationSettings.if(this)) {
            continue;
          }
          validator = validationName.charAt(0).toUpperCase() + validationName.slice(1);
          if (_validators.Validators[validator] == null) {
            console.log('Warning! "' + validator + '" validator is not implemented!');
            continue;
          }
          pvs = this.__processedValidationSettings(validationSettings);
          _validators.Validators[validator].instance(this, name, pvs).validate();
        }
      }
      if (this.constructor.validate != null) {
        ref2 = this.constructor.validate;
        for (j = 0, len = ref2.length; j < len; j++) {
          meth = ref2[j];
          this[meth]();
        }
      }
      if (this.errors != null) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: 'isInvalid',
    value: function isInvalid() {
      return !this.isValid();
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var name, ref, val;
      ref = this.attributes();
      for (name in ref) {
        val = ref[name];
        if (this[name] !== null) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'addErrorMessage',
    value: function addErrorMessage(message) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.errors == null) {
        this.errors = {};
      }
      if (this.errors[opts.for] == null) {
        this.errors[opts.for] = [];
      }
      return this.errors[opts.for].push(message);
    }
  }, {
    key: 'save',
    value: function save() {
      var _this = this;

      var httpMeth, ref, req;
      httpMeth = this.id != null ? "PUT" : "POST";
      req = new XMLHttpRequest();
      req.open(httpMeth, this.__getResourceUrl());
      req.setRequestHeader("Accept", "application/json");
      req.setRequestHeader("Content-Type", "application/json");
      req.setRequestHeader("X-CSRF-Token", (ref = document.querySelector("meta[name='csrf-token']")) != null ? ref.content : void 0);
      req.send(JSON.stringify(this.serialize()));
      return new Promise(function (resolve, reject) {
        req.onerror = function (e) {
          return reject(e);
        };
        return req.onload = function (e) {
          var data;
          data = JSON.parse(e.target.response);
          if (data.success) {
            resolve(data);
            return;
          }
          if (data.errors != null) {
            _this.__assignRemoteErrorMessages(data.errors);
          }
          return resolve(data);
        };
      });
    }
  }, {
    key: 'updateAttribute',
    value: function updateAttribute(attr) {
      var _this2 = this;

      var ref, req;
      req = new XMLHttpRequest();
      req.open('PUT', this.__getResourceUrl());
      req.setRequestHeader("Accept", "application/json");
      req.setRequestHeader("Content-Type", "application/json");
      req.setRequestHeader("X-CSRF-Token", (ref = document.querySelector("meta[name='csrf-token']")) != null ? ref.content : void 0);
      req.send(JSON.stringify(this.serialize(attr)));
      return new Promise(function (resolve, reject) {
        req.onerror = function (e) {
          return reject(e);
        };
        return req.onload = function (e) {
          var data;
          if (e.target.status >= 200 && e.target.status < 400) {
            data = JSON.parse(e.target.response);
            if (data.success) {
              resolve(data);
              return;
            }
            if (data.errors != null) {
              _this2.__assignRemoteErrorMessages(data.errors);
            }
            return resolve(data);
          } else if (e.target.status >= 500) {
            return reject(e);
          }
        };
      });
    }
  }, {
    key: 'serialize',
    value: function serialize() {
      var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var _, attribs, hash, mainKey, remoteName;
      if (this.constructor.attributes == null) {
        return {};
      }
      hash = {};
      mainKey = this.constructor.getRemoteName().toLowerCase();
      hash[mainKey] = {};
      attribs = {};
      if (attr != null) {
        attribs[attr] = null;
      } else {
        attribs = this.constructor.attributes;
      }
      for (attr in attribs) {
        _ = attribs[attr];
        remoteName = this.getAttrRemoteName(attr);
        hash[mainKey][remoteName] = this[attr];
      }
      return hash;
    }
  }, {
    key: 'reload',
    value: function reload() {
      var findParams, j, len, param, ref;
      findParams = {
        id: this.id
      };
      ref = this.constructor.getResourcesUrlParams();
      for (j = 0, len = ref.length; j < len; j++) {
        param = ref[j];
        findParams[param] = this[param];
      }
      return this.constructor.find(findParams);
    }
  }, {
    key: 'changes',
    value: function changes() {
      var currentObj, name, ref, result, val;
      result = {};
      currentObj = _identity_map.IdentityMap.find(this.getIdentity(), this.id);
      ref = this.attributes();
      for (name in ref) {
        val = ref[name];
        if (val !== currentObj[name]) {
          if (val != null && val.constructor === Date && currentObj[name] - val === 0) {
            continue;
          }
          if (val !== currentObj[name]) {
            result[name] = {
              is: currentObj[name],
              was: val
            };
          }
        }
      }
      return result;
    }
  }, {
    key: 'applyChanges',
    value: function applyChanges() {
      var name, ref, results, vals;
      ref = this.changes();
      results = [];
      for (name in ref) {
        vals = ref[name];
        results.push(this[name] = vals.is);
      }
      return results;
    }
  }, {
    key: 'toKey',
    value: function toKey() {
      return this.getIdentity().toLowerCase() + '_' + this.id;
    }
  }, {
    key: 'get',
    value: function get(action) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.__send("GET", action, data);
    }
  }, {
    key: 'post',
    value: function post(action) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.__send("POST", action, data);
    }
  }, {
    key: 'put',
    value: function put(action) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.__send("PUT", action, data);
    }
  }, {
    key: 'patch',
    value: function patch(action) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.__send("PATCH", action, data);
    }
  }, {
    key: 'delete',
    value: function _delete(action) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.__send("DELETE", action, data);
    }
  }, {
    key: '__send',
    value: function __send(method, action, data) {
      var ref, req, url;
      url = this.__getResourceUrl();
      if (action != null) {
        url = url + '/' + action;
      }
      req = new XMLHttpRequest();
      req.open(method, url);
      req.setRequestHeader("Accept", "application/json");
      req.setRequestHeader("Content-Type", "application/json");
      req.setRequestHeader("X-CSRF-Token", (ref = document.querySelector("meta[name='csrf-token']")) != null ? ref.content : void 0);
      req.send(JSON.stringify(data));
      return new Promise(function (resolve, reject) {
        req.onerror = function (e) {
          return reject(e);
        };
        return req.onload = function (e) {
          if (e.target.status >= 200 && e.target.status < 400) {
            data = JSON.parse(e.target.response);
            return resolve(data);
          } else if (e.target.status >= 500) {
            return reject(e);
          }
        };
      });
    }
  }, {
    key: '__assignAttributes',
    value: function __assignAttributes(data) {
      var attrName, key, results, val;
      results = [];
      for (key in data) {
        val = data[key];
        attrName = this.getAttrName(key);
        results.push(this.assignAttr(attrName, val));
      }
      return results;
    }
  }, {
    key: '__initAttributes',
    value: function __initAttributes() {
      var config, name, ref, results;
      ref = this.constructor.attributes;
      results = [];
      for (name in ref) {
        config = ref[name];
        results.push(this[name] = null);
      }
      return results;
    }
  }, {
    key: '__assignRemoteErrorMessages',
    value: function __assignRemoteErrorMessages(remoteErrors) {
      var attr, error, errors, remoteName, results;
      results = [];
      for (remoteName in remoteErrors) {
        errors = remoteErrors[remoteName];
        attr = this.getAttrName(remoteName);
        results.push(function () {
          var j, len, results1;
          results1 = [];
          for (j = 0, len = errors.length; j < len; j++) {
            error = errors[j];
            results1.push(this.addErrorMessage(error, {
              for: attr
            }));
          }
          return results1;
        }.call(this));
      }
      return results;
    }
  }, {
    key: '__getResourceUrl',
    value: function __getResourceUrl() {
      var url;
      url = this.constructor.__getResourcesUrl({
        resource: this.resource,
        obj: this
      });
      if (this.id == null) {
        return url;
      }
      return url + '/' + this.id;
    }
  }, {
    key: '__processedValidationSettings',
    value: function __processedValidationSettings(validationSettings) {
      var confName, confVal, res;
      res = {};
      for (confName in validationSettings) {
        confVal = validationSettings[confName];
        if (typeof confVal === 'function') {
          res[confName] = confVal(this);
        } else {
          res[confName] = confVal;
        }
      }
      return res;
    }
  }], [{
    key: 'all',
    value: function all() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.get("all", opts);
    }
  }, {
    key: 'find',
    value: function find(idOrObj) {
      var _this3 = this;

      var id, req, urlParams;
      urlParams = {};
      if ((typeof idOrObj === 'undefined' ? 'undefined' : _typeof(idOrObj)) === "object") {
        urlParams = idOrObj;
        id = idOrObj.id;
        delete urlParams.id;
      } else {
        id = idOrObj;
      }
      req = new XMLHttpRequest();
      req.open('GET', this.__getResourcesUrl(urlParams) + '/' + id);
      req.setRequestHeader("Accept", "application/json");
      req.setRequestHeader("Content-Type", "application/json");
      req.send(JSON.stringify(urlParams));
      return new Promise(function (resolve, reject) {
        req.onerror = function (e) {
          return reject(e);
        };
        return req.onload = function (e) {
          var obj, record;
          record = JSON.parse(e.target.response);
          obj = _this3.__initSubclass(record);
          _identity_map.IdentityMap.add(obj);
          return resolve(obj);
        };
      });
    }
  }, {
    key: 'get',
    value: function get(action) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.__send("GET", action, opts);
    }
  }, {
    key: 'post',
    value: function post(action) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.__send("POST", action, opts);
    }
  }, {
    key: 'put',
    value: function put(action) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.__send("PUT", action, opts);
    }
  }, {
    key: 'delete',
    value: function _delete(action) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.__send("DELETE", action, opts);
    }
  }, {
    key: 'getIdentity',
    value: function getIdentity() {
      if (this.identity != null) {
        return this.identity;
      } else {
        throw "Specify Model's @identity!";
      }
    }
  }, {
    key: 'getRemoteName',
    value: function getRemoteName() {
      if (this.remoteName != null) {
        return this.remoteName;
      } else {
        return this.getIdentity();
      }
    }
  }, {
    key: 'getAttribRemoteName',
    value: function getAttribRemoteName(attrib) {
      if (this.attributes == null) {
        return null;
      }
      if (this.attributes[attrib] == null) {
        return null;
      }
      if (this.attributes[attrib].remoteName == null) {
        return attrib;
      }
      return this.attributes[attrib].remoteName;
    }
  }, {
    key: 'getResourcesUrlParams',
    value: function getResourcesUrlParams() {
      var match, params, regexp, url;
      url = this.__getResourcesUrl();
      regexp = /:(\w+)\/?/;
      params = [];
      while (match = regexp.exec(url)) {
        params.push(match[1]);
        url = url.replace(match[0], match[1]);
      }
      return params;
    }
  }, {
    key: '__getResourcesUrl',
    value: function __getResourcesUrl() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var match, resourcesUrl;
      resourcesUrl = this.resources == null ? '/' + this.getRemoteName().toLowerCase() + 's' : opts.resource ? this.resources[opts.resource].url : (0, _env.Env)().scope != null && this.resources[(0, _env.Env)().scope] != null ? this.resources[(0, _env.Env)().scope].url : this.resources.url;
      if ((0, _env.Env)().loco.protocolWithHost != null) {
        resourcesUrl = '' + (0, _env.Env)().loco.protocolWithHost + resourcesUrl;
      }
      match = /:(\w+)\/?/.exec(resourcesUrl);
      if (match == null) {
        return resourcesUrl;
      }
      if (opts[match[1]] != null) {
        resourcesUrl = resourcesUrl.replace(':' + match[1], opts[match[1]]);
        delete opts[match[1]];
      } else if (opts.obj != null && opts.obj[match[1]] != null) {
        resourcesUrl = resourcesUrl.replace(':' + match[1], opts.obj[match[1]]);
      }
      return resourcesUrl;
    }
  }, {
    key: '__initSubclass',
    value: function __initSubclass() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var parts;
      parts = this.getIdentity().split(".");
      if (parts.length === 1) {
        return new _models.Models()[parts[0]](params);
      }
      return new _models.Models()[parts[0]][parts[1]](params);
    }
  }, {
    key: '__page',
    value: function __page(i) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _this4 = this;

      var reqOpts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var resp = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        resources: [],
        count: 0
      };

      var data, httpMethod, key, ref, ref1, req, url, val;
      httpMethod = reqOpts.method || "GET";
      url = reqOpts.url || this.__getResourcesUrl(opts);
      data = {};
      if (reqOpts.data != null) {
        ref = reqOpts.data;
        for (key in ref) {
          val = ref[key];
          if (key === "resource") {
            continue;
          }
          data[key] = val;
        }
      }
      data[this.__getPaginationParam()] = i;
      if (httpMethod === 'GET') {
        url = url + '?' + _utils.Utils.Obj.toURIParams(data);
      }
      req = new XMLHttpRequest();
      req.open(httpMethod, url);
      req.setRequestHeader("Accept", "application/json");
      req.setRequestHeader("Content-Type", "application/json");
      req.setRequestHeader("X-CSRF-Token", (ref1 = document.querySelector("meta[name='csrf-token']")) != null ? ref1.content : void 0);
      req.send(JSON.stringify(data));
      return new Promise(function (resolve, reject) {
        req.onerror = function (e) {
          return reject(e);
        };
        return req.onload = function (e) {
          var j, len, obj, record, ref2;
          data = JSON.parse(e.target.response);
          resp.count = data.count;
          for (key in data) {
            val = data[key];
            if (['resources', 'count'].indexOf(key) === -1) {
              resp[key] = val;
            }
          }
          ref2 = data.resources;
          for (j = 0, len = ref2.length; j < len; j++) {
            record = ref2[j];
            obj = _this4.__initSubclass(record);
            if (opts.resource != null) {
              obj.resource = opts.resource;
            }
            _identity_map.IdentityMap.add(obj);
            resp.resources.push(obj);
          }
          return resolve(resp);
        };
      });
    }
  }, {
    key: '__paginate',
    value: function __paginate(opts, reqOpts) {
      var _this5 = this;

      var pageNum, perPage, ref;
      perPage = this.__getPaginationPer();
      pageNum = (ref = opts.page) != null ? ref : 1;
      return this.__page(pageNum, opts, reqOpts).then(function (data) {
        var func, i, j, max, promise, ref1;
        if (opts.page != null) {
          return Promise.resolve(data);
        }
        if (data.count <= perPage) {
          return Promise.resolve(data);
        }
        max = parseInt(data.count / perPage);
        if (max !== data.count / perPage) {
          max += 1;
        }
        promise = Promise.resolve(data);
        if (max === 1) {
          return promise;
        }
        for (i = j = 2, ref1 = max; 2 <= ref1 ? j <= ref1 : j >= ref1; i = 2 <= ref1 ? ++j : --j) {
          func = function func(i) {
            return promise = promise.then(function (arr) {
              return _this5.__page(i, opts, reqOpts, data);
            });
          };
          func(i);
        }
        return promise;
      });
    }
  }, {
    key: '__getPaginationParam',
    value: function __getPaginationParam() {
      var defaultParam, param, ref, ref1, ref2, ref3;
      defaultParam = 'page';
      if ((0, _env.Env)().scope != null && this.resources != null && this.resources[(0, _env.Env)().scope] != null) {
        param = (ref = this.resources[(0, _env.Env)().scope]) != null ? (ref1 = ref.paginate) != null ? ref1.param : void 0 : void 0;
        return param != null ? param : defaultParam;
      }
      if (((ref2 = this.resources) != null ? (ref3 = ref2.paginate) != null ? ref3.param : void 0 : void 0) != null) {
        return this.resources.paginate.param;
      }
      return defaultParam;
    }
  }, {
    key: '__getPaginationPer',
    value: function __getPaginationPer() {
      var ref, ref1, ref2, ref3;
      if ((0, _env.Env)().scope != null && this.resources != null && this.resources[(0, _env.Env)().scope] != null) {
        return (ref = this.resources[(0, _env.Env)().scope]) != null ? (ref1 = ref.paginate) != null ? ref1.per : void 0 : void 0;
      }
      if (((ref2 = this.resources) != null ? (ref3 = ref2.paginate) != null ? ref3.per : void 0 : void 0) != null) {
        return this.resources.paginate.per;
      }
      return null;
    }
  }, {
    key: '__send',
    value: function __send(method, action, opts) {
      var reqOpts, url;
      url = this.__getResourcesUrl(opts);
      if (action !== "all") {
        url = url + '/' + action;
      }
      reqOpts = {
        method: method,
        url: url,
        data: opts
      };
      return this.__paginate(opts, reqOpts);
    }
  }]);

  return Base;
}();

exports.Base = Base;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Absence = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _i18n = __webpack_require__(2);

var _env = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Absence;

exports.Absence = Absence = function () {
  var Absence = function (_Base) {
    _inherits(Absence, _Base);

    function Absence() {
      _classCallCheck(this, Absence);

      return _possibleConstructorReturn(this, (Absence.__proto__ || Object.getPrototypeOf(Absence)).call(this));
    }

    _createClass(Absence, [{
      key: 'validate',
      value: function validate() {
        switch (_typeof(this.val)) {
          case 'string':
            if (this.val != null && this.val.length === 0) {
              return;
            }
            break;
          default:
            if (this.val == null) {
              return;
            }
        }
        return this._addErrorMessage();
      }
    }, {
      key: '_addErrorMessage',
      value: function _addErrorMessage() {
        var message;
        message = this.opts.message != null ? this.opts.message : _i18n.I18n[(0, _env.Env)().loco.getLocale()].errors.messages.present;
        return this.obj.addErrorMessage(message, {
          for: this.attr
        });
      }
    }]);

    return Absence;
  }(_base.Base);

  ;

  Absence.identity = "Absence";

  return Absence;
}();

exports.Absence = Absence;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var en;

exports.en = en = {
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

exports.en = en;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Confirmation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _i18n = __webpack_require__(2);

var _env = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Confirmation;

exports.Confirmation = Confirmation = function () {
  var Confirmation = function (_Base) {
    _inherits(Confirmation, _Base);

    function Confirmation() {
      _classCallCheck(this, Confirmation);

      return _possibleConstructorReturn(this, (Confirmation.__proto__ || Object.getPrototypeOf(Confirmation)).call(this));
    }

    _createClass(Confirmation, [{
      key: 'validate',
      value: function validate() {
        var properVal;
        properVal = this.obj[this._properAttr()];
        if (this.val != null && properVal != null && this.val === properVal) {
          return;
        }
        return this._addErrorMessage();
      }
    }, {
      key: '_addErrorMessage',
      value: function _addErrorMessage() {
        var attrName, attrNames, defaultAttrName, message;
        defaultAttrName = this.attr.charAt(0).toUpperCase() + this.attr.slice(1);
        attrNames = _i18n.I18n[(0, _env.Env)().loco.getLocale()].attributes[this.obj.getIdentity()];
        attrName = attrNames && attrNames[this.attr] || defaultAttrName;
        message = this.opts.message != null ? this.opts.message : _i18n.I18n[(0, _env.Env)().loco.getLocale()].errors.messages.confirmation;
        message = message.replace('%{attribute}', attrName);
        return this.obj.addErrorMessage(message, {
          for: this._properAttr()
        });
      }
    }, {
      key: '_properAttr',
      value: function _properAttr() {
        return this.attr + 'Confirmation';
      }
    }]);

    return Confirmation;
  }(_base.Base);

  ;

  Confirmation.identity = "Confirmation";

  return Confirmation;
}();

exports.Confirmation = Confirmation;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Exclusion = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _i18n = __webpack_require__(2);

var _env = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Exclusion;

exports.Exclusion = Exclusion = function () {
  var Exclusion = function (_Base) {
    _inherits(Exclusion, _Base);

    function Exclusion() {
      _classCallCheck(this, Exclusion);

      return _possibleConstructorReturn(this, (Exclusion.__proto__ || Object.getPrototypeOf(Exclusion)).call(this));
    }

    _createClass(Exclusion, [{
      key: 'validate',
      value: function validate() {
        var set;
        set = this.opts.in || this.opts.within || [];
        if (set.indexOf(this.val) === -1) {
          return;
        }
        return this._addErrorMessage();
      }
    }, {
      key: '_addErrorMessage',
      value: function _addErrorMessage() {
        var message;
        message = this.opts.message != null ? this.opts.message : _i18n.I18n[(0, _env.Env)().loco.getLocale()].errors.messages.exclusion;
        return this.obj.addErrorMessage(message, {
          for: this.attr
        });
      }
    }]);

    return Exclusion;
  }(_base.Base);

  ;

  Exclusion.identity = "Exclusion";

  return Exclusion;
}();

exports.Exclusion = Exclusion;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Format = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _i18n = __webpack_require__(2);

var _env = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Format;

exports.Format = Format = function () {
  var Format = function (_Base) {
    _inherits(Format, _Base);

    function Format() {
      _classCallCheck(this, Format);

      return _possibleConstructorReturn(this, (Format.__proto__ || Object.getPrototypeOf(Format)).call(this));
    }

    _createClass(Format, [{
      key: 'validate',
      value: function validate() {
        var match;
        match = this.opts.with.exec(this.val);
        if (match != null) {
          return;
        }
        return this._addErrorMessage();
      }
    }, {
      key: '_addErrorMessage',
      value: function _addErrorMessage() {
        var message;
        message = this.opts.message != null ? this.opts.message : _i18n.I18n[(0, _env.Env)().loco.getLocale()].errors.messages.invalid;
        return this.obj.addErrorMessage(message, {
          for: this.attr
        });
      }
    }]);

    return Format;
  }(_base.Base);

  ;

  Format.identity = "Format";

  return Format;
}();

exports.Format = Format;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Inclusion = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _i18n = __webpack_require__(2);

var _env = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inclusion;

exports.Inclusion = Inclusion = function () {
  var Inclusion = function (_Base) {
    _inherits(Inclusion, _Base);

    function Inclusion() {
      _classCallCheck(this, Inclusion);

      return _possibleConstructorReturn(this, (Inclusion.__proto__ || Object.getPrototypeOf(Inclusion)).call(this));
    }

    _createClass(Inclusion, [{
      key: 'validate',
      value: function validate() {
        var set;
        set = this.opts.in || this.opts.within || [];
        if (set.indexOf(this.val) !== -1) {
          return;
        }
        return this._addErrorMessage();
      }
    }, {
      key: '_addErrorMessage',
      value: function _addErrorMessage() {
        var message;
        message = this.opts.message != null ? this.opts.message : _i18n.I18n[(0, _env.Env)().loco.getLocale()].errors.messages.inclusion;
        return this.obj.addErrorMessage(message, {
          for: this.attr
        });
      }
    }]);

    return Inclusion;
  }(_base.Base);

  ;

  Inclusion.identity = "Inclusion";

  return Inclusion;
}();

exports.Inclusion = Inclusion;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Numericality = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _i18n = __webpack_require__(2);

var _env = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Numericality;

exports.Numericality = Numericality = function () {
  var Numericality = function (_Base) {
    _inherits(Numericality, _Base);

    function Numericality() {
      _classCallCheck(this, Numericality);

      return _possibleConstructorReturn(this, (Numericality.__proto__ || Object.getPrototypeOf(Numericality)).call(this));
    }

    _createClass(Numericality, [{
      key: 'validate',
      value: function validate() {
        if (isNaN(this.val)) {
          return this._addNaNErrorMessage();
        } else if (this.opts.only_integer != null && Number(this.val) !== parseInt(this.val)) {
          return this._addIntErrorMessage();
        } else if (this.opts.greater_than != null && Number(this.val) <= this.opts.greater_than) {
          return this._addGreatherThanErrorMessage();
        } else if (this.opts.greater_than_or_equal_to != null && Number(this.val) < this.opts.greater_than_or_equal_to) {
          return this._addGreatherThanOrEqualToErrorMessage();
        } else if (this.opts.equal_to != null && Number(this.val) !== this.opts.equal_to) {
          return this._addEqualToErrorMessage();
        } else if (this.opts.less_than != null && Number(this.val) >= this.opts.less_than) {
          return this._addLessThanErrorMessage();
        } else if (this.opts.less_than_or_equal_to != null && Number(this.val) > this.opts.less_than_or_equal_to) {
          return this._addLessThanOrEqualToErrorMessage();
        } else if (this.opts.other_than != null && Number(this.val) === this.opts.other_than) {
          return this._addOtherThanErrorMessage();
        } else if (this.opts.odd != null && Number(this.val) % 2 !== 1) {
          return this._addOddErrorMessage();
        } else if (this.opts.even != null && Number(this.val) % 2 !== 0) {
          return this._addEvenErrorMessage();
        }
      }
    }, {
      key: '_addNaNErrorMessage',
      value: function _addNaNErrorMessage() {
        var message;
        message = this.opts.message != null ? this.opts.message : _i18n.I18n[(0, _env.Env)().loco.getLocale()].errors.messages.not_a_number;
        return this.obj.addErrorMessage(message, {
          for: this.attr
        });
      }
    }, {
      key: '_addIntErrorMessage',
      value: function _addIntErrorMessage() {
        var message;
        message = _i18n.I18n[(0, _env.Env)().loco.getLocale()].errors.messages.not_an_integer;
        return this.obj.addErrorMessage(message, {
          for: this.attr
        });
      }
    }, {
      key: '_addGreatherThanErrorMessage',
      value: function _addGreatherThanErrorMessage() {
        var message;
        message = _i18n.I18n[(0, _env.Env)().loco.getLocale()].errors.messages.greater_than;
        message = message.replace('%{count}', this.opts.greater_than);
        return this.obj.addErrorMessage(message, {
          for: this.attr
        });
      }
    }, {
      key: '_addGreatherThanOrEqualToErrorMessage',
      value: function _addGreatherThanOrEqualToErrorMessage() {
        var message;
        message = _i18n.I18n[(0, _env.Env)().loco.getLocale()].errors.messages.greater_than_or_equal_to;
        message = message.replace('%{count}', this.opts.greater_than_or_equal_to);
        return this.obj.addErrorMessage(message, {
          for: this.attr
        });
      }
    }, {
      key: '_addEqualToErrorMessage',
      value: function _addEqualToErrorMessage() {
        var message;
        message = _i18n.I18n[(0, _env.Env)().loco.getLocale()].errors.messages.equal_to;
        message = message.replace('%{count}', this.opts.equal_to);
        return this.obj.addErrorMessage(message, {
          for: this.attr
        });
      }
    }, {
      key: '_addLessThanErrorMessage',
      value: function _addLessThanErrorMessage() {
        var message;
        message = _i18n.I18n[(0, _env.Env)().loco.getLocale()].errors.messages.less_than;
        message = message.replace('%{count}', this.opts.less_than);
        return this.obj.addErrorMessage(message, {
          for: this.attr
        });
      }
    }, {
      key: '_addLessThanOrEqualToErrorMessage',
      value: function _addLessThanOrEqualToErrorMessage() {
        var message;
        message = _i18n.I18n[(0, _env.Env)().loco.getLocale()].errors.messages.less_than_or_equal_to;
        message = message.replace('%{count}', this.opts.less_than_or_equal_to);
        return this.obj.addErrorMessage(message, {
          for: this.attr
        });
      }
    }, {
      key: '_addOtherThanErrorMessage',
      value: function _addOtherThanErrorMessage() {
        var message;
        message = _i18n.I18n[(0, _env.Env)().loco.getLocale()].errors.messages.other_than;
        message = message.replace('%{count}', this.opts.other_than);
        return this.obj.addErrorMessage(message, {
          for: this.attr
        });
      }
    }, {
      key: '_addOddErrorMessage',
      value: function _addOddErrorMessage() {
        var message;
        message = _i18n.I18n[(0, _env.Env)().loco.getLocale()].errors.messages.odd;
        return this.obj.addErrorMessage(message, {
          for: this.attr
        });
      }
    }, {
      key: '_addEvenErrorMessage',
      value: function _addEvenErrorMessage() {
        var message;
        message = _i18n.I18n[(0, _env.Env)().loco.getLocale()].errors.messages.even;
        return this.obj.addErrorMessage(message, {
          for: this.attr
        });
      }
    }]);

    return Numericality;
  }(_base.Base);

  ;

  Numericality.identity = "Numericality";

  return Numericality;
}();

exports.Numericality = Numericality;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Presence = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _i18n = __webpack_require__(2);

var _env = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Presence;

exports.Presence = Presence = function () {
  var Presence = function (_Base) {
    _inherits(Presence, _Base);

    function Presence() {
      _classCallCheck(this, Presence);

      return _possibleConstructorReturn(this, (Presence.__proto__ || Object.getPrototypeOf(Presence)).call(this));
    }

    _createClass(Presence, [{
      key: 'validate',
      value: function validate() {
        switch (_typeof(this.val)) {
          case 'string':
            if (this.val != null && this.val.length > 0) {
              return;
            }
            break;
          default:
            if (this.val != null) {
              return;
            }
        }
        return this._addErrorMessage();
      }
    }, {
      key: '_addErrorMessage',
      value: function _addErrorMessage() {
        var message;
        message = this.opts.message != null ? this.opts.message : _i18n.I18n[(0, _env.Env)().loco.getLocale()].errors.messages.blank;
        return this.obj.addErrorMessage(message, {
          for: this.attr
        });
      }
    }]);

    return Presence;
  }(_base.Base);

  ;

  Presence.identity = "Presence";

  return Presence;
}();

exports.Presence = Presence;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Size = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _length = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Size;

exports.Size = Size = function () {
  var Size = function (_Base) {
    _inherits(Size, _Base);

    function Size() {
      _classCallCheck(this, Size);

      return _possibleConstructorReturn(this, (Size.__proto__ || Object.getPrototypeOf(Size)).call(this));
    }

    _createClass(Size, [{
      key: 'validate',
      value: function validate() {
        return _length.Length.instance(this.obj, this.attr, this.opts).validate();
      }
    }]);

    return Size;
  }(_base.Base);

  ;

  Size.identity = "Size";

  return Size;
}();

exports.Size = Size;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = undefined;

var _obj = __webpack_require__(18);

var Utils = {
  Obj: _obj.Obj
};

exports.Utils = Utils;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Obj;

exports.Obj = Obj = function () {
  function Obj() {
    _classCallCheck(this, Obj);
  }

  _createClass(Obj, null, [{
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

  return Obj;
}();

exports.Obj = Obj;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Models = function Models() {
  if (typeof window === 'undefined') {
    return {};
  }
  return window.App === undefined ? {} : window.App.Models;
};

exports.Models = Models;

/***/ })
/******/ ]);