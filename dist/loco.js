!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("loco-js-model")):"function"==typeof define&&define.amd?define(["loco-js-model"],n):"object"==typeof exports?exports.Loco=n(require("loco-js-model")):t.Loco=n(t.LocoModel)}(window,(function(t){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=2)}([function(n,e){n.exports=t},function(t,n,e){window,t.exports=function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.r(n),e.d(n,"init",(function(){return c})),e.d(n,"helpers",(function(){return a}));var r=function(t){"function"==typeof t.constructor.initialize&&t.constructor.initialize(),"function"==typeof t.initialize&&t.initialize()},i=function(t,n,e){var r=void 0===e?t[n]:t[n][e];return"function"==typeof r?new r:"object"===o(r)?r:null},c=function(t){var n=document.getElementsByTagName("body")[0],e=n.getAttribute("data-namespace"),o=n.getAttribute("data-controller"),c=n.getAttribute("data-action"),l=i(t,e),u=i(t,o);return null!==l&&(u=i(t,e,o),l.controller=u,r(l)),null!==u&&(u.namespaceController=l,function(t,n){r(t),"function"==typeof t.constructor[n]&&t.constructor[n](),"function"==typeof t[n]&&t[n]()}(u,c)),{namespaceController:l,controller:u,action:c}};function l(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return c=t.done,t},e:function(t){l=!0,i=t},f:function(){try{c||null==e.return||e.return()}finally{if(l)throw i}}}}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}var a={get params(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href,n={},e=/https?:\/\/.+\/\w+\/(\d+)/.exec(t),o=null!==e?e[1]:null;null!==o&&(n.id=parseInt(o));var r=t.split("?");if(1===r.length)return n;var i,c=r[r.length-1],u=c.split("&").map((function(t){return t.split("=")})),a=l(u);try{for(a.s();!(i=a.n()).done;){var s=i.value,f=decodeURIComponent(s[0]),d=decodeURIComponent(s[1]);"string"==typeof d&&(d=d.replace(/\+/g," ")),n[f]=d}}catch(t){a.e(t)}finally{a.f()}return n}()}}}])},function(t,n,e){"use strict";e.r(n),e.d(n,"getLine",(function(){return C})),e.d(n,"getLocale",(function(){return I})),e.d(n,"setLocale",(function(){return M})),e.d(n,"getWire",(function(){return T})),e.d(n,"connector",(function(){return x})),e.d(n,"emit",(function(){return _})),e.d(n,"helpers",(function(){return r.helpers})),e.d(n,"init",(function(){return O})),e.d(n,"subscribe",(function(){return k})),e.d(n,"Controllers",(function(){return l})),e.d(n,"Env",(function(){return o})),e.d(n,"I18n",(function(){return i.I18n})),e.d(n,"Models",(function(){return i.Models})),e.d(n,"Validators",(function(){return i.Validators}));var o={loco:null,namespaceController:null,controller:null,action:null},r=e(1),i=e(0);function c(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var l={Base:function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,o;return n=t,(e=[{key:"setScope",value:function(t){i.Config.scope=t}},{key:"setResource",value:function(t){this.setScope(t)}}])&&c(n.prototype,e),o&&c(n,o),t}()},u={cable:null,NotificationCenter:null},a=function(){function t(){}return t.toURIParams=function(t){var n,e,o;for(n in e="",t)o=t[n],""!==e&&(e+="&"),e+=n+"="+encodeURIComponent(o);return e},t}(),s=[],f=function(t){return!!s.includes(t)||(s.unshift(t),s.length>100&&s.pop(),!1)};function d(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],o=!0,r=!1,i=void 0;try{for(var c,l=t[Symbol.iterator]();!(o=(c=l.next()).done)&&(e.push(c.value),!n||e.length!==n);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==l.return||l.return()}finally{if(r)throw i}}return e}(t,n)||y(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=y(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return c=t.done,t},e:function(t){l=!0,i=t},f:function(){try{c||null==e.return||e.return()}finally{if(l)throw i}}}}function y(t,n){if(t){if("string"==typeof t)return h(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?h(t,n):void 0}}function h(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}var m=function(t,n,e,o,r){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;null===c&&(c=new o({id:t}));var l,u=p(i.IdentityMap.findConnected(r,t));try{for(u.s();!(l=u.n()).done;){var a=l.value;a(n,e)}}catch(t){u.e(t)}finally{u.f()}},v=function(t,n,e){var o,r=p(i.IdentityMap.imap[e].collection);try{for(r.s();!(o=r.n()).done;){(0,o.value)("".concat(e," ").concat(t),n)}}catch(t){r.e(t)}finally{r.f()}},g=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n.log&&console.log(t);var e=d(t,4),r=e[0],c=e[1],l=e[2],a=e[3];if(f(a.loco.idempotency_key))return!1;var s=o.loco.getModelForRemoteName(r),p=s.getIdentity();return null!=u.NotificationCenter&&u.NotificationCenter({type:"".concat(p," ").concat(l),payload:a}),void 0!==i.IdentityMap.imap[p]&&(void 0!==i.IdentityMap.imap[p][c]&&m(c,l,a,s,p),void 0!==i.IdentityMap.imap[p].collection&&(0!==i.IdentityMap.imap[p].collection.length&&(v(l,a,p),!0)))},b=function(){function t(t){var n,e,o,r;null==t&&(t={}),this.syncTime=null,this.token=null,this.pollingInterval=null,this.pollingTime=null!=(n=t.pollingTime)?n:3e3,this.log=!(null==t.log||!t.log),this.ssl=t.ssl,this.location=null!=(e=t.location)?e:"notification-center",this.size=null!=(o=t.size)?o:100,this.protocolWithHost=t.protocolWithHost,this.allowedDisconnectionTime=null!=(r=t.allowedDisconnectionTime)?r:10,this.disconnectedSinceTime=null,this.uuid=null}return t.prototype.setPollingTime=function(t){var n;if(this.pollingTime=t,!(null!=(n=o.loco.line)?n.connected:void 0))return this.disconnect(),this.connect()},t.prototype.connect=function(){return this.check(),this.pollingInterval=setInterval((t=this,function(){if(!o.loco.line.connected)return t.check();t.disconnect()}),this.pollingTime);var t},t.prototype.disconnect=function(){return window.clearInterval(this.pollingInterval)},t.prototype.check=function(){var t,n;if(0!==Object.keys(i.IdentityMap.imap).length||null!=this.token||null==this.syncTime)return(t=new XMLHttpRequest).open("GET",this._getURL()+"?"+a.toURIParams(this._requestParams())),t.onload=(n=this,function(t){var e,o,r,i,c;if(t.target.status>=200&&t.target.status<400){if(e=JSON.parse(t.target.response),n.disconnectedSinceTime=null,n.syncTime=e[1],0===(c=e[0]).length)return;for(o=0,r=c.length;o<r;o++)i=c[o],g(i,{log:n.log});if(c.length===n.size)return n.check()}else if(t.target.status>=500)return n._handleDisconnection()}),t.onerror=function(t){return function(){return t._handleDisconnection()}}(this),t.send()},t.prototype.fetchSyncTime=function(t){var n,e;return null==t&&(t={}),(n=new XMLHttpRequest).open("GET",this._getURL()+"/sync-time"),n.onerror=(e=this,function(){if(null!=t.after)return e[t.after]()}),n.onload=function(n){return function(e){var o;if(e.target.status>=200&&e.target.status<400){if(o=JSON.parse(e.target.response),n.syncTime=o.sync_time,null!=t.after)return n[t.after]()}else if(e.target.status>=500&&null!=t.after)return n[t.after]()}}(this),n.send()},t.prototype._requestParams=function(){var t;return t={synced_at:this.syncTime},null!=this.token&&(t.token=this.token),null!=this.uuid&&(t.uuid=this.uuid),t},t.prototype._getURL=function(){var t,n,e,o;return n=(e=window.location.href.split("/"))[0],e[1],t=e[2],null!=this.protocolWithHost&&(n=(o=this.protocolWithHost.split("//"))[0],t=o[1]),null!=this.ssl&&(n=this.ssl?"https:":"http:"),n+"//"+t+"/"+this.location},t.prototype._handleDisconnection=function(){var t,n,e;if(null==this.disconnectedSinceTime&&(this.disconnectedSinceTime=new Date),n=(new Date-this.disconnectedSinceTime)/1e3,t=null!=(e=o.namespaceController)?e:o.controller,n>this.allowedDisconnectionTime&&null!=t.disconnectedForTooLong)return t.disconnectedForTooLong(this.disconnectedSinceTime)},t}();function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var w=function(){function t(){this.connected=!1,this.subscription=null}return t.prototype.connect=function(){return this.subscription=u.cable.subscriptions.create({channel:"Loco::NotificationCenterChannel"},{connected:(t=this,function(){return console.log("WS connected"),t.connected=!0,u.NotificationCenter({loco:"connected"})}),disconnected:function(t){return function(){var n;return console.log("WS disconnected"),t.connected=!1,null!=(n=o.loco.wire)&&(n.uuid=null,n.fetchSyncTime({after:"connect"})),u.NotificationCenter({loco:"disconnected"})}}(this),rejected:function(){return console.log("WS rejected"),u.NotificationCenter({loco:"rejected"})},received:function(t){return function(n){if(null!=n.loco){if(!function(t,n){var e=n.line,o=n.wire,r=n.processNotification;if(!0===t.connection_check&&e.send({loco:{connection_check:!0}}),null!=o)return"string"==typeof t.sync_time&&(o.syncTime=t.sync_time),"string"==typeof t.uuid&&(console.log("uuid: ".concat(t.uuid)),o.uuid=t.uuid),"object"===S(t.notification)&&"Array"===t.notification.constructor.name&&r(t.notification,{log:o.log}),"string"!=typeof t.idempotency_key||!f(t.idempotency_key)}(n.loco,{line:t,wire:o.loco.wire,processNotification:g}))return;delete n.loco}if(0!==Object.keys(n).length)return u.NotificationCenter(n)}}(this)});var t},t.prototype.send=function(t){return this.subscription.send(t)},t}(),j=function(){function t(t){var n,e;null==t&&(t={}),this.wire=null,this.line=null,this.postInit=t.postInit,(n=null!=(e=t.notifications)?e:{}).protocolWithHost=t.protocolWithHost,this.notificationsParams=n}return t.prototype.init=function(t){return o.loco=this,this.initWire(),this.initLine(t.cable),this.ready((n=this,function(){var t;if(i.IdentityMap.clear(),t=Object(r.init)(l),o.namespaceController=t.namespaceController,o.controller=t.controller,o.action=t.action,null!=n.postInit)return n.postInit()}));var n},t.prototype.ready=function(t){return(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?t():document.addEventListener("DOMContentLoaded",t)},t.prototype.initWire=function(){var t;if(null!=(t=this.notificationsParams)?t.enable:void 0)return this.wire=new b(this.notificationsParams),this.wire.fetchSyncTime({after:"connect"})},t.prototype.initLine=function(t){if(null!=t)return this.line=new w,this.line.connect()},t.prototype.emit=function(t){return this.line.send(t)},t.prototype.getModels=function(){var t,n,e,o,r;for(t in e=[],r=/^[A-Z]/,i.Models)if(i.Models[t],r.exec(t)&&"Base"!==t)for(n in e.push(t),o=i.Models[t])o[n],r.exec(n)&&e.push(t+"."+n);return e},t.prototype.getModelForRemoteName=function(t){var n,e,o,r;for(n=0,e=(r=this.getModels()).length;n<e;n++)if(1===(o=r[n].split(".")).length){if(i.Models[o[0]].getRemoteName()===t)return i.Models[o[0]]}else if(2===o.length&&i.Models[o[0]][o[1]].getRemoteName()===t)return i.Models[o[0]][o[1]]},t}(),I=function(){return i.Config.locale},M=function(t){return i.Config.locale=t},T=function(){return o.loco.wire},C=function(){return o.loco.line.subscription},_=function(t){return o.loco.emit(t)},O=function(t){i.Config.locale=t.locale||"en",i.Config.protocolWithHost=t.protocolWithHost,i.Config.cookiesByCORS=t.cookiesByCORS||!1,u.cable=t.cable,u.NotificationCenter=t.notificationCenter,new j(t).init({cable:u.cable,protocolWithHost:i.Config.protocolWithHost})},x={getLocale:I,Env:o,I18n:i.I18n},k=i.IdentityMap.subscribe}])}));