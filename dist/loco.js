!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("loco-js-model")):"function"==typeof define&&define.amd?define(["loco-js-model"],e):"object"==typeof exports?exports.App=e(require("loco-js-model")):t.App=e(t.LocoModel)}(window,(function(t){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(e,n){e.exports=t},function(t,e,n){"use strict";n.r(e);var o,r={Loco:{}},i=n(0),l={cable:null,NotificationCenter:null},c=function(){function t(){}return t.map=function(t,e){var n,o,r,i;for(r=[],n=0,o=t.length;n<o;n++)i=t[n],r.push(e(i));return r},t.uniq=function(t){var e,n,o,r;for(o=[],e=0,n=t.length;e<n;e++)r=t[e],-1===o.indexOf(r)&&o.push(r);return o},t}(),s={connectWith:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)return null;"Array"!==t.constructor.name&&(t=[t]),t=c.uniq(t);var n=!0,o=!1,r=void 0;try{for(var l,s=t[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var u=l.value;if("Function"===u.constructor.name){var a=u.getIdentity();i.IdentityMap.addCollection(a,{to:this}),null!=e.receiver&&(this.receivers[a]=e.receiver)}else i.IdentityMap.connect(this,{with:u}),null!=e.receiver&&(this.receivers[u.toKey()]=e.receiver)}}catch(t){o=!0,r=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw r}}},receiverFor:function(t){return"String"===t.constructor.name?null!=this.receivers[t]?this.receivers[t]:null:null!=this.receivers[t.toKey()]?this.receivers[t.toKey()]:null}};o=function(){function t(){this.views={},this.receivers={},this.subController=null,this.superController=null,this.params=this.__fetchParams()}return t.prototype.setView=function(t,e){return this.views[t]=e},t.prototype.getView=function(t){return this.views[t]},t.prototype.getViews=function(){return this.views},t.prototype.setSubController=function(t){return this.subController=t},t.prototype.getSubController=function(){return this.subController},t.prototype.setSuperController=function(t){return this.superController=t},t.prototype.getSuperController=function(){return this.superController},t.prototype.setResource=function(t){return this.setScope(t)},t.prototype.setScope=function(t){return i.Config.scope=t},t.prototype.__fetchParams=function(){var t,e,n,o,r,i,l,s,u,a,f;if(l={},null!=(n=null!=(i=/https?:\/\/.+\/\w+\/(\d+)/.exec(window.location.href))?i[1]:null)&&(l.id=parseInt(n)),1===(a=window.location.href.split("?")).length)return l;for(u=a[a.length-1],e=0,r=(s=c.map(u.split("&"),(function(t){return t.split("=")}))).length;e<r;e++)t=s[e],o=decodeURIComponent(t[0]),null!=(f=decodeURIComponent(t[1]))&&(f=f.replace(/\+/g," ")),l[o]=f;return l},t}(),Object.assign(o.prototype,s);var u={Base:o},a={loco:null,namespaceController:null,controller:null,action:null},f={variants:{},models:{},attributes:{},ui:{form:{sending:"Sending...",success:"Success",errors:{connection:"Connection Error",invalid_data:"Invalid data"}}},date:{formats:{default:"%Y-%m-%d",short:"%b %d",long:"%B %d, %Y"},day_names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbr_day_names:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],month_names:["January","February","March","April","May","June","July","August","September","October","November","December"],abbr_month_names:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},errors:{messages:{accepted:"must be accepted",blank:"can't be blank",confirmation:"doesn't match %{attribute}",empty:"can't be empty",equal_to:"must be equal to %{count}",even:"must be even",exclusion:"is reserved",greater_than:"must be greater than %{count}",greater_than_or_equal_to:"must be greater than or equal to %{count}",inclusion:"is not included in the list",invalid:"is invalid",less_than:"must be less than %{count}",less_than_or_equal_to:"must be less than or equal to %{count}",not_a_number:"is not a number",not_an_integer:"must be an integer",odd:"must be odd",present:"must be blank",too_long:{one:"is too long (maximum is 1 character)",other:"is too long (maximum is %{count} characters)"},too_short:{one:"is too short (minimum is 1 character)",other:"is too short (minimum is %{count} characters)"},wrong_length:{one:"is the wrong length (should be 1 character)",other:"is the wrong length (should be %{count} characters)"},other_than:"must be other than %{count}"}}};i.I18n.en=f;var d,p=i.I18n,h=function(){function t(t){null==t&&(t={}),this.connected=!1}return t.prototype.connect=function(){return r.Loco.NotificationCenter=l.cable.subscriptions.create({channel:"Loco::NotificationCenterChannel"},{connected:(t=this,function(){var e;return console.log("ws connected"),t.connected=!0,null!=(e=a.loco.getWire())&&e.setDelayedDisconnection(),t._sendNotification({loco:"connected"})}),disconnected:function(t){return function(){var e;return console.log("ws disconnected"),t.connected=!1,null!=(e=a.loco.getWire())&&(e.setUuid(null),e.fetchSyncTime({after:"connect"})),t._sendNotification({loco:"disconnected"})}}(this),rejected:function(t){return function(){return console.log("ws rejected"),t._sendNotification({loco:"rejected"})}}(this),received:function(t){return function(e){if(null!=e.loco&&(t._processSystemNotification(e.loco),delete e.loco),0!==Object.keys(e).length)return t._sendNotification(e)}}(this)});var t},t.prototype.isWireAllowed=function(){return!this.connected},t.prototype.send=function(t){return r.Loco.NotificationCenter.send(t)},t.prototype._processSystemNotification=function(t){var e;if(null!=t.connection_check&&this.send({loco:{connection_check:!0}}),null!=(e=a.loco.getWire()))return null!=t.sync_time&&e.setSyncTime(t.sync_time),null!=t.uuid&&(console.log("uuid: "+t.uuid),e.setUuid(t.uuid)),null!=t.notification&&e.processNotification(t.notification),null!=t.xhr_notifications&&e.check(),t.start_ajax_polling?(console.log("wire connected"),this.connected=null,e.setUuid(null),e.fetchSyncTime({after:"connect"})):void 0},t.prototype._sendNotification=function(t){return null!=l.NotificationCenter.receivedSignal?l.NotificationCenter.receivedSignal(t):(new l.NotificationCenter).receivedSignal(t)},t}(),g=function(){function t(){}return t.toURIParams=function(t){var e,n,o;for(e in n="",t)o=t[e],""!==n&&(n+="&"),n+=e+"="+encodeURIComponent(o);return n},t}(),m=function(){function t(t){var e,n,o,r;null==t&&(t={}),this.syncTime=null,this.token=null,this.pollingInterval=null,this.pollingTime=null!=(e=t.pollingTime)?e:3e3,this.log=!(null==t.log||!t.log),this.ssl=t.ssl,this.location=null!=(n=t.location)?n:"notification-center",this.size=null!=(o=t.size)?o:100,this.protocolWithHost=t.protocolWithHost,this.allowedDisconnectionTime=null!=(r=t.allowedDisconnectionTime)?r:10,this.disconnectedSinceTime=null,this.uuid=null,this.delayedDisconnection=!1}return t.prototype.setToken=function(t){return this.token=t},t.prototype.getSyncTime=function(){return this.syncTime},t.prototype.setSyncTime=function(t){return this.syncTime=t},t.prototype.resetSyncTime=function(){return this.syncTime=null},t.prototype.getPollingTime=function(){return this.pollingTime},t.prototype.setPollingTime=function(t){return this.pollingTime=t,this.disconnect(),this.connect()},t.prototype.getPollingInterval=function(){return this.pollingInterval},t.prototype.getSSL=function(){return this.ssl},t.prototype.setSSL=function(t){return this.ssl=t},t.prototype.getLocation=function(){return this.location},t.prototype.setLocation=function(t){return this.location=t},t.prototype.getSize=function(){return this.size},t.prototype.setSize=function(t){return this.size=t},t.prototype.getAllowedDisconnectionTime=function(){return this.allowedDisconnectionTime},t.prototype.setAllowedDisconnectionTime=function(t){return this.allowedDisconnectionTime=t},t.prototype.getUuid=function(){return this.uuid},t.prototype.setUuid=function(t){return this.uuid=t},t.prototype.setDelayedDisconnection=function(){return this.delayedDisconnection=!0},t.prototype.connect=function(){var t,e;if(null==(t=a.loco.getLine())||t.isWireAllowed())return this.pollingInterval=setInterval((e=this,function(){if(e.check(),e.delayedDisconnection)return e.delayedDisconnection=!1,e.disconnect()}),this.pollingTime)},t.prototype.disconnect=function(){return window.clearInterval(this.pollingInterval)},t.prototype.disableNotifications=function(){return console.log("Wire#disableNotifications - DEPRECATED"),this.disconnect()},t.prototype.processNotification=function(t){var e,n,o,r,l,c,s;if(this.log&&console.log(t),e=t[0],n=t[1],s=t[2],c=t[3],o=(r=a.loco.getModelForRemoteName(e)).getIdentity(),null!=i.IdentityMap.imap[o]&&(null!=i.IdentityMap.imap[o][n]&&(null!=(l=i.IdentityMap.find(o,n)).receivedSignal&&l.receivedSignal(s,c),this._emitSignalToMembers(n,s,c,r,o)),null!=r.receivedSignal&&r.receivedSignal(s,c),null!=i.IdentityMap.imap[o].collection&&0!==i.IdentityMap.imap[o].collection.length))return this._emitSignalToCollection(s,c,o)},t.prototype.processSignal=function(t){return this.processNotification(t)},t.prototype.check=function(){var t,e;if(0!==Object.keys(i.IdentityMap.imap).length||null!=this.token||null==this.syncTime)return(t=new XMLHttpRequest).open("GET",this._getURL()+"?"+g.toURIParams(this._requestParams())),t.onload=(e=this,function(t){var n,o,r,i,l;if(t.target.status>=200&&t.target.status<400){if(n=JSON.parse(t.target.response),e.disconnectedSinceTime=null,e.syncTime=n[1],0===(l=n[0]).length)return;for(o=0,r=l.length;o<r;o++)i=l[o],e.processNotification(i);if(l.length===e.size)return e.check()}else if(t.target.status>=500)return e._handleDisconnection()}),t.onerror=function(t){return function(){return t._handleDisconnection()}}(this),t.send()},t.prototype.fetchSyncTime=function(t){var e,n;return null==t&&(t={}),(e=new XMLHttpRequest).open("GET",this._getURL()+"/sync-time"),e.onerror=(n=this,function(){if(null!=t.after)return n[t.after]()}),e.onload=function(e){return function(n){var o;if(n.target.status>=200&&n.target.status<400){if(o=JSON.parse(n.target.response),e.syncTime=o.sync_time,null!=t.after)return e[t.after]()}else if(n.target.status>=500&&null!=t.after)return e[t.after]()}}(this),e.send()},t.prototype._emitSignalToMembers=function(t,e,n,o,r,l){var c,s,u,a,f;for(null==l&&(l=null),null==l&&(l=new o({id:t})),f=[],s=0,u=(a=i.IdentityMap.findConnected(r,t)).length;s<u;s++)null!=(c=a[s]).receiverFor(l)?f.push(c[c.receiverFor(l)](e,n)):null!=c.receivedSignal?f.push(c.receivedSignal(e,n)):f.push(void 0);return f},t.prototype._emitSignalToCollection=function(t,e,n){var o,r,l,c,s;for(s=[],o=0,r=(c=i.IdentityMap.imap[n].collection).length;o<r;o++)null!=(l=c[o]).receiverFor(n)?s.push(l[l.receiverFor(n)](n+" "+t,e)):null!=l.receivedSignal?s.push(l.receivedSignal(n+" "+t,e)):s.push(void 0);return s},t.prototype._requestParams=function(){var t;return t={synced_at:this.syncTime},null!=this.token&&(t.token=this.token),null!=this.uuid&&(t.uuid=this.uuid),t},t.prototype._getURL=function(){var t,e,n,o;return e=(n=window.location.href.split("/"))[0],n[1],t=n[2],null!=this.protocolWithHost&&(e=(o=this.protocolWithHost.split("//"))[0],t=o[1]),null!=this.ssl&&(e=this.ssl?"https:":"http:"),e+"//"+t+"/"+this.location},t.prototype._handleDisconnection=function(){var t,e,n;if(null==this.disconnectedSinceTime&&(this.disconnectedSinceTime=new Date),e=(new Date-this.disconnectedSinceTime)/1e3,t=null!=(n=a.namespaceController)?n:a.controller,e>this.allowedDisconnectionTime&&null!=t.disconnectedForTooLong)return t.disconnectedForTooLong(this.disconnectedSinceTime)},t}(),y=function(){function t(t){var e,n,o,r,i;null==t&&(t={}),this.wire=null,this.line=null,this.turbolinks=null!=(n=t.turbolinks)&&n,this.startWire=!(null==(o=t.notifications)||!o.enable),this.postInit=t.postInit,this.setLocale(null!=(r=t.locale)?r:"en"),this.setProtocolWithHost(t.protocolWithHost),(e=null!=(i=t.notifications)?i:{}).protocolWithHost=this.getProtocolWithHost(),this.notificationsParams=e}return t.prototype.getWire=function(){return this.wire},t.prototype.getLine=function(){return this.line},t.prototype.getLocale=function(){return i.Config.locale},t.prototype.setLocale=function(t){return i.Config.locale=t},t.prototype.getProtocolWithHost=function(){return i.Config.protocolWithHost},t.prototype.setProtocolWithHost=function(t){return i.Config.protocolWithHost=t},t.prototype.init=function(){var t,e;return a.loco=this,this.initWire(),this.initLine(),this.turbolinks?(t=Number(this.turbolinks)>=5?"turbolinks:load":"page:change",document.addEventListener(t,(e=this,function(){if(e.flow(),null!=e.postInit)return e.postInit()}))):this.ready(function(t){return function(){if(t.flow(),null!=t.postInit)return t.postInit()}}(this))},t.prototype.ready=function(t){return(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?t():document.addEventListener("DOMContentLoaded",t)},t.prototype.initWire=function(){if(this.startWire)return this.wire=new m(this.notificationsParams),this.wire.fetchSyncTime({after:"connect"})},t.prototype.initLine=function(){if(null!=l.cable)return this.line=new h,this.line.connect()},t.prototype.flow=function(){var t,e,n;if(i.IdentityMap.clear(),n=document.getElementsByTagName("body")[0].getAttribute("data-namespace"),e=document.getElementsByTagName("body")[0].getAttribute("data-controller"),t=document.getElementsByTagName("body")[0].getAttribute("data-action"),a.action=t,null!=u[n]?(a.namespaceController=new u[n],null!=u[n][e]&&(a.controller=new u[n][e]),null!=a.namespaceController.constructor.initialize&&a.namespaceController.constructor.initialize(),null!=a.namespaceController.initialize&&a.namespaceController.initialize(),null!=a.controller&&(a.namespaceController.setSubController(a.controller),a.controller.setSuperController(a.namespaceController),null!=a.controller.constructor.initialize&&a.controller.constructor.initialize(),null!=a.controller.initialize&&a.controller.initialize(),null!=a.controller.constructor[t]&&a.controller.constructor[t](),null!=a.controller[t]&&a.controller[t]())):u[e]&&(a.controller=new u[e],null!=a.controller.constructor.initialize&&a.controller.constructor.initialize(),null!=a.controller.initialize&&a.controller.initialize(),null!=a.controller.constructor[t]&&a.controller.constructor[t](),null!=a.controller[t]&&a.controller[t]()),null!=this.wire)return this.wire.resetSyncTime(),this.wire.fetchSyncTime()},t.prototype.emit=function(t){return this.line.send(t)},t.prototype.getModels=function(){var t,e,n,o,r;for(t in n=[],r=/^[A-Z]/,i.Models)if(i.Models[t],r.exec(t)&&"Base"!==t)for(e in n.push(t),o=i.Models[t])o[e],r.exec(e)&&n.push(t+"."+e);return n},t.prototype.getModelForRemoteName=function(t){var e,n,o,r;for(e=0,n=(r=this.getModels()).length;e<n;e++)if(1===(o=r[e].split(".")).length){if(i.Models[o[0]].getRemoteName()===t)return i.Models[o[0]]}else if(2===o.length&&i.Models[o[0]][o[1]].getRemoteName()===t)return i.Models[o[0]][o[1]]},t}(),v={Date:function(){function t(t){this.date=t}return t.prototype.toString=function(t){var e;switch(null==t&&(t="default"),e=p[a.loco.getLocale()].date.formats,t){case"default":return this.strftime(e.default);case"short":return this.strftime(e.short);case"long":return this.strftime(e.long);default:return console.log("Services.Date#toString: unknown format.")}},t.prototype.strftime=function(t){var e,n;return e=p[a.loco.getLocale()],(t=(t=(t=(t=(t=(t=(t=(t=t.replace("%Y",(n=this,function(t){return n.date.getFullYear()}))).replace("%y",function(t){return function(e){return t.date.getFullYear().toString().slice(-2)}}(this))).replace("%m",function(t){return function(e){var n;return(n=t.date.getMonth()+1)>=10?n:"0"+n}}(this))).replace("%b",function(t){return function(n){return e.date.abbr_month_names[t.date.getMonth()]}}(this))).replace("%B",function(t){return function(n){return e.date.month_names[t.date.getMonth()]}}(this))).replace("%d",function(t){return function(e){return t.date.getDate()>=10?t.date.getDate():"0"+t.date.getDate()}}(this))).replace("%H",function(t){return function(e){return t.date.getHours()>=10?t.date.getHours():"0"+t.date.getHours()}}(this))).replace("%M",function(t){return function(e){return t.date.getMinutes()>=10?t.date.getMinutes():"0"+t.date.getMinutes()}}(this))).replace("%S",function(t){return function(e){return t.date.getSeconds()>=10?t.date.getSeconds():"0"+t.date.getSeconds()}}(this))},t}()},b=function(){function t(){}return t.find=function(t,e){var n,o,r;for(n=0,o=t.length;n<o;n++)if(!0===e(r=t[n]))return r},t}(),S=function(){function t(){}return t.hasClass=function(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)},t.addClass=function(t,e){return t.classList?t.classList.add(e):t.className+=" "+e},t.removeClass=function(t,e){return t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")},t}();d=function(){function t(){}return t.last=function(t){return t[t.length-1]},t}();var w,_={Array:c,Collection:b,Dom:S,Object:g,String:d};w=function(){function t(t){null==t&&(t={}),this.views={},this.intervals={},this.receivers={},this.controller=null,this.delegator=null,null!=t.controller&&this.setController(t.controller),null!=t.delegator&&this.setDelegator(t.delegator)}return t.prototype.setController=function(t){return this.controller=t},t.prototype.getController=function(){return this.controller},t.prototype.setView=function(t,e){return this.views[t]=e},t.prototype.getView=function(t){return this.views[t]},t.prototype.getViews=function(){return this.views},t.prototype.setDelegator=function(t){return this.delegator=t},t.prototype.getDelegator=function(t){return this.delegator},t}(),Object.assign(w.prototype,s);var T={Base:w};n.d(e,"Channels",(function(){return r})),n.d(e,"Controllers",(function(){return u})),n.d(e,"Deps",(function(){return l})),n.d(e,"Env",(function(){return a})),n.d(e,"I18n",(function(){return p})),n.d(e,"Line",(function(){return h})),n.d(e,"Loco",(function(){return y})),n.d(e,"Models",(function(){return i.Models})),n.d(e,"Services",(function(){return v})),n.d(e,"Utils",(function(){return _})),n.d(e,"Validators",(function(){return i.Validators})),n.d(e,"Views",(function(){return T})),n.d(e,"Wire",(function(){return m}))}])}));