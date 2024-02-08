!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("loco-js-model")):"function"==typeof define&&define.amd?define(["loco-js-model"],e):"object"==typeof exports?exports.Loco=e(require("loco-js-model")):t.Loco=e(t.LocoModel)}(self,(t=>(()=>{var e={816:t=>{self,t.exports=(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}t.r(e),t.d(e,{helpers:()=>l,init:()=>i});var o=function(t){"function"==typeof t.constructor.initialize&&t.constructor.initialize(),"function"==typeof t.initialize&&t.initialize()},r=function(t,e,o){var r=void 0===o?t[e]:t[e][o];return"function"==typeof r?new r:"object"===n(r)?r:null};const i=function(t){var e=document.getElementsByTagName("body")[0],n=e.getAttribute("data-namespace"),i=e.getAttribute("data-controller"),c=e.getAttribute("data-action"),l=r(t,n),u=r(t,i);return null!==l&&(u=r(t,n,i),l.controller=u,o(l)),null!==u&&(u.namespaceController=l,function(t,e){o(t),"function"==typeof t.constructor[e]&&t.constructor[e](),"function"==typeof t[e]&&t[e]()}(u,c)),{namespaceController:l,controller:u,action:c}};function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}const l={get params(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href,e={},n=/https?:\/\/.+\/\w+\/(\d+)/.exec(t),o=null!==n?n[1]:null;null!==o&&(e.id=parseInt(o));var r=t.split("?");if(1===r.length)return e;var i,l=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t))){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){u=!0,i=t},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw i}}}}(r[r.length-1].split("&").map((function(t){return t.split("=")})));try{for(l.s();!(i=l.n()).done;){var u=i.value,a=decodeURIComponent(u[0]),s=decodeURIComponent(u[1]);"string"==typeof s&&(s=s.replace(/\+/g," ")),e[a]=s}}catch(t){l.e(t)}finally{l.f()}return e}()}};return e})()},904:e=>{"use strict";e.exports=t}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return(()=>{"use strict";o.r(r),o.d(r,{Controllers:()=>l,I18n:()=>e.I18n,Models:()=>e.Models,Validators:()=>e.Validators,createConnector:()=>R,getLocale:()=>k,helpers:()=>t.helpers,init:()=>L,setLocale:()=>M,subscribe:()=>A});var t=o(816),e=o(904);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,c(o.key),o)}}function c(t){var e=function(t,e){if("object"!=n(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!=n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==n(e)?e:String(e)}var l={Base:function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,o;return n=t,(o=[{key:"setScope",value:function(t){e.Config.scope=t}},{key:"setResource",value:function(t){this.setScope(t)}}])&&i(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}()};const u=function(){function t(){}return t.toURIParams=function(t){var e,n,o;for(e in n="",t)o=t[e],""!==n&&(n+="&"),n+=e+"="+encodeURIComponent(o);return n},t}(),a=function(t,e,n){var o=document.querySelector("meta[name='csrf-token']"),r=new XMLHttpRequest;return r.withCredentials=!0===n.cookiesByCORS,r.open(t,e),r.setRequestHeader("Accept","application/json"),o&&r.setRequestHeader("X-CSRF-Token",o.content),null!=n.authorizationHeader&&r.setRequestHeader("Authorization",n.authorizationHeader),r};var s=[];const f=function(t){return!!s.includes(t)||(s.unshift(t),s.length>100&&s.pop(),!1)};var p;p=function(){var t,n,o,r,i;for(t in o=[],i=/^[A-Z]/,e.Models)if(e.Models[t],i.exec(t)&&"Base"!==t)for(n in o.push(t),r=e.Models[t])r[n],i.exec(n)&&o.push(t+"."+n);return o};function d(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=y(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw i}}}}function y(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var m=function(t,e,n,o){null!=t&&t({type:e,payload:n},o)};const v=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n.log&&console.log(t);var o,r,i=(r=4,function(t){if(Array.isArray(t))return t}(o=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i,c,l=[],u=!0,a=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=i.call(n)).done)&&(l.push(o.value),l.length!==e);u=!0);}catch(t){a=!0,r=t}finally{try{if(!u&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(a)throw r}}return l}}(o,r)||y(o,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=i[0],l=i[1],u=i[2],a=i[3];if(f(a.loco.idempotency_key))return!1;delete a.loco;var s=function(t){var n,o,r,i;for(n=0,o=(i=p()).length;n<o;n++)if(1===(r=i[n].split(".")).length){if(e.Models[r[0]].getRemoteName()===t)return e.Models[r[0]]}else if(2===r.length&&e.Models[r[0]][r[1]].getRemoteName()===t)return e.Models[r[0]][r[1]]}(c);if(void 0===s)return m(n.notificationCenter,"".concat(c," ").concat(u),a,n.emit),!1;var h=s.getIdentity();return m(n.notificationCenter,"".concat(h," ").concat(u),a,n.emit),void 0!==e.IdentityMap.imap[h]&&(void 0!==e.IdentityMap.imap[h][l]&&function(t,n,o,r,i){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;null===c&&(c=new r({id:t}));var l,u=d(e.IdentityMap.findConnected(i,t));try{for(u.s();!(l=u.n()).done;)(0,l.value)(n,o)}catch(t){u.e(t)}finally{u.f()}}(l,u,a,s,h),void 0!==e.IdentityMap.imap[h].collection&&0!==e.IdentityMap.imap[h].collection.length&&(function(t,n,o){var r,i=d(e.IdentityMap.imap[o].collection);try{for(i.s();!(r=i.n()).done;)(0,r.value)("".concat(o," ").concat(t),n)}catch(t){i.e(t)}finally{i.f()}}(u,a,h),!0))};var b;b=function(){function t(t,e,n){var o,r,i,c;this.pollingTime=null!=(o=t.pollingTime)?o:3e3,this.log=!(null==t.log||!t.log),this.ssl=t.ssl,this.location=null!=(r=t.location)?r:"notification-center",this.size=null!=(i=t.size)?i:100,this.protocolWithHost=t.protocolWithHost,this.allowedDisconnectionTime=null!=(c=t.allowedDisconnectionTime)?c:10,this.disconnectedForTooLong=t.disconnectedForTooLong,this.notificationCenter=e,this.reqOpts=n,this.syncTime=null,this.token=null,this.pollingInterval=null,this.disconnectedSinceTime=null,this.uuid=null,this.line=null}return t.prototype.setDisconnectedForTooLong=function(t){return this.disconnectedForTooLong=t},t.prototype.setLine=function(t){return this.line=t},t.prototype.setPollingTime=function(t){var e;if(this.pollingTime=t,!(null!=(e=this.line)?e.connected:void 0))return this.disconnect(),this.connect()},t.prototype.connect=function(){return this.check(),this.pollingInterval=setInterval((t=this,function(){var e;if(!(null!=(e=t.line)?e.connected:void 0))return t.check();t.disconnect()}),this.pollingTime);var t},t.prototype.disconnect=function(){return window.clearInterval(this.pollingInterval)},t.prototype.check=function(){var t,e;return(t=a("GET",this._getURL()+"?"+u.toURIParams(this._requestParams()),this.reqOpts)).onload=(e=this,function(t){var n,o,r,i,c;if(t.target.status>=200&&t.target.status<400){if(n=JSON.parse(t.target.response),e.disconnectedSinceTime=null,e.syncTime=n[1],0===(c=n[0]).length)return;for(o=0,r=c.length;o<r;o++)i=c[o],v(i,{log:e.log,notificationCenter:e.notificationCenter,emit:e.line.send});if(c.length===e.size)return e.check()}else if(t.target.status>=500)return e._handleDisconnection()}),t.onerror=function(t){return function(){return t._handleDisconnection()}}(this),t.send()},t.prototype.fetchSyncTime=function(t){var e,n;return null==t&&(t={}),(e=a("GET",this._getURL()+"/sync-time",this.reqOpts)).onerror=(n=this,function(){if(null!=t.after)return n[t.after]()}),e.onload=function(e){return function(n){var o;if(n.target.status>=200&&n.target.status<400){if(o=JSON.parse(n.target.response),e.syncTime=o.sync_time,null!=t.after)return e[t.after]()}else if(n.target.status>=500&&null!=t.after)return e[t.after]()}}(this),e.send()},t.prototype._requestParams=function(){var t;return t={synced_at:this.syncTime},null!=this.token&&(t.token=this.token),null!=this.uuid&&(t.uuid=this.uuid),t},t.prototype._getURL=function(){var t,e,n,o;return e=(n=window.location.href.split("/"))[0],n[1],t=n[2],null!=this.protocolWithHost&&(e=(o=this.protocolWithHost.split("//"))[0],t=o[1]),null!=this.ssl&&(e=this.ssl?"https:":"http:"),e+"//"+t+"/"+this.location},t.prototype._handleDisconnection=function(){if(null==this.disconnectedSinceTime&&(this.disconnectedSinceTime=new Date),(new Date-this.disconnectedSinceTime)/1e3>this.allowedDisconnectionTime&&null!=this.disconnectedForTooLong)return this.disconnectedForTooLong(this.disconnectedSinceTime)},t}();const g=b;function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function C(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,T(o.key),o)}}function T(t){var e=function(t,e){if("object"!=w(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=w(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==w(e)?e:String(e)}var j=function(){function t(e,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cable=e,this.notificationCenter=n,this.wire=o,this.connected=!1,this.subscription=null}var e,n;return e=t,n=[{key:"connect",value:function(){var t=this;this.subscription=this.cable.subscriptions.create({channel:"Loco::NotificationCenterChannel"},{connected:function(){console.log("WS connected"),t.connected=!0,t.notificationCenter({loco:"connected"}),t.pong()},disconnected:function(){console.log("WS disconnected"),t.connected=!1,null!==t.wire&&(t.wire.uuid=null,t.wire.fetchSyncTime({after:"connect"})),t.notificationCenter({loco:"disconnected"})},rejected:function(){console.log("WS rejected"),t.notificationCenter({loco:"rejected"})},received:function(e){if(null!=e.loco){if(!0!==function(t,e){var n=e.line,o=e.wire,r=e.processNotification,i=e.notificationCenter;if(!0===t.ping&&n.pong(),null!=o)return"string"==typeof t.sync_time&&(o.syncTime=t.sync_time),"string"==typeof t.uuid&&(console.log("uuid: ".concat(t.uuid)),o.uuid=t.uuid),"object"===S(t.notification)&&"Array"===t.notification.constructor.name&&r(t.notification,{log:o.log,notificationCenter:i,emit:(void 0).line.send}),"string"!=typeof t.idempotency_key||!f(t.idempotency_key)}(e.loco,{line:t,wire:t.wire,processNotification:v,notificationCenter:t.notificationCenter}))return;delete e.loco}0!==Object.keys(e).length&&t.notificationCenter(e)}})}},{key:"send",value:function(t){this.subscription.send(t)}},{key:"pong",value:function(){var t=this;setTimeout((function(){return t.send({loco:{pong:!0}})}),3e3)}}],n&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const O=j;const I=function(){function n(t){this.env={namespaceController:null,controller:null,action:null,models:t},this.wire=null,this.line=null}return n.prototype.getEnv=function(){return this.env},n.prototype.getLine=function(){var t;return null!=(t=this.line)?t.subscription:void 0},n.prototype.getWire=function(){return this.wire},n.prototype.setAuthorizationHeader=function(t){var e,n,o,r;for(e in r=[],o=this.env.models)n=o[e],r.push(n.authorizationHeader=t);return r},n.prototype.setDisconnectedForTooLong=function(t){return this.wire.setDisconnectedForTooLong(t)},n.prototype.init=function(n){var o,r,i,c;return(o=null!=(r=n.notifications)?r:{}).protocolWithHost=n.protocolWithHost,!1!==o.enable&&(i={cookiesByCORS:n.cookiesByCORS,authorizationHeader:n.authorizationHeader},this.wire=new g(o,n.notificationCenter,i),this.wire.fetchSyncTime({after:"connect"})),null!=n.cable&&(this.line=new O(n.cable,n.notificationCenter,this.wire),this.line.connect()),null!=this.wire&&this.wire.setLine(this.line),this._ready((c=this,function(){var o;if(e.IdentityMap.clear(),o=(0,t.init)(l),c.env.namespaceController=o.namespaceController,c.env.controller=o.controller,c.env.action=o.action,null!=n.postInit)return n.postInit()}))},n.prototype.emit=function(t){return this.line.send(t)},n.prototype._ready=function(t){return(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?t():document.addEventListener("DOMContentLoaded",t)},n}();var k=function(){return e.Config.locale},M=function(t){return e.Config.locale=t},L=function(t){e.Config.cookiesByCORS=t.cookiesByCORS||!1,e.Config.locale=t.locale||"en";for(var n=0,o=Object.keys(t.controllers||{});n<o.length;n++){var r=o[n];l[r]=t.controllers[r]}var i=function(t){for(var n=t.models||{},o=0,r=Object.keys(n);o<r.length;o++){var i=r[o];e.Models[i]=n[i],null!=t.protocolWithHost&&(e.Models[i].protocolWithHost=t.protocolWithHost),null!=t.authorizationHeader&&(e.Models[i].authorizationHeader=t.authorizationHeader),null!=t.cookiesByCORS&&(e.Models[i].cookiesByCORS=t.cookiesByCORS)}return n}(t),c=new I(i);return c.init(t),c},R=function(t){return{getLocale:k,loco:t,I18n:e.I18n}},A=e.IdentityMap.subscribe})(),r})()));
//# sourceMappingURL=loco.js.map