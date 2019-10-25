!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("loco-js-model")):"function"==typeof define&&define.amd?define(["loco-js-model"],t):"object"==typeof exports?exports.App=t(require("loco-js-model")):e.App=t(e.LocoModel)}(window,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=22)}([function(e,t,n){"use strict";n.r(t),n.d(t,"Deps",(function(){return i}));var r=n(1);n.d(t,"Base",(function(){return r.Base})),n.d(t,"Config",(function(){return r.Config})),n.d(t,"I18n",(function(){return r.I18n})),n.d(t,"IdentityMap",(function(){return r.IdentityMap})),n.d(t,"Models",(function(){return r.Models})),n.d(t,"Validators",(function(){return r.Validators}));var i={cable:null,NotificationCenter:null}},function(t,n){t.exports=e},function(e,t,n){"use strict";n.r(t);t.default={loco:null,namespaceController:null,controller:null,action:null}},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(15),o=n.n(i);r.I18n.en=o.a,t.default=r.I18n},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,i=[{key:"map",value:function(e,t){var n,r,i,o;for(i=[],n=0,r=e.length;n<r;n++)o=e[n],i.push(t(o));return i}},{key:"uniq",value:function(e){var t,n,r,i;for(r=[],t=0,n=e.length;t<n;t++)i=e[t],-1===r.indexOf(i)&&r.push(i);return r}}],(n=null)&&r(t.prototype,n),i&&r(t,i),e}();t.default=i},function(e,t,n){"use strict";n.r(t);t.default={Loco:{}}},function(e,t,n){"use strict";n.r(t);var r=n(13),i={Base:n.n(r).a};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(5)),i=l(n(2)),o=n(0);function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.connected=!1}var t,n,l;return t=e,(n=[{key:"connect",value:function(){var e=this;return r.default.Loco.NotificationCenter=o.Deps.cable.subscriptions.create({channel:"Loco::NotificationCenterChannel"},{connected:function(){var t;return console.log("ws connected"),e.connected=!0,null!=(t=i.default.loco.getWire())&&t.setDelayedDisconnection(),e._sendNotification({loco:"connected"})},disconnected:function(){var t;return console.log("ws disconnected"),e.connected=!1,null!=(t=i.default.loco.getWire())&&(t.setUuid(null),t.fetchSyncTime({after:"connect"})),e._sendNotification({loco:"disconnected"})},rejected:function(){return console.log("ws rejected"),e._sendNotification({loco:"rejected"})},received:function(t){if(null!=t.loco&&(e._processSystemNotification(t.loco),delete t.loco),0!==Object.keys(t).length)return e._sendNotification(t)}})}},{key:"isWireAllowed",value:function(){return!this.connected}},{key:"send",value:function(e){return r.default.Loco.NotificationCenter.send(e)}},{key:"_processSystemNotification",value:function(e){var t;if(null!=e.connection_check&&this.send({loco:{connection_check:!0}}),null!=(t=i.default.loco.getWire()))return null!=e.sync_time&&t.setSyncTime(e.sync_time),null!=e.uuid&&(console.log("uuid: ".concat(e.uuid)),t.setUuid(e.uuid)),null!=e.notification&&t.processNotification(e.notification),null!=e.xhr_notifications&&t.check(),e.start_ajax_polling?(console.log("wire connected"),this.connected=null,t.setUuid(null),t.fetchSyncTime({after:"connect"})):void 0}},{key:"_sendNotification",value:function(e){return null!=o.Deps.NotificationCenter.receivedSignal?o.Deps.NotificationCenter.receivedSignal(e):(new o.Deps.NotificationCenter).receivedSignal(e)}}])&&u(t.prototype,n),l&&u(t,l),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(2)),i=n(0),o=l(n(10));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(){var t,n,r,i,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.syncTime=null,this.token=null,this.pollingInterval=null,this.pollingTime=null!=(t=o.pollingTime)?t:3e3,this.log=!(null==o.log||!o.log),this.ssl=o.ssl,this.location=null!=(n=o.location)?n:"notification-center",this.size=null!=(r=o.size)?r:100,this.protocolWithHost=o.protocolWithHost,this.allowedDisconnectionTime=null!=(i=o.allowedDisconnectionTime)?i:10,this.disconnectedSinceTime=null,this.uuid=null,this.delayedDisconnection=!1}var t,n,l;return t=e,(n=[{key:"setToken",value:function(e){return this.token=e}},{key:"getSyncTime",value:function(){return this.syncTime}},{key:"setSyncTime",value:function(e){return this.syncTime=e}},{key:"resetSyncTime",value:function(){return this.syncTime=null}},{key:"getPollingTime",value:function(){return this.pollingTime}},{key:"setPollingTime",value:function(e){return this.pollingTime=e,this.disconnect(),this.connect()}},{key:"getPollingInterval",value:function(){return this.pollingInterval}},{key:"getSSL",value:function(){return this.ssl}},{key:"setSSL",value:function(e){return this.ssl=e}},{key:"getLocation",value:function(){return this.location}},{key:"setLocation",value:function(e){return this.location=e}},{key:"getSize",value:function(){return this.size}},{key:"setSize",value:function(e){return this.size=e}},{key:"getAllowedDisconnectionTime",value:function(){return this.allowedDisconnectionTime}},{key:"setAllowedDisconnectionTime",value:function(e){return this.allowedDisconnectionTime=e}},{key:"getUuid",value:function(){return this.uuid}},{key:"setUuid",value:function(e){return this.uuid=e}},{key:"setDelayedDisconnection",value:function(){return this.delayedDisconnection=!0}},{key:"connect",value:function(){var e,t=this;if(null==(e=r.default.loco.getLine())||e.isWireAllowed())return this.pollingInterval=setInterval((function(){if(t.check(),t.delayedDisconnection)return t.delayedDisconnection=!1,t.disconnect()}),this.pollingTime)}},{key:"disconnect",value:function(){return window.clearInterval(this.pollingInterval)}},{key:"disableNotifications",value:function(){return console.log("Wire#disableNotifications - DEPRECATED"),this.disconnect()}},{key:"processNotification",value:function(e){var t,n,o,l,a,s,c;this.log&&console.log(e);var f=u(e,4);if(t=f[0],n=f[1],c=f[2],s=f[3],o=(l=r.default.loco.getModelForRemoteName(t)).getIdentity(),null!=i.IdentityMap.imap[o]&&(null!=i.IdentityMap.imap[o][n]&&(null!=(a=i.IdentityMap.find(o,n)).receivedSignal&&a.receivedSignal(c,s),this._emitSignalToMembers(n,c,s,l,o)),null!=l.receivedSignal&&l.receivedSignal(c,s),null!=i.IdentityMap.imap[o].collection&&0!==i.IdentityMap.imap[o].collection.length))return this._emitSignalToCollection(c,s,o)}},{key:"processSignal",value:function(e){return this.processNotification(e)}},{key:"check",value:function(){var e,t=this;if(0!==Object.keys(i.IdentityMap.imap).length||null!=this.token||null==this.syncTime)return(e=new XMLHttpRequest).open("GET",this._getURL()+"?"+o.default.toURIParams(this._requestParams())),e.onload=function(e){var n,r,i,o,l;if(e.target.status>=200&&e.target.status<400){if(n=JSON.parse(e.target.response),t.disconnectedSinceTime=null,t.syncTime=n[1],0===(l=n[0]).length)return;for(r=0,i=l.length;r<i;r++)o=l[r],t.processNotification(o);if(l.length===t.size)return t.check()}else if(e.target.status>=500)return t._handleDisconnection()},e.onerror=function(){return t._handleDisconnection()},e.send()}},{key:"fetchSyncTime",value:function(){var e,t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(e=new XMLHttpRequest).open("GET","".concat(this._getURL(),"/sync-time")),e.onerror=function(){if(null!=n.after)return t[n.after]()},e.onload=function(e){var r;if(e.target.status>=200&&e.target.status<400){if(r=JSON.parse(e.target.response),t.syncTime=r.sync_time,null!=n.after)return t[n.after]()}else if(e.target.status>=500&&null!=n.after)return t[n.after]()},e.send()}},{key:"_emitSignalToMembers",value:function(e,t,n,r,o){var l,u,a,s,c,f=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;for(null==f&&(f=new r({id:e})),c=[],u=0,a=(s=i.IdentityMap.findConnected(o,e)).length;u<a;u++)null!=(l=s[u]).receiverFor(f)?c.push(l[l.receiverFor(f)](t,n)):null!=l.receivedSignal?c.push(l.receivedSignal(t,n)):c.push(void 0);return c}},{key:"_emitSignalToCollection",value:function(e,t,n){var r,o,l,u,a;for(a=[],r=0,o=(u=i.IdentityMap.imap[n].collection).length;r<o;r++)null!=(l=u[r]).receiverFor(n)?a.push(l[l.receiverFor(n)]("".concat(n," ").concat(e),t)):null!=l.receivedSignal?a.push(l.receivedSignal("".concat(n," ").concat(e),t)):a.push(void 0);return a}},{key:"_requestParams",value:function(){var e;return e={synced_at:this.syncTime},null!=this.token&&(e.token=this.token),null!=this.uuid&&(e.uuid=this.uuid),e}},{key:"_getURL",value:function(){var e,t,n=u(window.location.href.split("/"),3);if(t=n[0],n[1],e=n[2],null!=this.protocolWithHost){var r=u(this.protocolWithHost.split("//"),2);t=r[0],e=r[1]}return null!=this.ssl&&(t=this.ssl?"https:":"http:"),"".concat(t,"//").concat(e,"/").concat(this.location)}},{key:"_handleDisconnection",value:function(){var e,t,n;if(null==this.disconnectedSinceTime&&(this.disconnectedSinceTime=new Date),t=(new Date-this.disconnectedSinceTime)/1e3,e=null!=(n=r.default.namespaceController)?n:r.default.controller,t>this.allowedDisconnectionTime&&null!=e.disconnectedForTooLong)return e.disconnectedForTooLong(this.disconnectedSinceTime)}}])&&a(t.prototype,n),l&&a(t,l),e}();t.default=s},function(e,t,n){"use strict";n.r(t);var r=n(4),i=n.n(r),o=n(18),l=n.n(o),u=n(19),a=n.n(u),s=n(10),c=n.n(s),f=n(20),d=n.n(f),h={Array:i.a,Collection:l.a,Dom:a.a,Object:c.a,String:d.a};t.default=h},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,i=[{key:"toURIParams",value:function(e){var t,n,r;for(t in n="",e)r=e[t],""!==n&&(n+="&"),n+=t+"="+encodeURIComponent(r);return n}}],(n=null)&&r(t.prototype,n),i&&r(t,i),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=n(0),o=(r=n(4))&&r.__esModule?r:{default:r};function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"connectWith",value:function(e){var t,n,r,l,u,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==e)return null;for("Array"!==e.constructor.name&&(e=[e]),u=[],t=0,r=(e=o.default.uniq(e)).length;t<r;t++)"Function"===(l=e[t]).constructor.name?(n=l.getIdentity(),i.IdentityMap.addCollection(n,{to:this}),null!=a.receiver?u.push(this.receivers[n]=a.receiver):u.push(void 0)):(i.IdentityMap.connect(this,{with:l}),null!=a.receiver?u.push(this.receivers[l.toKey()]=a.receiver):u.push(void 0));return u}},{key:"receiverFor",value:function(e){return"String"===e.constructor.name?null!=this.receivers[e]?this.receivers[e]:null:null!=this.receivers[e.toKey()]?this.receivers[e.toKey()]:null}}])&&l(t.prototype,n),r&&l(t,r),e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(0),i=a(n(8)),o=a(n(7)),l=a(n(2)),u=a(n(6));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){var t,n,r,i,o,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wire=null,this.line=null,this.turbolinks=null!=(n=l.turbolinks)&&n,this.startWire=!(null==(r=l.notifications)||!r.enable),this.postInit=l.postInit,this.setLocale(null!=(i=l.locale)?i:"en"),this.setProtocolWithHost(l.protocolWithHost),(t=null!=(o=l.notifications)?o:{}).protocolWithHost=this.getProtocolWithHost(),this.notificationsParams=t}var t,n,a;return t=e,(n=[{key:"getWire",value:function(){return this.wire}},{key:"getLine",value:function(){return this.line}},{key:"getLocale",value:function(){return r.Config.locale}},{key:"setLocale",value:function(e){return r.Config.locale=e}},{key:"getProtocolWithHost",value:function(){return r.Config.protocolWithHost}},{key:"setProtocolWithHost",value:function(e){return r.Config.protocolWithHost=e}},{key:"init",value:function(){var e,t=this;return l.default.loco=this,this.initWire(),this.initLine(),this.turbolinks?(e=Number(this.turbolinks)>=5?"turbolinks:load":"page:change",document.addEventListener(e,(function(){if(t.flow(),null!=t.postInit)return t.postInit()}))):this.ready((function(){if(t.flow(),null!=t.postInit)return t.postInit()}))}},{key:"ready",value:function(e){return(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?e():document.addEventListener("DOMContentLoaded",e)}},{key:"initWire",value:function(){if(this.startWire)return this.wire=new i.default(this.notificationsParams),this.wire.fetchSyncTime({after:"connect"})}},{key:"initLine",value:function(){if(null!=r.Deps.cable)return this.line=new o.default,this.line.connect()}},{key:"flow",value:function(){var e,t,n;if(r.IdentityMap.clear(),n=document.getElementsByTagName("body")[0].getAttribute("data-namespace"),t=document.getElementsByTagName("body")[0].getAttribute("data-controller"),e=document.getElementsByTagName("body")[0].getAttribute("data-action"),l.default.action=e,null!=u.default[n]?(l.default.namespaceController=new u.default[n],null!=u.default[n][t]&&(l.default.controller=new u.default[n][t]),null!=l.default.namespaceController.constructor.initialize&&l.default.namespaceController.constructor.initialize(),null!=l.default.namespaceController.initialize&&l.default.namespaceController.initialize(),null!=l.default.controller&&(l.default.namespaceController.setSubController(l.default.controller),l.default.controller.setSuperController(l.default.namespaceController),null!=l.default.controller.constructor.initialize&&l.default.controller.constructor.initialize(),null!=l.default.controller.initialize&&l.default.controller.initialize(),null!=l.default.controller.constructor[e]&&l.default.controller.constructor[e](),null!=l.default.controller[e]&&l.default.controller[e]())):u.default[t]&&(l.default.controller=new u.default[t],null!=l.default.controller.constructor.initialize&&l.default.controller.constructor.initialize(),null!=l.default.controller.initialize&&l.default.controller.initialize(),null!=l.default.controller.constructor[e]&&l.default.controller.constructor[e](),null!=l.default.controller[e]&&l.default.controller[e]()),null!=this.wire)return this.wire.resetSyncTime(),this.wire.fetchSyncTime()}},{key:"emit",value:function(e){return this.line.send(e)}},{key:"getModels",value:function(){var e,t,n,i,o;for(e in n=[],o=/^[A-Z]/,r.Models)if(r.Models[e],o.exec(e)&&"Base"!==e)for(t in n.push(e),i=r.Models[e])i[t],o.exec(t)&&n.push("".concat(e,".").concat(t));return n}},{key:"getModelForRemoteName",value:function(e){var t,n,i,o;for(t=0,n=(o=this.getModels()).length;t<n;t++)if(1===(i=o[t].split(".")).length){if(r.Models[i[0]].getRemoteName()===e)return r.Models[i[0]]}else if(2===i.length&&r.Models[i[0]][i[1]].getRemoteName()===e)return r.Models[i[0]][i[1]]}}])&&s(t.prototype,n),a&&s(t,a),e}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=u(n(11)),o=n(0),l=u(n(4));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.views={},this.receivers={},this.subController=null,this.superController=null,this.params=this.__fetchParams()}var t,n,r;return t=e,(n=[{key:"setView",value:function(e,t){return this.views[e]=t}},{key:"getView",value:function(e){return this.views[e]}},{key:"getViews",value:function(){return this.views}},{key:"setSubController",value:function(e){return this.subController=e}},{key:"getSubController",value:function(){return this.subController}},{key:"setSuperController",value:function(e){return this.superController=e}},{key:"getSuperController",value:function(){return this.superController}},{key:"setResource",value:function(e){return this.setScope(e)}},{key:"setScope",value:function(e){return o.Config.scope=e}},{key:"__fetchParams",value:function(){var e,t,n,r,i,o,u,a,s,c,f;if(u={},null!=(n=null!=(o=/https?:\/\/.+\/\w+\/(\d+)/.exec(window.location.href))?o[1]:null)&&(u.id=parseInt(n)),1===(c=window.location.href.split("?")).length)return u;for(s=c[c.length-1],t=0,i=(a=l.default.map(s.split("&"),(function(e){return e.split("=")}))).length;t<i;t++)e=a[t],r=decodeURIComponent(e[0]),null!=(f=decodeURIComponent(e[1]))&&(f=f.replace(/\+/g," ")),u[r]=f;return u}}])&&a(t.prototype,n),r&&a(t,r),e}(),Object.assign(r.prototype,i.default);var s=r;t.default=s},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,(n=[{key:"simpleFormat",value:function(e){return(e=(e=e.replace(/\r\n?/,"\n")).trim()).length>0&&(e="<p>"+(e=(e=e.replace(/\n\n+/g,"</p><p>")).replace(/\n/g,"<br>"))+"</p>"),e}}])&&r(t.prototype,n),i&&r(t,i),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={variants:{},models:{},attributes:{},ui:{form:{sending:"Sending...",success:"Success",errors:{connection:"Connection Error",invalid_data:"Invalid data"}}},date:{formats:{default:"%Y-%m-%d",short:"%b %d",long:"%B %d, %Y"},day_names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbr_day_names:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],month_names:["January","February","March","April","May","June","July","August","September","October","November","December"],abbr_month_names:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},errors:{messages:{accepted:"must be accepted",blank:"can't be blank",confirmation:"doesn't match %{attribute}",empty:"can't be empty",equal_to:"must be equal to %{count}",even:"must be even",exclusion:"is reserved",greater_than:"must be greater than %{count}",greater_than_or_equal_to:"must be greater than or equal to %{count}",inclusion:"is not included in the list",invalid:"is invalid",less_than:"must be less than %{count}",less_than_or_equal_to:"must be less than or equal to %{count}",not_a_number:"is not a number",not_an_integer:"must be an integer",odd:"must be odd",present:"must be blank",too_long:{one:"is too long (maximum is 1 character)",other:"is too long (maximum is %{count} characters)"},too_short:{one:"is too short (minimum is 1 character)",other:"is too short (minimum is %{count} characters)"},wrong_length:{one:"is the wrong length (should be 1 character)",other:"is the wrong length (should be %{count} characters)"},other_than:"must be other than %{count}"}}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(3)),i=o(n(2));function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.date=t}var t,n,o;return t=e,(n=[{key:"toString",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";switch(e=r.default[i.default.loco.getLocale()].date.formats,t){case"default":return this.strftime(e.default);case"short":return this.strftime(e.short);case"long":return this.strftime(e.long);default:return console.log("Services.Date#toString: unknown format.")}}},{key:"strftime",value:function(e){var t,n=this;return t=r.default[i.default.loco.getLocale()],(e=(e=(e=(e=(e=(e=(e=(e=e.replace("%Y",(function(e){return n.date.getFullYear()}))).replace("%y",(function(e){return n.date.getFullYear().toString().slice(-2)}))).replace("%m",(function(e){var t;return(t=n.date.getMonth()+1)>=10?t:"0".concat(t)}))).replace("%b",(function(e){return t.date.abbr_month_names[n.date.getMonth()]}))).replace("%B",(function(e){return t.date.month_names[n.date.getMonth()]}))).replace("%d",(function(e){return n.date.getDate()>=10?n.date.getDate():"0".concat(n.date.getDate())}))).replace("%H",(function(e){return n.date.getHours()>=10?n.date.getHours():"0".concat(n.date.getHours())}))).replace("%M",(function(e){return n.date.getMinutes()>=10?n.date.getMinutes():"0".concat(n.date.getMinutes())}))).replace("%S",(function(e){return n.date.getSeconds()>=10?n.date.getSeconds():"0".concat(n.date.getSeconds())}))}}])&&l(t.prototype,n),o&&l(t,o),e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(9)),i=l(n(3)),o=l(n(2));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.formId=t.id,this.obj=t.for,this.initObj=!(null==t.initObj||!t.initObj),this.delegator=t.delegator,this.callbackSuccess=t.callbackSuccess,this.callbackFailure=t.callbackFailure,this.callbackActive=t.callbackActive,this.form=this._findForm(),this.submit=null,this.submitVal=null,null!=this.form&&(this.submit=this.form.querySelector('[type="submit"]')),null!=this.submit&&(this.submitVal=this.submit.value),this.locale=o.default.loco.getLocale()}var t,n,l;return t=e,(n=[{key:"getObj",value:function(){return this.obj}},{key:"render",value:function(){return this.initObj?(this._assignAttribs(),this._handle()):null!=this.form?(this.fill(),this._handle()):void 0}},{key:"fill",value:function(){var e,t,n,i,o,l,u,a,s=this,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null==this.obj)return null;if(null==this.obj.constructor.attributes)return null;for(n in e={},null!=c?e[c]=null:e=this.obj.constructor.attributes,u=[],e)e[n],l=this.obj.getAttrRemoteName(n),null!==(i=this.form.querySelector("[data-attr=".concat(l,"]")))&&0!==(t=i.querySelectorAll("input,textarea,select")).length&&(1!==t.length?1!==(a=r.default.Array.uniq(r.default.Array.map(t,(function(e){return e.getAttribute("type")})))).length||"radio"!==a[0]||null==(o=r.default.Collection.find(t,(function(e){return e.value===String(s.obj[n])})))?"hidden"!==t[0].getAttribute("type")&&"checkbox"!==t[t.length-1].getAttribute("type")||u.push(t[t.length-1].checked=Boolean(this.obj[n])):o.checked=!0:t[0].value=this.obj[n]);return u}},{key:"_findForm",value:function(){var e;return null!=this.formId?document.getElementById("".concat(this.formId)):null!=this.obj?(e=this.obj.getIdentity().toLowerCase(),null!=this.obj.id?document.getElementById("edit_".concat(e,"_").concat(this.obj.id)):document.getElementById("new_".concat(e))):void 0}},{key:"_handle",value:function(){var e=this;return this.form.addEventListener("submit",(function(t){var n;if(t.preventDefault(),e._canBeSubmitted()){if(null!=e.obj)return e._assignAttribs(),e._hideErrors(),e.obj.isInvalid()?(e._renderErrors(),void(null!=e.callbackFailure&&e.delegator[e.callbackFailure]())):(e._submittingForm(!1),n=null==e.obj.id,e.obj.save().then((function(t){return e._alwaysAfterRequest(),t.success?e._handleSuccess(t,n):(null!=e.callbackFailure&&e.delegator[e.callbackFailure](),e._renderErrors())})).catch((function(t){return e._connectionError()})));e._submitForm()}}))}},{key:"_canBeSubmitted",value:function(){return null==this.submit||!r.default.Dom.hasClass(this.submit,"active")&&!r.default.Dom.hasClass(this.submit,"success")&&!r.default.Dom.hasClass(this.submit,"failure")}},{key:"_submitForm",value:function(){var e,t,n,r,i=this;return this._submittingForm(),r=this.form.getAttribute("action")+".json",e=new FormData(this.form),(n=new XMLHttpRequest).open("POST",r),n.setRequestHeader("X-CSRF-Token",null!=(t=document.querySelector("meta[name='csrf-token']"))?t.content:void 0),n.onload=function(t){return i._alwaysAfterRequest(),null!=i.submit&&i.submit.blur(),t.target.status>=200&&t.target.status<400?(e=JSON.parse(t.target.response)).success?i._handleSuccess(e,"POST"===i.form.getAttribute("method")):i._renderErrors(e.errors):t.target.status>=500?i._connectionError():void 0},n.onerror=function(){return i._alwaysAfterRequest(),null!=i.submit&&i.submit.blur(),i._connectionError()},n.send(e)}},{key:"_handleSuccess",value:function(e){var t,n,l,u=this,a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(l=null!=(t=null!=(n=e.flash)?n.success:void 0)?t:i.default[this.locale].ui.form.success,null!=this.submit&&(r.default.Dom.addClass(this.submit,"success"),this.submit.value=l),null!=e.access_token&&o.default.loco.getWire().setToken(e.access_token),null==this.callbackSuccess)return setTimeout((function(){var e,t,n,i,o,l;if(null!=u.submit&&(u.submit.disabled=!1,r.default.Dom.removeClass(u.submit,"success"),u.submit.value=u.submitVal),l=":not([data-loco-not-clear=true])",a){for(o=[],e=0,t=(i=u.form.querySelectorAll("input:not([type='submit'])".concat(l,", textarea").concat(l))).length;e<t;e++)n=i[e],o.push(n.value="");return o}}),5e3);null!=e.data?this.delegator[this.callbackSuccess](e.data):this.delegator[this.callbackSuccess]()}},{key:"_renderErrors",value:function(){var e,t,n,o,l,u,a,s,c,f=this,d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!(null!=this.obj&&null==this.obj.errors||null==this.obj&&null==d)){for(e in t=null!=d?d:this.obj.errors)if(n=t[e],null==(c=null!=this.obj?this.obj.getAttrRemoteName(e):e)||"base"===e)"base"===e&&n.length>0&&(1===(a=document.querySelectorAll(".errors[data-for='base']")).length?a[0].textContent=n[0]:null!=this.submit&&(this.submit.value=n[0]));else{if(null===(s=this.form.querySelector("[data-attr=".concat(c,"]"))))continue;if(0===(a=s.querySelectorAll(".errors[data-for=".concat(c,"]"))).length)continue;for(o=0,l=a.length;o<l;o++)(u=a[o]).textContent=n[0]}return null!=this.submit&&(this.submit.value!==this.submitVal&&this.submit.value!==i.default[this.locale].ui.form.sending||(this.submit.value=i.default[this.locale].ui.form.errors.invalid_data),r.default.Dom.addClass(this.submit,"failure")),this._showErrors(),setTimeout((function(){var e,t,n,i;for(null!=f.submit&&(f.submit.disabled=!1,r.default.Dom.removeClass(f.submit,"failure"),f.submit.value=f.submitVal),i=[],e=0,t=(n=f.form.querySelectorAll("input.invalid, textarea.invalid, select.invalid")).length;e<t;e++)u=n[e],i.push(r.default.Dom.removeClass(u,"invalid"));return i}),1e3)}}},{key:"_assignAttribs",value:function(){var e,t,n,i,o,l,u,a;if(null==this.obj.constructor.attributes)return null;for(t in u=[],o=this.obj.constructor.attributes)o[t],l=this.obj.getAttrRemoteName(t),null!==(n=this.form.querySelector("[data-attr=".concat(l,"]")))&&0!==(e=n.querySelectorAll("input,textarea,select")).length&&(1!==e.length?1!==(a=r.default.Array.uniq(r.default.Array.map(e,(function(e){return e.getAttribute("type")})))).length||"radio"!==a[0]||null==(i=r.default.Collection.find(e,(function(e){return!0===e.checked})))?"hidden"!==e[0].getAttribute("type")&&"checkbox"!==e[e.length-1].getAttribute("type")||(!0===e[e.length-1].checked?u.push(this.obj.assignAttr(t,e[e.length-1].value)):u.push(this.obj.assignAttr(t,e[0].value))):this.obj.assignAttr(t,i.value):this.obj.assignAttr(t,e[0].value));return u}},{key:"_hideErrors",value:function(){var e,t,n,r,i;for(i=[],t=0,n=(r=this.form.querySelectorAll(".errors")).length;t<n;t++)(e=r[t]).textContent.trim().length>0?(e.textContent="",i.push(e.style.display="none")):i.push(void 0);return i}},{key:"_showErrors",value:function(){var e,t,n,r,i;for(i=[],t=0,n=(r=this.form.querySelectorAll(".errors")).length;t<n;t++)(e=r[t]).textContent.trim().length>0?i.push(e.style.display="block"):i.push(void 0);return i}},{key:"_submittingForm",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(null!=this.submit&&(r.default.Dom.removeClass(this.submit,"success"),r.default.Dom.removeClass(this.submit,"failure"),r.default.Dom.addClass(this.submit,"active"),this.submit.value=i.default[this.locale].ui.form.sending),null!=this.callbackActive&&this.delegator[this.callbackActive](),e)return this._hideErrors()}},{key:"_connectionError",value:function(){var e=this;if(null!=this.submit)return r.default.Dom.removeClass(this.submit,"active"),r.default.Dom.addClass(this.submit,"failure"),this.submit.value=i.default[this.locale].ui.form.errors.connection,setTimeout((function(){return e.submit.disabled=!1,r.default.Dom.removeClass(e.submit,"failure"),e.submit.value=e.submitVal}),3e3)}},{key:"_alwaysAfterRequest",value:function(){if(null!=this.submit)return r.default.Dom.removeClass(this.submit,"active")}}])&&u(t.prototype,n),l&&u(t,l),e}();t.default=a},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,i=[{key:"find",value:function(e,t){var n,r,i;for(n=0,r=e.length;n<r;n++)if(!0===t(i=e[n]))return i}}],(n=null)&&r(t.prototype,n),i&&r(t,i),e}();t.default=i},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,i=[{key:"hasClass",value:function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)}},{key:"addClass",value:function(e,t){return e.classList?e.classList.add(t):e.className+=" "+t}},{key:"removeClass",value:function(e,t){return e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}],(n=null)&&r(t.prototype,n),i&&r(t,i),e}();t.default=i},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,i=[{key:"last",value:function(e){return e[e.length-1]}}],(n=null)&&r(t.prototype,n),i&&r(t,i),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i,o=(r=n(11))&&r.__esModule?r:{default:r};function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.views={},this.intervals={},this.receivers={},this.controller=null,this.delegator=null,null!=t.controller&&this.setController(t.controller),null!=t.delegator&&this.setDelegator(t.delegator)}var t,n,r;return t=e,(n=[{key:"setController",value:function(e){return this.controller=e}},{key:"getController",value:function(){return this.controller}},{key:"setView",value:function(e,t){return this.views[e]=t}},{key:"getView",value:function(e){return this.views[e]}},{key:"getViews",value:function(){return this.views}},{key:"setDelegator",value:function(e){return this.delegator=e}},{key:"getDelegator",value:function(e){return this.delegator}}])&&l(t.prototype,n),r&&l(t,r),e}(),Object.assign(i.prototype,o.default);var u=i;t.default=u},function(e,t,n){"use strict";n.r(t);var r=n(5),i=n(6),o=n(2),l=n(14),u={Text:n.n(l).a},a=n(3),s=n(7),c=n.n(s),f=n(12),d=n.n(f),h=n(16),v={Date:n.n(h).a},m=n(17),b={Form:n.n(m).a},y=n(9),g=n(21),p={Base:n.n(g).a},k=n(8),_=n.n(k),w=n(0);n.d(t,"Channels",(function(){return r.default})),n.d(t,"Controllers",(function(){return i.default})),n.d(t,"Deps",(function(){return w.Deps})),n.d(t,"Env",(function(){return o.default})),n.d(t,"Helpers",(function(){return u})),n.d(t,"I18n",(function(){return a.default})),n.d(t,"Line",(function(){return c.a})),n.d(t,"Loco",(function(){return d.a})),n.d(t,"Models",(function(){return w.Models})),n.d(t,"Services",(function(){return v})),n.d(t,"UI",(function(){return b})),n.d(t,"Utils",(function(){return y.default})),n.d(t,"Validators",(function(){return w.Validators})),n.d(t,"Views",(function(){return p})),n.d(t,"Wire",(function(){return _.a}))}])}));