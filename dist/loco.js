!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Loco=n():t.Loco=n()}(self,(()=>(()=>{"use strict";var t={d:(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{connectWithModel:()=>k,init:()=>C,subscribe:()=>j});var e=null,o=null;const i=function(){function t(){}return t.toURIParams=function(t){var n,e,o;for(n in e="",t)o=t[n],""!==e&&(e+="&"),e+=n+"="+encodeURIComponent(o);return e},t}(),r=function(t,n,e){var o=document.querySelector("meta[name='csrf-token']"),i=new XMLHttpRequest;return i.withCredentials=!0===e.cookiesByCORS,i.open(t,n),i.setRequestHeader("Accept","application/json"),o&&i.setRequestHeader("X-CSRF-Token",o.content),null!=e.authorizationHeader&&i.setRequestHeader("Authorization",e.authorizationHeader),i};var c=[];const l=function(t){return!!c.includes(t)||(c.unshift(t),c.length>100&&c.pop(),!1)};var u;u=function(){var t,n,e,i,r;for(t in e=[],r=/^[A-Z]/,o)if(o[t],r.exec(t)&&"Base"!==t)for(n in e.push(t),i=o[t])i[n],r.exec(n)&&e.push(t+"."+n);return e};function s(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=a(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,l=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){l=!0,r=t},f:function(){try{c||null==e.return||e.return()}finally{if(l)throw r}}}}function a(t,n){if(t){if("string"==typeof t)return f(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?f(t,n):void 0}}function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}var d=function(t,n,e,o){null!=t&&t({type:n,payload:e},o)};const p=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n.log&&console.log(t);var i,r,c=(r=4,function(t){if(Array.isArray(t))return t}(i=t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var o,i,r,c,l=[],u=!0,s=!1;try{if(r=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;u=!1}else for(;!(u=(o=r.call(e)).done)&&(l.push(o.value),l.length!==n);u=!0);}catch(t){s=!0,i=t}finally{try{if(!u&&null!=e.return&&(c=e.return(),Object(c)!==c))return}finally{if(s)throw i}}return l}}(i,r)||a(i,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=c[0],p=c[1],h=c[2],y=c[3];if(l(y.loco.idempotency_key))return!1;delete y.loco;var m=function(t){var n,e,i,r;for(n=0,e=(r=u()).length;n<e;n++)if(1===(i=r[n].split(".")).length){if(o[i[0]].getRemoteName()===t)return o[i[0]]}else if(2===i.length&&o[i[0]][i[1]].getRemoteName()===t)return o[i[0]][i[1]]}(f);if(void 0===m)return d(n.notificationCenter,"".concat(f," ").concat(h),y,n.emit),!1;var v=m.getIdentity();return d(n.notificationCenter,"".concat(v," ").concat(h),y,n.emit),void 0!==e.imap[v]&&(void 0!==e.imap[v][p]&&function(t,n,o,i,r){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;null===c&&(c=new i({id:t}));var l,u=s(e.findConnected(r,t));try{for(u.s();!(l=u.n()).done;)(0,l.value)(n,o)}catch(t){u.e(t)}finally{u.f()}}(p,h,y,m,v),void 0!==e.imap[v].collection&&0!==e.imap[v].collection.length&&(function(t,n,o){var i,r=s(e.imap[o].collection);try{for(r.s();!(i=r.n()).done;)(0,i.value)("".concat(o," ").concat(t),n)}catch(t){r.e(t)}finally{r.f()}}(h,y,v),!0))};var h;h=function(){function t(t,n,e){var o,i,r,c;this.pollingTime=null!=(o=t.pollingTime)?o:3e3,this.log=!(null==t.log||!t.log),this.ssl=t.ssl,this.location=null!=(i=t.location)?i:"notification-center",this.size=null!=(r=t.size)?r:100,this.protocolWithHost=t.protocolWithHost,this.allowedDisconnectionTime=null!=(c=t.allowedDisconnectionTime)?c:10,this.disconnectedForTooLong=t.disconnectedForTooLong,this.notificationCenter=n,this.reqOpts=e,this.syncTime=null,this.token=null,this.pollingInterval=null,this.disconnectedSinceTime=null,this.uuid=null,this.line=null}return t.prototype.setDisconnectedForTooLong=function(t){return this.disconnectedForTooLong=t},t.prototype.setLine=function(t){return this.line=t},t.prototype.setPollingTime=function(t){var n;if(this.pollingTime=t,!(null!=(n=this.line)?n.connected:void 0))return this.disconnect(),this.connect()},t.prototype.connect=function(){return this.check(),this.pollingInterval=setInterval((t=this,function(){var n;if(!(null!=(n=t.line)?n.connected:void 0))return t.check();t.disconnect()}),this.pollingTime);var t},t.prototype.disconnect=function(){return window.clearInterval(this.pollingInterval)},t.prototype.check=function(){var t,n;return(t=r("GET",this._getURL()+"?"+i.toURIParams(this._requestParams()),this.reqOpts)).onload=(n=this,function(t){var e,o,i,r,c;if(t.target.status>=200&&t.target.status<400){if(e=JSON.parse(t.target.response),n.disconnectedSinceTime=null,n.syncTime=e[1],0===(c=e[0]).length)return;for(o=0,i=c.length;o<i;o++)r=c[o],p(r,{log:n.log,notificationCenter:n.notificationCenter,emit:n.line.send});if(c.length===n.size)return n.check()}else if(t.target.status>=500)return n._handleDisconnection()}),t.onerror=function(t){return function(){return t._handleDisconnection()}}(this),t.send()},t.prototype.fetchSyncTime=function(t){var n,e;return null==t&&(t={}),(n=r("GET",this._getURL()+"/sync-time",this.reqOpts)).onerror=(e=this,function(){if(null!=t.after)return e[t.after]()}),n.onload=function(n){return function(e){var o;if(e.target.status>=200&&e.target.status<400){if(o=JSON.parse(e.target.response),n.syncTime=o.sync_time,null!=t.after)return n[t.after]()}else if(e.target.status>=500&&null!=t.after)return n[t.after]()}}(this),n.send()},t.prototype._requestParams=function(){var t;return t={synced_at:this.syncTime},null!=this.token&&(t.token=this.token),null!=this.uuid&&(t.uuid=this.uuid),t},t.prototype._getURL=function(){var t,n,e,o;return n=(e=window.location.href.split("/"))[0],e[1],t=e[2],null!=this.protocolWithHost&&(n=(o=this.protocolWithHost.split("//"))[0],t=o[1]),null!=this.ssl&&(n=this.ssl?"https:":"http:"),n+"//"+t+"/"+this.location},t.prototype._handleDisconnection=function(){if(null==this.disconnectedSinceTime&&(this.disconnectedSinceTime=new Date),(new Date-this.disconnectedSinceTime)/1e3>this.allowedDisconnectionTime&&null!=this.disconnectedForTooLong)return this.disconnectedForTooLong(this.disconnectedSinceTime)},t}();const y=h;function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function g(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,b(o.key),o)}}function b(t){var n=function(t,n){if("object"!=v(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,"string");if("object"!=v(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==v(n)?n:String(n)}var S=function(){function t(n,e,o){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.cable=n,this.notificationCenter=e,this.wire=o,this.connected=!1,this.subscription=null}var n,e;return n=t,e=[{key:"connect",value:function(){var t=this;this.subscription=this.cable.subscriptions.create({channel:"Loco::NotificationCenterChannel"},{connected:function(){console.log("WS connected"),t.connected=!0,t.notificationCenter({loco:"connected"}),t.pong()},disconnected:function(){console.log("WS disconnected"),t.connected=!1,null!==t.wire&&(t.wire.uuid=null,t.wire.fetchSyncTime({after:"connect"})),t.notificationCenter({loco:"disconnected"})},rejected:function(){console.log("WS rejected"),t.notificationCenter({loco:"rejected"})},received:function(n){if(null!=n.loco){var e=function(t,n){var e=n.line,o=n.wire,i=n.processNotification,r=n.notificationCenter;if(!0===t.ping&&e.pong(),null!=o)return"string"==typeof t.sync_time&&(o.syncTime=t.sync_time),"string"==typeof t.uuid&&(console.log("uuid: ".concat(t.uuid)),o.uuid=t.uuid),"object"===m(t.notification)&&"Array"===t.notification.constructor.name&&i(t.notification,{log:o.log,notificationCenter:r,emit:e.send}),"string"!=typeof t.idempotency_key||!l(t.idempotency_key)}(n.loco,{line:t,wire:t.wire,processNotification:p,notificationCenter:t.notificationCenter});if(!0!==e)return;delete n.loco}0!==Object.keys(n).length&&t.notificationCenter(n)}})}},{key:"send",value:function(t){this.subscription.send(t)}},{key:"pong",value:function(){var t=this;setTimeout((function(){return t.send({loco:{pong:!0}})}),3e3)}}],e&&g(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();const w=S,T=function(){function t(t){this.models=t,this.wire=null,this.line=null}return t.prototype.getModels=function(){return this.models},t.prototype.getLine=function(){var t;return null!=(t=this.line)?t.subscription:void 0},t.prototype.getWire=function(){return this.wire},t.prototype.setAuthorizationHeader=function(t){var n,e,o,i;for(n in i=[],o=this.models)e=o[n],i.push(e.authorizationHeader=t);return i},t.prototype.setDisconnectedForTooLong=function(t){return this.wire.setDisconnectedForTooLong(t)},t.prototype.init=function(t){var n,o,i;return(n=null!=(o=t.notifications)?o:{}).protocolWithHost=t.protocolWithHost,!1!==n.enable&&(i={cookiesByCORS:t.cookiesByCORS,authorizationHeader:t.authorizationHeader},this.wire=new y(n,t.notificationCenter,i),this.wire.fetchSyncTime({after:"connect"})),null!=t.cable&&(this.line=new w(t.cable,t.notificationCenter,this.wire),this.line.connect()),null!=this.wire&&this.wire.setLine(this.line),this._ready((function(){if(null!==e&&e.clear(),null!=t.postInit)return t.postInit()}))},t.prototype.emit=function(t){return this.line.send(t)},t.prototype._ready=function(t){return(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?t():document.addEventListener("DOMContentLoaded",t)},t}();var C=function(t){var n=function(t){var n=t.models||{};if(null===o)return n;for(var e=0,i=Object.keys(n);e<i.length;e++){var r=i[e];o[r]=n[r]}return n}(t),e=new T(n);return e.init(t),e},j=function(){},k=function(t){var n,i;n=t.IdentityMap,e=n,i=t.Models,o=i,j=t.IdentityMap.subscribe};return n})()));
//# sourceMappingURL=loco.js.map