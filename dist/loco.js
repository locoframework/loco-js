!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("loco-js-model")):"function"==typeof define&&define.amd?define(["loco-js-model"],n):"object"==typeof exports?exports.Loco=n(require("loco-js-model")):t.Loco=n(t.LocoModel)}(self,(function(t){return(()=>{var n={998:t=>{window,t.exports=function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.r(n),e.d(n,"init",(function(){return c})),e.d(n,"helpers",(function(){return a}));var r=function(t){"function"==typeof t.constructor.initialize&&t.constructor.initialize(),"function"==typeof t.initialize&&t.initialize()},i=function(t,n,e){var r=void 0===e?t[n]:t[n][e];return"function"==typeof r?new r:"object"===o(r)?r:null},c=function(t){var n=document.getElementsByTagName("body")[0],e=n.getAttribute("data-namespace"),o=n.getAttribute("data-controller"),c=n.getAttribute("data-action"),l=i(t,e),u=i(t,o);return null!==l&&(u=i(t,e,o),l.controller=u,r(l)),null!==u&&(u.namespaceController=l,function(t,n){r(t),"function"==typeof t.constructor[n]&&t.constructor[n](),"function"==typeof t[n]&&t[n]()}(u,c)),{namespaceController:l,controller:u,action:c}};function l(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return c=t.done,t},e:function(t){l=!0,i=t},f:function(){try{c||null==e.return||e.return()}finally{if(l)throw i}}}}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}var a={get params(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href,n={},e=/https?:\/\/.+\/\w+\/(\d+)/.exec(t),o=null!==e?e[1]:null;null!==o&&(n.id=parseInt(o));var r=t.split("?");if(1===r.length)return n;var i,c=r[r.length-1].split("&").map((function(t){return t.split("=")})),u=l(c);try{for(u.s();!(i=u.n()).done;){var a=i.value,s=decodeURIComponent(a[0]),f=decodeURIComponent(a[1]);"string"==typeof f&&(f=f.replace(/\+/g," ")),n[s]=f}}catch(t){u.e(t)}finally{u.f()}return n}()}}}])},854:n=>{"use strict";n.exports=t}},e={};function o(t){var r=e[t];if(void 0!==r)return r.exports;var i=e[t]={exports:{}};return n[t](i,i.exports,o),i.exports}o.d=(t,n)=>{for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},o.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return(()=>{"use strict";o.r(r),o.d(r,{Controllers:()=>i,I18n:()=>n.I18n,Models:()=>n.Models,Validators:()=>n.Validators,createConnector:()=>M,getLocale:()=>T,helpers:()=>t.helpers,init:()=>j,setLocale:()=>I,subscribe:()=>_});var t=o(998),n=o(854);function e(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var i={Base:function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var o,r;return o=t,(r=[{key:"setScope",value:function(t){n.Config.scope=t}},{key:"setResource",value:function(t){this.setScope(t)}}])&&e(o.prototype,r),t}()};const c=function(){function t(){}return t.toURIParams=function(t){var n,e,o;for(n in e="",t)o=t[n],""!==e&&(e+="&"),e+=n+"="+encodeURIComponent(o);return e},t}();var l=[];const u=function(t){return!!l.includes(t)||(l.unshift(t),l.length>100&&l.pop(),!1)};var a;a=function(){var t,e,o,r,i;for(t in o=[],i=/^[A-Z]/,n.Models)if(n.Models[t],i.exec(t)&&"Base"!==t)for(e in o.push(t),r=n.Models[t])r[e],i.exec(e)&&o.push(t+"."+e);return o};const s=function(t){var e,o,r,i;for(e=0,o=(i=a()).length;e<o;e++)if(1===(r=i[e].split(".")).length){if(n.Models[r[0]].getRemoteName()===t)return n.Models[r[0]]}else if(2===r.length&&n.Models[r[0]][r[1]].getRemoteName()===t)return n.Models[r[0]][r[1]]};function f(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var o,r,i=[],c=!0,l=!1;try{for(e=e.call(t);!(c=(o=e.next()).done)&&(i.push(o.value),!n||i.length!==n);c=!0);}catch(t){l=!0,r=t}finally{try{c||null==e.return||e.return()}finally{if(l)throw r}}return i}}(t,n)||d(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=d(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){l=!0,i=t},f:function(){try{c||null==e.return||e.return()}finally{if(l)throw i}}}}function d(t,n){if(t){if("string"==typeof t)return y(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?y(t,n):void 0}}function y(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}var h=function(t,e,o,r,i){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;null===c&&(c=new r({id:t}));var l,u=p(n.IdentityMap.findConnected(i,t));try{for(u.s();!(l=u.n()).done;){var a=l.value;a(e,o)}}catch(t){u.e(t)}finally{u.f()}},m=function(t,e,o){var r,i=p(n.IdentityMap.imap[o].collection);try{for(i.s();!(r=i.n()).done;)(0,r.value)("".concat(o," ").concat(t),e)}catch(t){i.e(t)}finally{i.f()}};const v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.log&&console.log(t);var o=f(t,4),r=o[0],i=o[1],c=o[2],l=o[3];if(u(l.loco.idempotency_key))return!1;var a=s(r),p=a.getIdentity();return null!=e.notificationCenter&&e.notificationCenter({type:"".concat(p," ").concat(c),payload:l}),void 0!==n.IdentityMap.imap[p]&&(void 0!==n.IdentityMap.imap[p][i]&&h(i,c,l,a,p),void 0!==n.IdentityMap.imap[p].collection&&0!==n.IdentityMap.imap[p].collection.length&&(m(c,l,p),!0))},g=function(){function t(t,n){var e,o,r,i;this.env=t.env,this.pollingTime=null!=(e=t.pollingTime)?e:3e3,this.log=!(null==t.log||!t.log),this.ssl=t.ssl,this.location=null!=(o=t.location)?o:"notification-center",this.size=null!=(r=t.size)?r:100,this.protocolWithHost=t.protocolWithHost,this.allowedDisconnectionTime=null!=(i=t.allowedDisconnectionTime)?i:10,this.notificationCenter=n,this.syncTime=null,this.token=null,this.pollingInterval=null,this.disconnectedSinceTime=null,this.uuid=null,this.line=null}return t.prototype.setLine=function(t){return this.line=t},t.prototype.setPollingTime=function(t){var n;if(this.pollingTime=t,!(null!=(n=this.line)?n.connected:void 0))return this.disconnect(),this.connect()},t.prototype.connect=function(){return this.check(),this.pollingInterval=setInterval((t=this,function(){if(!t.line.connected)return t.check();t.disconnect()}),this.pollingTime);var t},t.prototype.disconnect=function(){return window.clearInterval(this.pollingInterval)},t.prototype.check=function(){var t,e;if(0!==Object.keys(n.IdentityMap.imap).length||null!=this.token||null==this.syncTime)return(t=new XMLHttpRequest).open("GET",this._getURL()+"?"+c.toURIParams(this._requestParams())),t.onload=(e=this,function(t){var n,o,r,i,c;if(t.target.status>=200&&t.target.status<400){if(n=JSON.parse(t.target.response),e.disconnectedSinceTime=null,e.syncTime=n[1],0===(c=n[0]).length)return;for(o=0,r=c.length;o<r;o++)i=c[o],v(i,{log:e.log,notificationCenter:e.notificationCenter});if(c.length===e.size)return e.check()}else if(t.target.status>=500)return e._handleDisconnection()}),t.onerror=function(t){return function(){return t._handleDisconnection()}}(this),t.send()},t.prototype.fetchSyncTime=function(t){var n,e;return null==t&&(t={}),(n=new XMLHttpRequest).open("GET",this._getURL()+"/sync-time"),n.onerror=(e=this,function(){if(null!=t.after)return e[t.after]()}),n.onload=function(n){return function(e){var o;if(e.target.status>=200&&e.target.status<400){if(o=JSON.parse(e.target.response),n.syncTime=o.sync_time,null!=t.after)return n[t.after]()}else if(e.target.status>=500&&null!=t.after)return n[t.after]()}}(this),n.send()},t.prototype._requestParams=function(){var t;return t={synced_at:this.syncTime},null!=this.token&&(t.token=this.token),null!=this.uuid&&(t.uuid=this.uuid),t},t.prototype._getURL=function(){var t,n,e,o;return n=(e=window.location.href.split("/"))[0],e[1],t=e[2],null!=this.protocolWithHost&&(n=(o=this.protocolWithHost.split("//"))[0],t=o[1]),null!=this.ssl&&(n=this.ssl?"https:":"http:"),n+"//"+t+"/"+this.location},t.prototype._handleDisconnection=function(){var t,n,e;if(null==this.disconnectedSinceTime&&(this.disconnectedSinceTime=new Date),n=(new Date-this.disconnectedSinceTime)/1e3,t=null!=(e=this.env.namespaceController)?e:this.env.controller,n>this.allowedDisconnectionTime&&null!=t.disconnectedForTooLong)return t.disconnectedForTooLong(this.disconnectedSinceTime)},t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}var S;S=function(){function t(){this.connected=!1,this.subscription=null}return t.prototype.connect=function(t,n,e){return this.subscription=t.subscriptions.create({channel:"Loco::NotificationCenterChannel"},{connected:(o=this,function(){return console.log("WS connected"),o.connected=!0,n({loco:"connected"}),o.pong()}),disconnected:function(t){return function(){return console.log("WS disconnected"),t.connected=!1,null!=e&&(e.uuid=null,e.fetchSyncTime({after:"connect"})),n({loco:"disconnected"})}}(this),rejected:function(){return console.log("WS rejected"),n({loco:"rejected"})},received:function(t){return function(o){if(null!=o.loco){if(!function(t,n){var e=n.line,o=n.wire,r=n.processNotification,i=n.notificationCenter;if(!0===t.ping&&e.pong(),null!=o)return"string"==typeof t.sync_time&&(o.syncTime=t.sync_time),"string"==typeof t.uuid&&(console.log("uuid: ".concat(t.uuid)),o.uuid=t.uuid),"object"===b(t.notification)&&"Array"===t.notification.constructor.name&&r(t.notification,{log:o.log,notificationCenter:i}),"string"!=typeof t.idempotency_key||!u(t.idempotency_key)}(o.loco,{line:t,wire:e,processNotification:v,notificationCenter:n}))return;delete o.loco}if(0!==Object.keys(o).length)return n(o)}}(this)});var o},t.prototype.send=function(t){return this.subscription.send(t)},t.prototype.pong=function(){return setTimeout((t=this,function(){return t.send({loco:{pong:!0}})}),3e3);var t},t}();const w=S,C=function(){function e(t){this.env={namespaceController:null,controller:null,action:null,models:t},this.wire=null,this.line=null}return e.prototype.getEnv=function(){return this.env},e.prototype.getLine=function(){var t;return null!=(t=this.line)?t.subscription:void 0},e.prototype.getWire=function(){return this.wire},e.prototype.setAuthorizationHeader=function(t){var n,e,o,r;for(n in r=[],o=this.env.models)e=o[n],r.push(e.authorizationHeader=t);return r},e.prototype.init=function(e){var o,r;return!1!==(null!=(o=this._genNotificationsParams(e))?o.enable:void 0)&&this._initWire(o,e.notificationCenter),null!=e.cable&&this._initLine(e.cable,e.notificationCenter),this.wire.setLine(this.line),this._ready((r=this,function(){var o;if(n.IdentityMap.clear(),o=(0,t.init)(i),r.env.namespaceController=o.namespaceController,r.env.controller=o.controller,r.env.action=o.action,null!=e.postInit)return e.postInit()}))},e.prototype.emit=function(t){return this.line.send(t)},e.prototype._genNotificationsParams=function(t){var n,e;return(n=null!=(e=t.notifications)?e:{}).protocolWithHost=t.protocolWithHost,n.env=this.env,n},e.prototype._ready=function(t){return(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?t():document.addEventListener("DOMContentLoaded",t)},e.prototype._initWire=function(t,n){return this.wire=new g(t,n),this.wire.fetchSyncTime({after:"connect"})},e.prototype._initLine=function(t,n){return this.line=new w,this.line.connect(t,n,this.wire)},e}();var T=function(){return n.Config.locale},I=function(t){return n.Config.locale=t},j=function(t){n.Config.cookiesByCORS=t.cookiesByCORS||!1,n.Config.locale=t.locale||"en";for(var e=0,o=Object.keys(t.controllers||{});e<o.length;e++){var r=o[e];i[r]=t.controllers[r]}var c=function(t){for(var e=t.models||{},o=0,r=Object.keys(e);o<r.length;o++){var i=r[o];n.Models[i]=e[i],null!=t.protocolWithHost&&(n.Models[i].protocolWithHost=t.protocolWithHost),null!=t.authorizationHeader&&(n.Models[i].authorizationHeader=t.authorizationHeader),null!=t.cookiesByCORS&&(n.Models[i].cookiesByCORS=t.cookiesByCORS)}return e}(t),l=new C(c);return l.init(t),l},M=function(t){return{getLocale:T,loco:t,I18n:n.I18n}},_=n.IdentityMap.subscribe})(),r})()}));