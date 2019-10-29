!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("loco-js-model")):"function"==typeof define&&define.amd?define(["loco-js-model"],e):"object"==typeof exports?exports.App=e(require("loco-js-model")):t.App=e(t.LocoModel)}(window,(function(t){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(e,n){e.exports=t},function(t,e,n){"use strict";n.r(e);var o,i={Loco:{}},r=n(0),l={cable:null,NotificationCenter:null},s=function(){function t(){}return t.map=function(t,e){var n,o,i,r;for(i=[],n=0,o=t.length;n<o;n++)r=t[n],i.push(e(r));return i},t.uniq=function(t){var e,n,o,i;for(o=[],e=0,n=t.length;e<n;e++)i=t[e],-1===o.indexOf(i)&&o.push(i);return o},t}(),u=function(){function t(){}return t.prototype.connectWith=function(t,e){var n,o,i,l,u;if(null==e&&(e={}),null==t)return null;for("Array"!==t.constructor.name&&(t=[t]),u=[],n=0,i=(t=s.uniq(t)).length;n<i;n++)"Function"===(l=t[n]).constructor.name?(o=l.getIdentity(),r.IdentityMap.addCollection(o,{to:this}),null!=e.receiver?u.push(this.receivers[o]=e.receiver):u.push(void 0)):(r.IdentityMap.connect(this,{with:l}),null!=e.receiver?u.push(this.receivers[l.toKey()]=e.receiver):u.push(void 0));return u},t.prototype.receiverFor=function(t){return"String"===t.constructor.name?null!=this.receivers[t]?this.receivers[t]:null:null!=this.receivers[t.toKey()]?this.receivers[t.toKey()]:null},t}();o=function(){function t(){this.views={},this.receivers={},this.subController=null,this.superController=null,this.params=this.__fetchParams()}return t.prototype.setView=function(t,e){return this.views[t]=e},t.prototype.getView=function(t){return this.views[t]},t.prototype.getViews=function(){return this.views},t.prototype.setSubController=function(t){return this.subController=t},t.prototype.getSubController=function(){return this.subController},t.prototype.setSuperController=function(t){return this.superController=t},t.prototype.getSuperController=function(){return this.superController},t.prototype.setResource=function(t){return this.setScope(t)},t.prototype.setScope=function(t){return r.Config.scope=t},t.prototype.__fetchParams=function(){var t,e,n,o,i,r,l,u,c,a,h;if(l={},null!=(n=null!=(r=/https?:\/\/.+\/\w+\/(\d+)/.exec(window.location.href))?r[1]:null)&&(l.id=parseInt(n)),1===(a=window.location.href.split("?")).length)return l;for(c=a[a.length-1],e=0,i=(u=s.map(c.split("&"),(function(t){return t.split("=")}))).length;e<i;e++)t=u[e],o=decodeURIComponent(t[0]),null!=(h=decodeURIComponent(t[1]))&&(h=h.replace(/\+/g," ")),l[o]=h;return l},t}(),Object.assign(o.prototype,u);var c={Base:o},a={loco:null,namespaceController:null,controller:null,action:null},h={variants:{},models:{},attributes:{},ui:{form:{sending:"Sending...",success:"Success",errors:{connection:"Connection Error",invalid_data:"Invalid data"}}},date:{formats:{default:"%Y-%m-%d",short:"%b %d",long:"%B %d, %Y"},day_names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbr_day_names:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],month_names:["January","February","March","April","May","June","July","August","September","October","November","December"],abbr_month_names:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},errors:{messages:{accepted:"must be accepted",blank:"can't be blank",confirmation:"doesn't match %{attribute}",empty:"can't be empty",equal_to:"must be equal to %{count}",even:"must be even",exclusion:"is reserved",greater_than:"must be greater than %{count}",greater_than_or_equal_to:"must be greater than or equal to %{count}",inclusion:"is not included in the list",invalid:"is invalid",less_than:"must be less than %{count}",less_than_or_equal_to:"must be less than or equal to %{count}",not_a_number:"is not a number",not_an_integer:"must be an integer",odd:"must be odd",present:"must be blank",too_long:{one:"is too long (maximum is 1 character)",other:"is too long (maximum is %{count} characters)"},too_short:{one:"is too short (minimum is 1 character)",other:"is too short (minimum is %{count} characters)"},wrong_length:{one:"is the wrong length (should be 1 character)",other:"is the wrong length (should be %{count} characters)"},other_than:"must be other than %{count}"}}};r.I18n.en=h;var d,f=r.I18n,p=function(){function t(t){null==t&&(t={}),this.connected=!1}return t.prototype.connect=function(){return i.Loco.NotificationCenter=l.cable.subscriptions.create({channel:"Loco::NotificationCenterChannel"},{connected:(t=this,function(){var e;return console.log("ws connected"),t.connected=!0,null!=(e=a.loco.getWire())&&e.setDelayedDisconnection(),t._sendNotification({loco:"connected"})}),disconnected:function(t){return function(){var e;return console.log("ws disconnected"),t.connected=!1,null!=(e=a.loco.getWire())&&(e.setUuid(null),e.fetchSyncTime({after:"connect"})),t._sendNotification({loco:"disconnected"})}}(this),rejected:function(t){return function(){return console.log("ws rejected"),t._sendNotification({loco:"rejected"})}}(this),received:function(t){return function(e){if(null!=e.loco&&(t._processSystemNotification(e.loco),delete e.loco),0!==Object.keys(e).length)return t._sendNotification(e)}}(this)});var t},t.prototype.isWireAllowed=function(){return!this.connected},t.prototype.send=function(t){return i.Loco.NotificationCenter.send(t)},t.prototype._processSystemNotification=function(t){var e;if(null!=t.connection_check&&this.send({loco:{connection_check:!0}}),null!=(e=a.loco.getWire()))return null!=t.sync_time&&e.setSyncTime(t.sync_time),null!=t.uuid&&(console.log("uuid: "+t.uuid),e.setUuid(t.uuid)),null!=t.notification&&e.processNotification(t.notification),null!=t.xhr_notifications&&e.check(),t.start_ajax_polling?(console.log("wire connected"),this.connected=null,e.setUuid(null),e.fetchSyncTime({after:"connect"})):void 0},t.prototype._sendNotification=function(t){return null!=l.NotificationCenter.receivedSignal?l.NotificationCenter.receivedSignal(t):(new l.NotificationCenter).receivedSignal(t)},t}(),m=function(){function t(){}return t.toURIParams=function(t){var e,n,o;for(e in n="",t)o=t[e],""!==n&&(n+="&"),n+=e+"="+encodeURIComponent(o);return n},t}(),g=function(){function t(t){var e,n,o,i;null==t&&(t={}),this.syncTime=null,this.token=null,this.pollingInterval=null,this.pollingTime=null!=(e=t.pollingTime)?e:3e3,this.log=!(null==t.log||!t.log),this.ssl=t.ssl,this.location=null!=(n=t.location)?n:"notification-center",this.size=null!=(o=t.size)?o:100,this.protocolWithHost=t.protocolWithHost,this.allowedDisconnectionTime=null!=(i=t.allowedDisconnectionTime)?i:10,this.disconnectedSinceTime=null,this.uuid=null,this.delayedDisconnection=!1}return t.prototype.setToken=function(t){return this.token=t},t.prototype.getSyncTime=function(){return this.syncTime},t.prototype.setSyncTime=function(t){return this.syncTime=t},t.prototype.resetSyncTime=function(){return this.syncTime=null},t.prototype.getPollingTime=function(){return this.pollingTime},t.prototype.setPollingTime=function(t){return this.pollingTime=t,this.disconnect(),this.connect()},t.prototype.getPollingInterval=function(){return this.pollingInterval},t.prototype.getSSL=function(){return this.ssl},t.prototype.setSSL=function(t){return this.ssl=t},t.prototype.getLocation=function(){return this.location},t.prototype.setLocation=function(t){return this.location=t},t.prototype.getSize=function(){return this.size},t.prototype.setSize=function(t){return this.size=t},t.prototype.getAllowedDisconnectionTime=function(){return this.allowedDisconnectionTime},t.prototype.setAllowedDisconnectionTime=function(t){return this.allowedDisconnectionTime=t},t.prototype.getUuid=function(){return this.uuid},t.prototype.setUuid=function(t){return this.uuid=t},t.prototype.setDelayedDisconnection=function(){return this.delayedDisconnection=!0},t.prototype.connect=function(){var t,e;if(null==(t=a.loco.getLine())||t.isWireAllowed())return this.pollingInterval=setInterval((e=this,function(){if(e.check(),e.delayedDisconnection)return e.delayedDisconnection=!1,e.disconnect()}),this.pollingTime)},t.prototype.disconnect=function(){return window.clearInterval(this.pollingInterval)},t.prototype.disableNotifications=function(){return console.log("Wire#disableNotifications - DEPRECATED"),this.disconnect()},t.prototype.processNotification=function(t){var e,n,o,i,l,s,u;if(this.log&&console.log(t),e=t[0],n=t[1],u=t[2],s=t[3],o=(i=a.loco.getModelForRemoteName(e)).getIdentity(),null!=r.IdentityMap.imap[o]&&(null!=r.IdentityMap.imap[o][n]&&(null!=(l=r.IdentityMap.find(o,n)).receivedSignal&&l.receivedSignal(u,s),this._emitSignalToMembers(n,u,s,i,o)),null!=i.receivedSignal&&i.receivedSignal(u,s),null!=r.IdentityMap.imap[o].collection&&0!==r.IdentityMap.imap[o].collection.length))return this._emitSignalToCollection(u,s,o)},t.prototype.processSignal=function(t){return this.processNotification(t)},t.prototype.check=function(){var t,e;if(0!==Object.keys(r.IdentityMap.imap).length||null!=this.token||null==this.syncTime)return(t=new XMLHttpRequest).open("GET",this._getURL()+"?"+m.toURIParams(this._requestParams())),t.onload=(e=this,function(t){var n,o,i,r,l;if(t.target.status>=200&&t.target.status<400){if(n=JSON.parse(t.target.response),e.disconnectedSinceTime=null,e.syncTime=n[1],0===(l=n[0]).length)return;for(o=0,i=l.length;o<i;o++)r=l[o],e.processNotification(r);if(l.length===e.size)return e.check()}else if(t.target.status>=500)return e._handleDisconnection()}),t.onerror=function(t){return function(){return t._handleDisconnection()}}(this),t.send()},t.prototype.fetchSyncTime=function(t){var e,n;return null==t&&(t={}),(e=new XMLHttpRequest).open("GET",this._getURL()+"/sync-time"),e.onerror=(n=this,function(){if(null!=t.after)return n[t.after]()}),e.onload=function(e){return function(n){var o;if(n.target.status>=200&&n.target.status<400){if(o=JSON.parse(n.target.response),e.syncTime=o.sync_time,null!=t.after)return e[t.after]()}else if(n.target.status>=500&&null!=t.after)return e[t.after]()}}(this),e.send()},t.prototype._emitSignalToMembers=function(t,e,n,o,i,l){var s,u,c,a,h;for(null==l&&(l=null),null==l&&(l=new o({id:t})),h=[],u=0,c=(a=r.IdentityMap.findConnected(i,t)).length;u<c;u++)null!=(s=a[u]).receiverFor(l)?h.push(s[s.receiverFor(l)](e,n)):null!=s.receivedSignal?h.push(s.receivedSignal(e,n)):h.push(void 0);return h},t.prototype._emitSignalToCollection=function(t,e,n){var o,i,l,s,u;for(u=[],o=0,i=(s=r.IdentityMap.imap[n].collection).length;o<i;o++)null!=(l=s[o]).receiverFor(n)?u.push(l[l.receiverFor(n)](n+" "+t,e)):null!=l.receivedSignal?u.push(l.receivedSignal(n+" "+t,e)):u.push(void 0);return u},t.prototype._requestParams=function(){var t;return t={synced_at:this.syncTime},null!=this.token&&(t.token=this.token),null!=this.uuid&&(t.uuid=this.uuid),t},t.prototype._getURL=function(){var t,e,n,o;return e=(n=window.location.href.split("/"))[0],n[1],t=n[2],null!=this.protocolWithHost&&(e=(o=this.protocolWithHost.split("//"))[0],t=o[1]),null!=this.ssl&&(e=this.ssl?"https:":"http:"),e+"//"+t+"/"+this.location},t.prototype._handleDisconnection=function(){var t,e,n;if(null==this.disconnectedSinceTime&&(this.disconnectedSinceTime=new Date),e=(new Date-this.disconnectedSinceTime)/1e3,t=null!=(n=a.namespaceController)?n:a.controller,e>this.allowedDisconnectionTime&&null!=t.disconnectedForTooLong)return t.disconnectedForTooLong(this.disconnectedSinceTime)},t}(),b=function(){function t(t){var e,n,o,i,r;null==t&&(t={}),this.wire=null,this.line=null,this.turbolinks=null!=(n=t.turbolinks)&&n,this.startWire=!(null==(o=t.notifications)||!o.enable),this.postInit=t.postInit,this.setLocale(null!=(i=t.locale)?i:"en"),this.setProtocolWithHost(t.protocolWithHost),(e=null!=(r=t.notifications)?r:{}).protocolWithHost=this.getProtocolWithHost(),this.notificationsParams=e}return t.prototype.getWire=function(){return this.wire},t.prototype.getLine=function(){return this.line},t.prototype.getLocale=function(){return r.Config.locale},t.prototype.setLocale=function(t){return r.Config.locale=t},t.prototype.getProtocolWithHost=function(){return r.Config.protocolWithHost},t.prototype.setProtocolWithHost=function(t){return r.Config.protocolWithHost=t},t.prototype.init=function(){var t,e;return a.loco=this,this.initWire(),this.initLine(),this.turbolinks?(t=Number(this.turbolinks)>=5?"turbolinks:load":"page:change",document.addEventListener(t,(e=this,function(){if(e.flow(),null!=e.postInit)return e.postInit()}))):this.ready(function(t){return function(){if(t.flow(),null!=t.postInit)return t.postInit()}}(this))},t.prototype.ready=function(t){return(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?t():document.addEventListener("DOMContentLoaded",t)},t.prototype.initWire=function(){if(this.startWire)return this.wire=new g(this.notificationsParams),this.wire.fetchSyncTime({after:"connect"})},t.prototype.initLine=function(){if(null!=l.cable)return this.line=new p,this.line.connect()},t.prototype.flow=function(){var t,e,n;if(r.IdentityMap.clear(),n=document.getElementsByTagName("body")[0].getAttribute("data-namespace"),e=document.getElementsByTagName("body")[0].getAttribute("data-controller"),t=document.getElementsByTagName("body")[0].getAttribute("data-action"),a.action=t,null!=c[n]?(a.namespaceController=new c[n],null!=c[n][e]&&(a.controller=new c[n][e]),null!=a.namespaceController.constructor.initialize&&a.namespaceController.constructor.initialize(),null!=a.namespaceController.initialize&&a.namespaceController.initialize(),null!=a.controller&&(a.namespaceController.setSubController(a.controller),a.controller.setSuperController(a.namespaceController),null!=a.controller.constructor.initialize&&a.controller.constructor.initialize(),null!=a.controller.initialize&&a.controller.initialize(),null!=a.controller.constructor[t]&&a.controller.constructor[t](),null!=a.controller[t]&&a.controller[t]())):c[e]&&(a.controller=new c[e],null!=a.controller.constructor.initialize&&a.controller.constructor.initialize(),null!=a.controller.initialize&&a.controller.initialize(),null!=a.controller.constructor[t]&&a.controller.constructor[t](),null!=a.controller[t]&&a.controller[t]()),null!=this.wire)return this.wire.resetSyncTime(),this.wire.fetchSyncTime()},t.prototype.emit=function(t){return this.line.send(t)},t.prototype.getModels=function(){var t,e,n,o,i;for(t in n=[],i=/^[A-Z]/,r.Models)if(r.Models[t],i.exec(t)&&"Base"!==t)for(e in n.push(t),o=r.Models[t])o[e],i.exec(e)&&n.push(t+"."+e);return n},t.prototype.getModelForRemoteName=function(t){var e,n,o,i;for(e=0,n=(i=this.getModels()).length;e<n;e++)if(1===(o=i[e].split(".")).length){if(r.Models[o[0]].getRemoteName()===t)return r.Models[o[0]]}else if(2===o.length&&r.Models[o[0]][o[1]].getRemoteName()===t)return r.Models[o[0]][o[1]]},t}(),y={Date:function(){function t(t){this.date=t}return t.prototype.toString=function(t){var e;switch(null==t&&(t="default"),e=f[a.loco.getLocale()].date.formats,t){case"default":return this.strftime(e.default);case"short":return this.strftime(e.short);case"long":return this.strftime(e.long);default:return console.log("Services.Date#toString: unknown format.")}},t.prototype.strftime=function(t){var e,n;return e=f[a.loco.getLocale()],(t=(t=(t=(t=(t=(t=(t=(t=t.replace("%Y",(n=this,function(t){return n.date.getFullYear()}))).replace("%y",function(t){return function(e){return t.date.getFullYear().toString().slice(-2)}}(this))).replace("%m",function(t){return function(e){var n;return(n=t.date.getMonth()+1)>=10?n:"0"+n}}(this))).replace("%b",function(t){return function(n){return e.date.abbr_month_names[t.date.getMonth()]}}(this))).replace("%B",function(t){return function(n){return e.date.month_names[t.date.getMonth()]}}(this))).replace("%d",function(t){return function(e){return t.date.getDate()>=10?t.date.getDate():"0"+t.date.getDate()}}(this))).replace("%H",function(t){return function(e){return t.date.getHours()>=10?t.date.getHours():"0"+t.date.getHours()}}(this))).replace("%M",function(t){return function(e){return t.date.getMinutes()>=10?t.date.getMinutes():"0"+t.date.getMinutes()}}(this))).replace("%S",function(t){return function(e){return t.date.getSeconds()>=10?t.date.getSeconds():"0"+t.date.getSeconds()}}(this))},t}()},v=function(){function t(){}return t.find=function(t,e){var n,o,i;for(n=0,o=t.length;n<o;n++)if(!0===e(i=t[n]))return i},t}(),_=function(){function t(){}return t.hasClass=function(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)},t.addClass=function(t,e){return t.classList?t.classList.add(e):t.className+=" "+e},t.removeClass=function(t,e){return t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")},t}();d=function(){function t(){}return t.last=function(t){return t[t.length-1]},t}();var S,w={Array:s,Collection:v,Dom:_,Object:m,String:d},C={Form:function(){function t(t){null==t&&(t={}),this.formId=t.id,this.obj=t.for,this.initObj=!(null==t.initObj||!t.initObj),this.delegator=t.delegator,this.callbackSuccess=t.callbackSuccess,this.callbackFailure=t.callbackFailure,this.callbackActive=t.callbackActive,this.form=this._findForm(),this.submit=null,this.submitVal=null,null!=this.form&&(this.submit=this.form.querySelector('[type="submit"]')),null!=this.submit&&(this.submitVal=this.submit.value),this.locale=a.loco.getLocale()}return t.prototype.getObj=function(){return this.obj},t.prototype.render=function(){return this.initObj?(this._assignAttribs(),this._handle()):null!=this.form?(this.fill(),this._handle()):void 0},t.prototype.fill=function(t){var e,n,o,i,r,l,s,u;if(null==t&&(t=null),null==this.obj)return null;if(null==this.obj.constructor.attributes)return null;for(o in e={},null!=t?e[t]=null:e=this.obj.constructor.attributes,s=[],e)e[o],l=this.obj.getAttrRemoteName(o),null!==(i=this.form.querySelector("[data-attr="+l+"]"))&&0!==(n=i.querySelectorAll("input,textarea,select")).length&&(1!==n.length?1!==(u=w.Array.uniq(w.Array.map(n,(function(t){return t.getAttribute("type")})))).length||"radio"!==u[0]||null==(r=w.Collection.find(n,function(t){return function(e){return e.value===String(t.obj[o])}}(this)))?"hidden"!==n[0].getAttribute("type")&&"checkbox"!==n[n.length-1].getAttribute("type")||s.push(n[n.length-1].checked=Boolean(this.obj[o])):r.checked=!0:n[0].value=this.obj[o]);return s},t.prototype._findForm=function(){var t;return null!=this.formId?document.getElementById(""+this.formId):null!=this.obj?(t=this.obj.getIdentity().toLowerCase(),null!=this.obj.id?document.getElementById("edit_"+t+"_"+this.obj.id):document.getElementById("new_"+t)):void 0},t.prototype._handle=function(){return this.form.addEventListener("submit",(t=this,function(e){var n;if(e.preventDefault(),t._canBeSubmitted()){if(null!=t.obj)return t._assignAttribs(),t._hideErrors(),t.obj.isInvalid()?(t._renderErrors(),void(null!=t.callbackFailure&&t.delegator[t.callbackFailure]())):(t._submittingForm(!1),n=null==t.obj.id,t.obj.save().then((function(e){return t._alwaysAfterRequest(),e.success?t._handleSuccess(e,n):(null!=t.callbackFailure&&t.delegator[t.callbackFailure](),t._renderErrors())})).catch((function(e){return t._connectionError()})));t._submitForm()}}));var t},t.prototype._canBeSubmitted=function(){return null==this.submit||!w.Dom.hasClass(this.submit,"active")&&(!w.Dom.hasClass(this.submit,"success")&&!w.Dom.hasClass(this.submit,"failure"))},t.prototype._submitForm=function(){var t,e,n,o,i;return this._submittingForm(),o=this.form.getAttribute("action")+".json",t=new FormData(this.form),(n=new XMLHttpRequest).open("POST",o),n.setRequestHeader("X-CSRF-Token",null!=(e=document.querySelector("meta[name='csrf-token']"))?e.content:void 0),n.onload=(i=this,function(e){return i._alwaysAfterRequest(),null!=i.submit&&i.submit.blur(),e.target.status>=200&&e.target.status<400?(t=JSON.parse(e.target.response)).success?i._handleSuccess(t,"POST"===i.form.getAttribute("method")):i._renderErrors(t.errors):e.target.status>=500?i._connectionError():void 0}),n.onerror=function(t){return function(){return t._alwaysAfterRequest(),null!=t.submit&&t.submit.blur(),t._connectionError()}}(this),n.send(t)},t.prototype._handleSuccess=function(t,e){var n,o,i,r;if(null==e&&(e=!0),i=null!=(n=null!=(o=t.flash)?o.success:void 0)?n:f[this.locale].ui.form.success,null!=this.submit&&(w.Dom.addClass(this.submit,"success"),this.submit.value=i),null!=t.access_token&&a.loco.getWire().setToken(t.access_token),null==this.callbackSuccess)return setTimeout((r=this,function(){var t,n,o,i,l,s;if(null!=r.submit&&(r.submit.disabled=!1,w.Dom.removeClass(r.submit,"success"),r.submit.value=r.submitVal),s=":not([data-loco-not-clear=true])",e){for(l=[],t=0,n=(i=r.form.querySelectorAll("input:not([type='submit'])"+s+", textarea"+s)).length;t<n;t++)o=i[t],l.push(o.value="");return l}}),5e3);null!=t.data?this.delegator[this.callbackSuccess](t.data):this.delegator[this.callbackSuccess]()},t.prototype._renderErrors=function(t){var e,n,o,i,r,l,s,u,c;if(null==t&&(t=null),!(null!=this.obj&&null==this.obj.errors||null==this.obj&&null==t)){for(e in n=null!=t?t:this.obj.errors)if(o=n[e],null==(c=null!=this.obj?this.obj.getAttrRemoteName(e):e)||"base"===e)"base"===e&&o.length>0&&(1===(s=document.querySelectorAll(".errors[data-for='base']")).length?s[0].textContent=o[0]:null!=this.submit&&(this.submit.value=o[0]));else{if(null===(u=this.form.querySelector("[data-attr="+c+"]")))continue;if(0===(s=u.querySelectorAll(".errors[data-for="+c+"]")).length)continue;for(i=0,r=s.length;i<r;i++)(l=s[i]).textContent=o[0]}return null!=this.submit&&(this.submit.value!==this.submitVal&&this.submit.value!==f[this.locale].ui.form.sending||(this.submit.value=f[this.locale].ui.form.errors.invalid_data),w.Dom.addClass(this.submit,"failure")),this._showErrors(),setTimeout((a=this,function(){var t,e,n,o;for(null!=a.submit&&(a.submit.disabled=!1,w.Dom.removeClass(a.submit,"failure"),a.submit.value=a.submitVal),o=[],t=0,e=(n=a.form.querySelectorAll("input.invalid, textarea.invalid, select.invalid")).length;t<e;t++)l=n[t],o.push(w.Dom.removeClass(l,"invalid"));return o}),1e3);var a}},t.prototype._assignAttribs=function(){var t,e,n,o,i,r,l,s;if(null==this.obj.constructor.attributes)return null;for(e in l=[],i=this.obj.constructor.attributes)i[e],r=this.obj.getAttrRemoteName(e),null!==(n=this.form.querySelector("[data-attr="+r+"]"))&&0!==(t=n.querySelectorAll("input,textarea,select")).length&&(1!==t.length?1!==(s=w.Array.uniq(w.Array.map(t,(function(t){return t.getAttribute("type")})))).length||"radio"!==s[0]||null==(o=w.Collection.find(t,(function(t){return!0===t.checked})))?"hidden"!==t[0].getAttribute("type")&&"checkbox"!==t[t.length-1].getAttribute("type")||(!0===t[t.length-1].checked?l.push(this.obj.assignAttr(e,t[t.length-1].value)):l.push(this.obj.assignAttr(e,t[0].value))):this.obj.assignAttr(e,o.value):this.obj.assignAttr(e,t[0].value));return l},t.prototype._hideErrors=function(){var t,e,n,o,i;for(i=[],e=0,n=(o=this.form.querySelectorAll(".errors")).length;e<n;e++)(t=o[e]).textContent.trim().length>0?(t.textContent="",i.push(t.style.display="none")):i.push(void 0);return i},t.prototype._showErrors=function(){var t,e,n,o,i;for(i=[],e=0,n=(o=this.form.querySelectorAll(".errors")).length;e<n;e++)(t=o[e]).textContent.trim().length>0?i.push(t.style.display="block"):i.push(void 0);return i},t.prototype._submittingForm=function(t){if(null==t&&(t=!0),null!=this.submit&&(w.Dom.removeClass(this.submit,"success"),w.Dom.removeClass(this.submit,"failure"),w.Dom.addClass(this.submit,"active"),this.submit.value=f[this.locale].ui.form.sending),null!=this.callbackActive&&this.delegator[this.callbackActive](),t)return this._hideErrors()},t.prototype._connectionError=function(){var t;if(null!=this.submit)return w.Dom.removeClass(this.submit,"active"),w.Dom.addClass(this.submit,"failure"),this.submit.value=f[this.locale].ui.form.errors.connection,setTimeout((t=this,function(){return t.submit.disabled=!1,w.Dom.removeClass(t.submit,"failure"),t.submit.value=t.submitVal}),3e3)},t.prototype._alwaysAfterRequest=function(){if(null!=this.submit)return w.Dom.removeClass(this.submit,"active")},t}()};S=function(){function t(t){null==t&&(t={}),this.views={},this.intervals={},this.receivers={},this.controller=null,this.delegator=null,null!=t.controller&&this.setController(t.controller),null!=t.delegator&&this.setDelegator(t.delegator)}return t.prototype.setController=function(t){return this.controller=t},t.prototype.getController=function(){return this.controller},t.prototype.setView=function(t,e){return this.views[t]=e},t.prototype.getView=function(t){return this.views[t]},t.prototype.getViews=function(){return this.views},t.prototype.setDelegator=function(t){return this.delegator=t},t.prototype.getDelegator=function(t){return this.delegator},t}(),Object.assign(S.prototype,u);var T={Base:S};n.d(e,"Channels",(function(){return i})),n.d(e,"Controllers",(function(){return c})),n.d(e,"Deps",(function(){return l})),n.d(e,"Env",(function(){return a})),n.d(e,"I18n",(function(){return f})),n.d(e,"Line",(function(){return p})),n.d(e,"Loco",(function(){return b})),n.d(e,"Models",(function(){return r.Models})),n.d(e,"Services",(function(){return y})),n.d(e,"UI",(function(){return C})),n.d(e,"Utils",(function(){return w})),n.d(e,"Validators",(function(){return r.Validators})),n.d(e,"Views",(function(){return T})),n.d(e,"Wire",(function(){return g}))}])}));