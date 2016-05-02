window.App = {
  Loco: null,
  IdentityMap: null,
  Wire: null,
  Env: {
    loco: null,
    namespaceController: null,
    controller: null,
    action: null,
    scope: null
  },
  Mix: null,
  Mixins: {},
  UI: {},
  Controllers: {},
  Models: {},
  Views: {},
  Services: {},
  Helpers: {},
  Presenters: {},
  Validators: {},
  I18n: {},
  Utils: {}
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Uvb2JqZWN0cy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLEdBQVAsR0FDRTtFQUFBLElBQUEsRUFBTSxJQUFOO0VBQ0EsV0FBQSxFQUFhLElBRGI7RUFFQSxJQUFBLEVBQU0sSUFGTjtFQUdBLEdBQUEsRUFDRTtJQUFBLElBQUEsRUFBTSxJQUFOO0lBQ0EsbUJBQUEsRUFBcUIsSUFEckI7SUFFQSxVQUFBLEVBQVksSUFGWjtJQUdBLE1BQUEsRUFBUSxJQUhSO0lBSUEsS0FBQSxFQUFPLElBSlA7R0FKRjtFQVNBLEdBQUEsRUFBSyxJQVRMO0VBVUEsTUFBQSxFQUFRLEVBVlI7RUFXQSxFQUFBLEVBQUksRUFYSjtFQVlBLFdBQUEsRUFBYSxFQVpiO0VBYUEsTUFBQSxFQUFRLEVBYlI7RUFjQSxLQUFBLEVBQU8sRUFkUDtFQWVBLFFBQUEsRUFBVSxFQWZWO0VBZ0JBLE9BQUEsRUFBUyxFQWhCVDtFQWlCQSxVQUFBLEVBQVksRUFqQlo7RUFrQkEsVUFBQSxFQUFZLEVBbEJaO0VBbUJBLElBQUEsRUFBTSxFQW5CTjtFQW9CQSxLQUFBLEVBQU8sRUFwQlAiLCJmaWxlIjoiYmFzZS9vYmplY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LkFwcCA9XG4gIExvY286IG51bGxcbiAgSWRlbnRpdHlNYXA6IG51bGxcbiAgV2lyZTogbnVsbFxuICBFbnY6XG4gICAgbG9jbzogbnVsbFxuICAgIG5hbWVzcGFjZUNvbnRyb2xsZXI6IG51bGxcbiAgICBjb250cm9sbGVyOiBudWxsXG4gICAgYWN0aW9uOiBudWxsXG4gICAgc2NvcGU6IG51bGxcbiAgTWl4OiBudWxsXG4gIE1peGluczoge31cbiAgVUk6IHt9XG4gIENvbnRyb2xsZXJzOiB7fVxuICBNb2RlbHM6IHt9XG4gIFZpZXdzOiB7fVxuICBTZXJ2aWNlczoge31cbiAgSGVscGVyczoge31cbiAgUHJlc2VudGVyczoge31cbiAgVmFsaWRhdG9yczoge31cbiAgSTE4bjoge31cbiAgVXRpbHM6IHt9Il19

var slice = [].slice,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App.Mix = function() {
  var Mixed, base, i, method, mixin, mixins, name, ref;
  base = arguments[0], mixins = 2 <= arguments.length ? slice.call(arguments, 1) : [];
  Mixed = (function(superClass) {
    extend(Mixed, superClass);

    function Mixed() {
      return Mixed.__super__.constructor.apply(this, arguments);
    }

    return Mixed;

  })(base);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UvbWl4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7O0FBQUEsR0FBRyxDQUFDLEdBQUosR0FBVSxTQUFBO0FBQ1IsTUFBQTtFQURTLHFCQUFNO0VBQ1Q7Ozs7Ozs7OztLQUFjO0FBQ3BCLE9BQUEsc0NBQUE7O0FBQ0U7QUFBQSxTQUFBLFdBQUE7O01BQ0UsS0FBSyxDQUFBLFNBQUcsQ0FBQSxJQUFBLENBQVIsR0FBZ0I7QUFEbEI7QUFERjtTQUdBO0FBTFEiLCJmaWxlIjoiYmFzZS9taXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJBcHAuTWl4ID0gKGJhc2UsIG1peGlucy4uLikgLT5cbiAgY2xhc3MgTWl4ZWQgZXh0ZW5kcyBiYXNlXG4gIGZvciBtaXhpbiBpbiBtaXhpbnMgYnkgLTEgI2VhcmxpZXIgbWl4aW5zIG92ZXJyaWRlIGxhdGVyIG9uZXNcbiAgICBmb3IgbmFtZSwgbWV0aG9kIG9mIG1peGluOjpcbiAgICAgIE1peGVkOjpbbmFtZV0gPSBtZXRob2RcbiAgTWl4ZWQiXX0=

App.IdentityMap = (function() {
  function IdentityMap() {}

  IdentityMap.imap = {};

  IdentityMap.clear = function() {
    return this.imap = {};
  };

  IdentityMap.add = function(obj) {
    var identity;
    identity = obj.getIdentity();
    if (this.imap[identity] == null) {
      this.imap[identity] = {};
    }
    if (this.imap[identity][obj.id] == null) {
      this.imap[identity][obj.id] = [];
    }
    return this.imap[identity][obj.id][0] = obj;
  };

  IdentityMap.connect = function(obj, opts) {
    var model;
    if (opts == null) {
      opts = {};
    }
    model = opts["with"];
    this.add(model);
    return this.imap[model.getIdentity()][model.id].push(obj);
  };

  IdentityMap.addCollection = function(identity, opts) {
    if (opts == null) {
      opts = {};
    }
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
  };

  IdentityMap.all = function(identity) {
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
  };

  IdentityMap.find = function(klass, id) {
    if (this.imap[klass] && this.imap[klass][id]) {
      return this.imap[klass][id][0];
    } else {
      return null;
    }
  };

  IdentityMap.findConnected = function(klass, id) {
    var arr;
    if (this.imap[klass] && this.imap[klass][id] && this.imap[klass][id].length > 1) {
      arr = this.imap[klass][id];
      return arr.slice(1, +(arr.length - 1) + 1 || 9e9);
    } else {
      return [];
    }
  };

  return IdentityMap;

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UvaWRlbnRpdHlfbWFwLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBTSxHQUFHLENBQUM7OztFQWVSLFdBQUMsQ0FBQSxJQUFELEdBQVE7O0VBRVIsV0FBQyxDQUFBLEtBQUQsR0FBUSxTQUFBO1dBQUcsSUFBQyxDQUFBLElBQUQsR0FBUTtFQUFYOztFQUVSLFdBQUMsQ0FBQSxHQUFELEdBQU0sU0FBQyxHQUFEO0FBQ0osUUFBQTtJQUFBLFFBQUEsR0FBVyxHQUFHLENBQUMsV0FBSixDQUFBO0lBQ1gsSUFBTywyQkFBUDtNQUNFLElBQUMsQ0FBQSxJQUFLLENBQUEsUUFBQSxDQUFOLEdBQWtCLEdBRHBCOztJQUVBLElBQU8sbUNBQVA7TUFDRSxJQUFDLENBQUEsSUFBSyxDQUFBLFFBQUEsQ0FBVSxDQUFBLEdBQUcsQ0FBQyxFQUFKLENBQWhCLEdBQTBCLEdBRDVCOztXQUVBLElBQUMsQ0FBQSxJQUFLLENBQUEsUUFBQSxDQUFVLENBQUEsR0FBRyxDQUFDLEVBQUosQ0FBUSxDQUFBLENBQUEsQ0FBeEIsR0FBNkI7RUFOekI7O0VBUU4sV0FBQyxDQUFBLE9BQUQsR0FBVSxTQUFDLEdBQUQsRUFBTSxJQUFOO0FBQ1IsUUFBQTs7TUFEYyxPQUFPOztJQUNyQixLQUFBLEdBQVEsSUFBSSxDQUFDLE1BQUQ7SUFDWixJQUFDLENBQUEsR0FBRCxDQUFLLEtBQUw7V0FDQSxJQUFDLENBQUEsSUFBSyxDQUFBLEtBQUssQ0FBQyxXQUFOLENBQUEsQ0FBQSxDQUFxQixDQUFBLEtBQUssQ0FBQyxFQUFOLENBQVMsQ0FBQyxJQUFyQyxDQUEwQyxHQUExQztFQUhROztFQUtWLFdBQUMsQ0FBQSxhQUFELEdBQWdCLFNBQUMsUUFBRCxFQUFXLElBQVg7O01BQVcsT0FBTzs7SUFDaEMsSUFBTywyQkFBUDtNQUNFLElBQUMsQ0FBQSxJQUFLLENBQUEsUUFBQSxDQUFOLEdBQWtCLEdBRHBCOztJQUVBLElBQU8seUNBQVA7TUFDRSxJQUFDLENBQUEsSUFBSyxDQUFBLFFBQUEsQ0FBVSxDQUFBLFlBQUEsQ0FBaEIsR0FBZ0MsR0FEbEM7O0lBRUEsSUFBVSxJQUFDLENBQUEsSUFBSyxDQUFBLFFBQUEsQ0FBVSxDQUFBLFlBQUEsQ0FBYSxDQUFDLE9BQTlCLENBQXNDLElBQUksQ0FBQyxFQUEzQyxDQUFBLEtBQW9ELENBQUMsQ0FBL0Q7QUFBQSxhQUFBOztXQUNBLElBQUMsQ0FBQSxJQUFLLENBQUEsUUFBQSxDQUFVLENBQUEsWUFBQSxDQUFhLENBQUMsSUFBOUIsQ0FBbUMsSUFBSSxDQUFDLEVBQXhDO0VBTmM7O0VBUWhCLFdBQUMsQ0FBQSxHQUFELEdBQU0sU0FBQyxRQUFEO0FBQ0osUUFBQTtJQUFBLElBQW1CLDJCQUFuQjtBQUFBLGFBQU8sS0FBUDs7SUFDQSxHQUFBLEdBQU07QUFDTjtBQUFBLFNBQUEsU0FBQTs7TUFDRSxJQUFZLEVBQUEsS0FBTSxZQUFsQjtBQUFBLGlCQUFBOztNQUNBLEdBQUcsQ0FBQyxJQUFKLENBQVMsSUFBSyxDQUFBLENBQUEsQ0FBZDtBQUZGO0FBR0EsV0FBTztFQU5IOztFQVFOLFdBQUMsQ0FBQSxJQUFELEdBQU8sU0FBQyxLQUFELEVBQVEsRUFBUjtJQUNMLElBQUcsSUFBQyxDQUFBLElBQUssQ0FBQSxLQUFBLENBQU4sSUFBaUIsSUFBQyxDQUFBLElBQUssQ0FBQSxLQUFBLENBQU8sQ0FBQSxFQUFBLENBQWpDO2FBQTBDLElBQUMsQ0FBQSxJQUFLLENBQUEsS0FBQSxDQUFPLENBQUEsRUFBQSxDQUFJLENBQUEsQ0FBQSxFQUEzRDtLQUFBLE1BQUE7YUFBbUUsS0FBbkU7O0VBREs7O0VBR1AsV0FBQyxDQUFBLGFBQUQsR0FBZ0IsU0FBQyxLQUFELEVBQVEsRUFBUjtBQUNkLFFBQUE7SUFBQSxJQUFHLElBQUMsQ0FBQSxJQUFLLENBQUEsS0FBQSxDQUFOLElBQWlCLElBQUMsQ0FBQSxJQUFLLENBQUEsS0FBQSxDQUFPLENBQUEsRUFBQSxDQUE5QixJQUFzQyxJQUFDLENBQUEsSUFBSyxDQUFBLEtBQUEsQ0FBTyxDQUFBLEVBQUEsQ0FBRyxDQUFDLE1BQWpCLEdBQTBCLENBQW5FO01BQ0UsR0FBQSxHQUFNLElBQUMsQ0FBQSxJQUFLLENBQUEsS0FBQSxDQUFPLENBQUEsRUFBQTthQUNuQixHQUFJLHdDQUZOO0tBQUEsTUFBQTthQUlFLEdBSkY7O0VBRGMiLCJmaWxlIjoiYmFzZS9pZGVudGl0eV9tYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAuSWRlbnRpdHlNYXBcbiAgIyBFeC5cbiAgIyBAaW1hcCA9IHtcbiAgIyAgIFBvc3Q6IHtcbiAgIyAgICAgMTogW1xuICAjICAgICAgICM8UG9zdCBpZDoxPlxuICAjICAgICBdLFxuICAjICAgICAxMDogW1xuICAjICAgICAgICM8UG9zdCBpZDoxMD5cbiAgIyAgICAgXSxcbiAgIyAgICAgY29sbGVjdGlvbjogW1xuICAjICAgICAgICM8UG9zdHM+XG4gICMgICAgIF1cbiAgIyAgIH1cbiAgIyB9XG4gIEBpbWFwID0ge31cblxuICBAY2xlYXI6IC0+IEBpbWFwID0ge31cblxuICBAYWRkOiAob2JqKSAtPlxuICAgIGlkZW50aXR5ID0gb2JqLmdldElkZW50aXR5KClcbiAgICBpZiBub3QgQGltYXBbaWRlbnRpdHldP1xuICAgICAgQGltYXBbaWRlbnRpdHldID0ge31cbiAgICBpZiBub3QgQGltYXBbaWRlbnRpdHldW29iai5pZF0/XG4gICAgICBAaW1hcFtpZGVudGl0eV1bb2JqLmlkXSA9IFtdXG4gICAgQGltYXBbaWRlbnRpdHldW29iai5pZF1bMF0gPSBvYmpcblxuICBAY29ubmVjdDogKG9iaiwgb3B0cyA9IHt9KSAtPlxuICAgIG1vZGVsID0gb3B0cy53aXRoXG4gICAgQGFkZCBtb2RlbFxuICAgIEBpbWFwW21vZGVsLmdldElkZW50aXR5KCldW21vZGVsLmlkXS5wdXNoIG9ialxuXG4gIEBhZGRDb2xsZWN0aW9uOiAoaWRlbnRpdHksIG9wdHMgPSB7fSkgLT5cbiAgICBpZiBub3QgQGltYXBbaWRlbnRpdHldP1xuICAgICAgQGltYXBbaWRlbnRpdHldID0ge31cbiAgICBpZiBub3QgQGltYXBbaWRlbnRpdHldW1wiY29sbGVjdGlvblwiXT9cbiAgICAgIEBpbWFwW2lkZW50aXR5XVtcImNvbGxlY3Rpb25cIl0gPSBbXVxuICAgIHJldHVybiBpZiBAaW1hcFtpZGVudGl0eV1bXCJjb2xsZWN0aW9uXCJdLmluZGV4T2Yob3B0cy50bykgaXNudCAtMVxuICAgIEBpbWFwW2lkZW50aXR5XVtcImNvbGxlY3Rpb25cIl0ucHVzaCBvcHRzLnRvXG5cbiAgQGFsbDogKGlkZW50aXR5KSAtPlxuICAgIHJldHVybiBudWxsIGlmIG5vdCBAaW1hcFtpZGVudGl0eV0/XG4gICAgYXJyID0gW11cbiAgICBmb3IgaWQsIG9ianMgb2YgQGltYXBbaWRlbnRpdHldXG4gICAgICBjb250aW51ZSBpZiBpZCBpcyBcImNvbGxlY3Rpb25cIlxuICAgICAgYXJyLnB1c2ggb2Jqc1swXVxuICAgIHJldHVybiBhcnJcblxuICBAZmluZDogKGtsYXNzLCBpZCkgLT5cbiAgICBpZiBAaW1hcFtrbGFzc10gYW5kIEBpbWFwW2tsYXNzXVtpZF0gdGhlbiBAaW1hcFtrbGFzc11baWRdWzBdIGVsc2UgbnVsbFxuXG4gIEBmaW5kQ29ubmVjdGVkOiAoa2xhc3MsIGlkKSAtPlxuICAgIGlmIEBpbWFwW2tsYXNzXSBhbmQgQGltYXBba2xhc3NdW2lkXSBhbmQgQGltYXBba2xhc3NdW2lkXS5sZW5ndGggPiAxXG4gICAgICBhcnIgPSBAaW1hcFtrbGFzc11baWRdXG4gICAgICBhcnJbMS4uKGFyci5sZW5ndGggLSAxKV1cbiAgICBlbHNlXG4gICAgICBbXSJdfQ==

App.Wire = (function() {
  function Wire(opts) {
    var ref, ref1, ref2;
    if (opts == null) {
      opts = {};
    }
    this.syncTime = null;
    this.token = null;
    this.pollingInterval = null;
    this.pollingTime = (ref = opts.pollingTime) != null ? ref : 3000;
    this.log = (opts.log != null) && opts.log ? true : false;
    this.ssl = opts.ssl;
    this.location = (ref1 = opts.location) != null ? ref1 : 'notification-center';
    this.size = (ref2 = opts.size) != null ? ref2 : 100;
  }

  Wire.prototype.setToken = function(token) {
    return this.token = token;
  };

  Wire.prototype.getSyncTime = function() {
    return this.syncTime;
  };

  Wire.prototype.resetSyncTime = function() {
    return this.syncTime = null;
  };

  Wire.prototype.getPollingTime = function() {
    return this.pollingTime;
  };

  Wire.prototype.setPollingTime = function(val) {
    this.pollingTime = val;
    this.disableNotifications();
    return this.connect();
  };

  Wire.prototype.getPollingInterval = function() {
    return this.pollingInterval;
  };

  Wire.prototype.getSSL = function() {
    return this.ssl;
  };

  Wire.prototype.setSSL = function(val) {
    return this.ssl = val;
  };

  Wire.prototype.getLocation = function() {
    return this.location;
  };

  Wire.prototype.setLocation = function(val) {
    return this.location = val;
  };

  Wire.prototype.getSize = function() {
    return this.size;
  };

  Wire.prototype.setSize = function(val) {
    return this.size = val;
  };

  Wire.prototype.connect = function() {
    return this.pollingInterval = setInterval((function(_this) {
      return function() {
        return _this._check();
      };
    })(this), this.pollingTime);
  };

  Wire.prototype.disableNotifications = function() {
    return window.clearInterval(this.pollingInterval);
  };

  Wire.prototype._check = function() {
    var jqxhr;
    if (Object.keys(App.IdentityMap.imap).length === 0 && (this.token == null) && (this.syncTime != null)) {
      return;
    }
    jqxhr = $.ajax({
      method: "GET",
      url: this._getURL(),
      data: this._requestParams()
    });
    jqxhr.always(function() {});
    jqxhr.fail(function() {});
    return jqxhr.done((function(_this) {
      return function(data) {
        var i, len, notification, notifications;
        _this.syncTime = data[1];
        notifications = data[0];
        if (notifications.length === 0) {
          return;
        }
        for (i = 0, len = notifications.length; i < len; i++) {
          notification = notifications[i];
          _this._processNotification(notification);
        }
        if (notifications.length === _this.size) {
          return _this._check();
        }
      };
    })(this));
  };

  Wire.prototype._processNotification = function(notification) {
    var className, id, identity, model, obj, payload, signal;
    if (this.log) {
      console.log(notification);
    }
    className = notification[0], id = notification[1], signal = notification[2], payload = notification[3];
    model = App.Env.loco.getModelForRemoteName(className);
    identity = model.getIdentity();
    if (App.IdentityMap.imap[identity] == null) {
      return;
    }
    if (App.IdentityMap.imap[identity][id] != null) {
      obj = App.IdentityMap.find(identity, id);
      if (obj["receivedSignal"] != null) {
        obj.receivedSignal(signal, payload);
      }
      this._emitSignalToMembers(id, signal, payload, model, identity);
    }
    if (model["receivedSignal"] != null) {
      model.receivedSignal(signal, payload);
    }
    if (App.IdentityMap.imap[identity]["collection"] == null) {
      return;
    }
    if (App.IdentityMap.imap[identity]["collection"].length === 0) {
      return;
    }
    return this._emitSignalToCollection(signal, payload, identity);
  };

  Wire.prototype._emitSignalToMembers = function(id, signal, payload, model, identity, obj) {
    var connObj, i, len, ref, results;
    if (obj == null) {
      obj = null;
    }
    if (obj == null) {
      obj = new model({
        id: id
      });
    }
    ref = App.IdentityMap.findConnected(identity, id);
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
  };

  Wire.prototype._emitSignalToCollection = function(signal, payload, identity) {
    var i, len, obj, ref, results;
    ref = App.IdentityMap.imap[identity]["collection"];
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      obj = ref[i];
      if (obj.receiverFor(identity) != null) {
        results.push(obj[obj.receiverFor(identity)](identity + " " + signal, payload));
      } else if (obj["receivedSignal"] != null) {
        results.push(obj.receivedSignal(identity + " " + signal, payload));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Wire.prototype._requestParams = function() {
    var params;
    params = {
      synced_at: this.syncTime
    };
    if (this.token != null) {
      params["token"] = this.token;
    }
    return params;
  };

  Wire.prototype._getURL = function() {
    var _, host, protocol, ref;
    ref = window.location.href.split('/'), protocol = ref[0], _ = ref[1], host = ref[2];
    if (this.ssl != null) {
      protocol = this.ssl ? 'https:' : "http:";
    }
    return protocol + "//" + host + "/" + this.location;
  };

  return Wire;

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,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SUFBRyxrQkFBSDtNQUFnQixNQUFPLENBQUEsT0FBQSxDQUFQLEdBQWtCLElBQUMsQ0FBQSxNQUFuQzs7V0FDQTtFQUhjOztpQkFLaEIsT0FBQSxHQUFTLFNBQUE7QUFDUCxRQUFBO0lBQUEsTUFBc0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBckIsQ0FBMkIsR0FBM0IsQ0FBdEIsRUFBQyxpQkFBRCxFQUFXLFVBQVgsRUFBYztJQUNkLElBQUcsZ0JBQUg7TUFDRSxRQUFBLEdBQWMsSUFBQyxDQUFBLEdBQUosR0FBYSxRQUFiLEdBQTJCLFFBRHhDOztXQUVHLFFBQUQsR0FBVSxJQUFWLEdBQWMsSUFBZCxHQUFtQixHQUFuQixHQUFzQixJQUFDLENBQUE7RUFKbEIiLCJmaWxlIjoiYmFzZS93aXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwLldpcmVcbiAgY29uc3RydWN0b3I6IChvcHRzID0ge30pIC0+XG4gICAgQHN5bmNUaW1lID0gbnVsbFxuICAgIEB0b2tlbiA9IG51bGxcbiAgICBAcG9sbGluZ0ludGVydmFsID0gbnVsbFxuICAgIEBwb2xsaW5nVGltZSA9IG9wdHMucG9sbGluZ1RpbWUgPyAzMDAwXG4gICAgQGxvZyA9IGlmIG9wdHMubG9nPyBhbmQgb3B0cy5sb2cgdGhlbiB0cnVlIGVsc2UgZmFsc2VcbiAgICBAc3NsID0gb3B0cy5zc2xcbiAgICBAbG9jYXRpb24gPSBvcHRzLmxvY2F0aW9uID8gJ25vdGlmaWNhdGlvbi1jZW50ZXInXG4gICAgQHNpemUgPSBvcHRzLnNpemUgPyAxMDBcblxuICBzZXRUb2tlbjogKHRva2VuKSAtPiBAdG9rZW4gPSB0b2tlblxuXG4gIGdldFN5bmNUaW1lOiAtPiBAc3luY1RpbWVcbiAgcmVzZXRTeW5jVGltZTogLT4gQHN5bmNUaW1lID0gbnVsbFxuXG4gIGdldFBvbGxpbmdUaW1lOiAtPiBAcG9sbGluZ1RpbWVcbiAgc2V0UG9sbGluZ1RpbWU6ICh2YWwpIC0+XG4gICAgQHBvbGxpbmdUaW1lID0gdmFsXG4gICAgdGhpcy5kaXNhYmxlTm90aWZpY2F0aW9ucygpXG4gICAgdGhpcy5jb25uZWN0KClcblxuICBnZXRQb2xsaW5nSW50ZXJ2YWw6IC0+IEBwb2xsaW5nSW50ZXJ2YWxcblxuICBnZXRTU0w6IC0+IEBzc2xcbiAgc2V0U1NMOiAodmFsKSAtPiBAc3NsID0gdmFsXG5cbiAgZ2V0TG9jYXRpb246IC0+IEBsb2NhdGlvblxuICBzZXRMb2NhdGlvbjogKHZhbCkgLT4gQGxvY2F0aW9uID0gdmFsXG5cbiAgZ2V0U2l6ZTogLT4gQHNpemVcbiAgc2V0U2l6ZTogKHZhbCkgLT4gQHNpemUgPSB2YWxcblxuICBjb25uZWN0OiAtPlxuICAgIEBwb2xsaW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCA9PlxuICAgICAgdGhpcy5fY2hlY2soKVxuICAgICwgQHBvbGxpbmdUaW1lXG5cbiAgZGlzYWJsZU5vdGlmaWNhdGlvbnM6IC0+IHdpbmRvdy5jbGVhckludGVydmFsIEBwb2xsaW5nSW50ZXJ2YWxcblxuICBfY2hlY2s6IC0+XG4gICAgcmV0dXJuIGlmIE9iamVjdC5rZXlzKEFwcC5JZGVudGl0eU1hcC5pbWFwKS5sZW5ndGggaXMgMCBhbmQgbm90IEB0b2tlbj8gYW5kIEBzeW5jVGltZT9cbiAgICBqcXhociA9ICQuYWpheCBtZXRob2Q6IFwiR0VUXCIsIHVybDogdGhpcy5fZ2V0VVJMKCksIGRhdGE6IHRoaXMuX3JlcXVlc3RQYXJhbXMoKVxuICAgIGpxeGhyLmFsd2F5cyAtPlxuICAgIGpxeGhyLmZhaWwgLT5cbiAgICBqcXhoci5kb25lIChkYXRhKSA9PlxuICAgICAgQHN5bmNUaW1lID0gZGF0YVsxXVxuICAgICAgbm90aWZpY2F0aW9ucyA9IGRhdGFbMF1cbiAgICAgIHJldHVybiBpZiBub3RpZmljYXRpb25zLmxlbmd0aCBpcyAwXG4gICAgICB0aGlzLl9wcm9jZXNzTm90aWZpY2F0aW9uIG5vdGlmaWNhdGlvbiBmb3Igbm90aWZpY2F0aW9uIGluIG5vdGlmaWNhdGlvbnNcbiAgICAgIHRoaXMuX2NoZWNrKCkgaWYgbm90aWZpY2F0aW9ucy5sZW5ndGggaXMgQHNpemVcblxuICBfcHJvY2Vzc05vdGlmaWNhdGlvbjogKG5vdGlmaWNhdGlvbikgLT5cbiAgICBjb25zb2xlLmxvZyBub3RpZmljYXRpb24gaWYgQGxvZ1xuICAgIFtjbGFzc05hbWUsIGlkLCBzaWduYWwsIHBheWxvYWRdID0gbm90aWZpY2F0aW9uXG4gICAgbW9kZWwgPSBBcHAuRW52LmxvY28uZ2V0TW9kZWxGb3JSZW1vdGVOYW1lIGNsYXNzTmFtZVxuICAgIGlkZW50aXR5ID0gbW9kZWwuZ2V0SWRlbnRpdHkoKVxuICAgIHJldHVybiBpZiBub3QgQXBwLklkZW50aXR5TWFwLmltYXBbaWRlbnRpdHldP1xuICAgIGlmIEFwcC5JZGVudGl0eU1hcC5pbWFwW2lkZW50aXR5XVtpZF0/XG4gICAgICBvYmogPSBBcHAuSWRlbnRpdHlNYXAuZmluZCBpZGVudGl0eSwgaWRcbiAgICAgIGlmIG9ialtcInJlY2VpdmVkU2lnbmFsXCJdP1xuICAgICAgICBvYmoucmVjZWl2ZWRTaWduYWwgc2lnbmFsLCBwYXlsb2FkXG4gICAgICB0aGlzLl9lbWl0U2lnbmFsVG9NZW1iZXJzIGlkLCBzaWduYWwsIHBheWxvYWQsIG1vZGVsLCBpZGVudGl0eVxuICAgIGlmIG1vZGVsW1wicmVjZWl2ZWRTaWduYWxcIl0/XG4gICAgICBtb2RlbC5yZWNlaXZlZFNpZ25hbCBzaWduYWwsIHBheWxvYWRcbiAgICByZXR1cm4gaWYgbm90IEFwcC5JZGVudGl0eU1hcC5pbWFwW2lkZW50aXR5XVtcImNvbGxlY3Rpb25cIl0/XG4gICAgcmV0dXJuIGlmIEFwcC5JZGVudGl0eU1hcC5pbWFwW2lkZW50aXR5XVtcImNvbGxlY3Rpb25cIl0ubGVuZ3RoIGlzIDBcbiAgICB0aGlzLl9lbWl0U2lnbmFsVG9Db2xsZWN0aW9uIHNpZ25hbCwgcGF5bG9hZCwgaWRlbnRpdHlcblxuICBfZW1pdFNpZ25hbFRvTWVtYmVyczogKGlkLCBzaWduYWwsIHBheWxvYWQsIG1vZGVsLCBpZGVudGl0eSwgb2JqID0gbnVsbCkgLT5cbiAgICBpZiBub3Qgb2JqP1xuICAgICAgb2JqID0gbmV3IG1vZGVsIGlkOiBpZFxuICAgIGZvciBjb25uT2JqIGluIEFwcC5JZGVudGl0eU1hcC5maW5kQ29ubmVjdGVkIGlkZW50aXR5LCBpZFxuICAgICAgaWYgY29ubk9iai5yZWNlaXZlckZvcihvYmopP1xuICAgICAgICBjb25uT2JqW2Nvbm5PYmoucmVjZWl2ZXJGb3Iob2JqKV0gc2lnbmFsLCBwYXlsb2FkXG4gICAgICBlbHNlIGlmIGNvbm5PYmpbXCJyZWNlaXZlZFNpZ25hbFwiXT9cbiAgICAgICAgY29ubk9iai5yZWNlaXZlZFNpZ25hbCBzaWduYWwsIHBheWxvYWRcblxuICBfZW1pdFNpZ25hbFRvQ29sbGVjdGlvbjogKHNpZ25hbCwgcGF5bG9hZCwgaWRlbnRpdHkpIC0+XG4gICAgZm9yIG9iaiBpbiBBcHAuSWRlbnRpdHlNYXAuaW1hcFtpZGVudGl0eV1bXCJjb2xsZWN0aW9uXCJdXG4gICAgICBpZiBvYmoucmVjZWl2ZXJGb3IoaWRlbnRpdHkpP1xuICAgICAgICBvYmpbb2JqLnJlY2VpdmVyRm9yKGlkZW50aXR5KV0gXCIje2lkZW50aXR5fSAje3NpZ25hbH1cIiwgcGF5bG9hZFxuICAgICAgZWxzZSBpZiBvYmpbXCJyZWNlaXZlZFNpZ25hbFwiXT9cbiAgICAgICAgb2JqLnJlY2VpdmVkU2lnbmFsIFwiI3tpZGVudGl0eX0gI3tzaWduYWx9XCIsIHBheWxvYWRcblxuICBfcmVxdWVzdFBhcmFtczogLT5cbiAgICBwYXJhbXMgPSB7c3luY2VkX2F0OiBAc3luY1RpbWV9XG4gICAgaWYgQHRva2VuPyB0aGVuIHBhcmFtc1tcInRva2VuXCJdID0gQHRva2VuXG4gICAgcGFyYW1zXG5cbiAgX2dldFVSTDogLT5cbiAgICBbcHJvdG9jb2wsIF8sIGhvc3RdID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQgJy8nXG4gICAgaWYgQHNzbD9cbiAgICAgIHByb3RvY29sID0gaWYgQHNzbCB0aGVuICdodHRwczonIGVsc2UgXCJodHRwOlwiXG4gICAgXCIje3Byb3RvY29sfS8vI3tob3N0fS8je0Bsb2NhdGlvbn1cIiJdfQ==

App.Loco = (function() {
  function Loco(opts) {
    var initWireConditions, ref;
    if (opts == null) {
      opts = {};
    }
    this.wire = null;
    this.locale = null;
    this.initTurbolinks = (opts.turbolinks != null) && opts.turbolinks ? true : false;
    initWireConditions = (opts.notifications != null) && (opts.notifications.enable != null) && opts.notifications.enable;
    this.initWire = initWireConditions ? true : false;
    this.notificationsParams = opts.notifications;
    this.postInit = opts.postInit;
    this.setLocale((ref = opts.locale) != null ? ref : 'en');
  }

  Loco.prototype.getWire = function() {
    return this.wire;
  };

  Loco.prototype.getLocale = function() {
    return this.locale;
  };

  Loco.prototype.setLocale = function(locale) {
    return this.locale = locale;
  };

  Loco.prototype.init = function() {
    App.Env.loco = this;
    if (this.initWire) {
      this.wire = new App.Wire(this.notificationsParams);
      this.wire.connect();
    }
    if (this.initTurbolinks) {
      return jQuery(document).on("page:change", (function(_this) {
        return function() {
          _this.flow();
          if (_this.postInit != null) {
            return _this.postInit();
          }
        };
      })(this));
    } else {
      return jQuery((function(_this) {
        return function() {
          _this.flow();
          if (_this.postInit != null) {
            return _this.postInit();
          }
        };
      })(this));
    }
  };

  Loco.prototype.flow = function() {
    var action_name, controller_name, namespace_name;
    App.IdentityMap.clear();
    namespace_name = $('body').data('namespace');
    controller_name = $('body').data('controller');
    action_name = $('body').data('action');
    App.Env.action = action_name;
    if (App.Controllers[namespace_name] != null) {
      App.Env.namespaceController = new App.Controllers[namespace_name];
      if (App.Controllers[namespace_name][controller_name] != null) {
        App.Env.controller = new App.Controllers[namespace_name][controller_name];
      }
      if (App.Env.namespaceController.initialize != null) {
        App.Env.namespaceController.initialize();
      }
      if (App.Env.controller != null) {
        App.Env.namespaceController.setSubController(App.Env.controller);
        App.Env.controller.setSuperController(App.Env.namespaceController);
        if (App.Env.controller.initialize != null) {
          App.Env.controller.initialize();
        }
        if (App.Env.controller[action_name] != null) {
          App.Env.controller[action_name]();
        }
      }
    } else if (App.Controllers[controller_name]) {
      App.Env.controller = new App.Controllers[controller_name];
      if (App.Env.controller.initialize != null) {
        App.Env.controller.initialize();
      }
      if (App.Env.controller[action_name] != null) {
        App.Env.controller[action_name]();
      }
    }
    if (this.wire != null) {
      this.wire.resetSyncTime();
      return this.wire._check();
    }
  };

  Loco.prototype.getModels = function() {
    var _, func, innerFunc, models, ref, ref1, regExp;
    models = [];
    regExp = /^[A-Z]/;
    ref = App.Models;
    for (func in ref) {
      _ = ref[func];
      if (!regExp.exec(func) || func === "Base") {
        continue;
      }
      models.push(func);
      ref1 = App.Models[func];
      for (innerFunc in ref1) {
        _ = ref1[innerFunc];
        if (regExp.exec(innerFunc)) {
          models.push(func + "." + innerFunc);
        }
      }
    }
    return models;
  };

  Loco.prototype.getModelForRemoteName = function(remoteName) {
    var i, len, model, parts, ref;
    ref = this.getModels();
    for (i = 0, len = ref.length; i < len; i++) {
      model = ref[i];
      parts = model.split(".");
      if (parts.length === 1) {
        if (App.Models[parts[0]].getRemoteName() === remoteName) {
          return App.Models[parts[0]];
        }
      } else if (parts.length === 2) {
        if (App.Models[parts[0]][parts[1]].getRemoteName() === remoteName) {
          return App.Models[parts[0]][parts[1]];
        }
      }
    }
  };

  return Loco;

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QU4sR0FBUyxTQUF2QixFQUFBOztBQURGO0FBSEY7V0FLQTtFQVJTOztpQkFVWCxxQkFBQSxHQUF1QixTQUFDLFVBQUQ7QUFDckIsUUFBQTtBQUFBO0FBQUEsU0FBQSxxQ0FBQTs7TUFDRSxLQUFBLEdBQVEsS0FBSyxDQUFDLEtBQU4sQ0FBWSxHQUFaO01BQ1IsSUFBRyxLQUFLLENBQUMsTUFBTixLQUFnQixDQUFuQjtRQUNFLElBQStCLEdBQUcsQ0FBQyxNQUFPLENBQUEsS0FBTSxDQUFBLENBQUEsQ0FBTixDQUFTLENBQUMsYUFBckIsQ0FBQSxDQUFBLEtBQXdDLFVBQXZFO0FBQUEsaUJBQU8sR0FBRyxDQUFDLE1BQU8sQ0FBQSxLQUFNLENBQUEsQ0FBQSxDQUFOLEVBQWxCO1NBREY7T0FBQSxNQUVLLElBQUcsS0FBSyxDQUFDLE1BQU4sS0FBZ0IsQ0FBbkI7UUFDSCxJQUF5QyxHQUFHLENBQUMsTUFBTyxDQUFBLEtBQU0sQ0FBQSxDQUFBLENBQU4sQ0FBVSxDQUFBLEtBQU0sQ0FBQSxDQUFBLENBQU4sQ0FBUyxDQUFDLGFBQS9CLENBQUEsQ0FBQSxLQUFrRCxVQUEzRjtBQUFBLGlCQUFPLEdBQUcsQ0FBQyxNQUFPLENBQUEsS0FBTSxDQUFBLENBQUEsQ0FBTixDQUFVLENBQUEsS0FBTSxDQUFBLENBQUEsQ0FBTixFQUE1QjtTQURHOztBQUpQO0VBRHFCIiwiZmlsZSI6ImJhc2UvbG9jby5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcC5Mb2NvXG4gIGNvbnN0cnVjdG9yOiAob3B0cz17fSkgLT5cbiAgICBAd2lyZSA9IG51bGxcbiAgICBAbG9jYWxlID0gbnVsbFxuICAgIEBpbml0VHVyYm9saW5rcyA9IGlmIG9wdHMudHVyYm9saW5rcz8gYW5kIG9wdHMudHVyYm9saW5rcyB0aGVuIHRydWUgZWxzZSBmYWxzZVxuICAgIGluaXRXaXJlQ29uZGl0aW9ucyA9IG9wdHMubm90aWZpY2F0aW9ucz8gYW5kIG9wdHMubm90aWZpY2F0aW9ucy5lbmFibGU/IGFuZCBvcHRzLm5vdGlmaWNhdGlvbnMuZW5hYmxlXG4gICAgQGluaXRXaXJlID0gaWYgaW5pdFdpcmVDb25kaXRpb25zIHRoZW4gdHJ1ZSBlbHNlIGZhbHNlXG4gICAgQG5vdGlmaWNhdGlvbnNQYXJhbXMgPSBvcHRzLm5vdGlmaWNhdGlvbnNcbiAgICBAcG9zdEluaXQgPSBvcHRzLnBvc3RJbml0XG4gICAgdGhpcy5zZXRMb2NhbGUgb3B0cy5sb2NhbGUgPyAnZW4nXG5cbiAgZ2V0V2lyZTogLT4gQHdpcmVcblxuICBnZXRMb2NhbGU6IC0+IEBsb2NhbGVcbiAgc2V0TG9jYWxlOiAobG9jYWxlKSAtPiBAbG9jYWxlID0gbG9jYWxlXG5cbiAgaW5pdDogLT5cbiAgICBBcHAuRW52LmxvY28gPSB0aGlzXG4gICAgaWYgQGluaXRXaXJlXG4gICAgICBAd2lyZSA9IG5ldyBBcHAuV2lyZSBAbm90aWZpY2F0aW9uc1BhcmFtc1xuICAgICAgQHdpcmUuY29ubmVjdCgpXG4gICAgaWYgQGluaXRUdXJib2xpbmtzXG4gICAgICBqUXVlcnkoZG9jdW1lbnQpLm9uIFwicGFnZTpjaGFuZ2VcIiwgPT5cbiAgICAgICAgdGhpcy5mbG93KClcbiAgICAgICAgQHBvc3RJbml0KCkgaWYgQHBvc3RJbml0P1xuICAgIGVsc2VcbiAgICAgIGpRdWVyeSA9PlxuICAgICAgICB0aGlzLmZsb3coKVxuICAgICAgICBAcG9zdEluaXQoKSBpZiBAcG9zdEluaXQ/XG5cbiAgZmxvdzogLT5cbiAgICBBcHAuSWRlbnRpdHlNYXAuY2xlYXIoKVxuXG4gICAgbmFtZXNwYWNlX25hbWUgPSAkKCdib2R5JykuZGF0YSAnbmFtZXNwYWNlJ1xuICAgIGNvbnRyb2xsZXJfbmFtZSA9ICQoJ2JvZHknKS5kYXRhICdjb250cm9sbGVyJ1xuICAgIGFjdGlvbl9uYW1lID0gJCgnYm9keScpLmRhdGEgJ2FjdGlvbidcblxuICAgIEFwcC5FbnYuYWN0aW9uID0gYWN0aW9uX25hbWVcblxuICAgIGlmIEFwcC5Db250cm9sbGVyc1tuYW1lc3BhY2VfbmFtZV0/XG4gICAgICBBcHAuRW52Lm5hbWVzcGFjZUNvbnRyb2xsZXIgPSBuZXcgQXBwLkNvbnRyb2xsZXJzW25hbWVzcGFjZV9uYW1lXVxuICAgICAgaWYgQXBwLkNvbnRyb2xsZXJzW25hbWVzcGFjZV9uYW1lXVtjb250cm9sbGVyX25hbWVdP1xuICAgICAgICBBcHAuRW52LmNvbnRyb2xsZXIgPSBuZXcgQXBwLkNvbnRyb2xsZXJzW25hbWVzcGFjZV9uYW1lXVtjb250cm9sbGVyX25hbWVdXG4gICAgICBBcHAuRW52Lm5hbWVzcGFjZUNvbnRyb2xsZXIuaW5pdGlhbGl6ZSgpIGlmIEFwcC5FbnYubmFtZXNwYWNlQ29udHJvbGxlci5pbml0aWFsaXplP1xuICAgICAgaWYgQXBwLkVudi5jb250cm9sbGVyP1xuICAgICAgICBBcHAuRW52Lm5hbWVzcGFjZUNvbnRyb2xsZXIuc2V0U3ViQ29udHJvbGxlciBBcHAuRW52LmNvbnRyb2xsZXJcbiAgICAgICAgQXBwLkVudi5jb250cm9sbGVyLnNldFN1cGVyQ29udHJvbGxlciBBcHAuRW52Lm5hbWVzcGFjZUNvbnRyb2xsZXJcbiAgICAgICAgQXBwLkVudi5jb250cm9sbGVyLmluaXRpYWxpemUoKSBpZiBBcHAuRW52LmNvbnRyb2xsZXIuaW5pdGlhbGl6ZT9cbiAgICAgICAgQXBwLkVudi5jb250cm9sbGVyW2FjdGlvbl9uYW1lXSgpIGlmIEFwcC5FbnYuY29udHJvbGxlclthY3Rpb25fbmFtZV0/XG4gICAgZWxzZSBpZiBBcHAuQ29udHJvbGxlcnNbY29udHJvbGxlcl9uYW1lXVxuICAgICAgQXBwLkVudi5jb250cm9sbGVyID0gbmV3IEFwcC5Db250cm9sbGVyc1tjb250cm9sbGVyX25hbWVdXG4gICAgICBBcHAuRW52LmNvbnRyb2xsZXIuaW5pdGlhbGl6ZSgpIGlmIEFwcC5FbnYuY29udHJvbGxlci5pbml0aWFsaXplP1xuICAgICAgQXBwLkVudi5jb250cm9sbGVyW2FjdGlvbl9uYW1lXSgpIGlmIEFwcC5FbnYuY29udHJvbGxlclthY3Rpb25fbmFtZV0/XG5cbiAgICBpZiBAd2lyZT9cbiAgICAgIEB3aXJlLnJlc2V0U3luY1RpbWUoKVxuICAgICAgQHdpcmUuX2NoZWNrKClcblxuICBnZXRNb2RlbHM6IC0+XG4gICAgbW9kZWxzID0gW11cbiAgICByZWdFeHAgPSAvXltBLVpdL1xuICAgIGZvciBmdW5jLCBfIG9mIEFwcC5Nb2RlbHNcbiAgICAgIGNvbnRpbnVlIGlmICFyZWdFeHAuZXhlYyhmdW5jKSBvciBmdW5jIGlzIFwiQmFzZVwiXG4gICAgICBtb2RlbHMucHVzaCBmdW5jXG4gICAgICBmb3IgaW5uZXJGdW5jLCBfIG9mIEFwcC5Nb2RlbHNbZnVuY11cbiAgICAgICAgbW9kZWxzLnB1c2ggXCIje2Z1bmN9LiN7aW5uZXJGdW5jfVwiIGlmIHJlZ0V4cC5leGVjIGlubmVyRnVuY1xuICAgIG1vZGVsc1xuXG4gIGdldE1vZGVsRm9yUmVtb3RlTmFtZTogKHJlbW90ZU5hbWUpIC0+XG4gICAgZm9yIG1vZGVsIGluIHRoaXMuZ2V0TW9kZWxzKClcbiAgICAgIHBhcnRzID0gbW9kZWwuc3BsaXQgXCIuXCJcbiAgICAgIGlmIHBhcnRzLmxlbmd0aCBpcyAxXG4gICAgICAgIHJldHVybiBBcHAuTW9kZWxzW3BhcnRzWzBdXSBpZiBBcHAuTW9kZWxzW3BhcnRzWzBdXS5nZXRSZW1vdGVOYW1lKCkgaXMgcmVtb3RlTmFtZVxuICAgICAgZWxzZSBpZiBwYXJ0cy5sZW5ndGggaXMgMlxuICAgICAgICByZXR1cm4gQXBwLk1vZGVsc1twYXJ0c1swXV1bcGFydHNbMV1dIGlmIEFwcC5Nb2RlbHNbcGFydHNbMF1dW3BhcnRzWzFdXS5nZXRSZW1vdGVOYW1lKCkgaXMgcmVtb3RlTmFtZSJdfQ==

App.Mixins.Connectivity = (function() {
  function Connectivity() {}

  Connectivity.prototype.connectWith = function(data, opts) {
    var i, identity, len, ref;
    if (opts == null) {
      opts = {};
    }
    if (data == null) {
      return null;
    }
    if (data.constructor.name === "Array") {
      ref = App.Utils.Array.uniq(App.Utils.Array.map(data, function(obj) {
        return obj.getIdentity();
      }));
      for (i = 0, len = ref.length; i < len; i++) {
        identity = ref[i];
        App.IdentityMap.addCollection(identity, {
          to: this
        });
        if (opts.receiver != null) {
          this.receivers[identity] = opts.receiver;
        }
      }
      return;
    }
    if (opts.receiver != null) {
      this.receivers[data.toKey()] = opts.receiver;
    }
    return App.IdentityMap.connect(this, {
      "with": data
    });
  };

  Connectivity.prototype.receiverFor = function(data) {
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
  };

  return Connectivity;

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UvbWl4aW5zL2Nvbm5lY3Rpdml0eS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQzs7O3lCQUNmLFdBQUEsR0FBYSxTQUFDLElBQUQsRUFBTyxJQUFQO0FBQ1gsUUFBQTs7TUFEa0IsT0FBTzs7SUFDekIsSUFBbUIsWUFBbkI7QUFBQSxhQUFPLEtBQVA7O0lBQ0EsSUFBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQWpCLEtBQXlCLE9BQTVCO0FBQ0U7OztBQUFBLFdBQUEscUNBQUE7O1FBQ0UsR0FBRyxDQUFDLFdBQVcsQ0FBQyxhQUFoQixDQUE4QixRQUE5QixFQUF3QztVQUFBLEVBQUEsRUFBSSxJQUFKO1NBQXhDO1FBQ0EsSUFBd0MscUJBQXhDO1VBQUEsSUFBQyxDQUFBLFNBQVUsQ0FBQSxRQUFBLENBQVgsR0FBdUIsSUFBSSxDQUFDLFNBQTVCOztBQUZGO0FBR0EsYUFKRjs7SUFLQSxJQUE0QyxxQkFBNUM7TUFBQSxJQUFDLENBQUEsU0FBVSxDQUFBLElBQUksQ0FBQyxLQUFMLENBQUEsQ0FBQSxDQUFYLEdBQTJCLElBQUksQ0FBQyxTQUFoQzs7V0FDQSxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQWhCLENBQXdCLElBQXhCLEVBQThCO01BQUEsTUFBQSxFQUFNLElBQU47S0FBOUI7RUFSVzs7eUJBVWIsV0FBQSxHQUFhLFNBQUMsSUFBRDtJQUNYLElBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFqQixLQUF5QixRQUE1QjtNQUNTLElBQUcsNEJBQUg7ZUFBMEIsSUFBQyxDQUFBLFNBQVUsQ0FBQSxJQUFBLEVBQXJDO09BQUEsTUFBQTtlQUFnRCxLQUFoRDtPQURUOztJQUVBLElBQW1DLG9DQUFuQztBQUFBLGFBQU8sSUFBQyxDQUFBLFNBQVUsQ0FBQSxJQUFJLENBQUMsS0FBTCxDQUFBLENBQUEsRUFBbEI7O1dBQ0E7RUFKVyIsImZpbGUiOiJiYXNlL21peGlucy9jb25uZWN0aXZpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAuTWl4aW5zLkNvbm5lY3Rpdml0eVxuICBjb25uZWN0V2l0aDogKGRhdGEsIG9wdHMgPSB7fSkgLT5cbiAgICByZXR1cm4gbnVsbCBpZiBub3QgZGF0YT9cbiAgICBpZiBkYXRhLmNvbnN0cnVjdG9yLm5hbWUgaXMgXCJBcnJheVwiXG4gICAgICBmb3IgaWRlbnRpdHkgaW4gQXBwLlV0aWxzLkFycmF5LnVuaXEgQXBwLlV0aWxzLkFycmF5Lm1hcChkYXRhLCAob2JqKSAtPiBvYmouZ2V0SWRlbnRpdHkoKSlcbiAgICAgICAgQXBwLklkZW50aXR5TWFwLmFkZENvbGxlY3Rpb24gaWRlbnRpdHksIHRvOiB0aGlzXG4gICAgICAgIEByZWNlaXZlcnNbaWRlbnRpdHldID0gb3B0cy5yZWNlaXZlciBpZiBvcHRzLnJlY2VpdmVyP1xuICAgICAgcmV0dXJuXG4gICAgQHJlY2VpdmVyc1tkYXRhLnRvS2V5KCldID0gb3B0cy5yZWNlaXZlciBpZiBvcHRzLnJlY2VpdmVyP1xuICAgIEFwcC5JZGVudGl0eU1hcC5jb25uZWN0IHRoaXMsIHdpdGg6IGRhdGFcblxuICByZWNlaXZlckZvcjogKGRhdGEpIC0+XG4gICAgaWYgZGF0YS5jb25zdHJ1Y3Rvci5uYW1lIGlzIFwiU3RyaW5nXCJcbiAgICAgIHJldHVybiBpZiBAcmVjZWl2ZXJzW2RhdGFdPyB0aGVuIEByZWNlaXZlcnNbZGF0YV0gZWxzZSBudWxsXG4gICAgcmV0dXJuIEByZWNlaXZlcnNbZGF0YS50b0tleSgpXSBpZiBAcmVjZWl2ZXJzW2RhdGEudG9LZXkoKV0/XG4gICAgbnVsbCJdfQ==

App.Utils.Array = (function() {
  function Array() {}

  Array.map = function(arr, func) {
    var i, len, newArr, o;
    newArr = [];
    for (i = 0, len = arr.length; i < len; i++) {
      o = arr[i];
      newArr.push(func(o));
    }
    return newArr;
  };

  Array.uniq = function(arr, func) {
    var i, len, newArr, o;
    newArr = [];
    for (i = 0, len = arr.length; i < len; i++) {
      o = arr[i];
      if (newArr.indexOf(o) === -1) {
        newArr.push(o);
      }
    }
    return newArr;
  };

  return Array;

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2FycmF5LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDOzs7RUFDZCxLQUFDLENBQUEsR0FBRCxHQUFNLFNBQUMsR0FBRCxFQUFNLElBQU47QUFDSixRQUFBO0lBQUEsTUFBQSxHQUFTO0FBQ1QsU0FBQSxxQ0FBQTs7TUFDRSxNQUFNLENBQUMsSUFBUCxDQUFZLElBQUEsQ0FBSyxDQUFMLENBQVo7QUFERjtXQUVBO0VBSkk7O0VBTU4sS0FBQyxDQUFBLElBQUQsR0FBTyxTQUFDLEdBQUQsRUFBTSxJQUFOO0FBQ0wsUUFBQTtJQUFBLE1BQUEsR0FBUztBQUNULFNBQUEscUNBQUE7O01BQ0UsSUFBa0IsTUFBTSxDQUFDLE9BQVAsQ0FBZSxDQUFmLENBQUEsS0FBcUIsQ0FBQyxDQUF4QztRQUFBLE1BQU0sQ0FBQyxJQUFQLENBQVksQ0FBWixFQUFBOztBQURGO1dBRUE7RUFKSyIsImZpbGUiOiJ1dGlscy9hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcC5VdGlscy5BcnJheVxuICBAbWFwOiAoYXJyLCBmdW5jKSAtPlxuICAgIG5ld0FyciA9IFtdXG4gICAgZm9yIG8gaW4gYXJyXG4gICAgICBuZXdBcnIucHVzaCBmdW5jKG8pXG4gICAgbmV3QXJyXG5cbiAgQHVuaXE6IChhcnIsIGZ1bmMpIC0+XG4gICAgbmV3QXJyID0gW11cbiAgICBmb3IgbyBpbiBhcnJcbiAgICAgIG5ld0Fyci5wdXNoKG8pIGlmIG5ld0Fyci5pbmRleE9mKG8pIGlzIC0xXG4gICAgbmV3QXJyIl19

App.Utils.Collection = (function() {
  function Collection() {}

  Collection.find = function(collection, func) {
    var o;
    if ((function() {
      var i, len, results;
      results = [];
      for (i = 0, len = collection.length; i < len; i++) {
        o = collection[i];
        results.push(func(o) === true);
      }
      return results;
    })()) {
      return o;
    }
  };

  return Collection;

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2NvbGxlY3Rpb24uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUM7OztFQUNkLFVBQUMsQ0FBQSxJQUFELEdBQU8sU0FBQyxVQUFELEVBQWEsSUFBYjtBQUFzQixRQUFBO0lBQUE7O0FBQVk7V0FBQSw0Q0FBQTs7cUJBQUEsSUFBQSxDQUFLLENBQUwsQ0FBQSxLQUFXO0FBQVg7O1FBQVo7QUFBQSxhQUFPLEVBQVA7O0VBQXRCIiwiZmlsZSI6InV0aWxzL2NvbGxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAuVXRpbHMuQ29sbGVjdGlvblxuICBAZmluZDogKGNvbGxlY3Rpb24sIGZ1bmMpIC0+IHJldHVybiBvIGlmIGZ1bmMobykgaXMgdHJ1ZSBmb3IgbyBpbiBjb2xsZWN0aW9uIl19

App.Utils.String = (function() {
  function String() {}

  String.last = function(s) {
    return s[s.length - 1];
  };

  return String;

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3N0cmluZy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQU0sR0FBRyxDQUFDLEtBQUssQ0FBQzs7O0VBQ2QsTUFBQyxDQUFBLElBQUQsR0FBTyxTQUFDLENBQUQ7V0FBTyxDQUFFLENBQUEsQ0FBQyxDQUFDLE1BQUYsR0FBVyxDQUFYO0VBQVQiLCJmaWxlIjoidXRpbHMvc3RyaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwLlV0aWxzLlN0cmluZ1xuICBAbGFzdDogKHMpIC0+IHNbcy5sZW5ndGggLSAxXSJdfQ==

App.Validators.Base = (function() {
  Base.sharedInstances = {};

  Base.instance = function(obj, attr, opts) {
    var sharedInstance, validatorName;
    validatorName = this.name;
    if (this.sharedInstances[validatorName] == null) {
      this.sharedInstances[validatorName] = new App.Validators[validatorName];
    }
    sharedInstance = this.sharedInstances[validatorName];
    sharedInstance.assignAttribs(obj, attr, opts);
    return sharedInstance;
  };

  function Base() {
    this.obj = null;
    this.attr = null;
    this.val = null;
    this.opts = null;
  }

  Base.prototype.assignAttribs = function(obj, attr, opts) {
    this.obj = obj;
    this.attr = attr;
    this.val = this.obj[this.attr];
    return this.opts = opts;
  };

  return Base;

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMvX2Jhc2UuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFNLEdBQUcsQ0FBQyxVQUFVLENBQUM7RUFDbkIsSUFBQyxDQUFBLGVBQUQsR0FBbUI7O0VBRW5CLElBQUMsQ0FBQSxRQUFELEdBQVcsU0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLElBQVo7QUFDVCxRQUFBO0lBQUEsYUFBQSxHQUFnQixJQUFJLENBQUM7SUFDckIsSUFBTywyQ0FBUDtNQUNFLElBQUMsQ0FBQSxlQUFnQixDQUFBLGFBQUEsQ0FBakIsR0FBa0MsSUFBSSxHQUFHLENBQUMsVUFBVyxDQUFBLGFBQUEsRUFEdkQ7O0lBRUEsY0FBQSxHQUFpQixJQUFDLENBQUEsZUFBZ0IsQ0FBQSxhQUFBO0lBQ2xDLGNBQWMsQ0FBQyxhQUFmLENBQTZCLEdBQTdCLEVBQWtDLElBQWxDLEVBQXdDLElBQXhDO0FBQ0EsV0FBTztFQU5FOztFQVFFLGNBQUE7SUFDWCxJQUFDLENBQUEsR0FBRCxHQUFPO0lBQ1AsSUFBQyxDQUFBLElBQUQsR0FBUTtJQUNSLElBQUMsQ0FBQSxHQUFELEdBQU87SUFDUCxJQUFDLENBQUEsSUFBRCxHQUFRO0VBSkc7O2lCQU1iLGFBQUEsR0FBZSxTQUFDLEdBQUQsRUFBTSxJQUFOLEVBQVksSUFBWjtJQUNiLElBQUMsQ0FBQSxHQUFELEdBQU87SUFDUCxJQUFDLENBQUEsSUFBRCxHQUFRO0lBQ1IsSUFBQyxDQUFBLEdBQUQsR0FBTyxJQUFDLENBQUEsR0FBSSxDQUFBLElBQUMsQ0FBQSxJQUFEO1dBQ1osSUFBQyxDQUFBLElBQUQsR0FBUTtFQUpLIiwiZmlsZSI6InZhbGlkYXRvcnMvX2Jhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAuVmFsaWRhdG9ycy5CYXNlXG4gIEBzaGFyZWRJbnN0YW5jZXMgPSB7fVxuXG4gIEBpbnN0YW5jZTogKG9iaiwgYXR0ciwgb3B0cykgLT5cbiAgICB2YWxpZGF0b3JOYW1lID0gdGhpcy5uYW1lXG4gICAgaWYgbm90IEBzaGFyZWRJbnN0YW5jZXNbdmFsaWRhdG9yTmFtZV0/XG4gICAgICBAc2hhcmVkSW5zdGFuY2VzW3ZhbGlkYXRvck5hbWVdID0gbmV3IEFwcC5WYWxpZGF0b3JzW3ZhbGlkYXRvck5hbWVdXG4gICAgc2hhcmVkSW5zdGFuY2UgPSBAc2hhcmVkSW5zdGFuY2VzW3ZhbGlkYXRvck5hbWVdXG4gICAgc2hhcmVkSW5zdGFuY2UuYXNzaWduQXR0cmlicyBvYmosIGF0dHIsIG9wdHNcbiAgICByZXR1cm4gc2hhcmVkSW5zdGFuY2VcblxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBAb2JqID0gbnVsbFxuICAgIEBhdHRyID0gbnVsbFxuICAgIEB2YWwgPSBudWxsXG4gICAgQG9wdHMgPSBudWxsXG5cbiAgYXNzaWduQXR0cmliczogKG9iaiwgYXR0ciwgb3B0cykgLT5cbiAgICBAb2JqID0gb2JqXG4gICAgQGF0dHIgPSBhdHRyXG4gICAgQHZhbCA9IEBvYmpbQGF0dHJdXG4gICAgQG9wdHMgPSBvcHRzIl19

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App.Validators.Absence = (function(superClass) {
  extend(Absence, superClass);

  function Absence() {
    Absence.__super__.constructor.apply(this, arguments);
  }

  Absence.prototype.validate = function() {
    switch (typeof this.val) {
      case 'string':
        if ((this.val != null) && this.val.length === 0) {
          return;
        }
        break;
      default:
        if (this.val == null) {
          return;
        }
    }
    return this._addErrorMessage();
  };

  Absence.prototype._addErrorMessage = function() {
    var message;
    message = this.opts.message != null ? this.opts.message : App.I18n[App.Env.loco.getLocale()].errors.messages.present;
    return this.obj.addErrorMessage(message, {
      "for": this.attr
    });
  };

  return Absence;

})(App.Validators.Base);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMvYWJzZW5jZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7O0FBQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQzs7O0VBQ04saUJBQUE7SUFBRywwQ0FBQSxTQUFBO0VBQUg7O29CQUViLFFBQUEsR0FBVSxTQUFBO0FBQ1IsWUFBTyxPQUFPLElBQUMsQ0FBQSxHQUFmO0FBQUEsV0FDTyxRQURQO1FBRUksSUFBVSxrQkFBQSxJQUFVLElBQUMsQ0FBQSxHQUFHLENBQUMsTUFBTCxLQUFlLENBQW5DO0FBQUEsaUJBQUE7O0FBREc7QUFEUDtRQUlJLElBQWMsZ0JBQWQ7QUFBQSxpQkFBQTs7QUFKSjtXQUtBLElBQUksQ0FBQyxnQkFBTCxDQUFBO0VBTlE7O29CQVFWLGdCQUFBLEdBQWtCLFNBQUE7QUFDaEIsUUFBQTtJQUFBLE9BQUEsR0FBYSx5QkFBSCxHQUNSLElBQUMsQ0FBQSxJQUFJLENBQUMsT0FERSxHQUdSLEdBQUcsQ0FBQyxJQUFLLENBQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBYixDQUFBLENBQUEsQ0FBeUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1dBQ3JELElBQUMsQ0FBQSxHQUFHLENBQUMsZUFBTCxDQUFxQixPQUFyQixFQUE4QjtNQUFBLEtBQUEsRUFBSyxJQUFDLENBQUEsSUFBTjtLQUE5QjtFQUxnQjs7OztHQVhpQixHQUFHLENBQUMsVUFBVSxDQUFDIiwiZmlsZSI6InZhbGlkYXRvcnMvYWJzZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcC5WYWxpZGF0b3JzLkFic2VuY2UgZXh0ZW5kcyBBcHAuVmFsaWRhdG9ycy5CYXNlXG4gIGNvbnN0cnVjdG9yOiAtPiBzdXBlclxuXG4gIHZhbGlkYXRlOiAtPlxuICAgIHN3aXRjaCB0eXBlb2YgQHZhbFxuICAgICAgd2hlbiAnc3RyaW5nJ1xuICAgICAgICByZXR1cm4gaWYgQHZhbD8gYW5kIEB2YWwubGVuZ3RoIGlzIDBcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGlmIG5vdCBAdmFsP1xuICAgIHRoaXMuX2FkZEVycm9yTWVzc2FnZSgpXG5cbiAgX2FkZEVycm9yTWVzc2FnZTogLT5cbiAgICBtZXNzYWdlID0gaWYgQG9wdHMubWVzc2FnZT9cbiAgICAgIEBvcHRzLm1lc3NhZ2VcbiAgICBlbHNlXG4gICAgICBBcHAuSTE4bltBcHAuRW52LmxvY28uZ2V0TG9jYWxlKCldLmVycm9ycy5tZXNzYWdlcy5wcmVzZW50XG4gICAgQG9iai5hZGRFcnJvck1lc3NhZ2UgbWVzc2FnZSwgZm9yOiBAYXR0clxuIl19

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App.Validators.Confirmation = (function(superClass) {
  extend(Confirmation, superClass);

  function Confirmation() {
    Confirmation.__super__.constructor.apply(this, arguments);
  }

  Confirmation.prototype.validate = function() {
    var properVal;
    properVal = this.obj[this._properAttr()];
    if ((this.val != null) && (properVal != null) && this.val === properVal) {
      return;
    }
    return this._addErrorMessage();
  };

  Confirmation.prototype._addErrorMessage = function() {
    var attrName, attrNames, defaultAttrName, message;
    defaultAttrName = this.attr.charAt(0).toUpperCase() + this.attr.slice(1);
    attrNames = App.I18n[App.Env.loco.getLocale()].attributes[this.obj.getIdentity()];
    attrName = (attrNames && attrNames[this.attr]) || defaultAttrName;
    message = this.opts.message != null ? this.opts.message : App.I18n[App.Env.loco.getLocale()].errors.messages.confirmation;
    message = message.replace('%{attribute}', attrName);
    return this.obj.addErrorMessage(message, {
      "for": this._properAttr()
    });
  };

  Confirmation.prototype._properAttr = function() {
    return this.attr + "Confirmation";
  };

  return Confirmation;

})(App.Validators.Base);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMvY29uZmlybWF0aW9uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7QUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDOzs7RUFDTixzQkFBQTtJQUFHLCtDQUFBLFNBQUE7RUFBSDs7eUJBRWIsUUFBQSxHQUFVLFNBQUE7QUFDUixRQUFBO0lBQUEsU0FBQSxHQUFZLElBQUMsQ0FBQSxHQUFJLENBQUEsSUFBSSxDQUFDLFdBQUwsQ0FBQSxDQUFBO0lBQ2pCLElBQVUsa0JBQUEsSUFBVSxtQkFBVixJQUF5QixJQUFDLENBQUEsR0FBRCxLQUFRLFNBQTNDO0FBQUEsYUFBQTs7V0FDQSxJQUFJLENBQUMsZ0JBQUwsQ0FBQTtFQUhROzt5QkFLVixnQkFBQSxHQUFrQixTQUFBO0FBQ2hCLFFBQUE7SUFBQSxlQUFBLEdBQWtCLElBQUMsQ0FBQSxJQUFJLENBQUMsTUFBTixDQUFhLENBQWIsQ0FBZSxDQUFDLFdBQWhCLENBQUEsQ0FBQSxHQUFnQyxJQUFDLENBQUEsSUFBSSxDQUFDLEtBQU4sQ0FBWSxDQUFaO0lBQ2xELFNBQUEsR0FBWSxHQUFHLENBQUMsSUFBSyxDQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQWIsQ0FBQSxDQUFBLENBQXlCLENBQUMsVUFBVyxDQUFBLElBQUMsQ0FBQSxHQUFHLENBQUMsV0FBTCxDQUFBLENBQUE7SUFDMUQsUUFBQSxHQUFXLENBQUMsU0FBQSxJQUFjLFNBQVUsQ0FBQSxJQUFDLENBQUEsSUFBRCxDQUF6QixDQUFBLElBQW9DO0lBQy9DLE9BQUEsR0FBYSx5QkFBSCxHQUNSLElBQUMsQ0FBQSxJQUFJLENBQUMsT0FERSxHQUdSLEdBQUcsQ0FBQyxJQUFLLENBQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBYixDQUFBLENBQUEsQ0FBeUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3JELE9BQUEsR0FBVSxPQUFPLENBQUMsT0FBUixDQUFnQixjQUFoQixFQUFnQyxRQUFoQztXQUNWLElBQUMsQ0FBQSxHQUFHLENBQUMsZUFBTCxDQUFxQixPQUFyQixFQUE4QjtNQUFBLEtBQUEsRUFBSyxJQUFJLENBQUMsV0FBTCxDQUFBLENBQUw7S0FBOUI7RUFUZ0I7O3lCQVdsQixXQUFBLEdBQWEsU0FBQTtXQUFNLElBQUMsQ0FBQSxJQUFGLEdBQU87RUFBWjs7OztHQW5CMkIsR0FBRyxDQUFDLFVBQVUsQ0FBQyIsImZpbGUiOiJ2YWxpZGF0b3JzL2NvbmZpcm1hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcC5WYWxpZGF0b3JzLkNvbmZpcm1hdGlvbiBleHRlbmRzIEFwcC5WYWxpZGF0b3JzLkJhc2VcbiAgY29uc3RydWN0b3I6IC0+IHN1cGVyXG5cbiAgdmFsaWRhdGU6IC0+XG4gICAgcHJvcGVyVmFsID0gQG9ialt0aGlzLl9wcm9wZXJBdHRyKCldXG4gICAgcmV0dXJuIGlmIEB2YWw/IGFuZCBwcm9wZXJWYWw/IGFuZCBAdmFsIGlzIHByb3BlclZhbFxuICAgIHRoaXMuX2FkZEVycm9yTWVzc2FnZSgpXG5cbiAgX2FkZEVycm9yTWVzc2FnZTogLT5cbiAgICBkZWZhdWx0QXR0ck5hbWUgPSBAYXR0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIEBhdHRyLnNsaWNlKDEpXG4gICAgYXR0ck5hbWVzID0gQXBwLkkxOG5bQXBwLkVudi5sb2NvLmdldExvY2FsZSgpXS5hdHRyaWJ1dGVzW0BvYmouZ2V0SWRlbnRpdHkoKV1cbiAgICBhdHRyTmFtZSA9IChhdHRyTmFtZXMgYW5kIGF0dHJOYW1lc1tAYXR0cl0pIHx8IGRlZmF1bHRBdHRyTmFtZVxuICAgIG1lc3NhZ2UgPSBpZiBAb3B0cy5tZXNzYWdlP1xuICAgICAgQG9wdHMubWVzc2FnZVxuICAgIGVsc2VcbiAgICAgIEFwcC5JMThuW0FwcC5FbnYubG9jby5nZXRMb2NhbGUoKV0uZXJyb3JzLm1lc3NhZ2VzLmNvbmZpcm1hdGlvblxuICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UgJyV7YXR0cmlidXRlfScsIGF0dHJOYW1lXG4gICAgQG9iai5hZGRFcnJvck1lc3NhZ2UgbWVzc2FnZSwgZm9yOiB0aGlzLl9wcm9wZXJBdHRyKClcblxuICBfcHJvcGVyQXR0cjogLT4gXCIje0BhdHRyfUNvbmZpcm1hdGlvblwiIl19

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App.Validators.Exclusion = (function(superClass) {
  extend(Exclusion, superClass);

  function Exclusion() {
    Exclusion.__super__.constructor.apply(this, arguments);
  }

  Exclusion.prototype.validate = function() {
    var set;
    set = this.opts["in"] || this.opts.within || [];
    if (set.indexOf(this.val) === -1) {
      return;
    }
    return this._addErrorMessage();
  };

  Exclusion.prototype._addErrorMessage = function() {
    var message;
    message = this.opts.message != null ? this.opts.message : App.I18n[App.Env.loco.getLocale()].errors.messages.exclusion;
    return this.obj.addErrorMessage(message, {
      "for": this.attr
    });
  };

  return Exclusion;

})(App.Validators.Base);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMvZXhjbHVzaW9uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7QUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDOzs7RUFDTixtQkFBQTtJQUFHLDRDQUFBLFNBQUE7RUFBSDs7c0JBRWIsUUFBQSxHQUFVLFNBQUE7QUFDUixRQUFBO0lBQUEsR0FBQSxHQUFNLElBQUMsQ0FBQSxJQUFJLENBQUMsSUFBRCxDQUFMLElBQVksSUFBQyxDQUFBLElBQUksQ0FBQyxNQUFsQixJQUE0QjtJQUNsQyxJQUFVLEdBQUcsQ0FBQyxPQUFKLENBQVksSUFBQyxDQUFBLEdBQWIsQ0FBQSxLQUFxQixDQUFDLENBQWhDO0FBQUEsYUFBQTs7V0FDQSxJQUFJLENBQUMsZ0JBQUwsQ0FBQTtFQUhROztzQkFLVixnQkFBQSxHQUFrQixTQUFBO0FBQ2hCLFFBQUE7SUFBQSxPQUFBLEdBQWEseUJBQUgsR0FDUixJQUFDLENBQUEsSUFBSSxDQUFDLE9BREUsR0FHUixHQUFHLENBQUMsSUFBSyxDQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQWIsQ0FBQSxDQUFBLENBQXlCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztXQUNyRCxJQUFDLENBQUEsR0FBRyxDQUFDLGVBQUwsQ0FBcUIsT0FBckIsRUFBOEI7TUFBQSxLQUFBLEVBQUssSUFBQyxDQUFBLElBQU47S0FBOUI7RUFMZ0I7Ozs7R0FSbUIsR0FBRyxDQUFDLFVBQVUsQ0FBQyIsImZpbGUiOiJ2YWxpZGF0b3JzL2V4Y2x1c2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcC5WYWxpZGF0b3JzLkV4Y2x1c2lvbiBleHRlbmRzIEFwcC5WYWxpZGF0b3JzLkJhc2VcbiAgY29uc3RydWN0b3I6IC0+IHN1cGVyXG5cbiAgdmFsaWRhdGU6IC0+XG4gICAgc2V0ID0gQG9wdHMuaW4gb3IgQG9wdHMud2l0aGluIG9yIFtdXG4gICAgcmV0dXJuIGlmIHNldC5pbmRleE9mKEB2YWwpIGlzIC0xXG4gICAgdGhpcy5fYWRkRXJyb3JNZXNzYWdlKClcblxuICBfYWRkRXJyb3JNZXNzYWdlOiAtPlxuICAgIG1lc3NhZ2UgPSBpZiBAb3B0cy5tZXNzYWdlP1xuICAgICAgQG9wdHMubWVzc2FnZVxuICAgIGVsc2VcbiAgICAgIEFwcC5JMThuW0FwcC5FbnYubG9jby5nZXRMb2NhbGUoKV0uZXJyb3JzLm1lc3NhZ2VzLmV4Y2x1c2lvblxuICAgIEBvYmouYWRkRXJyb3JNZXNzYWdlIG1lc3NhZ2UsIGZvcjogQGF0dHJcbiJdfQ==

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App.Validators.Format = (function(superClass) {
  extend(Format, superClass);

  function Format() {
    Format.__super__.constructor.apply(this, arguments);
  }

  Format.prototype.validate = function() {
    var match;
    match = this.opts["with"].exec(this.val);
    if (match != null) {
      return;
    }
    return this._addErrorMessage();
  };

  Format.prototype._addErrorMessage = function() {
    var message;
    message = this.opts.message != null ? this.opts.message : App.I18n[App.Env.loco.getLocale()].errors.messages.invalid;
    return this.obj.addErrorMessage(message, {
      "for": this.attr
    });
  };

  return Format;

})(App.Validators.Base);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMvZm9ybWF0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7QUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDOzs7RUFDTixnQkFBQTtJQUFHLHlDQUFBLFNBQUE7RUFBSDs7bUJBRWIsUUFBQSxHQUFVLFNBQUE7QUFDUixRQUFBO0lBQUEsS0FBQSxHQUFRLElBQUMsQ0FBQSxJQUFJLENBQUMsTUFBRCxDQUFLLENBQUMsSUFBWCxDQUFnQixJQUFDLENBQUEsR0FBakI7SUFDUixJQUFVLGFBQVY7QUFBQSxhQUFBOztXQUNBLElBQUksQ0FBQyxnQkFBTCxDQUFBO0VBSFE7O21CQUtWLGdCQUFBLEdBQWtCLFNBQUE7QUFDaEIsUUFBQTtJQUFBLE9BQUEsR0FBYSx5QkFBSCxHQUNSLElBQUMsQ0FBQSxJQUFJLENBQUMsT0FERSxHQUdSLEdBQUcsQ0FBQyxJQUFLLENBQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBYixDQUFBLENBQUEsQ0FBeUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1dBQ3JELElBQUMsQ0FBQSxHQUFHLENBQUMsZUFBTCxDQUFxQixPQUFyQixFQUE4QjtNQUFBLEtBQUEsRUFBSyxJQUFDLENBQUEsSUFBTjtLQUE5QjtFQUxnQjs7OztHQVJnQixHQUFHLENBQUMsVUFBVSxDQUFDIiwiZmlsZSI6InZhbGlkYXRvcnMvZm9ybWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwLlZhbGlkYXRvcnMuRm9ybWF0IGV4dGVuZHMgQXBwLlZhbGlkYXRvcnMuQmFzZVxuICBjb25zdHJ1Y3RvcjogLT4gc3VwZXJcblxuICB2YWxpZGF0ZTogLT5cbiAgICBtYXRjaCA9IEBvcHRzLndpdGguZXhlYyBAdmFsXG4gICAgcmV0dXJuIGlmIG1hdGNoP1xuICAgIHRoaXMuX2FkZEVycm9yTWVzc2FnZSgpXG5cbiAgX2FkZEVycm9yTWVzc2FnZTogLT5cbiAgICBtZXNzYWdlID0gaWYgQG9wdHMubWVzc2FnZT9cbiAgICAgIEBvcHRzLm1lc3NhZ2VcbiAgICBlbHNlXG4gICAgICBBcHAuSTE4bltBcHAuRW52LmxvY28uZ2V0TG9jYWxlKCldLmVycm9ycy5tZXNzYWdlcy5pbnZhbGlkXG4gICAgQG9iai5hZGRFcnJvck1lc3NhZ2UgbWVzc2FnZSwgZm9yOiBAYXR0ciJdfQ==

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App.Validators.Inclusion = (function(superClass) {
  extend(Inclusion, superClass);

  function Inclusion() {
    Inclusion.__super__.constructor.apply(this, arguments);
  }

  Inclusion.prototype.validate = function() {
    var set;
    set = this.opts["in"] || this.opts.within || [];
    if (set.indexOf(this.val) !== -1) {
      return;
    }
    return this._addErrorMessage();
  };

  Inclusion.prototype._addErrorMessage = function() {
    var message;
    message = this.opts.message != null ? this.opts.message : App.I18n[App.Env.loco.getLocale()].errors.messages.inclusion;
    return this.obj.addErrorMessage(message, {
      "for": this.attr
    });
  };

  return Inclusion;

})(App.Validators.Base);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMvaW5jbHVzaW9uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7QUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDOzs7RUFDTixtQkFBQTtJQUFHLDRDQUFBLFNBQUE7RUFBSDs7c0JBRWIsUUFBQSxHQUFVLFNBQUE7QUFDUixRQUFBO0lBQUEsR0FBQSxHQUFNLElBQUMsQ0FBQSxJQUFJLENBQUMsSUFBRCxDQUFMLElBQVksSUFBQyxDQUFBLElBQUksQ0FBQyxNQUFsQixJQUE0QjtJQUNsQyxJQUFVLEdBQUcsQ0FBQyxPQUFKLENBQVksSUFBQyxDQUFBLEdBQWIsQ0FBQSxLQUF1QixDQUFDLENBQWxDO0FBQUEsYUFBQTs7V0FDQSxJQUFJLENBQUMsZ0JBQUwsQ0FBQTtFQUhROztzQkFLVixnQkFBQSxHQUFrQixTQUFBO0FBQ2hCLFFBQUE7SUFBQSxPQUFBLEdBQWEseUJBQUgsR0FDUixJQUFDLENBQUEsSUFBSSxDQUFDLE9BREUsR0FHUixHQUFHLENBQUMsSUFBSyxDQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQWIsQ0FBQSxDQUFBLENBQXlCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztXQUNyRCxJQUFDLENBQUEsR0FBRyxDQUFDLGVBQUwsQ0FBcUIsT0FBckIsRUFBOEI7TUFBQSxLQUFBLEVBQUssSUFBQyxDQUFBLElBQU47S0FBOUI7RUFMZ0I7Ozs7R0FSbUIsR0FBRyxDQUFDLFVBQVUsQ0FBQyIsImZpbGUiOiJ2YWxpZGF0b3JzL2luY2x1c2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcC5WYWxpZGF0b3JzLkluY2x1c2lvbiBleHRlbmRzIEFwcC5WYWxpZGF0b3JzLkJhc2VcbiAgY29uc3RydWN0b3I6IC0+IHN1cGVyXG5cbiAgdmFsaWRhdGU6IC0+XG4gICAgc2V0ID0gQG9wdHMuaW4gb3IgQG9wdHMud2l0aGluIG9yIFtdXG4gICAgcmV0dXJuIGlmIHNldC5pbmRleE9mKEB2YWwpIGlzbnQgLTFcbiAgICB0aGlzLl9hZGRFcnJvck1lc3NhZ2UoKVxuXG4gIF9hZGRFcnJvck1lc3NhZ2U6IC0+XG4gICAgbWVzc2FnZSA9IGlmIEBvcHRzLm1lc3NhZ2U/XG4gICAgICBAb3B0cy5tZXNzYWdlXG4gICAgZWxzZVxuICAgICAgQXBwLkkxOG5bQXBwLkVudi5sb2NvLmdldExvY2FsZSgpXS5lcnJvcnMubWVzc2FnZXMuaW5jbHVzaW9uXG4gICAgQG9iai5hZGRFcnJvck1lc3NhZ2UgbWVzc2FnZSwgZm9yOiBAYXR0clxuIl19

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App.Validators.Length = (function(superClass) {
  extend(Length, superClass);

  function Length() {
    Length.__super__.constructor.apply(this, arguments);
  }

  Length.prototype.validate = function() {
    var message;
    if (this.val == null) {
      return;
    }
    message = (this._range()[0] != null) && (this._range()[1] != null) && this._range()[0] === this._range()[1] && this.val.length !== this._range()[0] ? this._selectErrorMessage('wrong_length', this._range()[0]) : (this._range()[0] != null) && this.val.length < this._range()[0] ? this._selectErrorMessage('too_short', this._range()[0]) : (this._range()[1] != null) && this.val.length > this._range()[1] ? this._selectErrorMessage('too_long', this._range()[1]) : null;
    if (message === null) {
      return;
    }
    return this.obj.addErrorMessage(message, {
      "for": this.attr
    });
  };

  Length.prototype._range = function() {
    var from, to;
    from = this.opts.minimum || this.opts.is || ((this.opts.within != null) && this.opts.within[0]) || null;
    to = this.opts.maximum || this.opts.is || ((this.opts.within != null) && this.opts.within[1]) || null;
    return [from, to];
  };

  Length.prototype._selectErrorMessage = function(msg, val) {
    var i, len, message, ref, variant;
    if (val === 1) {
      return App.I18n[App.Env.loco.getLocale()].errors.messages[msg].one;
    }
    message = null;
    ref = ['few', 'many'];
    for (i = 0, len = ref.length; i < len; i++) {
      variant = ref[i];
      if (this._checkVariant(variant, val)) {
        message = App.I18n[App.Env.loco.getLocale()].errors.messages[msg][variant];
        break;
      }
    }
    if (message == null) {
      message = App.I18n[App.Env.loco.getLocale()].errors.messages[msg].other;
    }
    if (this.opts.message != null) {
      message = this.opts.message;
    }
    if (/%{count}/.exec(message)) {
      message = message.replace('%{count}', val);
    }
    return message;
  };

  Length.prototype._checkVariant = function(variant, val) {
    if (App.I18n[App.Env.loco.getLocale()].variants[variant] == null) {
      return;
    }
    return App.I18n[App.Env.loco.getLocale()].variants[variant](val);
  };

  return Length;

})(App.Validators.Base);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMvbGVuZ3RoLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7QUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDOzs7RUFDTixnQkFBQTtJQUFHLHlDQUFBLFNBQUE7RUFBSDs7bUJBRWIsUUFBQSxHQUFVLFNBQUE7QUFDUixRQUFBO0lBQUEsSUFBYyxnQkFBZDtBQUFBLGFBQUE7O0lBQ0EsT0FBQSxHQUFhLDBCQUFBLElBQXNCLDBCQUF0QixJQUE0QyxJQUFJLENBQUMsTUFBTCxDQUFBLENBQWMsQ0FBQSxDQUFBLENBQWQsS0FBb0IsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFjLENBQUEsQ0FBQSxDQUE5RSxJQUFxRixJQUFDLENBQUEsR0FBRyxDQUFDLE1BQUwsS0FBaUIsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFjLENBQUEsQ0FBQSxDQUF2SCxHQUNSLElBQUksQ0FBQyxtQkFBTCxDQUF5QixjQUF6QixFQUF5QyxJQUFJLENBQUMsTUFBTCxDQUFBLENBQWMsQ0FBQSxDQUFBLENBQXZELENBRFEsR0FFRiwwQkFBQSxJQUFzQixJQUFDLENBQUEsR0FBRyxDQUFDLE1BQUwsR0FBYyxJQUFJLENBQUMsTUFBTCxDQUFBLENBQWMsQ0FBQSxDQUFBLENBQXJELEdBQ0gsSUFBSSxDQUFDLG1CQUFMLENBQXlCLFdBQXpCLEVBQXNDLElBQUksQ0FBQyxNQUFMLENBQUEsQ0FBYyxDQUFBLENBQUEsQ0FBcEQsQ0FERyxHQUVHLDBCQUFBLElBQXNCLElBQUMsQ0FBQSxHQUFHLENBQUMsTUFBTCxHQUFjLElBQUksQ0FBQyxNQUFMLENBQUEsQ0FBYyxDQUFBLENBQUEsQ0FBckQsR0FDSCxJQUFJLENBQUMsbUJBQUwsQ0FBeUIsVUFBekIsRUFBcUMsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFjLENBQUEsQ0FBQSxDQUFuRCxDQURHLEdBR0g7SUFDRixJQUFVLE9BQUEsS0FBVyxJQUFyQjtBQUFBLGFBQUE7O1dBQ0EsSUFBQyxDQUFBLEdBQUcsQ0FBQyxlQUFMLENBQXFCLE9BQXJCLEVBQThCO01BQUEsS0FBQSxFQUFLLElBQUMsQ0FBQSxJQUFOO0tBQTlCO0VBWFE7O21CQWFWLE1BQUEsR0FBUSxTQUFBO0FBQ04sUUFBQTtJQUFBLElBQUEsR0FBTyxJQUFDLENBQUEsSUFBSSxDQUFDLE9BQU4sSUFBaUIsSUFBQyxDQUFBLElBQUksQ0FBQyxFQUF2QixJQUE2QixDQUFDLDBCQUFBLElBQWtCLElBQUMsQ0FBQSxJQUFJLENBQUMsTUFBTyxDQUFBLENBQUEsQ0FBaEMsQ0FBN0IsSUFBb0U7SUFDM0UsRUFBQSxHQUFLLElBQUMsQ0FBQSxJQUFJLENBQUMsT0FBTixJQUFpQixJQUFDLENBQUEsSUFBSSxDQUFDLEVBQXZCLElBQTZCLENBQUMsMEJBQUEsSUFBa0IsSUFBQyxDQUFBLElBQUksQ0FBQyxNQUFPLENBQUEsQ0FBQSxDQUFoQyxDQUE3QixJQUFvRTtXQUN6RSxDQUFDLElBQUQsRUFBTyxFQUFQO0VBSE07O21CQUtSLG1CQUFBLEdBQXFCLFNBQUMsR0FBRCxFQUFNLEdBQU47QUFDbkIsUUFBQTtJQUFBLElBQUcsR0FBQSxLQUFPLENBQVY7QUFDRSxhQUFPLEdBQUcsQ0FBQyxJQUFLLENBQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBYixDQUFBLENBQUEsQ0FBeUIsQ0FBQyxNQUFNLENBQUMsUUFBUyxDQUFBLEdBQUEsQ0FBSSxDQUFDLElBRGpFOztJQUVBLE9BQUEsR0FBVTtBQUNWO0FBQUEsU0FBQSxxQ0FBQTs7TUFDRSxJQUFHLElBQUksQ0FBQyxhQUFMLENBQW1CLE9BQW5CLEVBQTRCLEdBQTVCLENBQUg7UUFDRSxPQUFBLEdBQVUsR0FBRyxDQUFDLElBQUssQ0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFiLENBQUEsQ0FBQSxDQUF5QixDQUFDLE1BQU0sQ0FBQyxRQUFTLENBQUEsR0FBQSxDQUFLLENBQUEsT0FBQTtBQUNsRSxjQUZGOztBQURGO0lBSUEsSUFBTyxlQUFQO01BQ0UsT0FBQSxHQUFVLEdBQUcsQ0FBQyxJQUFLLENBQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBYixDQUFBLENBQUEsQ0FBeUIsQ0FBQyxNQUFNLENBQUMsUUFBUyxDQUFBLEdBQUEsQ0FBSSxDQUFDLE1BRHBFOztJQUVBLElBQUcseUJBQUg7TUFDRSxPQUFBLEdBQVUsSUFBQyxDQUFBLElBQUksQ0FBQyxRQURsQjs7SUFFQSxJQUFHLFVBQVUsQ0FBQyxJQUFYLENBQWdCLE9BQWhCLENBQUg7TUFDRSxPQUFBLEdBQVUsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsVUFBaEIsRUFBNEIsR0FBNUIsRUFEWjs7V0FFQTtFQWRtQjs7bUJBZ0JyQixhQUFBLEdBQWUsU0FBQyxPQUFELEVBQVUsR0FBVjtJQUNiLElBQWMsNERBQWQ7QUFBQSxhQUFBOztXQUNBLEdBQUcsQ0FBQyxJQUFLLENBQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBYixDQUFBLENBQUEsQ0FBeUIsQ0FBQyxRQUFTLENBQUEsT0FBQSxDQUE1QyxDQUFxRCxHQUFyRDtFQUZhOzs7O0dBckNtQixHQUFHLENBQUMsVUFBVSxDQUFDIiwiZmlsZSI6InZhbGlkYXRvcnMvbGVuZ3RoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwLlZhbGlkYXRvcnMuTGVuZ3RoIGV4dGVuZHMgQXBwLlZhbGlkYXRvcnMuQmFzZVxuICBjb25zdHJ1Y3RvcjogLT4gc3VwZXJcblxuICB2YWxpZGF0ZTogLT5cbiAgICByZXR1cm4gaWYgbm90IEB2YWw/XG4gICAgbWVzc2FnZSA9IGlmIHRoaXMuX3JhbmdlKClbMF0/IGFuZCB0aGlzLl9yYW5nZSgpWzFdPyBhbmQgdGhpcy5fcmFuZ2UoKVswXSBpcyB0aGlzLl9yYW5nZSgpWzFdIGFuZCBAdmFsLmxlbmd0aCBpc250IHRoaXMuX3JhbmdlKClbMF1cbiAgICAgIHRoaXMuX3NlbGVjdEVycm9yTWVzc2FnZSAnd3JvbmdfbGVuZ3RoJywgdGhpcy5fcmFuZ2UoKVswXVxuICAgIGVsc2UgaWYgdGhpcy5fcmFuZ2UoKVswXT8gYW5kIEB2YWwubGVuZ3RoIDwgdGhpcy5fcmFuZ2UoKVswXVxuICAgICAgdGhpcy5fc2VsZWN0RXJyb3JNZXNzYWdlICd0b29fc2hvcnQnLCB0aGlzLl9yYW5nZSgpWzBdXG4gICAgZWxzZSBpZiB0aGlzLl9yYW5nZSgpWzFdPyBhbmQgQHZhbC5sZW5ndGggPiB0aGlzLl9yYW5nZSgpWzFdXG4gICAgICB0aGlzLl9zZWxlY3RFcnJvck1lc3NhZ2UgJ3Rvb19sb25nJywgdGhpcy5fcmFuZ2UoKVsxXVxuICAgIGVsc2VcbiAgICAgIG51bGxcbiAgICByZXR1cm4gaWYgbWVzc2FnZSBpcyBudWxsXG4gICAgQG9iai5hZGRFcnJvck1lc3NhZ2UgbWVzc2FnZSwgZm9yOiBAYXR0clxuXG4gIF9yYW5nZTogLT5cbiAgICBmcm9tID0gQG9wdHMubWluaW11bSBvciBAb3B0cy5pcyBvciAoQG9wdHMud2l0aGluPyBhbmQgQG9wdHMud2l0aGluWzBdKSBvciBudWxsXG4gICAgdG8gPSBAb3B0cy5tYXhpbXVtIG9yIEBvcHRzLmlzIG9yIChAb3B0cy53aXRoaW4/IGFuZCBAb3B0cy53aXRoaW5bMV0pIG9yIG51bGxcbiAgICBbZnJvbSwgdG9dXG5cbiAgX3NlbGVjdEVycm9yTWVzc2FnZTogKG1zZywgdmFsKSAtPlxuICAgIGlmIHZhbCBpcyAxXG4gICAgICByZXR1cm4gQXBwLkkxOG5bQXBwLkVudi5sb2NvLmdldExvY2FsZSgpXS5lcnJvcnMubWVzc2FnZXNbbXNnXS5vbmVcbiAgICBtZXNzYWdlID0gbnVsbFxuICAgIGZvciB2YXJpYW50IGluIFsnZmV3JywgJ21hbnknXVxuICAgICAgaWYgdGhpcy5fY2hlY2tWYXJpYW50IHZhcmlhbnQsIHZhbFxuICAgICAgICBtZXNzYWdlID0gQXBwLkkxOG5bQXBwLkVudi5sb2NvLmdldExvY2FsZSgpXS5lcnJvcnMubWVzc2FnZXNbbXNnXVt2YXJpYW50XVxuICAgICAgICBicmVha1xuICAgIGlmIG5vdCBtZXNzYWdlP1xuICAgICAgbWVzc2FnZSA9IEFwcC5JMThuW0FwcC5FbnYubG9jby5nZXRMb2NhbGUoKV0uZXJyb3JzLm1lc3NhZ2VzW21zZ10ub3RoZXJcbiAgICBpZiBAb3B0cy5tZXNzYWdlP1xuICAgICAgbWVzc2FnZSA9IEBvcHRzLm1lc3NhZ2VcbiAgICBpZiAvJXtjb3VudH0vLmV4ZWMgbWVzc2FnZVxuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSAnJXtjb3VudH0nLCB2YWxcbiAgICBtZXNzYWdlXG5cbiAgX2NoZWNrVmFyaWFudDogKHZhcmlhbnQsIHZhbCkgLT5cbiAgICByZXR1cm4gaWYgbm90IEFwcC5JMThuW0FwcC5FbnYubG9jby5nZXRMb2NhbGUoKV0udmFyaWFudHNbdmFyaWFudF0/XG4gICAgQXBwLkkxOG5bQXBwLkVudi5sb2NvLmdldExvY2FsZSgpXS52YXJpYW50c1t2YXJpYW50XSB2YWwiXX0=

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App.Validators.Numericality = (function(superClass) {
  extend(Numericality, superClass);

  function Numericality() {
    Numericality.__super__.constructor.apply(this, arguments);
  }

  Numericality.prototype.validate = function() {
    if (isNaN(this.val)) {
      return this._addNaNErrorMessage();
    } else if ((this.opts.only_integer != null) && Number(this.val) !== parseInt(this.val)) {
      return this._addIntErrorMessage();
    } else if ((this.opts.greater_than != null) && Number(this.val) <= this.opts.greater_than) {
      return this._addGreatherThanErrorMessage();
    } else if ((this.opts.greater_than_or_equal_to != null) && Number(this.val) < this.opts.greater_than_or_equal_to) {
      return this._addGreatherThanOrEqualToErrorMessage();
    } else if ((this.opts.equal_to != null) && Number(this.val) !== this.opts.equal_to) {
      return this._addEqualToErrorMessage();
    } else if ((this.opts.less_than != null) && Number(this.val) >= this.opts.less_than) {
      return this._addLessThanErrorMessage();
    } else if ((this.opts.less_than_or_equal_to != null) && Number(this.val) > this.opts.less_than_or_equal_to) {
      return this._addLessThanOrEqualToErrorMessage();
    } else if ((this.opts.other_than != null) && Number(this.val) === this.opts.other_than) {
      return this._addOtherThanErrorMessage();
    } else if ((this.opts.odd != null) && Number(this.val) % 2 !== 1) {
      return this._addOddErrorMessage();
    } else if ((this.opts.even != null) && Number(this.val) % 2 !== 0) {
      return this._addEvenErrorMessage();
    }
  };

  Numericality.prototype._addNaNErrorMessage = function() {
    var message;
    message = this.opts.message != null ? this.opts.message : App.I18n[App.Env.loco.getLocale()].errors.messages.not_a_number;
    return this.obj.addErrorMessage(message, {
      "for": this.attr
    });
  };

  Numericality.prototype._addIntErrorMessage = function() {
    var message;
    message = App.I18n[App.Env.loco.getLocale()].errors.messages.not_an_integer;
    return this.obj.addErrorMessage(message, {
      "for": this.attr
    });
  };

  Numericality.prototype._addGreatherThanErrorMessage = function() {
    var message;
    message = App.I18n[App.Env.loco.getLocale()].errors.messages.greater_than;
    message = message.replace('%{count}', this.opts.greater_than);
    return this.obj.addErrorMessage(message, {
      "for": this.attr
    });
  };

  Numericality.prototype._addGreatherThanOrEqualToErrorMessage = function() {
    var message;
    message = App.I18n[App.Env.loco.getLocale()].errors.messages.greater_than_or_equal_to;
    message = message.replace('%{count}', this.opts.greater_than_or_equal_to);
    return this.obj.addErrorMessage(message, {
      "for": this.attr
    });
  };

  Numericality.prototype._addEqualToErrorMessage = function() {
    var message;
    message = App.I18n[App.Env.loco.getLocale()].errors.messages.equal_to;
    message = message.replace('%{count}', this.opts.equal_to);
    return this.obj.addErrorMessage(message, {
      "for": this.attr
    });
  };

  Numericality.prototype._addLessThanErrorMessage = function() {
    var message;
    message = App.I18n[App.Env.loco.getLocale()].errors.messages.less_than;
    message = message.replace('%{count}', this.opts.less_than);
    return this.obj.addErrorMessage(message, {
      "for": this.attr
    });
  };

  Numericality.prototype._addLessThanOrEqualToErrorMessage = function() {
    var message;
    message = App.I18n[App.Env.loco.getLocale()].errors.messages.less_than_or_equal_to;
    message = message.replace('%{count}', this.opts.less_than_or_equal_to);
    return this.obj.addErrorMessage(message, {
      "for": this.attr
    });
  };

  Numericality.prototype._addOtherThanErrorMessage = function() {
    var message;
    message = App.I18n[App.Env.loco.getLocale()].errors.messages.other_than;
    message = message.replace('%{count}', this.opts.other_than);
    return this.obj.addErrorMessage(message, {
      "for": this.attr
    });
  };

  Numericality.prototype._addOddErrorMessage = function() {
    var message;
    message = App.I18n[App.Env.loco.getLocale()].errors.messages.odd;
    return this.obj.addErrorMessage(message, {
      "for": this.attr
    });
  };

  Numericality.prototype._addEvenErrorMessage = function() {
    var message;
    message = App.I18n[App.Env.loco.getLocale()].errors.messages.even;
    return this.obj.addErrorMessage(message, {
      "for": this.attr
    });
  };

  return Numericality;

})(App.Validators.Base);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMvbnVtZXJpY2FsaXR5LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7QUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDOzs7RUFDTixzQkFBQTtJQUFHLCtDQUFBLFNBQUE7RUFBSDs7eUJBRWIsUUFBQSxHQUFVLFNBQUE7SUFDUixJQUFHLEtBQUEsQ0FBTSxJQUFDLENBQUEsR0FBUCxDQUFIO2FBQ0UsSUFBSSxDQUFDLG1CQUFMLENBQUEsRUFERjtLQUFBLE1BRUssSUFBRyxnQ0FBQSxJQUF3QixNQUFBLENBQU8sSUFBQyxDQUFBLEdBQVIsQ0FBQSxLQUFrQixRQUFBLENBQVMsSUFBQyxDQUFBLEdBQVYsQ0FBN0M7YUFDSCxJQUFJLENBQUMsbUJBQUwsQ0FBQSxFQURHO0tBQUEsTUFFQSxJQUFHLGdDQUFBLElBQXdCLE1BQUEsQ0FBTyxJQUFDLENBQUEsR0FBUixDQUFBLElBQWdCLElBQUMsQ0FBQSxJQUFJLENBQUMsWUFBakQ7YUFDSCxJQUFJLENBQUMsNEJBQUwsQ0FBQSxFQURHO0tBQUEsTUFFQSxJQUFHLDRDQUFBLElBQW9DLE1BQUEsQ0FBTyxJQUFDLENBQUEsR0FBUixDQUFBLEdBQWUsSUFBQyxDQUFBLElBQUksQ0FBQyx3QkFBNUQ7YUFDSCxJQUFJLENBQUMscUNBQUwsQ0FBQSxFQURHO0tBQUEsTUFFQSxJQUFHLDRCQUFBLElBQW9CLE1BQUEsQ0FBTyxJQUFDLENBQUEsR0FBUixDQUFBLEtBQWtCLElBQUMsQ0FBQSxJQUFJLENBQUMsUUFBL0M7YUFDSCxJQUFJLENBQUMsdUJBQUwsQ0FBQSxFQURHO0tBQUEsTUFFQSxJQUFHLDZCQUFBLElBQXFCLE1BQUEsQ0FBTyxJQUFDLENBQUEsR0FBUixDQUFBLElBQWdCLElBQUMsQ0FBQSxJQUFJLENBQUMsU0FBOUM7YUFDSCxJQUFJLENBQUMsd0JBQUwsQ0FBQSxFQURHO0tBQUEsTUFFQSxJQUFHLHlDQUFBLElBQWlDLE1BQUEsQ0FBTyxJQUFDLENBQUEsR0FB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LElBQUksQ0FBQyxVQUFsQztXQUNWLElBQUMsQ0FBQSxHQUFHLENBQUMsZUFBTCxDQUFxQixPQUFyQixFQUE4QjtNQUFBLEtBQUEsRUFBSyxJQUFDLENBQUEsSUFBTjtLQUE5QjtFQUh5Qjs7eUJBSzNCLG1CQUFBLEdBQXFCLFNBQUE7QUFDbkIsUUFBQTtJQUFBLE9BQUEsR0FBVSxHQUFHLENBQUMsSUFBSyxDQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQWIsQ0FBQSxDQUFBLENBQXlCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztXQUM3RCxJQUFDLENBQUEsR0FBRyxDQUFDLGVBQUwsQ0FBcUIsT0FBckIsRUFBOEI7TUFBQSxLQUFBLEVBQUssSUFBQyxDQUFBLElBQU47S0FBOUI7RUFGbUI7O3lCQUlyQixvQkFBQSxHQUFzQixTQUFBO0FBQ3BCLFFBQUE7SUFBQSxPQUFBLEdBQVUsR0FBRyxDQUFDLElBQUssQ0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFiLENBQUEsQ0FBQSxDQUF5QixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7V0FDN0QsSUFBQyxDQUFBLEdBQUcsQ0FBQyxlQUFMLENBQXFCLE9BQXJCLEVBQThCO01BQUEsS0FBQSxFQUFLLElBQUMsQ0FBQSxJQUFOO0tBQTlCO0VBRm9COzs7O0dBdEVrQixHQUFHLENBQUMsVUFBVSxDQUFDIiwiZmlsZSI6InZhbGlkYXRvcnMvbnVtZXJpY2FsaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwLlZhbGlkYXRvcnMuTnVtZXJpY2FsaXR5IGV4dGVuZHMgQXBwLlZhbGlkYXRvcnMuQmFzZVxuICBjb25zdHJ1Y3RvcjogLT4gc3VwZXJcblxuICB2YWxpZGF0ZTogLT5cbiAgICBpZiBpc05hTiBAdmFsXG4gICAgICB0aGlzLl9hZGROYU5FcnJvck1lc3NhZ2UoKVxuICAgIGVsc2UgaWYgQG9wdHMub25seV9pbnRlZ2VyPyBhbmQgTnVtYmVyKEB2YWwpIGlzbnQgcGFyc2VJbnQoQHZhbClcbiAgICAgIHRoaXMuX2FkZEludEVycm9yTWVzc2FnZSgpXG4gICAgZWxzZSBpZiBAb3B0cy5ncmVhdGVyX3RoYW4/IGFuZCBOdW1iZXIoQHZhbCkgPD0gQG9wdHMuZ3JlYXRlcl90aGFuXG4gICAgICB0aGlzLl9hZGRHcmVhdGhlclRoYW5FcnJvck1lc3NhZ2UoKVxuICAgIGVsc2UgaWYgQG9wdHMuZ3JlYXRlcl90aGFuX29yX2VxdWFsX3RvPyBhbmQgTnVtYmVyKEB2YWwpIDwgQG9wdHMuZ3JlYXRlcl90aGFuX29yX2VxdWFsX3RvXG4gICAgICB0aGlzLl9hZGRHcmVhdGhlclRoYW5PckVxdWFsVG9FcnJvck1lc3NhZ2UoKVxuICAgIGVsc2UgaWYgQG9wdHMuZXF1YWxfdG8/IGFuZCBOdW1iZXIoQHZhbCkgaXNudCBAb3B0cy5lcXVhbF90b1xuICAgICAgdGhpcy5fYWRkRXF1YWxUb0Vycm9yTWVzc2FnZSgpXG4gICAgZWxzZSBpZiBAb3B0cy5sZXNzX3RoYW4/IGFuZCBOdW1iZXIoQHZhbCkgPj0gQG9wdHMubGVzc190aGFuXG4gICAgICB0aGlzLl9hZGRMZXNzVGhhbkVycm9yTWVzc2FnZSgpXG4gICAgZWxzZSBpZiBAb3B0cy5sZXNzX3RoYW5fb3JfZXF1YWxfdG8/IGFuZCBOdW1iZXIoQHZhbCkgPiBAb3B0cy5sZXNzX3RoYW5fb3JfZXF1YWxfdG9cbiAgICAgIHRoaXMuX2FkZExlc3NUaGFuT3JFcXVhbFRvRXJyb3JNZXNzYWdlKClcbiAgICBlbHNlIGlmIEBvcHRzLm90aGVyX3RoYW4/IGFuZCBOdW1iZXIoQHZhbCkgaXMgQG9wdHMub3RoZXJfdGhhblxuICAgICAgdGhpcy5fYWRkT3RoZXJUaGFuRXJyb3JNZXNzYWdlKClcbiAgICBlbHNlIGlmIEBvcHRzLm9kZD8gYW5kIE51bWJlcihAdmFsKSAlIDIgaXNudCAxXG4gICAgICB0aGlzLl9hZGRPZGRFcnJvck1lc3NhZ2UoKVxuICAgIGVsc2UgaWYgQG9wdHMuZXZlbj8gYW5kIE51bWJlcihAdmFsKSAlIDIgaXNudCAwXG4gICAgICB0aGlzLl9hZGRFdmVuRXJyb3JNZXNzYWdlKClcblxuICBfYWRkTmFORXJyb3JNZXNzYWdlOiAtPlxuICAgIG1lc3NhZ2UgPSBpZiBAb3B0cy5tZXNzYWdlP1xuICAgICAgQG9wdHMubWVzc2FnZVxuICAgIGVsc2VcbiAgICAgIEFwcC5JMThuW0FwcC5FbnYubG9jby5nZXRMb2NhbGUoKV0uZXJyb3JzLm1lc3NhZ2VzLm5vdF9hX251bWJlclxuICAgIEBvYmouYWRkRXJyb3JNZXNzYWdlIG1lc3NhZ2UsIGZvcjogQGF0dHJcblxuICBfYWRkSW50RXJyb3JNZXNzYWdlOiAtPlxuICAgIG1lc3NhZ2UgPSBBcHAuSTE4bltBcHAuRW52LmxvY28uZ2V0TG9jYWxlKCldLmVycm9ycy5tZXNzYWdlcy5ub3RfYW5faW50ZWdlclxuICAgIEBvYmouYWRkRXJyb3JNZXNzYWdlIG1lc3NhZ2UsIGZvcjogQGF0dHJcblxuICBfYWRkR3JlYXRoZXJUaGFuRXJyb3JNZXNzYWdlOiAtPlxuICAgIG1lc3NhZ2UgPSBBcHAuSTE4bltBcHAuRW52LmxvY28uZ2V0TG9jYWxlKCldLmVycm9ycy5tZXNzYWdlcy5ncmVhdGVyX3RoYW5cbiAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlICcle2NvdW50fScsIEBvcHRzLmdyZWF0ZXJfdGhhblxuICAgIEBvYmouYWRkRXJyb3JNZXNzYWdlIG1lc3NhZ2UsIGZvcjogQGF0dHJcblxuICBfYWRkR3JlYXRoZXJUaGFuT3JFcXVhbFRvRXJyb3JNZXNzYWdlOiAtPlxuICAgIG1lc3NhZ2UgPSBBcHAuSTE4bltBcHAuRW52LmxvY28uZ2V0TG9jYWxlKCldLmVycm9ycy5tZXNzYWdlcy5ncmVhdGVyX3RoYW5fb3JfZXF1YWxfdG9cbiAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlICcle2NvdW50fScsIEBvcHRzLmdyZWF0ZXJfdGhhbl9vcl9lcXVhbF90b1xuICAgIEBvYmouYWRkRXJyb3JNZXNzYWdlIG1lc3NhZ2UsIGZvcjogQGF0dHJcblxuICBfYWRkRXF1YWxUb0Vycm9yTWVzc2FnZTogLT5cbiAgICBtZXNzYWdlID0gQXBwLkkxOG5bQXBwLkVudi5sb2NvLmdldExvY2FsZSgpXS5lcnJvcnMubWVzc2FnZXMuZXF1YWxfdG9cbiAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlICcle2NvdW50fScsIEBvcHRzLmVxdWFsX3RvXG4gICAgQG9iai5hZGRFcnJvck1lc3NhZ2UgbWVzc2FnZSwgZm9yOiBAYXR0clxuXG4gIF9hZGRMZXNzVGhhbkVycm9yTWVzc2FnZTogLT5cbiAgICBtZXNzYWdlID0gQXBwLkkxOG5bQXBwLkVudi5sb2NvLmdldExvY2FsZSgpXS5lcnJvcnMubWVzc2FnZXMubGVzc190aGFuXG4gICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSAnJXtjb3VudH0nLCBAb3B0cy5sZXNzX3RoYW5cbiAgICBAb2JqLmFkZEVycm9yTWVzc2FnZSBtZXNzYWdlLCBmb3I6IEBhdHRyXG5cbiAgX2FkZExlc3NUaGFuT3JFcXVhbFRvRXJyb3JNZXNzYWdlOiAtPlxuICAgIG1lc3NhZ2UgPSBBcHAuSTE4bltBcHAuRW52LmxvY28uZ2V0TG9jYWxlKCldLmVycm9ycy5tZXNzYWdlcy5sZXNzX3RoYW5fb3JfZXF1YWxfdG9cbiAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlICcle2NvdW50fScsIEBvcHRzLmxlc3NfdGhhbl9vcl9lcXVhbF90b1xuICAgIEBvYmouYWRkRXJyb3JNZXNzYWdlIG1lc3NhZ2UsIGZvcjogQGF0dHJcblxuICBfYWRkT3RoZXJUaGFuRXJyb3JNZXNzYWdlOiAtPlxuICAgIG1lc3NhZ2UgPSBBcHAuSTE4bltBcHAuRW52LmxvY28uZ2V0TG9jYWxlKCldLmVycm9ycy5tZXNzYWdlcy5vdGhlcl90aGFuXG4gICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSAnJXtjb3VudH0nLCBAb3B0cy5vdGhlcl90aGFuXG4gICAgQG9iai5hZGRFcnJvck1lc3NhZ2UgbWVzc2FnZSwgZm9yOiBAYXR0clxuXG4gIF9hZGRPZGRFcnJvck1lc3NhZ2U6IC0+XG4gICAgbWVzc2FnZSA9IEFwcC5JMThuW0FwcC5FbnYubG9jby5nZXRMb2NhbGUoKV0uZXJyb3JzLm1lc3NhZ2VzLm9kZFxuICAgIEBvYmouYWRkRXJyb3JNZXNzYWdlIG1lc3NhZ2UsIGZvcjogQGF0dHJcblxuICBfYWRkRXZlbkVycm9yTWVzc2FnZTogLT5cbiAgICBtZXNzYWdlID0gQXBwLkkxOG5bQXBwLkVudi5sb2NvLmdldExvY2FsZSgpXS5lcnJvcnMubWVzc2FnZXMuZXZlblxuICAgIEBvYmouYWRkRXJyb3JNZXNzYWdlIG1lc3NhZ2UsIGZvcjogQGF0dHIiXX0=

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App.Validators.Presence = (function(superClass) {
  extend(Presence, superClass);

  function Presence() {
    Presence.__super__.constructor.apply(this, arguments);
  }

  Presence.prototype.validate = function() {
    switch (typeof this.val) {
      case 'string':
        if ((this.val != null) && this.val.length > 0) {
          return;
        }
        break;
      default:
        if (this.val != null) {
          return;
        }
    }
    return this._addErrorMessage();
  };

  Presence.prototype._addErrorMessage = function() {
    var message;
    message = this.opts.message != null ? this.opts.message : App.I18n[App.Env.loco.getLocale()].errors.messages.blank;
    return this.obj.addErrorMessage(message, {
      "for": this.attr
    });
  };

  return Presence;

})(App.Validators.Base);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMvcHJlc2VuY2UuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7OztBQUFNLEdBQUcsQ0FBQyxVQUFVLENBQUM7OztFQUNOLGtCQUFBO0lBQUcsMkNBQUEsU0FBQTtFQUFIOztxQkFFYixRQUFBLEdBQVUsU0FBQTtBQUNSLFlBQU8sT0FBTyxJQUFDLENBQUEsR0FBZjtBQUFBLFdBQ08sUUFEUDtRQUVJLElBQVUsa0JBQUEsSUFBVSxJQUFDLENBQUEsR0FBRyxDQUFDLE1BQUwsR0FBYyxDQUFsQztBQUFBLGlCQUFBOztBQURHO0FBRFA7UUFJSSxJQUFVLGdCQUFWO0FBQUEsaUJBQUE7O0FBSko7V0FLQSxJQUFJLENBQUMsZ0JBQUwsQ0FBQTtFQU5ROztxQkFRVixnQkFBQSxHQUFrQixTQUFBO0FBQ2hCLFFBQUE7SUFBQSxPQUFBLEdBQWEseUJBQUgsR0FDUixJQUFDLENBQUEsSUFBSSxDQUFDLE9BREUsR0FHUixHQUFHLENBQUMsSUFBSyxDQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQWIsQ0FBQSxDQUFBLENBQXlCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztXQUNyRCxJQUFDLENBQUEsR0FBRyxDQUFDLGVBQUwsQ0FBcUIsT0FBckIsRUFBOEI7TUFBQSxLQUFBLEVBQUssSUFBQyxDQUFBLElBQU47S0FBOUI7RUFMZ0I7Ozs7R0FYa0IsR0FBRyxDQUFDLFVBQVUsQ0FBQyIsImZpbGUiOiJ2YWxpZGF0b3JzL3ByZXNlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwLlZhbGlkYXRvcnMuUHJlc2VuY2UgZXh0ZW5kcyBBcHAuVmFsaWRhdG9ycy5CYXNlXG4gIGNvbnN0cnVjdG9yOiAtPiBzdXBlclxuXG4gIHZhbGlkYXRlOiAtPlxuICAgIHN3aXRjaCB0eXBlb2YgQHZhbFxuICAgICAgd2hlbiAnc3RyaW5nJ1xuICAgICAgICByZXR1cm4gaWYgQHZhbD8gYW5kIEB2YWwubGVuZ3RoID4gMFxuICAgICAgZWxzZVxuICAgICAgICByZXR1cm4gaWYgQHZhbD9cbiAgICB0aGlzLl9hZGRFcnJvck1lc3NhZ2UoKVxuXG4gIF9hZGRFcnJvck1lc3NhZ2U6IC0+XG4gICAgbWVzc2FnZSA9IGlmIEBvcHRzLm1lc3NhZ2U/XG4gICAgICBAb3B0cy5tZXNzYWdlXG4gICAgZWxzZVxuICAgICAgQXBwLkkxOG5bQXBwLkVudi5sb2NvLmdldExvY2FsZSgpXS5lcnJvcnMubWVzc2FnZXMuYmxhbmtcbiAgICBAb2JqLmFkZEVycm9yTWVzc2FnZSBtZXNzYWdlLCBmb3I6IEBhdHRyXG4iXX0=

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App.Validators.Size = (function(superClass) {
  extend(Size, superClass);

  function Size() {
    Size.__super__.constructor.apply(this, arguments);
  }

  Size.prototype.validate = function() {
    return App.Validators.Length.instance(this.obj, this.attr, this.opts).validate();
  };

  return Size;

})(App.Validators.Base);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMvc2l6ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7O0FBQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQzs7O0VBQ04sY0FBQTtJQUFHLHVDQUFBLFNBQUE7RUFBSDs7aUJBRWIsUUFBQSxHQUFVLFNBQUE7V0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUF0QixDQUErQixJQUFDLENBQUEsR0FBaEMsRUFBcUMsSUFBQyxDQUFBLElBQXRDLEVBQTRDLElBQUMsQ0FBQSxJQUE3QyxDQUFrRCxDQUFDLFFBQW5ELENBQUE7RUFBSDs7OztHQUhzQixHQUFHLENBQUMsVUFBVSxDQUFDIiwiZmlsZSI6InZhbGlkYXRvcnMvc2l6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcC5WYWxpZGF0b3JzLlNpemUgZXh0ZW5kcyBBcHAuVmFsaWRhdG9ycy5CYXNlXG4gIGNvbnN0cnVjdG9yOiAtPiBzdXBlclxuXG4gIHZhbGlkYXRlOiAtPiBBcHAuVmFsaWRhdG9ycy5MZW5ndGguaW5zdGFuY2UoQG9iaiwgQGF0dHIsIEBvcHRzKS52YWxpZGF0ZSgpIl19

App.Models.Base = (function() {
  function Base(data) {
    if (data == null) {
      data = {};
    }
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

  Base.all = function(opts) {
    if (opts == null) {
      opts = {};
    }
    return this.get("all", opts);
  };

  Base.find = function(idOrObj) {
    var id, jqxhr, urlParams;
    urlParams = {};
    if (typeof idOrObj === "object") {
      urlParams = idOrObj;
      id = idOrObj.id;
      delete urlParams.id;
    } else {
      id = idOrObj;
    }
    jqxhr = $.ajax({
      dataType: 'json',
      method: 'GET',
      url: (this.__getResourcesUrl(urlParams)) + "/" + id,
      data: urlParams
    });
    return new Promise((function(_this) {
      return function(resolve, reject) {
        jqxhr.fail(function(xhr) {
          return reject(xhr);
        });
        return jqxhr.done(function(record) {
          var obj;
          obj = _this.__initSubclass(record);
          App.IdentityMap.add(obj);
          return resolve(obj);
        });
      };
    })(this));
  };

  Base.get = function(action, opts) {
    if (opts == null) {
      opts = {};
    }
    return this.__send("GET", action, opts);
  };

  Base.post = function(action, opts) {
    if (opts == null) {
      opts = {};
    }
    return this.__send("POST", action, opts);
  };

  Base.put = function(action, opts) {
    if (opts == null) {
      opts = {};
    }
    return this.__send("PUT", action, opts);
  };

  Base["delete"] = function(action, opts) {
    if (opts == null) {
      opts = {};
    }
    return this.__send("DELETE", action, opts);
  };

  Base.getIdentity = function() {
    if (this.identity != null) {
      return this.identity;
    } else {
      throw "Specify Model's @identity!";
    }
  };

  Base.getRemoteName = function() {
    if (this.remoteName != null) {
      return this.remoteName;
    } else {
      return this.getIdentity();
    }
  };

  Base.getAttribRemoteName = function(attrib) {
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
  };

  Base.getResourcesUrlParams = function() {
    var match, params, regexp, url;
    url = this.__getResourcesUrl();
    regexp = /:(\w+)\/?/;
    params = [];
    while (match = regexp.exec(url)) {
      params.push(match[1]);
      url = url.replace(match[0], match[1]);
    }
    return params;
  };

  Base.__getResourcesUrl = function(opts) {
    var match, resourcesUrl;
    if (opts == null) {
      opts = {};
    }
    resourcesUrl = this.resources == null ? "/" + (this.getIdentity().toLowerCase()) + "s" : opts.resource ? this.resources[opts.resource].url : (App.Env.scope != null) && (this.resources[App.Env.scope] != null) ? this.resources[App.Env.scope].url : this.resources.url;
    match = /:(\w+)\/?/.exec(resourcesUrl);
    if (match == null) {
      return resourcesUrl;
    }
    if (opts[match[1]] != null) {
      resourcesUrl = resourcesUrl.replace(":" + match[1], opts[match[1]]);
      delete opts[match[1]];
    } else if ((opts.obj != null) && (opts.obj[match[1]] != null)) {
      resourcesUrl = resourcesUrl.replace(":" + match[1], opts.obj[match[1]]);
    }
    return resourcesUrl;
  };

  Base.__initSubclass = function(params) {
    var parts;
    if (params == null) {
      params = {};
    }
    parts = this.getIdentity().split(".");
    if (parts.length === 1) {
      return new App.Models[parts[0]](params);
    }
    return new App.Models[parts[0]][parts[1]](params);
  };

  Base.__page = function(i, opts, reqOpts, resp) {
    var data, httpMethod, jqxhr, key, ref, url, val;
    if (opts == null) {
      opts = {};
    }
    if (reqOpts == null) {
      reqOpts = {};
    }
    if (resp == null) {
      resp = {
        resources: [],
        count: 0
      };
    }
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
    jqxhr = $.ajax({
      dataType: "json",
      method: httpMethod,
      url: url,
      data: data
    });
    return new Promise((function(_this) {
      return function(resolve, reject) {
        jqxhr.fail(function(xhr) {
          return reject(xhr);
        });
        return jqxhr.done(function(data) {
          var j, len, obj, record, ref1;
          resp.count = data.count;
          for (key in data) {
            val = data[key];
            if (['resources', 'count'].indexOf(key) === -1) {
              resp[key] = val;
            }
          }
          ref1 = data.resources;
          for (j = 0, len = ref1.length; j < len; j++) {
            record = ref1[j];
            obj = _this.__initSubclass(record);
            if (opts.resource != null) {
              obj.resource = opts.resource;
            }
            App.IdentityMap.add(obj);
            resp.resources.push(obj);
          }
          return resolve(resp);
        });
      };
    })(this));
  };

  Base.__paginate = function(opts, reqOpts) {
    var pageNum, perPage, ref;
    perPage = this.__getPaginationPer();
    pageNum = (ref = opts.page) != null ? ref : 1;
    return this.__page(pageNum, opts, reqOpts).then((function(_this) {
      return function(data) {
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
          func = function(i) {
            return promise = promise.then(function(arr) {
              return _this.__page(i, opts, reqOpts, data);
            });
          };
          func(i);
        }
        return promise;
      };
    })(this));
  };

  Base.__getPaginationParam = function() {
    var param, ref, ref1, ref2, ref3;
    if (((ref = this.resources) != null ? (ref1 = ref.paginate) != null ? ref1.page : void 0 : void 0) != null) {
      return this.resources.paginate.page;
    }
    if ((App.Env.scope != null) && (this.resources != null) && (this.resources[App.Env.scope] != null)) {
      param = (ref2 = this.resources[App.Env.scope]) != null ? (ref3 = ref2.paginate) != null ? ref3.param : void 0 : void 0;
      if (param != null) {
        return param;
      }
    }
    if ((this.paginate != null) && (this.paginate.param != null)) {
      return this.paginate.param;
    } else {
      return "page";
    }
  };

  Base.__getPaginationPer = function() {
    var per, ref, ref1, ref2, ref3;
    if ((App.Env.scope != null) && (this.resources != null) && (this.resources[App.Env.scope] != null)) {
      per = (ref = this.resources[App.Env.scope]) != null ? (ref1 = ref.paginate) != null ? ref1.per : void 0 : void 0;
      if (per != null) {
        return per;
      }
    }
    if (((ref2 = this.resources) != null ? (ref3 = ref2.paginate) != null ? ref3.per : void 0 : void 0) != null) {
      return this.resources.paginate.per;
    }
    if ((this.paginate != null) && (this.paginate.per != null)) {
      return this.paginate.per;
    } else {
      return null;
    }
  };

  Base.__send = function(method, action, opts) {
    var reqOpts, url;
    url = this.__getResourcesUrl(opts);
    if (action !== "all") {
      url = url + "/" + action;
    }
    reqOpts = {
      method: method,
      url: url,
      data: opts
    };
    return this.__paginate(opts, reqOpts);
  };

  Base.prototype.setResource = function(name) {
    return this.resource = name;
  };

  Base.prototype.getIdentity = function() {
    var val;
    val = this.constructor.identity;
    if (val != null) {
      return val;
    }
    return this.constructor.name;
  };

  Base.prototype.getRemoteName = function(attr) {
    if (this.constructor.attributes == null) {
      return null;
    }
    if (this.constructor.attributes[attr] == null) {
      return null;
    }
    return this.constructor.attributes[attr].remoteName || attr;
  };

  Base.prototype.getAttrRemoteName = function(attr) {
    return this.getRemoteName(attr);
  };

  Base.prototype.getAttrName = function(remoteName) {
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
  };

  Base.prototype.getAttrType = function(attrName) {
    if (this.constructor.attributes == null) {
      return null;
    }
    if (this.constructor.attributes[attrName] == null) {
      return null;
    }
    return this.constructor.attributes[attrName].type;
  };

  Base.prototype.attributes = function() {
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
  };

  Base.prototype.isValid = function() {
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
        if ((this.id != null) && validationSettings.on === "create") {
          continue;
        }
        if ((this.id == null) && validationSettings.on === "update") {
          continue;
        }
        if ((validationSettings["if"] != null) && !validationSettings["if"](this)) {
          continue;
        }
        validator = validationName.charAt(0).toUpperCase() + validationName.slice(1);
        if (App.Validators[validator] == null) {
          console.log("Warning! \"" + validator + "\" validator is not implemented!");
          continue;
        }
        pvs = this.__processedValidationSettings(validationSettings);
        App.Validators[validator].instance(this, name, pvs).validate();
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
  };

  Base.prototype.isInvalid = function() {
    return !this.isValid();
  };

  Base.prototype.isEmpty = function() {
    var name, ref, val;
    ref = this.attributes();
    for (name in ref) {
      val = ref[name];
      if (this[name] !== null) {
        return false;
      }
    }
    return true;
  };

  Base.prototype.addErrorMessage = function(message, opts) {
    if (opts == null) {
      opts = {};
    }
    if (this.errors == null) {
      this.errors = {};
    }
    if (this.errors[opts["for"]] == null) {
      this.errors[opts["for"]] = [];
    }
    return this.errors[opts["for"]].push(message);
  };

  Base.prototype.save = function() {
    var jqxhr;
    if (!this.isValid()) {
      return false;
    }
    jqxhr = $.ajax({
      dataType: 'json',
      method: this.id != null ? "PUT" : "POST",
      url: this.__getResourceUrl(),
      data: this.serialize()
    });
    return new Promise((function(_this) {
      return function(resolve, reject) {
        jqxhr.fail(function(xhr) {
          return reject(xhr);
        });
        return jqxhr.done(function(data) {
          if (data.success) {
            resolve(data);
            return true;
          }
          if (data.errors != null) {
            _this.__assignRemoteErrorMessages(data.errors);
          }
          resolve(data);
          return false;
        });
      };
    })(this));
  };

  Base.prototype.serialize = function() {
    var _, attr, hash, mainKey, ref, remoteName;
    if (this.constructor.attributes == null) {
      return {};
    }
    hash = {};
    mainKey = this.constructor.getRemoteName().toLowerCase();
    hash[mainKey] = {};
    ref = this.constructor.attributes;
    for (attr in ref) {
      _ = ref[attr];
      remoteName = this.getRemoteName(attr);
      hash[mainKey][remoteName] = this[attr];
    }
    return hash;
  };

  Base.prototype.reload = function() {
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
  };

  Base.prototype.changes = function() {
    var currentObj, name, ref, result, val;
    result = {};
    currentObj = App.IdentityMap.find(this.getIdentity(), this.id);
    ref = this.attributes();
    for (name in ref) {
      val = ref[name];
      if (val !== currentObj[name]) {
        if (val.constructor === Date && currentObj[name] - val === 0) {
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
  };

  Base.prototype.applyChanges = function() {
    var name, ref, results, vals;
    ref = this.changes();
    results = [];
    for (name in ref) {
      vals = ref[name];
      results.push(this[name] = vals.is);
    }
    return results;
  };

  Base.prototype.toKey = function() {
    return (this.getIdentity().toLowerCase()) + "_" + this.id;
  };

  Base.prototype.get = function(action, data) {
    if (data == null) {
      data = {};
    }
    return this.__send("GET", action, data);
  };

  Base.prototype.post = function(action, data) {
    if (data == null) {
      data = {};
    }
    return this.__send("POST", action, data);
  };

  Base.prototype.put = function(action, data) {
    if (data == null) {
      data = {};
    }
    return this.__send("PUT", action, data);
  };

  Base.prototype["delete"] = function(action, data) {
    if (data == null) {
      data = {};
    }
    return this.__send("DELETE", action, data);
  };

  Base.prototype.__send = function(method, action, data) {
    var jqxhr, url;
    url = this.__getResourceUrl();
    if (action != null) {
      url = url + "/" + action;
    }
    jqxhr = $.ajax({
      dataType: 'json',
      method: method,
      url: url,
      data: data
    });
    return new Promise(function(resolve, reject) {
      jqxhr.fail(function(xhr) {
        return reject(xhr);
      });
      return jqxhr.done(function(data) {
        return resolve(data);
      });
    });
  };

  Base.prototype.__assignAttributes = function(data) {
    var attrName, attrType, key, results, val;
    results = [];
    for (key in data) {
      val = data[key];
      attrName = this.getAttrName(key);
      attrType = this.getAttrType(attrName);
      if (val == null) {
        this[attrName] = null;
        continue;
      }
      switch (attrType) {
        case "Date":
          val = new Date(Date.parse(val));
          break;
        case "Int":
          val = parseInt(val);
      }
      results.push(this[attrName] = val);
    }
    return results;
  };

  Base.prototype.__initAttributes = function() {
    var config, name, ref, results;
    ref = this.constructor.attributes;
    results = [];
    for (name in ref) {
      config = ref[name];
      results.push(this[name] = null);
    }
    return results;
  };

  Base.prototype.__assignRemoteErrorMessages = function(remoteErrors) {
    var attr, error, errors, remoteName, results;
    results = [];
    for (remoteName in remoteErrors) {
      errors = remoteErrors[remoteName];
      attr = this.getAttrName(remoteName);
      results.push((function() {
        var j, len, results1;
        results1 = [];
        for (j = 0, len = errors.length; j < len; j++) {
          error = errors[j];
          results1.push(this.addErrorMessage(error, {
            "for": attr
          }));
        }
        return results1;
      }).call(this));
    }
    return results;
  };

  Base.prototype.__getResourceUrl = function() {
    var url;
    url = this.constructor.__getResourcesUrl({
      resource: this.resource,
      obj: this
    });
    if (this.id == null) {
      return url;
    }
    return url + "/" + this.id;
  };

  Base.prototype.__processedValidationSettings = function(validationSettings) {
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
  };

  return Base;

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9iYXNlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDO0VBZ0JGLGNBQUMsSUFBRDs7TUFBQyxPQUFPOztJQUNuQixJQUFDLENBQUEsRUFBRCxHQUFNO0lBQ04sSUFBQyxDQUFBLE1BQUQsR0FBVTtJQUNWLElBQUMsQ0FBQSxRQUFELEdBQVksSUFBSSxDQUFDO0lBQ2pCLElBQTJCLG1DQUEzQjtNQUFBLElBQUksQ0FBQyxnQkFBTCxDQUFBLEVBQUE7O0lBQ0EsSUFBaUMsWUFBakM7TUFBQSxJQUFJLENBQUMsa0JBQUwsQ0FBd0IsSUFBeEIsRUFBQTs7RUFMVzs7RUFPYixJQUFDLENBQUEsR0FBRCxHQUFNLFNBQUMsSUFBRDs7TUFBQyxPQUFPOztXQUFPLElBQUMsQ0FBQSxHQUFELENBQUssS0FBTCxFQUFZLElBQVo7RUFBZjs7RUFFTixJQUFDLENBQUEsSUFBRCxHQUFPLFNBQUMsT0FBRDtBQUNMLFFBQUE7SUFBQSxTQUFBLEdBQVk7SUFDWixJQUFHLE9BQU8sT0FBUCxLQUFrQixRQUFyQjtNQUNFLFNBQUEsR0FBWTtNQUNaLEVBQUEsR0FBSyxPQUFPLENBQUM7TUFDYixPQUFPLFNBQVMsQ0FBQyxHQUhuQjtLQUFBLE1BQUE7TUFLRSxFQUFBLEdBQUssUUFMUDs7SUFNQSxLQUFBLEdBQVEsQ0FBQyxDQUFDLElBQUYsQ0FBTztNQUNiLFFBQUEsRUFBVSxNQURHO01BRWIsTUFBQSxFQUFRLEtBRks7TUFHYixHQUFBLEVBQU8sQ0FBQyxJQUFDLENBQUEsaUJBQUQsQ0FBbUIsU0FBbkIsQ0FBRCxDQUFBLEdBQStCLEdBQS9CLEdBQWtDLEVBSDVCO01BSWIsSUFBQSxFQUFNLFNBSk87S0FBUDtBQU1SLFdBQVcsSUFBQSxPQUFBLENBQVEsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLE9BQUQsRUFBVSxNQUFWO1FBQ2pCLEtBQUssQ0FBQyxJQUFOLENBQVcsU0FBQyxHQUFEO2lCQUFTLE1BQUEsQ0FB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QSxDQUFTLEdBQVQ7QUFGeEI7bUJBR0EsSUFBRSxDQUFBLFFBQUEsQ0FBRixHQUFjO0FBVGhCOztFQURrQjs7aUJBWXBCLGdCQUFBLEdBQWtCLFNBQUE7QUFDaEIsUUFBQTtBQUFBO0FBQUE7U0FBQSxXQUFBOzttQkFDRSxJQUFLLENBQUEsSUFBQSxDQUFMLEdBQWE7QUFEZjs7RUFEZ0I7O2lCQUlsQiwyQkFBQSxHQUE2QixTQUFDLFlBQUQ7QUFDM0IsUUFBQTtBQUFBO1NBQUEsMEJBQUE7O01BQ0UsSUFBQSxHQUFPLElBQUksQ0FBQyxXQUFMLENBQWlCLFVBQWpCOzs7QUFDUDthQUFBLHdDQUFBOzt3QkFDRSxJQUFJLENBQUMsZUFBTCxDQUFxQixLQUFyQixFQUE0QjtZQUFBLEtBQUEsRUFBSyxJQUFMO1dBQTVCO0FBREY7OztBQUZGOztFQUQyQjs7aUJBTTdCLGdCQUFBLEdBQWtCLFNBQUE7QUFDaEIsUUFBQTtJQUFBLEdBQUEsR0FBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFqQixDQUFtQztNQUFBLFFBQUEsRUFBVSxJQUFDLENBQUEsUUFBWDtNQUFxQixHQUFBLEVBQUssSUFBMUI7S0FBbkM7SUFDTixJQUFrQixlQUFsQjtBQUFBLGFBQU8sSUFBUDs7V0FDRyxHQUFELEdBQUssR0FBTCxHQUFRLElBQUMsQ0FBQTtFQUhLOztpQkFLbEIsNkJBQUEsR0FBK0IsU0FBQyxrQkFBRDtBQUM3QixRQUFBO0lBQUEsR0FBQSxHQUFNO0FBQ04sU0FBQSw4QkFBQTs7TUFDRSxJQUFHLE9BQU8sT0FBUCxLQUFrQixVQUFyQjtRQUNFLEdBQUksQ0FBQSxRQUFBLENBQUosR0FBZ0IsT0FBQSxDQUFRLElBQVIsRUFEbEI7T0FBQSxNQUFBO1FBR0UsR0FBSSxDQUFBLFFBQUEsQ0FBSixHQUFnQixRQUhsQjs7QUFERjtXQUtBO0VBUDZCIiwiZmlsZSI6Im1vZGVscy9iYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwLk1vZGVscy5CYXNlXG4gICMgRXguXG4gICMgY2xhc3MgQXBwLk1vZGVscy5Qb3N0IGV4dGVuZHMgQXBwLk1vZGVscy5CYXNlXG4gICMgICBAaWRlbnRpdHkgPSBcIlBvc3RcIiAgIyByZXF1aXJlZFxuICAjXG4gICMgICBAcmVzb3VyY2VzID1cbiAgIyAgICAgdXJsOiBcIi9wb3N0c1wiICAjIG9wdGlvbmFsXG4gICMgICAgIHBhZ2luYXRlOiB7cGVyOiAxMDAsIHBhcmFtOiBcInBhZ2VcIn0gICMgcGFyYW0gaXMgb3B0aW9uYWxcbiAgI1xuICAjICAgQGF0dHJpYnV0ZXMgPVxuICAjICAgICB2YWxpZGF0ZWRBdDpcbiAgIyAgICAgICB0eXBlOiBcIkRhdGVcIlxuICAjICAgICAgIHJlbW90ZU5hbWU6IFwidXBkYXRlZF9hdFwiXG4gICMgICAgICAgdmFsaWRhdGlvbnM6XG4gICMgICAgICAgICBwcmVzZW5jZTogdHJ1ZVxuXG4gIGNvbnN0cnVjdG9yOiAoZGF0YSA9IHt9KSAtPlxuICAgIEBpZCA9IG51bGxcbiAgICBAZXJyb3JzID0gbnVsbFxuICAgIEByZXNvdXJjZSA9IGRhdGEucmVzb3VyY2VcbiAgICB0aGlzLl9faW5pdEF0dHJpYnV0ZXMoKSBpZiB0aGlzLmNvbnN0cnVjdG9yLmF0dHJpYnV0ZXM/XG4gICAgdGhpcy5fX2Fzc2lnbkF0dHJpYnV0ZXMoZGF0YSkgaWYgZGF0YT9cblxuICBAYWxsOiAob3B0cyA9IHt9KSAtPiBAZ2V0IFwiYWxsXCIsIG9wdHNcblxuICBAZmluZDogKGlkT3JPYmopIC0+XG4gICAgdXJsUGFyYW1zID0ge31cbiAgICBpZiB0eXBlb2YgaWRPck9iaiBpcyBcIm9iamVjdFwiXG4gICAgICB1cmxQYXJhbXMgPSBpZE9yT2JqXG4gICAgICBpZCA9IGlkT3JPYmouaWRcbiAgICAgIGRlbGV0ZSB1cmxQYXJhbXMuaWRcbiAgICBlbHNlXG4gICAgICBpZCA9IGlkT3JPYmpcbiAgICBqcXhociA9ICQuYWpheCh7XG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogXCIje0BfX2dldFJlc291cmNlc1VybCh1cmxQYXJhbXMpfS8je2lkfVwiLFxuICAgICAgZGF0YTogdXJsUGFyYW1zXG4gICAgfSlcbiAgICByZXR1cm4gbmV3IFByb21pc2UgKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICAgIGpxeGhyLmZhaWwgKHhocikgLT4gcmVqZWN0IHhoclxuICAgICAganF4aHIuZG9uZSAocmVjb3JkKSA9PlxuICAgICAgICBvYmogPSBAX19pbml0U3ViY2xhc3MgcmVjb3JkXG4gICAgICAgIEFwcC5JZGVudGl0eU1hcC5hZGQgb2JqXG4gICAgICAgIHJlc29sdmUgb2JqXG5cbiAgQGdldDogKGFjdGlvbiwgb3B0cyA9IHt9KSAtPiBAX19zZW5kIFwiR0VUXCIsIGFjdGlvbiwgb3B0c1xuICBAcG9zdDogKGFjdGlvbiwgb3B0cyA9IHt9KSAtPiBAX19zZW5kIFwiUE9TVFwiLCBhY3Rpb24sIG9wdHNcbiAgQHB1dDogKGFjdGlvbiwgb3B0cyA9IHt9KSAtPiBAX19zZW5kIFwiUFVUXCIsIGFjdGlvbiwgb3B0c1xuICBAZGVsZXRlOiAoYWN0aW9uLCBvcHRzID0ge30pIC0+IEBfX3NlbmQgXCJERUxFVEVcIiwgYWN0aW9uLCBvcHRzXG5cbiAgQGdldElkZW50aXR5OiAtPiBpZiBAaWRlbnRpdHk/IHRoZW4gQGlkZW50aXR5IGVsc2UgdGhyb3coXCJTcGVjaWZ5IE1vZGVsJ3MgQGlkZW50aXR5IVwiKVxuXG4gIEBnZXRSZW1vdGVOYW1lOiAtPiBpZiBAcmVtb3RlTmFtZT8gdGhlbiBAcmVtb3RlTmFtZSBlbHNlIEBnZXRJZGVudGl0eSgpXG5cbiAgQGdldEF0dHJpYlJlbW90ZU5hbWU6IChhdHRyaWIpIC0+XG4gICAgcmV0dXJuIG51bGwgaWYgbm90IHRoaXMuYXR0cmlidXRlcz9cbiAgICByZXR1cm4gbnVsbCBpZiBub3QgdGhpcy5hdHRyaWJ1dGVzW2F0dHJpYl0/XG4gICAgcmV0dXJuIGF0dHJpYiBpZiBub3QgdGhpcy5hdHRyaWJ1dGVzW2F0dHJpYl0ucmVtb3RlTmFtZT9cbiAgICB0aGlzLmF0dHJpYnV0ZXNbYXR0cmliXS5yZW1vdGVOYW1lXG5cbiAgQGdldFJlc291cmNlc1VybFBhcmFtczogLT5cbiAgICB1cmwgPSBAX19nZXRSZXNvdXJjZXNVcmwoKVxuICAgIHJlZ2V4cCA9IC86KFxcdyspXFwvPy9cbiAgICBwYXJhbXMgPSBbXVxuICAgIHdoaWxlIG1hdGNoID0gcmVnZXhwLmV4ZWMgdXJsXG4gICAgICBwYXJhbXMucHVzaCBtYXRjaFsxXVxuICAgICAgdXJsID0gdXJsLnJlcGxhY2UgbWF0Y2hbMF0sIG1hdGNoWzFdXG4gICAgcGFyYW1zXG5cbiAgQF9fZ2V0UmVzb3VyY2VzVXJsOiAob3B0cyA9IHt9KSAtPlxuICAgIHJlc291cmNlc1VybCA9IGlmIG5vdCBAcmVzb3VyY2VzP1xuICAgICAgXCIvI3tAZ2V0SWRlbnRpdHkoKS50b0xvd2VyQ2FzZSgpfXNcIlxuICAgIGVsc2UgaWYgb3B0cy5yZXNvdXJjZVxuICAgICAgQHJlc291cmNlc1tvcHRzLnJlc291cmNlXS51cmxcbiAgICBlbHNlIGlmIEFwcC5FbnYuc2NvcGU/IGFuZCBAcmVzb3VyY2VzW0FwcC5FbnYuc2NvcGVdP1xuICAgICAgQHJlc291cmNlc1tBcHAuRW52LnNjb3BlXS51cmxcbiAgICBlbHNlXG4gICAgICBAcmVzb3VyY2VzLnVybFxuICAgIG1hdGNoID0gLzooXFx3KylcXC8/Ly5leGVjIHJlc291cmNlc1VybFxuICAgIHJldHVybiByZXNvdXJjZXNVcmwgaWYgbm90IG1hdGNoP1xuICAgIGlmIG9wdHNbbWF0Y2hbMV1dP1xuICAgICAgcmVzb3VyY2VzVXJsID0gcmVzb3VyY2VzVXJsLnJlcGxhY2UgXCI6I3ttYXRjaFsxXX1cIiwgb3B0c1ttYXRjaFsxXV1cbiAgICAgIGRlbGV0ZSBvcHRzW21hdGNoWzFdXVxuICAgIGVsc2UgaWYgb3B0cy5vYmo/IGFuZCBvcHRzLm9ialttYXRjaFsxXV0/XG4gICAgICByZXNvdXJjZXNVcmwgPSByZXNvdXJjZXNVcmwucmVwbGFjZSBcIjoje21hdGNoWzFdfVwiLCBvcHRzLm9ialttYXRjaFsxXV1cbiAgICByZXR1cm4gcmVzb3VyY2VzVXJsXG5cbiAgQF9faW5pdFN1YmNsYXNzOiAocGFyYW1zID0ge30pIC0+XG4gICAgcGFydHMgPSBAZ2V0SWRlbnRpdHkoKS5zcGxpdCBcIi5cIlxuICAgIHJldHVybiBuZXcgQXBwLk1vZGVsc1twYXJ0c1swXV0gcGFyYW1zIGlmIHBhcnRzLmxlbmd0aCBpcyAxXG4gICAgbmV3IEFwcC5Nb2RlbHNbcGFydHNbMF1dW3BhcnRzWzFdXSBwYXJhbXNcblxuICBAX19wYWdlOiAoaSwgb3B0cyA9IHt9LCByZXFPcHRzID0ge30sIHJlc3AgPSB7cmVzb3VyY2VzOiBbXSwgY291bnQ6IDB9KSAtPlxuICAgIGh0dHBNZXRob2QgPSByZXFPcHRzLm1ldGhvZCB8fCBcIkdFVFwiXG4gICAgdXJsID0gcmVxT3B0cy51cmwgfHwgQF9fZ2V0UmVzb3VyY2VzVXJsKG9wdHMpXG4gICAgZGF0YSA9IHt9XG4gICAgaWYgcmVxT3B0cy5kYXRhP1xuICAgICAgZm9yIGtleSwgdmFsIG9mIHJlcU9wdHMuZGF0YVxuICAgICAgICBjb250aW51ZSBpZiBrZXkgaXMgXCJyZXNvdXJjZVwiXG4gICAgICAgIGRhdGFba2V5XSA9IHZhbFxuICAgIGRhdGFbQF9fZ2V0UGFnaW5hdGlvblBhcmFtKCldID0gaVxuICAgIGpxeGhyID0gJC5hamF4XG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICBtZXRob2Q6IGh0dHBNZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICByZXR1cm4gbmV3IFByb21pc2UgKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICAgIGpxeGhyLmZhaWwgKHhocikgLT4gcmVqZWN0IHhoclxuICAgICAganF4aHIuZG9uZSAoZGF0YSkgPT5cbiAgICAgICAgcmVzcC5jb3VudCA9IGRhdGEuY291bnRcbiAgICAgICAgZm9yIGtleSwgdmFsIG9mIGRhdGFcbiAgICAgICAgICByZXNwW2tleV0gPSB2YWwgaWYgWydyZXNvdXJjZXMnLCAnY291bnQnXS5pbmRleE9mKGtleSkgaXMgLTFcbiAgICAgICAgZm9yIHJlY29yZCBpbiBkYXRhLnJlc291cmNlc1xuICAgICAgICAgIG9iaiA9IEBfX2luaXRTdWJjbGFzcyByZWNvcmRcbiAgICAgICAgICBvYmoucmVzb3VyY2UgPSBvcHRzLnJlc291cmNlIGlmIG9wdHMucmVzb3VyY2U/XG4gICAgICAgICAgQXBwLklkZW50aXR5TWFwLmFkZCBvYmpcbiAgICAgICAgICByZXNwLnJlc291cmNlcy5wdXNoIG9ialxuICAgICAgICByZXNvbHZlIHJlc3BcblxuICBAX19wYWdpbmF0ZTogKG9wdHMsIHJlcU9wdHMpIC0+XG4gICAgcGVyUGFnZSA9IEBfX2dldFBhZ2luYXRpb25QZXIoKVxuICAgIHBhZ2VOdW0gPSBvcHRzLnBhZ2UgPyAxXG4gICAgQF9fcGFnZShwYWdlTnVtLCBvcHRzLCByZXFPcHRzKS50aGVuIChkYXRhKSA9PlxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkYXRhKSBpZiBvcHRzLnBhZ2U/XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpIGlmIGRhdGEuY291bnQgPD0gcGVyUGFnZVxuICAgICAgbWF4ID0gcGFyc2VJbnQgZGF0YS5jb3VudCAvIHBlclBhZ2VcbiAgICAgIG1heCArPSAxIGlmIG1heCBpc250IGRhdGEuY291bnQgLyBwZXJQYWdlXG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGRhdGEpXG4gICAgICByZXR1cm4gcHJvbWlzZSBpZiBtYXggaXMgMVxuICAgICAgZm9yIGkgaW4gWzIuLm1heF1cbiAgICAgICAgZnVuYyA9IChpKSA9PlxuICAgICAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4gKGFycikgPT5cbiAgICAgICAgICAgIHJldHVybiBAX19wYWdlIGksIG9wdHMsIHJlcU9wdHMsIGRhdGFcbiAgICAgICAgZnVuYyBpXG4gICAgICByZXR1cm4gcHJvbWlzZVxuXG4gIEBfX2dldFBhZ2luYXRpb25QYXJhbTogLT5cbiAgICBpZiBAcmVzb3VyY2VzPy5wYWdpbmF0ZT8ucGFnZT9cbiAgICAgIHJldHVybiBAcmVzb3VyY2VzLnBhZ2luYXRlLnBhZ2VcbiAgICBpZiBBcHAuRW52LnNjb3BlPyBhbmQgQHJlc291cmNlcz8gYW5kIEByZXNvdXJjZXNbQXBwLkVudi5zY29wZV0/XG4gICAgICBwYXJhbSA9IEByZXNvdXJjZXNbQXBwLkVudi5zY29wZV0/LnBhZ2luYXRlPy5wYXJhbVxuICAgICAgcmV0dXJuIHBhcmFtIGlmIHBhcmFtP1xuICAgIGlmIEBwYWdpbmF0ZT8gYW5kIEBwYWdpbmF0ZS5wYXJhbT8gdGhlbiBAcGFnaW5hdGUucGFyYW0gZWxzZSBcInBhZ2VcIlxuXG4gIEBfX2dldFBhZ2luYXRpb25QZXI6IC0+XG4gICAgaWYgQXBwLkVudi5zY29wZT8gYW5kIEByZXNvdXJjZXM/IGFuZCBAcmVzb3VyY2VzW0FwcC5FbnYuc2NvcGVdP1xuICAgICAgcGVyID0gQHJlc291cmNlc1tBcHAuRW52LnNjb3BlXT8ucGFnaW5hdGU/LnBlclxuICAgICAgcmV0dXJuIHBlciBpZiBwZXI/XG4gICAgaWYgQHJlc291cmNlcz8ucGFnaW5hdGU/LnBlcj9cbiAgICAgIHJldHVybiBAcmVzb3VyY2VzLnBhZ2luYXRlLnBlclxuICAgIGlmIEBwYWdpbmF0ZT8gYW5kIEBwYWdpbmF0ZS5wZXI/IHRoZW4gQHBhZ2luYXRlLnBlciBlbHNlIG51bGxcblxuICBAX19zZW5kOiAobWV0aG9kLCBhY3Rpb24sIG9wdHMpIC0+XG4gICAgdXJsID0gQF9fZ2V0UmVzb3VyY2VzVXJsIG9wdHNcbiAgICBpZiBhY3Rpb24gaXNudCBcImFsbFwiXG4gICAgICB1cmwgPSBcIiN7dXJsfS8je2FjdGlvbn1cIlxuICAgIHJlcU9wdHMgPSB7bWV0aG9kOiBtZXRob2QsIHVybDogdXJsLCBkYXRhOiBvcHRzfVxuICAgIEBfX3BhZ2luYXRlIG9wdHMsIHJlcU9wdHNcblxuICBzZXRSZXNvdXJjZTogKG5hbWUpIC0+IEByZXNvdXJjZSA9IG5hbWVcblxuICBnZXRJZGVudGl0eTogLT5cbiAgICB2YWwgPSB0aGlzLmNvbnN0cnVjdG9yLmlkZW50aXR5XG4gICAgcmV0dXJuIHZhbCBpZiB2YWw/XG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG5cbiAgIyBkZXByZWNhdGVkOiB1c2UgZ2V0QXR0clJlbW90ZU5hbWUoKVxuICBnZXRSZW1vdGVOYW1lOiAoYXR0cikgLT5cbiAgICByZXR1cm4gbnVsbCBpZiBub3QgdGhpcy5jb25zdHJ1Y3Rvci5hdHRyaWJ1dGVzP1xuICAgIHJldHVybiBudWxsIGlmIG5vdCB0aGlzLmNvbnN0cnVjdG9yLmF0dHJpYnV0ZXNbYXR0cl0/XG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5hdHRyaWJ1dGVzW2F0dHJdLnJlbW90ZU5hbWUgb3IgYXR0clxuXG4gIGdldEF0dHJSZW1vdGVOYW1lOiAoYXR0cikgLT4gdGhpcy5nZXRSZW1vdGVOYW1lIGF0dHJcblxuICBnZXRBdHRyTmFtZTogKHJlbW90ZU5hbWUpIC0+XG4gICAgcmV0dXJuIHJlbW90ZU5hbWUgaWYgbm90IHRoaXMuY29uc3RydWN0b3IuYXR0cmlidXRlcz9cbiAgICByZXR1cm4gcmVtb3RlTmFtZSBpZiB0aGlzLmNvbnN0cnVjdG9yLmF0dHJpYnV0ZXNbcmVtb3RlTmFtZV0/XG4gICAgZm9yIG5hbWUsIGNvbmZpZyBvZiB0aGlzLmNvbnN0cnVjdG9yLmF0dHJpYnV0ZXNcbiAgICAgIGlmIGNvbmZpZy5yZW1vdGVOYW1lIGlzIHJlbW90ZU5hbWVcbiAgICAgICAgcmV0dXJuIG5hbWVcbiAgICByZW1vdGVOYW1lXG5cbiAgZ2V0QXR0clR5cGU6IChhdHRyTmFtZSkgLT5cbiAgICByZXR1cm4gbnVsbCBpZiBub3QgdGhpcy5jb25zdHJ1Y3Rvci5hdHRyaWJ1dGVzP1xuICAgIHJldHVybiBudWxsIGlmIG5vdCB0aGlzLmNvbnN0cnVjdG9yLmF0dHJpYnV0ZXNbYXR0ck5hbWVdP1xuICAgIHRoaXMuY29uc3RydWN0b3IuYXR0cmlidXRlc1thdHRyTmFtZV0udHlwZVxuXG4gIGF0dHJpYnV0ZXM6IC0+XG4gICAgYXR0cmlicyA9IHtpZDogdGhpcy5pZH1cbiAgICByZXR1cm4gYXR0cmlicyBpZiBub3QgdGhpcy5jb25zdHJ1Y3Rvci5hdHRyaWJ1dGVzP1xuICAgIGZvciBuYW1lLCBfIG9mIHRoaXMuY29uc3RydWN0b3IuYXR0cmlidXRlc1xuICAgICAgYXR0cmlic1tuYW1lXSA9IHRoaXNbbmFtZV1cbiAgICBhdHRyaWJzXG5cbiAgaXNWYWxpZDogLT5cbiAgICByZXR1cm4gdHJ1ZSBpZiBub3QgdGhpcy5jb25zdHJ1Y3Rvci5hdHRyaWJ1dGVzP1xuICAgIEBlcnJvcnMgPSBudWxsXG4gICAgZm9yIG5hbWUsIGNvbmZpZyBvZiB0aGlzLmNvbnN0cnVjdG9yLmF0dHJpYnV0ZXNcbiAgICAgIGNvbnRpbnVlIGlmIG5vdCBjb25maWcudmFsaWRhdGlvbnM/XG4gICAgICBmb3IgdmFsaWRhdGlvbk5hbWUsIHZhbGlkYXRpb25TZXR0aW5ncyBvZiBjb25maWcudmFsaWRhdGlvbnNcbiAgICAgICAgY29udGludWUgaWYgdGhpcy5pZD8gYW5kIHZhbGlkYXRpb25TZXR0aW5ncy5vbiBpcyBcImNyZWF0ZVwiXG4gICAgICAgIGNvbnRpbnVlIGlmICF0aGlzLmlkPyBhbmQgdmFsaWRhdGlvblNldHRpbmdzLm9uIGlzIFwidXBkYXRlXCJcbiAgICAgICAgY29udGludWUgaWYgdmFsaWRhdGlvblNldHRpbmdzLmlmPyBhbmQgIXZhbGlkYXRpb25TZXR0aW5ncy5pZih0aGlzKVxuICAgICAgICB2YWxpZGF0b3IgPSB2YWxpZGF0aW9uTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbGlkYXRpb25OYW1lLnNsaWNlKDEpXG4gICAgICAgIGlmIG5vdCBBcHAuVmFsaWRhdG9yc1t2YWxpZGF0b3JdP1xuICAgICAgICAgIGNvbnNvbGUubG9nIFwiV2FybmluZyEgXFxcIiN7dmFsaWRhdG9yfVxcXCIgdmFsaWRhdG9yIGlzIG5vdCBpbXBsZW1lbnRlZCFcIlxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIHB2cyA9IHRoaXMuX19wcm9jZXNzZWRWYWxpZGF0aW9uU2V0dGluZ3MgdmFsaWRhdGlvblNldHRpbmdzXG4gICAgICAgIEFwcC5WYWxpZGF0b3JzW3ZhbGlkYXRvcl0uaW5zdGFuY2UodGhpcywgbmFtZSwgcHZzKS52YWxpZGF0ZSgpXG4gICAgaWYgdGhpcy5jb25zdHJ1Y3Rvci52YWxpZGF0ZT9cbiAgICAgIHRoaXNbbWV0aF0oKSBmb3IgbWV0aCBpbiB0aGlzLmNvbnN0cnVjdG9yLnZhbGlkYXRlXG4gICAgaWYgdGhpcy5lcnJvcnM/IHRoZW4gZmFsc2UgZWxzZSB0cnVlXG5cbiAgaXNJbnZhbGlkOiAtPiAhdGhpcy5pc1ZhbGlkKClcblxuICBpc0VtcHR5OiAtPlxuICAgIGZvciBuYW1lLCB2YWwgb2YgdGhpcy5hdHRyaWJ1dGVzKClcbiAgICAgIHJldHVybiBmYWxzZSBpZiB0aGlzW25hbWVdIGlzbnQgbnVsbFxuICAgIHRydWVcblxuICBhZGRFcnJvck1lc3NhZ2U6IChtZXNzYWdlLCBvcHRzID0ge30pIC0+XG4gICAgQGVycm9ycyA9IHt9IGlmIG5vdCBAZXJyb3JzP1xuICAgIEBlcnJvcnNbb3B0cy5mb3JdID0gW10gaWYgbm90IEBlcnJvcnNbb3B0cy5mb3JdP1xuICAgIEBlcnJvcnNbb3B0cy5mb3JdLnB1c2ggbWVzc2FnZVxuXG4gIHNhdmU6IC0+XG4gICAgcmV0dXJuIGZhbHNlIGlmIG5vdCB0aGlzLmlzVmFsaWQoKVxuICAgIGpxeGhyID0gJC5hamF4XG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgbWV0aG9kOiBpZiBAaWQ/IHRoZW4gXCJQVVRcIiBlbHNlIFwiUE9TVFwiLFxuICAgICAgdXJsOiB0aGlzLl9fZ2V0UmVzb3VyY2VVcmwoKSxcbiAgICAgIGRhdGE6IHRoaXMuc2VyaWFsaXplKClcbiAgICByZXR1cm4gbmV3IFByb21pc2UgKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICAgIGpxeGhyLmZhaWwgKHhocikgLT4gcmVqZWN0IHhoclxuICAgICAganF4aHIuZG9uZSAoZGF0YSkgPT5cbiAgICAgICAgaWYgZGF0YS5zdWNjZXNzXG4gICAgICAgICAgcmVzb2x2ZSBkYXRhXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgdGhpcy5fX2Fzc2lnblJlbW90ZUVycm9yTWVzc2FnZXMoZGF0YS5lcnJvcnMpIGlmIGRhdGEuZXJyb3JzP1xuICAgICAgICByZXNvbHZlIGRhdGFcbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgc2VyaWFsaXplOiAtPlxuICAgIHJldHVybiB7fSBpZiBub3QgdGhpcy5jb25zdHJ1Y3Rvci5hdHRyaWJ1dGVzP1xuICAgIGhhc2ggPSB7fVxuICAgIG1haW5LZXkgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFJlbW90ZU5hbWUoKS50b0xvd2VyQ2FzZSgpXG4gICAgaGFzaFttYWluS2V5XSA9IHt9XG4gICAgZm9yIGF0dHIsIF8gb2YgdGhpcy5jb25zdHJ1Y3Rvci5hdHRyaWJ1dGVzXG4gICAgICByZW1vdGVOYW1lID0gdGhpcy5nZXRSZW1vdGVOYW1lIGF0dHJcbiAgICAgIGhhc2hbbWFpbktleV1bcmVtb3RlTmFtZV0gPSB0aGlzW2F0dHJdXG4gICAgaGFzaFxuXG4gIHJlbG9hZDogLT5cbiAgICBmaW5kUGFyYW1zID0ge2lkOiB0aGlzLmlkfVxuICAgIGZvciBwYXJhbSBpbiB0aGlzLmNvbnN0cnVjdG9yLmdldFJlc291cmNlc1VybFBhcmFtcygpXG4gICAgICBmaW5kUGFyYW1zW3BhcmFtXSA9IHRoaXNbcGFyYW1dXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5maW5kIGZpbmRQYXJhbXNcblxuICBjaGFuZ2VzOiAtPlxuICAgIHJlc3VsdCA9IHt9XG4gICAgY3VycmVudE9iaiA9IEFwcC5JZGVudGl0eU1hcC5maW5kIHRoaXMuZ2V0SWRlbnRpdHkoKSwgdGhpcy5pZFxuICAgIGZvciBuYW1lLCB2YWwgb2YgdGhpcy5hdHRyaWJ1dGVzKClcbiAgICAgIGlmIHZhbCBpc250IGN1cnJlbnRPYmpbbmFtZV1cbiAgICAgICAgY29udGludWUgaWYgdmFsLmNvbnN0cnVjdG9yIGlzIERhdGUgYW5kIGN1cnJlbnRPYmpbbmFtZV0gLSB2YWwgaXMgMFxuICAgICAgICByZXN1bHRbbmFtZV0gPSB7aXM6IGN1cnJlbnRPYmpbbmFtZV0sIHdhczogdmFsfSBpZiB2YWwgaXNudCBjdXJyZW50T2JqW25hbWVdXG4gICAgcmV0dXJuIHJlc3VsdFxuXG4gIGFwcGx5Q2hhbmdlczogLT4gdGhpc1tuYW1lXSA9IHZhbHMuaXMgZm9yIG5hbWUsIHZhbHMgb2YgdGhpcy5jaGFuZ2VzKClcblxuICB0b0tleTogLT4gXCIje3RoaXMuZ2V0SWRlbnRpdHkoKS50b0xvd2VyQ2FzZSgpfV8je3RoaXMuaWR9XCJcblxuICBnZXQ6IChhY3Rpb24sIGRhdGEgPSB7fSkgLT4gdGhpcy5fX3NlbmQgXCJHRVRcIiwgYWN0aW9uLCBkYXRhXG4gIHBvc3Q6IChhY3Rpb24sIGRhdGEgPSB7fSkgLT4gdGhpcy5fX3NlbmQgXCJQT1NUXCIsIGFjdGlvbiwgZGF0YVxuICBwdXQ6IChhY3Rpb24sIGRhdGEgPSB7fSkgLT4gdGhpcy5fX3NlbmQgXCJQVVRcIiwgYWN0aW9uLCBkYXRhXG4gIGRlbGV0ZTogKGFjdGlvbiwgZGF0YSA9IHt9KSAtPiB0aGlzLl9fc2VuZCBcIkRFTEVURVwiLCBhY3Rpb24sIGRhdGFcblxuICBfX3NlbmQ6IChtZXRob2QsIGFjdGlvbiwgZGF0YSkgLT5cbiAgICB1cmwgPSB0aGlzLl9fZ2V0UmVzb3VyY2VVcmwoKVxuICAgIGlmIGFjdGlvbj9cbiAgICAgIHVybCA9IFwiI3t1cmx9LyN7YWN0aW9ufVwiXG4gICAganF4aHIgPSAkLmFqYXhcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSAocmVzb2x2ZSwgcmVqZWN0KSAtPlxuICAgICAganF4aHIuZmFpbCAoeGhyKSAtPiByZWplY3QgeGhyXG4gICAgICBqcXhoci5kb25lIChkYXRhKSAtPiByZXNvbHZlIGRhdGFcblxuICBfX2Fzc2lnbkF0dHJpYnV0ZXM6IChkYXRhKSAtPlxuICAgIGZvciBrZXksIHZhbCBvZiBkYXRhXG4gICAgICBhdHRyTmFtZSA9IHRoaXMuZ2V0QXR0ck5hbWUga2V5XG4gICAgICBhdHRyVHlwZSA9IHRoaXMuZ2V0QXR0clR5cGUgYXR0ck5hbWVcbiAgICAgIGlmIG5vdCB2YWw/XG4gICAgICAgIEBbYXR0ck5hbWVdID0gbnVsbFxuICAgICAgICBjb250aW51ZVxuICAgICAgc3dpdGNoIGF0dHJUeXBlXG4gICAgICAgIHdoZW4gXCJEYXRlXCIgdGhlbiB2YWwgPSBuZXcgRGF0ZSBEYXRlLnBhcnNlIHZhbFxuICAgICAgICB3aGVuIFwiSW50XCIgdGhlbiB2YWwgPSBwYXJzZUludCB2YWxcbiAgICAgIEBbYXR0ck5hbWVdID0gdmFsXG5cbiAgX19pbml0QXR0cmlidXRlczogLT5cbiAgICBmb3IgbmFtZSwgY29uZmlnIG9mIHRoaXMuY29uc3RydWN0b3IuYXR0cmlidXRlc1xuICAgICAgdGhpc1tuYW1lXSA9IG51bGxcblxuICBfX2Fzc2lnblJlbW90ZUVycm9yTWVzc2FnZXM6IChyZW1vdGVFcnJvcnMpIC0+XG4gICAgZm9yIHJlbW90ZU5hbWUsIGVycm9ycyBvZiByZW1vdGVFcnJvcnNcbiAgICAgIGF0dHIgPSB0aGlzLmdldEF0dHJOYW1lIHJlbW90ZU5hbWVcbiAgICAgIGZvciBlcnJvciBpbiBlcnJvcnNcbiAgICAgICAgdGhpcy5hZGRFcnJvck1lc3NhZ2UgZXJyb3IsIGZvcjogYXR0clxuXG4gIF9fZ2V0UmVzb3VyY2VVcmw6IC0+XG4gICAgdXJsID0gdGhpcy5jb25zdHJ1Y3Rvci5fX2dldFJlc291cmNlc1VybCByZXNvdXJjZTogQHJlc291cmNlLCBvYmo6IHRoaXNcbiAgICByZXR1cm4gdXJsIGlmIG5vdCBAaWQ/XG4gICAgXCIje3VybH0vI3tAaWR9XCJcblxuICBfX3Byb2Nlc3NlZFZhbGlkYXRpb25TZXR0aW5nczogKHZhbGlkYXRpb25TZXR0aW5ncykgLT5cbiAgICByZXMgPSB7fVxuICAgIGZvciBjb25mTmFtZSwgY29uZlZhbCBvZiB2YWxpZGF0aW9uU2V0dGluZ3NcbiAgICAgIGlmIHR5cGVvZiBjb25mVmFsIGlzICdmdW5jdGlvbidcbiAgICAgICAgcmVzW2NvbmZOYW1lXSA9IGNvbmZWYWwgdGhpc1xuICAgICAgZWxzZVxuICAgICAgICByZXNbY29uZk5hbWVdID0gY29uZlZhbFxuICAgIHJlcyJdfQ==

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App.Controllers.Base = (function(superClass) {
  extend(Base, superClass);

  function Base() {
    this.views = {};
    this.receivers = {};
    this.subController = null;
    this.superController = null;
    this.params = this.__fetchParams();
  }

  Base.prototype.setView = function(key, view) {
    return this.views[key] = view;
  };

  Base.prototype.getView = function(key) {
    return this.views[key];
  };

  Base.prototype.getViews = function() {
    return this.views;
  };

  Base.prototype.setSubController = function(cntrlr) {
    return this.subController = cntrlr;
  };

  Base.prototype.getSubController = function() {
    return this.subController;
  };

  Base.prototype.setSuperController = function(cntrlr) {
    return this.superController = cntrlr;
  };

  Base.prototype.getSuperController = function() {
    return this.superController;
  };

  Base.prototype.setResource = function(name) {
    return this.setScope(name);
  };

  Base.prototype.setScope = function(name) {
    return App.Env.scope = name;
  };

  Base.prototype.__fetchParams = function() {
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
    paramsArray = App.Utils.Array.map(paramsString.split('&'), function(s) {
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
  };

  return Base;

})(App.Mix(App.Mixins.Connectivity));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2Jhc2UuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7OztBQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUM7OztFQUNQLGNBQUE7SUFDWCxJQUFDLENBQUEsS0FBRCxHQUFTO0lBQ1QsSUFBQyxDQUFBLFNBQUQsR0FBYTtJQUNiLElBQUMsQ0FBQSxhQUFELEdBQWlCO0lBQ2pCLElBQUMsQ0FBQSxlQUFELEdBQW1CO0lBQ25CLElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBSSxDQUFDLGFBQUwsQ0FBQTtFQUxDOztpQkFPYixPQUFBLEdBQVMsU0FBQyxHQUFELEVBQU0sSUFBTjtXQUFlLElBQUMsQ0FBQSxLQUFNLENBQUEsR0FBQSxDQUFQLEdBQWM7RUFBN0I7O2lCQUNULE9BQUEsR0FBUyxTQUFDLEdBQUQ7V0FBUyxJQUFDLENBQUEsS0FBTSxDQUFBLEdBQUE7RUFBaEI7O2lCQUNULFFBQUEsR0FBVSxTQUFBO1dBQUcsSUFBQyxDQUFBO0VBQUo7O2lCQUVWLGdCQUFBLEdBQWtCLFNBQUMsTUFBRDtXQUFZLElBQUMsQ0FBQSxhQUFELEdBQWlCO0VBQTdCOztpQkFDbEIsZ0JBQUEsR0FBa0IsU0FBQTtXQUFHLElBQUMsQ0FBQTtFQUFKOztpQkFFbEIsa0JBQUEsR0FBb0IsU0FBQyxNQUFEO1dBQVksSUFBQyxDQUFBLGVBQUQsR0FBbUI7RUFBL0I7O2lCQUNwQixrQkFBQSxHQUFvQixTQUFBO1dBQUcsSUFBQyxDQUFBO0VBQUo7O2lCQUVwQixXQUFBLEdBQWEsU0FBQyxJQUFEO1dBQVUsSUFBSSxDQUFDLFFBQUwsQ0FBYyxJQUFkO0VBQVY7O2lCQUNiLFFBQUEsR0FBVSxTQUFDLElBQUQ7V0FBVSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQVIsR0FBZ0I7RUFBMUI7O2lCQUVWLGFBQUEsR0FBZSxTQUFBO0FBQ2IsUUFBQTtJQUFBLE1BQUEsR0FBUztJQUNULEtBQUEsR0FBUSwyQkFBMkIsQ0FBQyxJQUE1QixDQUFpQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQWpEO0lBQ1IsRUFBQSxHQUFRLGFBQUgsR0FBZSxLQUFNLENBQUEsQ0FBQSxDQUFyQixHQUE2QjtJQUNsQyxJQUErQixVQUEvQjtNQUFBLE1BQU8sQ0FBQSxJQUFBLENBQVAsR0FBZSxRQUFBLENBQVMsRUFBVCxFQUFmOztJQUNBLFFBQUEsR0FBVyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFyQixDQUEyQixHQUEzQjtJQUNYLElBQUcsUUFBUSxDQUFDLE1BQVQsS0FBbUIsQ0FBdEI7QUFDRSxhQUFPLE9BRFQ7O0lBRUEsWUFBQSxHQUFlLFFBQVMsQ0FBQSxRQUFRLENBQUMsTUFBVCxHQUFrQixDQUFsQjtJQUN4QixXQUFBLEdBQWMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBaEIsQ0FBb0IsWUFBWSxDQUFDLEtBQWIsQ0FBbUIsR0FBbkIsQ0FBcEIsRUFBNkMsU0FBQyxDQUFEO2FBQU8sQ0FBQyxDQUFDLEtBQUYsQ0FBUSxHQUFSO0lBQVAsQ0FBN0M7QUFDZCxTQUFBLDZDQUFBOztNQUNFLEdBQUEsR0FBTSxrQkFBQSxDQUFtQixHQUFJLENBQUEsQ0FBQSxDQUF2QjtNQUNOLEdBQUEsR0FBTSxrQkFBQSxDQUFtQixHQUFJLENBQUEsQ0FBQSxDQUF2QjtNQUNOLElBQUcsV0FBSDtRQUNFLEdBQUEsR0FBTSxHQUFHLENBQUMsT0FBSixDQUFZLEtBQVosRUFBbUIsR0FBbkIsRUFEUjs7TUFFQSxNQUFPLENBQUEsR0FBQSxDQUFQLEdBQWM7QUFMaEI7V0FNQTtFQWhCYTs7OztHQXJCa0IsR0FBRyxDQUFDLEdBQUosQ0FBUSxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQW5CIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2Jhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAuQ29udHJvbGxlcnMuQmFzZSBleHRlbmRzIEFwcC5NaXggQXBwLk1peGlucy5Db25uZWN0aXZpdHlcbiAgY29uc3RydWN0b3I6IC0+XG4gICAgQHZpZXdzID0ge31cbiAgICBAcmVjZWl2ZXJzID0ge31cbiAgICBAc3ViQ29udHJvbGxlciA9IG51bGxcbiAgICBAc3VwZXJDb250cm9sbGVyID0gbnVsbFxuICAgIEBwYXJhbXMgPSB0aGlzLl9fZmV0Y2hQYXJhbXMoKVxuXG4gIHNldFZpZXc6IChrZXksIHZpZXcpIC0+IEB2aWV3c1trZXldID0gdmlld1xuICBnZXRWaWV3OiAoa2V5KSAtPiBAdmlld3Nba2V5XVxuICBnZXRWaWV3czogLT4gQHZpZXdzXG5cbiAgc2V0U3ViQ29udHJvbGxlcjogKGNudHJscikgLT4gQHN1YkNvbnRyb2xsZXIgPSBjbnRybHJcbiAgZ2V0U3ViQ29udHJvbGxlcjogLT4gQHN1YkNvbnRyb2xsZXJcblxuICBzZXRTdXBlckNvbnRyb2xsZXI6IChjbnRybHIpIC0+IEBzdXBlckNvbnRyb2xsZXIgPSBjbnRybHJcbiAgZ2V0U3VwZXJDb250cm9sbGVyOiAtPiBAc3VwZXJDb250cm9sbGVyXG5cbiAgc2V0UmVzb3VyY2U6IChuYW1lKSAtPiB0aGlzLnNldFNjb3BlIG5hbWVcbiAgc2V0U2NvcGU6IChuYW1lKSAtPiBBcHAuRW52LnNjb3BlID0gbmFtZVxuXG4gIF9fZmV0Y2hQYXJhbXM6IC0+XG4gICAgcGFyYW1zID0ge31cbiAgICBtYXRjaCA9IC9odHRwcz86XFwvXFwvLitcXC9cXHcrXFwvKFxcZCspLy5leGVjIHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgaWQgPSBpZiBtYXRjaD8gdGhlbiBtYXRjaFsxXSBlbHNlIG51bGxcbiAgICBwYXJhbXNbXCJpZFwiXSA9IHBhcnNlSW50KGlkKSBpZiBpZD9cbiAgICBzcGxpdFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0ICc/J1xuICAgIGlmIHNwbGl0VXJsLmxlbmd0aCBpcyAxXG4gICAgICByZXR1cm4gcGFyYW1zXG4gICAgcGFyYW1zU3RyaW5nID0gc3BsaXRVcmxbc3BsaXRVcmwubGVuZ3RoIC0gMV1cbiAgICBwYXJhbXNBcnJheSA9IEFwcC5VdGlscy5BcnJheS5tYXAgcGFyYW1zU3RyaW5nLnNwbGl0KCcmJyksIChzKSAtPiBzLnNwbGl0ICc9J1xuICAgIGZvciBhcnIgaW4gcGFyYW1zQXJyYXlcbiAgICAgIGtleSA9IGRlY29kZVVSSUNvbXBvbmVudCBhcnJbMF1cbiAgICAgIHZhbCA9IGRlY29kZVVSSUNvbXBvbmVudCBhcnJbMV1cbiAgICAgIGlmIHZhbD9cbiAgICAgICAgdmFsID0gdmFsLnJlcGxhY2UgL1xcKy9nLCBcIiBcIlxuICAgICAgcGFyYW1zW2tleV0gPSB2YWxcbiAgICBwYXJhbXMiXX0=

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App.Views.Base = (function(superClass) {
  extend(Base, superClass);

  function Base(opts) {
    if (opts == null) {
      opts = {};
    }
    this.views = {};
    this.intervals = {};
    this.receivers = {};
    this.controller = null;
    this.delegator = null;
    if (opts.controller != null) {
      this.setController(opts.controller);
    }
    if (opts.delegator != null) {
      this.setDelegator(opts.delegator);
    }
  }

  Base.prototype.setController = function(cntr) {
    return this.controller = cntr;
  };

  Base.prototype.getController = function() {
    return this.controller;
  };

  Base.prototype.setView = function(key, view) {
    return this.views[key] = view;
  };

  Base.prototype.getView = function(key) {
    return this.views[key];
  };

  Base.prototype.getViews = function() {
    return this.views;
  };

  Base.prototype.setDelegator = function(delegator) {
    return this.delegator = delegator;
  };

  Base.prototype.getDelegator = function(delegator) {
    return this.delegator;
  };

  return Base;

})(App.Mix(App.Mixins.Connectivity));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2Jhc2UuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7OztBQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUM7OztFQUNELGNBQUMsSUFBRDs7TUFBQyxPQUFPOztJQUNuQixJQUFDLENBQUEsS0FBRCxHQUFTO0lBQ1QsSUFBQyxDQUFBLFNBQUQsR0FBYTtJQUNiLElBQUMsQ0FBQSxTQUFELEdBQWE7SUFDYixJQUFDLENBQUEsVUFBRCxHQUFjO0lBQ2QsSUFBQyxDQUFBLFNBQUQsR0FBYTtJQUNiLElBQXVDLHVCQUF2QztNQUFBLElBQUksQ0FBQyxhQUFMLENBQW1CLElBQUksQ0FBQyxVQUF4QixFQUFBOztJQUNBLElBQXFDLHNCQUFyQztNQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLElBQUksQ0FBQyxTQUF2QixFQUFBOztFQVBXOztpQkFTYixhQUFBLEdBQWUsU0FBQyxJQUFEO1dBQVUsSUFBQyxDQUFBLFVBQUQsR0FBYztFQUF4Qjs7aUJBQ2YsYUFBQSxHQUFlLFNBQUE7V0FBRyxJQUFDLENBQUE7RUFBSjs7aUJBRWYsT0FBQSxHQUFTLFNBQUMsR0FBRCxFQUFNLElBQU47V0FBZSxJQUFDLENBQUEsS0FBTSxDQUFBLEdBQUEsQ0FBUCxHQUFjO0VBQTdCOztpQkFDVCxPQUFBLEdBQVMsU0FBQyxHQUFEO1dBQVMsSUFBQyxDQUFBLEtBQU0sQ0FBQSxHQUFBO0VBQWhCOztpQkFDVCxRQUFBLEdBQVUsU0FBQTtXQUFHLElBQUMsQ0FBQTtFQUFKOztpQkFFVixZQUFBLEdBQWMsU0FBQyxTQUFEO1dBQWUsSUFBQyxDQUFBLFNBQUQsR0FBYTtFQUE1Qjs7aUJBQ2QsWUFBQSxHQUFjLFNBQUMsU0FBRDtXQUFlLElBQUMsQ0FBQTtFQUFoQjs7OztHQWxCYSxHQUFHLENBQUMsR0FBSixDQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBbkIiLCJmaWxlIjoidmlld3MvYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcC5WaWV3cy5CYXNlIGV4dGVuZHMgQXBwLk1peCBBcHAuTWl4aW5zLkNvbm5lY3Rpdml0eVxuICBjb25zdHJ1Y3RvcjogKG9wdHMgPSB7fSkgLT5cbiAgICBAdmlld3MgPSB7fVxuICAgIEBpbnRlcnZhbHMgPSB7fVxuICAgIEByZWNlaXZlcnMgPSB7fVxuICAgIEBjb250cm9sbGVyID0gbnVsbFxuICAgIEBkZWxlZ2F0b3IgPSBudWxsXG4gICAgdGhpcy5zZXRDb250cm9sbGVyKG9wdHMuY29udHJvbGxlcikgaWYgb3B0cy5jb250cm9sbGVyP1xuICAgIHRoaXMuc2V0RGVsZWdhdG9yKG9wdHMuZGVsZWdhdG9yKSBpZiBvcHRzLmRlbGVnYXRvcj9cblxuICBzZXRDb250cm9sbGVyOiAoY250cikgLT4gQGNvbnRyb2xsZXIgPSBjbnRyXG4gIGdldENvbnRyb2xsZXI6IC0+IEBjb250cm9sbGVyXG5cbiAgc2V0VmlldzogKGtleSwgdmlldykgLT4gQHZpZXdzW2tleV0gPSB2aWV3XG4gIGdldFZpZXc6IChrZXkpIC0+IEB2aWV3c1trZXldXG4gIGdldFZpZXdzOiAtPiBAdmlld3NcblxuICBzZXREZWxlZ2F0b3I6IChkZWxlZ2F0b3IpIC0+IEBkZWxlZ2F0b3IgPSBkZWxlZ2F0b3JcbiAgZ2V0RGVsZWdhdG9yOiAoZGVsZWdhdG9yKSAtPiBAZGVsZWdhdG9yIl19

App.UI.Form = (function() {
  function Form(opts) {
    if (opts == null) {
      opts = {};
    }
    this.formId = opts.id;
    this.obj = opts["for"];
    this.initObj = (opts.initObj != null) && opts.initObj ? true : false;
    this.delegator = opts.delegator;
    this.callbackSuccess = opts.callbackSuccess;
    this.callbackFailure = opts.callbackFailure;
    this.callbackActive = opts.callbackActive;
    this.form = this._findForm();
    this.submit = this.form.find(':submit');
    this.submitVal = this.submit.val();
    this.locale = App.Env.loco.getLocale();
  }

  Form.prototype.getObj = function() {
    return this.obj;
  };

  Form.prototype.render = function() {
    if (this.initObj) {
      this._assignAttribs();
    } else {
      this.fill();
    }
    return this._handle();
  };

  Form.prototype.fill = function(attr) {
    var _, attributes, formEl, name, remoteName, results;
    if (attr == null) {
      attr = null;
    }
    if (this.obj == null) {
      return null;
    }
    if (this.obj.constructor.attributes == null) {
      return null;
    }
    attributes = {};
    if (attr != null) {
      attributes[attr] = null;
    } else {
      attributes = this.obj.constructor.attributes;
    }
    results = [];
    for (name in attributes) {
      _ = attributes[name];
      remoteName = this.obj.getAttrRemoteName(name);
      formEl = this.form.find("[data-attr=" + remoteName + "]").find("input,textarea,select");
      if (formEl.length === 1) {
        formEl.val(this.obj[name]);
        continue;
      }
      if (formEl.first().attr("type") !== "hidden" && formEl.last().attr('type') !== "checkbox") {
        continue;
      }
      results.push(formEl.last().prop('checked', !formEl.last().is(":checked")));
    }
    return results;
  };

  Form.prototype._findForm = function() {
    var objName;
    if (this.formId != null) {
      return $("#" + this.formId);
    }
    if (this.obj != null) {
      objName = this.obj.getIdentity().toLowerCase();
      if (this.obj.id != null) {
        return $("#edit_" + objName + "_" + this.obj.id);
      } else {
        return $("#new_" + objName);
      }
    }
  };

  Form.prototype._handle = function() {
    return this.form.on('submit', (function(_this) {
      return function(e) {
        var clearForm;
        e.preventDefault();
        if (!_this._canBeSubmitted()) {
          return;
        }
        if (_this.obj == null) {
          _this._submitForm();
          return;
        }
        _this._assignAttribs();
        _this._hideErrors();
        if (_this.obj.isInvalid()) {
          _this._renderErrors();
          if (_this.callbackFailure != null) {
            _this.delegator[_this.callbackFailure]();
          }
          return;
        }
        _this._submittingForm(false);
        clearForm = _this.obj.id != null ? false : true;
        return _this.obj.save().then(function(data) {
          if (data.success) {
            return _this._handleSuccess(data, clearForm);
          } else {
            if (_this.callbackFailure != null) {
              _this.delegator[_this.callbackFailure]();
            }
            return _this._renderErrors();
          }
        })["catch"](function(err) {
          return _this._connectionError();
        });
      };
    })(this));
  };

  Form.prototype._canBeSubmitted = function() {
    if (this.submit.hasClass('active')) {
      return false;
    }
    if (this.submit.hasClass('success')) {
      return false;
    }
    if (this.submit.hasClass('failure')) {
      return false;
    }
    return true;
  };

  Form.prototype._submitForm = function() {
    var jqxhr, url;
    this._submittingForm();
    url = this.form.attr('action') + '.json';
    jqxhr = $.post(url, this.form.serialize());
    jqxhr.always((function(_this) {
      return function() {
        return _this.submit.removeClass('active').blur();
      };
    })(this));
    jqxhr.fail((function(_this) {
      return function() {
        return _this._connectionError();
      };
    })(this));
    return jqxhr.done((function(_this) {
      return function(data) {
        if (data.success) {
          return _this._handleSuccess(data, _this.form.attr("method") === "POST");
        } else {
          return _this._renderErrors(data.errors);
        }
      };
    })(this));
  };

  Form.prototype._handleSuccess = function(data, clearForm) {
    var ref, ref1, val;
    if (clearForm == null) {
      clearForm = true;
    }
    val = (ref = (ref1 = data.flash) != null ? ref1.success : void 0) != null ? ref : App.I18n[this.locale].ui.form.success;
    this.submit.removeClass("active").addClass('success').val(val);
    if (data.access_token != null) {
      App.Env.loco.getWire().setToken(data.access_token);
    }
    if (this.callbackSuccess != null) {
      if (data.data != null) {
        this.delegator[this.callbackSuccess](data.data);
      } else {
        this.delegator[this.callbackSuccess]();
      }
      return;
    }
    return setTimeout((function(_this) {
      return function() {
        var selector;
        _this.submit.removeClass('success').val(_this.submitVal);
        selector = ":not([data-loco-not-clear=true])";
        if (clearForm) {
          return _this.form.find("input:not([type='submit'])" + selector + ", textarea" + selector).val('');
        }
      };
    })(this), 5000);
  };

  Form.prototype._renderErrors = function(remoteErrors) {
    var attrib, data, errors, remoteName;
    if (remoteErrors == null) {
      remoteErrors = null;
    }
    if ((this.obj != null) && (this.obj.errors == null)) {
      return;
    }
    if ((this.obj == null) && (remoteErrors == null)) {
      return;
    }
    data = remoteErrors != null ? remoteErrors : this.obj.errors;
    for (attrib in data) {
      errors = data[attrib];
      remoteName = this.obj != null ? this.obj.getAttrRemoteName(attrib) : attrib;
      if ((remoteName != null) && attrib !== "base") {
        this.form.find("[data-attr=" + remoteName + "]").find(".errors[data-for=" + remoteName + "]").text(errors[0]);
        continue;
      }
      if (attrib === "base" && errors.length > 0) {
        if ($(".errors[data-for='base']").length === 1) {
          $(".errors[data-for='base']").text(errors[0]);
        } else {
          this.submit.val(errors[0]);
        }
      }
    }
    if (this.submit.val() === this.submitVal || this.submit.val() === App.I18n[this.locale].ui.form.sending) {
      this.submit.val(App.I18n[this.locale].ui.form.errors.invalid_data);
    }
    this.submit.removeClass("active").addClass('failure');
    this._showErrors();
    return setTimeout((function(_this) {
      return function() {
        _this.submit.removeClass('failure').val(_this.submitVal);
        return _this.form.find('input.invalid, textarea.invalid, select.invalid').removeClass('invalid');
      };
    })(this), 1000);
  };

  Form.prototype._assignAttribs = function() {
    var _, formEl, name, ref, remoteName, results;
    if (this.obj.constructor.attributes == null) {
      return null;
    }
    ref = this.obj.constructor.attributes;
    results = [];
    for (name in ref) {
      _ = ref[name];
      remoteName = this.obj.getAttrRemoteName(name);
      formEl = this.form.find("[data-attr=" + remoteName + "]").find("input,textarea,select");
      if (formEl.length === 1) {
        this.obj[name] = formEl.val();
        continue;
      }
      if (formEl.first().attr("type") !== "hidden" && formEl.last().attr('type') !== "checkbox") {
        continue;
      }
      if (formEl.last().is(":checked")) {
        results.push(this.obj[name] = formEl.last().val());
      } else {
        results.push(this.obj[name] = formEl.first().val());
      }
    }
    return results;
  };

  Form.prototype._hideErrors = function() {
    return this.form.find('.errors').each((function(_this) {
      return function(index, e) {
        if ($(e).text().trim().length > 0) {
          $(e).text("");
          return $(e).hide();
        }
      };
    })(this));
  };

  Form.prototype._showErrors = function() {
    return this.form.find('.errors').each((function(_this) {
      return function(index, e) {
        if ($(e).text().trim().length > 0) {
          return $(e).show();
        }
      };
    })(this));
  };

  Form.prototype._submittingForm = function(hideErrors) {
    if (hideErrors == null) {
      hideErrors = true;
    }
    this.submit.removeClass('success').removeClass('failure').addClass('active').val(App.I18n[this.locale].ui.form.sending);
    if (this.callbackActive != null) {
      this.delegator[this.callbackActive]();
    }
    if (hideErrors) {
      return this._hideErrors();
    }
  };

  Form.prototype._connectionError = function() {
    this.submit.removeClass('active').addClass('failure').val(App.I18n[this.locale].ui.form.errors.connection);
    return setTimeout((function(_this) {
      return function() {
        return _this.submit.removeClass('failure').val(_this.submitVal);
      };
    })(this), 3000);
  };

  return Form;

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,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VUFBdkY7V0FDQSxVQUFBLENBQVcsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFBO2VBQ1QsS0FBQyxDQUFBLE1BQU0sQ0FBQyxXQUFSLENBQW9CLFNBQXBCLENBQThCLENBQUMsR0FBL0IsQ0FBbUMsS0FBQyxDQUFBLFNBQXBDO01BRFM7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQVgsRUFFRSxJQUZGO0VBRmdCIiwiZmlsZSI6InVpL2Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAuVUkuRm9ybVxuICBjb25zdHJ1Y3RvcjogKG9wdHMgPSB7fSkgLT5cbiAgICBAZm9ybUlkID0gb3B0cy5pZFxuICAgIEBvYmogPSBvcHRzLmZvclxuICAgIEBpbml0T2JqID0gaWYgb3B0cy5pbml0T2JqPyBhbmQgb3B0cy5pbml0T2JqIHRoZW4gdHJ1ZSBlbHNlIGZhbHNlXG4gICAgQGRlbGVnYXRvciA9IG9wdHMuZGVsZWdhdG9yXG4gICAgQGNhbGxiYWNrU3VjY2VzcyA9IG9wdHMuY2FsbGJhY2tTdWNjZXNzXG4gICAgQGNhbGxiYWNrRmFpbHVyZSA9IG9wdHMuY2FsbGJhY2tGYWlsdXJlXG4gICAgQGNhbGxiYWNrQWN0aXZlID0gb3B0cy5jYWxsYmFja0FjdGl2ZVxuICAgIEBmb3JtID0gdGhpcy5fZmluZEZvcm0oKVxuICAgIEBzdWJtaXQgPSBAZm9ybS5maW5kICc6c3VibWl0J1xuICAgIEBzdWJtaXRWYWwgPSBAc3VibWl0LnZhbCgpXG4gICAgQGxvY2FsZSA9IEFwcC5FbnYubG9jby5nZXRMb2NhbGUoKVxuXG4gIGdldE9iajogLT4gQG9ialxuXG4gIHJlbmRlcjogLT5cbiAgICBpZiBAaW5pdE9ialxuICAgICAgdGhpcy5fYXNzaWduQXR0cmlicygpXG4gICAgZWxzZVxuICAgICAgdGhpcy5maWxsKClcbiAgICB0aGlzLl9oYW5kbGUoKVxuXG4gIGZpbGw6IChhdHRyID0gbnVsbCkgLT5cbiAgICByZXR1cm4gbnVsbCBpZiBub3QgQG9iaj9cbiAgICByZXR1cm4gbnVsbCBpZiBub3QgQG9iai5jb25zdHJ1Y3Rvci5hdHRyaWJ1dGVzP1xuICAgIGF0dHJpYnV0ZXMgPSB7fVxuICAgIGlmIGF0dHI/XG4gICAgICBhdHRyaWJ1dGVzW2F0dHJdID0gbnVsbFxuICAgIGVsc2VcbiAgICAgIGF0dHJpYnV0ZXMgPSBAb2JqLmNvbnN0cnVjdG9yLmF0dHJpYnV0ZXNcbiAgICBmb3IgbmFtZSwgXyBvZiBhdHRyaWJ1dGVzXG4gICAgICByZW1vdGVOYW1lID0gQG9iai5nZXRBdHRyUmVtb3RlTmFtZSBuYW1lXG4gICAgICBmb3JtRWwgPSBAZm9ybS5maW5kKFwiW2RhdGEtYXR0cj0je3JlbW90ZU5hbWV9XVwiKS5maW5kIFwiaW5wdXQsdGV4dGFyZWEsc2VsZWN0XCJcbiAgICAgIGlmIGZvcm1FbC5sZW5ndGggaXMgMVxuICAgICAgICBmb3JtRWwudmFsIEBvYmpbbmFtZV1cbiAgICAgICAgY29udGludWVcbiAgICAgIGlmIGZvcm1FbC5maXJzdCgpLmF0dHIoXCJ0eXBlXCIpIGlzbnQgXCJoaWRkZW5cIiBhbmQgZm9ybUVsLmxhc3QoKS5hdHRyKCd0eXBlJykgaXNudCBcImNoZWNrYm94XCJcbiAgICAgICAgY29udGludWVcbiAgICAgIGZvcm1FbC5sYXN0KCkucHJvcCAnY2hlY2tlZCcsICFmb3JtRWwubGFzdCgpLmlzKFwiOmNoZWNrZWRcIilcblxuICBfZmluZEZvcm06IC0+XG4gICAgcmV0dXJuICQoXCIjI3tAZm9ybUlkfVwiKSBpZiBAZm9ybUlkP1xuICAgIGlmIEBvYmo/XG4gICAgICBvYmpOYW1lID0gQG9iai5nZXRJZGVudGl0eSgpLnRvTG93ZXJDYXNlKClcbiAgICAgIGlmIEBvYmouaWQ/IHRoZW4gJChcIiNlZGl0XyN7b2JqTmFtZX1fI3tAb2JqLmlkfVwiKSBlbHNlICQoXCIjbmV3XyN7b2JqTmFtZX1cIilcblxuICBfaGFuZGxlOiAtPlxuICAgIEBmb3JtLm9uICdzdWJtaXQnLCAoZSkgPT5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgcmV0dXJuIGlmIG5vdCB0aGlzLl9jYW5CZVN1Ym1pdHRlZCgpXG4gICAgICBpZiBub3QgQG9iaj9cbiAgICAgICAgdGhpcy5fc3VibWl0Rm9ybSgpXG4gICAgICAgIHJldHVyblxuICAgICAgdGhpcy5fYXNzaWduQXR0cmlicygpXG4gICAgICB0aGlzLl9oaWRlRXJyb3JzKClcbiAgICAgIGlmIEBvYmouaXNJbnZhbGlkKClcbiAgICAgICAgdGhpcy5fcmVuZGVyRXJyb3JzKClcbiAgICAgICAgQGRlbGVnYXRvcltAY2FsbGJhY2tGYWlsdXJlXSgpIGlmIEBjYWxsYmFja0ZhaWx1cmU/XG4gICAgICAgIHJldHVyblxuICAgICAgdGhpcy5fc3VibWl0dGluZ0Zvcm0gZmFsc2VcbiAgICAgIGNsZWFyRm9ybSA9IGlmIEBvYmouaWQ/IHRoZW4gZmFsc2UgZWxzZSB0cnVlXG4gICAgICBAb2JqLnNhdmUoKVxuICAgICAgLnRoZW4gKGRhdGEpID0+XG4gICAgICAgIGlmIGRhdGEuc3VjY2Vzc1xuICAgICAgICAgIHRoaXMuX2hhbmRsZVN1Y2Nlc3MgZGF0YSwgY2xlYXJGb3JtXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBAZGVsZWdhdG9yW0BjYWxsYmFja0ZhaWx1cmVdKCkgaWYgQGNhbGxiYWNrRmFpbHVyZT9cbiAgICAgICAgICB0aGlzLl9yZW5kZXJFcnJvcnMoKVxuICAgICAgLmNhdGNoIChlcnIpID0+IHRoaXMuX2Nvbm5lY3Rpb25FcnJvcigpXG5cbiAgX2NhbkJlU3VibWl0dGVkOiAtPlxuICAgIHJldHVybiBmYWxzZSBpZiBAc3VibWl0Lmhhc0NsYXNzICdhY3RpdmUnXG4gICAgcmV0dXJuIGZhbHNlIGlmIEBzdWJtaXQuaGFzQ2xhc3MgJ3N1Y2Nlc3MnXG4gICAgcmV0dXJuIGZhbHNlIGlmIEBzdWJtaXQuaGFzQ2xhc3MgJ2ZhaWx1cmUnXG4gICAgdHJ1ZVxuXG4gIF9zdWJtaXRGb3JtOiAtPlxuICAgIHRoaXMuX3N1Ym1pdHRpbmdGb3JtKClcbiAgICB1cmwgPSBAZm9ybS5hdHRyKCdhY3Rpb24nKSArICcuanNvbidcbiAgICBqcXhociA9ICQucG9zdCB1cmwsIEBmb3JtLnNlcmlhbGl6ZSgpXG4gICAganF4aHIuYWx3YXlzID0+IEBzdWJtaXQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmJsdXIoKVxuICAgIGpxeGhyLmZhaWwgPT4gdGhpcy5fY29ubmVjdGlvbkVycm9yKClcbiAgICBqcXhoci5kb25lIChkYXRhKSA9PlxuICAgICAgaWYgZGF0YS5zdWNjZXNzXG4gICAgICAgIHRoaXMuX2hhbmRsZVN1Y2Nlc3MgZGF0YSwgQGZvcm0uYXR0cihcIm1ldGhvZFwiKSBpcyBcIlBPU1RcIlxuICAgICAgZWxzZVxuICAgICAgICB0aGlzLl9yZW5kZXJFcnJvcnMgZGF0YS5lcnJvcnNcblxuICBfaGFuZGxlU3VjY2VzczogKGRhdGEsIGNsZWFyRm9ybSA9IHRydWUpIC0+XG4gICAgdmFsID0gZGF0YS5mbGFzaD8uc3VjY2VzcyA/IEFwcC5JMThuW0Bsb2NhbGVdLnVpLmZvcm0uc3VjY2Vzc1xuICAgIEBzdWJtaXQucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikuYWRkQ2xhc3MoJ3N1Y2Nlc3MnKS52YWwgdmFsXG4gICAgaWYgZGF0YS5hY2Nlc3NfdG9rZW4/XG4gICAgICBBcHAuRW52LmxvY28uZ2V0V2lyZSgpLnNldFRva2VuIGRhdGEuYWNjZXNzX3Rva2VuXG4gICAgaWYgQGNhbGxiYWNrU3VjY2Vzcz9cbiAgICAgIGlmIGRhdGEuZGF0YT9cbiAgICAgICAgQGRlbGVnYXRvcltAY2FsbGJhY2tTdWNjZXNzXShkYXRhLmRhdGEpXG4gICAgICBlbHNlXG4gICAgICAgIEBkZWxlZ2F0b3JbQGNhbGxiYWNrU3VjY2Vzc10oKVxuICAgICAgcmV0dXJuXG4gICAgc2V0VGltZW91dCA9PlxuICAgICAgQHN1Ym1pdC5yZW1vdmVDbGFzcygnc3VjY2VzcycpLnZhbCBAc3VibWl0VmFsXG4gICAgICBzZWxlY3RvciA9IFwiOm5vdChbZGF0YS1sb2NvLW5vdC1jbGVhcj10cnVlXSlcIlxuICAgICAgaWYgY2xlYXJGb3JtXG4gICAgICAgIEBmb3JtLmZpbmQoXCJpbnB1dDpub3QoW3R5cGU9J3N1Ym1pdCddKSN7c2VsZWN0b3J9LCB0ZXh0YXJlYSN7c2VsZWN0b3J9XCIpLnZhbCAnJ1xuICAgICwgNTAwMFxuXG4gIF9yZW5kZXJFcnJvcnM6IChyZW1vdGVFcnJvcnMgPSBudWxsKSAtPlxuICAgIHJldHVybiBpZiBAb2JqPyBhbmQgbm90IEBvYmouZXJyb3JzP1xuICAgIHJldHVybiBpZiBub3QgQG9iaj8gYW5kIG5vdCByZW1vdGVFcnJvcnM/XG4gICAgZGF0YSA9IGlmIHJlbW90ZUVycm9ycz8gdGhlbiByZW1vdGVFcnJvcnMgZWxzZSBAb2JqLmVycm9yc1xuICAgIGZvciBhdHRyaWIsIGVycm9ycyBvZiBkYXRhXG4gICAgICByZW1vdGVOYW1lID0gaWYgQG9iaj8gdGhlbiBAb2JqLmdldEF0dHJSZW1vdGVOYW1lKGF0dHJpYikgZWxzZSBhdHRyaWJcbiAgICAgIGlmIHJlbW90ZU5hbWU/IGFuZCBhdHRyaWIgaXNudCBcImJhc2VcIlxuICAgICAgICAjIGJlIGF3YXJlIG9mIGludmFsaWQgZWxlbWVudHMncyBuZXN0aW5nIGUuZy4gXCJkaXZcIiBpbnNpZGUgb2YgXCJwXCJcbiAgICAgICAgQGZvcm0uZmluZChcIltkYXRhLWF0dHI9I3tyZW1vdGVOYW1lfV1cIikuZmluZChcIi5lcnJvcnNbZGF0YS1mb3I9I3tyZW1vdGVOYW1lfV1cIikudGV4dCBlcnJvcnNbMF1cbiAgICAgICAgY29udGludWVcbiAgICAgIGlmIGF0dHJpYiBpcyBcImJhc2VcIiBhbmQgZXJyb3JzLmxlbmd0aCA+IDBcbiAgICAgICAgaWYgJChcIi5lcnJvcnNbZGF0YS1mb3I9J2Jhc2UnXVwiKS5sZW5ndGggaXMgMVxuICAgICAgICAgICQoXCIuZXJyb3JzW2RhdGEtZm9yPSdiYXNlJ11cIikudGV4dCBlcnJvcnNbMF1cbiAgICAgICAgZWxzZVxuICAgICAgICAgIEBzdWJtaXQudmFsIGVycm9yc1swXVxuICAgIGlmIEBzdWJtaXQudmFsKCkgaXMgQHN1Ym1pdFZhbCBvciBAc3VibWl0LnZhbCgpIGlzIEFwcC5JMThuW0Bsb2NhbGVdLnVpLmZvcm0uc2VuZGluZ1xuICAgICAgQHN1Ym1pdC52YWwgQXBwLkkxOG5bQGxvY2FsZV0udWkuZm9ybS5lcnJvcnMuaW52YWxpZF9kYXRhXG4gICAgQHN1Ym1pdC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKS5hZGRDbGFzcyAnZmFpbHVyZSdcbiAgICB0aGlzLl9zaG93RXJyb3JzKClcbiAgICBzZXRUaW1lb3V0ID0+XG4gICAgICBAc3VibWl0LnJlbW92ZUNsYXNzKCdmYWlsdXJlJykudmFsIEBzdWJtaXRWYWxcbiAgICAgIEBmb3JtLmZpbmQoJ2lucHV0LmludmFsaWQsIHRleHRhcmVhLmludmFsaWQsIHNlbGVjdC5pbnZhbGlkJykucmVtb3ZlQ2xhc3MgJ2ludmFsaWQnXG4gICAgLCAxMDAwXG5cbiAgX2Fzc2lnbkF0dHJpYnM6IC0+XG4gICAgcmV0dXJuIG51bGwgaWYgbm90IEBvYmouY29uc3RydWN0b3IuYXR0cmlidXRlcz9cbiAgICBmb3IgbmFtZSwgXyBvZiBAb2JqLmNvbnN0cnVjdG9yLmF0dHJpYnV0ZXNcbiAgICAgIHJlbW90ZU5hbWUgPSBAb2JqLmdldEF0dHJSZW1vdGVOYW1lIG5hbWVcbiAgICAgIGZvcm1FbCA9IEBmb3JtLmZpbmQoXCJbZGF0YS1hdHRyPSN7cmVtb3RlTmFtZX1dXCIpLmZpbmQgXCJpbnB1dCx0ZXh0YXJlYSxzZWxlY3RcIlxuICAgICAgaWYgZm9ybUVsLmxlbmd0aCBpcyAxXG4gICAgICAgIEBvYmpbbmFtZV0gPSBmb3JtRWwudmFsKClcbiAgICAgICAgY29udGludWVcbiAgICAgIGlmIGZvcm1FbC5maXJzdCgpLmF0dHIoXCJ0eXBlXCIpIGlzbnQgXCJoaWRkZW5cIiBhbmQgZm9ybUVsLmxhc3QoKS5hdHRyKCd0eXBlJykgaXNudCBcImNoZWNrYm94XCJcbiAgICAgICAgY29udGludWVcbiAgICAgIGlmIGZvcm1FbC5sYXN0KCkuaXMgXCI6Y2hlY2tlZFwiXG4gICAgICAgIEBvYmpbbmFtZV0gPSBmb3JtRWwubGFzdCgpLnZhbCgpXG4gICAgICBlbHNlXG4gICAgICAgIEBvYmpbbmFtZV0gPSBmb3JtRWwuZmlyc3QoKS52YWwoKVxuXG4gIF9oaWRlRXJyb3JzOiAtPlxuICAgIEBmb3JtLmZpbmQoJy5lcnJvcnMnKS5lYWNoIChpbmRleCwgZSkgPT5cbiAgICAgIGlmICQoZSkudGV4dCgpLnRyaW0oKS5sZW5ndGggPiAwXG4gICAgICAgICQoZSkudGV4dCBcIlwiXG4gICAgICAgICQoZSkuaGlkZSgpXG5cbiAgX3Nob3dFcnJvcnM6IC0+XG4gICAgQGZvcm0uZmluZCgnLmVycm9ycycpLmVhY2ggKGluZGV4LCBlKSA9PlxuICAgICAgaWYgJChlKS50ZXh0KCkudHJpbSgpLmxlbmd0aCA+IDBcbiAgICAgICAgJChlKS5zaG93KClcblxuICBfc3VibWl0dGluZ0Zvcm06IChoaWRlRXJyb3JzID0gdHJ1ZSkgLT5cbiAgICBAc3VibWl0LnJlbW92ZUNsYXNzKCdzdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2ZhaWx1cmUnKS5hZGRDbGFzcygnYWN0aXZlJykudmFsIEFwcC5JMThuW0Bsb2NhbGVdLnVpLmZvcm0uc2VuZGluZ1xuICAgIEBkZWxlZ2F0b3JbQGNhbGxiYWNrQWN0aXZlXSgpIGlmIEBjYWxsYmFja0FjdGl2ZT9cbiAgICB0aGlzLl9oaWRlRXJyb3JzKCkgaWYgaGlkZUVycm9yc1xuXG4gIF9jb25uZWN0aW9uRXJyb3I6IC0+XG4gICAgQHN1Ym1pdC5yZW1vdmVDbGFzcygnYWN0aXZlJykuYWRkQ2xhc3MoJ2ZhaWx1cmUnKS52YWwgQXBwLkkxOG5bQGxvY2FsZV0udWkuZm9ybS5lcnJvcnMuY29ubmVjdGlvblxuICAgIHNldFRpbWVvdXQgPT5cbiAgICAgIEBzdWJtaXQucmVtb3ZlQ2xhc3MoJ2ZhaWx1cmUnKS52YWwgQHN1Ym1pdFZhbFxuICAgICwgMzAwMCJdfQ==

App.UI.Tabs = (function() {
  function Tabs(node, delegator, opts) {
    var ref;
    if (opts == null) {
      opts = {};
    }
    this.sel = $(node);
    this.delegator = delegator;
    this.animFunc = (ref = opts.animFunc) != null ? ref : 'animate';
    this.handle();
  }

  Tabs.prototype.handle = function() {
    var elementsSize;
    elementsSize = this.sel.find('a').size();
    return this.sel.find('a').click((function(_this) {
      return function(e) {
        var child, i, index, left, len, ref, width;
        e.preventDefault();
        if ($(e.target).hasClass("active")) {
          return;
        }
        index = 0;
        ref = $(e.target).parent().children('a');
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          if ($(child).text() === $(e.target).text()) {
            break;
          }
          index += 1;
        }
        width = parseInt(_this.sel.css('width'));
        left = width / elementsSize * index;
        _this.sel.find('a.active').removeClass('active');
        $(e.target).addClass('active');
        _this.sel.find('div.background')[_this.animFunc]({
          left: left
        }, 200);
        return _this.delegator[$(e.target).data("action")]();
      };
    })(this));
  };

  return Tabs;

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL3RhYnMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7RUFDRSxjQUFDLElBQUQsRUFBTyxTQUFQLEVBQWtCLElBQWxCO0FBQ1gsUUFBQTs7TUFENkIsT0FBTzs7SUFDcEMsSUFBQyxDQUFBLEdBQUQsR0FBTyxDQUFBLENBQUUsSUFBRjtJQUNQLElBQUMsQ0FBQSxTQUFELEdBQWE7SUFDYixJQUFDLENBQUEsUUFBRCx5Q0FBNEI7SUFDNUIsSUFBSSxDQUFDLE1BQUwsQ0FBQTtFQUpXOztpQkFNYixNQUFBLEdBQVEsU0FBQTtBQUNOLFFBQUE7SUFBQSxZQUFBLEdBQWUsSUFBQyxDQUFBLEdBQUcsQ0FBQyxJQUFMLENBQVUsR0FBVixDQUFjLENBQUMsSUFBZixDQUFBO1dBQ2YsSUFBQyxDQUFBLEdBQUcsQ0FBQyxJQUFMLENBQVUsR0FBVixDQUFjLENBQUMsS0FBZixDQUFxQixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRDtBQUNuQixZQUFBO1FBQUEsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtRQUNBLElBQVUsQ0FBQSxDQUFFLENBQUMsQ0FBQyxNQUFKLENBQVcsQ0FBQyxRQUFaLENBQXFCLFFBQXJCLENBQVY7QUFBQSxpQkFBQTs7UUFDQSxLQUFBLEdBQVE7QUFDUjtBQUFBLGFBQUEscUNBQUE7O1VBQ0UsSUFBUyxDQUFBLENBQUUsS0FBRixDQUFRLENBQUMsSUFBVCxDQUFBLENBQUEsS0FBbUIsQ0FBQSxDQUFFLENBQUMsQ0FBQyxNQUFKLENBQVcsQ0FBQyxJQUFaLENBQUEsQ0FBNUI7QUFBQSxrQkFBQTs7VUFDQSxLQUFBLElBQVM7QUFGWDtRQUdBLEtBQUEsR0FBUSxRQUFBLENBQVMsS0FBQyxDQUFBLEdBQUcsQ0FBQyxHQUFMLENBQVMsT0FBVCxDQUFUO1FBQ1IsSUFBQSxHQUFPLEtBQUEsR0FBUSxZQUFSLEdBQXVCO1FBQzlCLEtBQUMsQ0FBQSxHQUFHLENBQUMsSUFBTCxDQUFVLFVBQVYsQ0FBcUIsQ0FBQyxXQUF0QixDQUFrQyxRQUFsQztRQUNBLENBQUEsQ0FBRSxDQUFDLENBQUMsTUFBSixDQUFXLENBQUMsUUFBWixDQUFxQixRQUFyQjtRQUNBLEtBQUMsQ0FBQSxHQUFHLENBQUMsSUFBTCxDQUFVLGdCQUFWLENBQTRCLENBQUEsS0FBQyxDQUFBLFFBQUQsQ0FBNUIsQ0FBdUM7VUFBQyxJQUFBLEVBQU0sSUFBUDtTQUF2QyxFQUFxRCxHQUFyRDtlQUNBLEtBQUMsQ0FBQSxTQUFVLENBQUEsQ0FBQSxDQUFFLENBQUMsQ0FBQyxNQUFKLENBQVcsQ0FBQyxJQUFaLENBQWlCLFFBQWpCLENBQUEsQ0FBWCxDQUFBO01BWm1CO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFyQjtFQUZNIiwiZmlsZSI6InVpL3RhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAuVUkuVGFic1xuICBjb25zdHJ1Y3RvcjogKG5vZGUsIGRlbGVnYXRvciwgb3B0cyA9IHt9KSAtPlxuICAgIEBzZWwgPSAkKG5vZGUpXG4gICAgQGRlbGVnYXRvciA9IGRlbGVnYXRvclxuICAgIEBhbmltRnVuYyA9IG9wdHMuYW5pbUZ1bmMgPyAnYW5pbWF0ZSdcbiAgICB0aGlzLmhhbmRsZSgpXG5cbiAgaGFuZGxlOiAtPlxuICAgIGVsZW1lbnRzU2l6ZSA9IEBzZWwuZmluZCgnYScpLnNpemUoKVxuICAgIEBzZWwuZmluZCgnYScpLmNsaWNrIChlKSA9PlxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICByZXR1cm4gaWYgJChlLnRhcmdldCkuaGFzQ2xhc3MgXCJhY3RpdmVcIlxuICAgICAgaW5kZXggPSAwXG4gICAgICBmb3IgY2hpbGQgaW4gJChlLnRhcmdldCkucGFyZW50KCkuY2hpbGRyZW4oJ2EnKVxuICAgICAgICBicmVhayBpZiAkKGNoaWxkKS50ZXh0KCkgaXMgJChlLnRhcmdldCkudGV4dCgpXG4gICAgICAgIGluZGV4ICs9IDFcbiAgICAgIHdpZHRoID0gcGFyc2VJbnQgQHNlbC5jc3MgJ3dpZHRoJ1xuICAgICAgbGVmdCA9IHdpZHRoIC8gZWxlbWVudHNTaXplICogaW5kZXhcbiAgICAgIEBzZWwuZmluZCgnYS5hY3RpdmUnKS5yZW1vdmVDbGFzcyAnYWN0aXZlJ1xuICAgICAgJChlLnRhcmdldCkuYWRkQ2xhc3MgJ2FjdGl2ZSdcbiAgICAgIEBzZWwuZmluZCgnZGl2LmJhY2tncm91bmQnKVtAYW5pbUZ1bmNdIHtsZWZ0OiBsZWZ0fSwgMjAwXG4gICAgICBAZGVsZWdhdG9yWyQoZS50YXJnZXQpLmRhdGEoXCJhY3Rpb25cIildKClcbiJdfQ==

App.Services.Date = (function() {
  function Date(date) {
    this.date = date;
  }

  Date.prototype.toString = function(format) {
    var skope;
    if (format == null) {
      format = 'default';
    }
    skope = App.I18n[App.Env.loco.getLocale()].date.formats;
    switch (format) {
      case 'default':
        return this.strftime(skope["default"]);
      case 'short':
        return this.strftime(skope.short);
      case 'long':
        return this.strftime(skope.long);
      default:
        return console.log('App.Services.Date#toString: unknown format.');
    }
  };

  Date.prototype.strftime = function(str) {
    var skope;
    skope = App.I18n[App.Env.loco.getLocale()];
    str = str.replace('%Y', (function(_this) {
      return function(x) {
        return _this.date.getFullYear();
      };
    })(this));
    str = str.replace('%y', (function(_this) {
      return function(x) {
        return _this.date.getFullYear().toString().slice(-2);
      };
    })(this));
    str = str.replace('%m', (function(_this) {
      return function(x) {
        var month;
        month = _this.date.getMonth() + 1;
        if (month >= 10) {
          return month;
        } else {
          return "0" + month;
        }
      };
    })(this));
    str = str.replace('%b', (function(_this) {
      return function(x) {
        return skope.date.abbr_month_names[_this.date.getMonth()];
      };
    })(this));
    str = str.replace('%B', (function(_this) {
      return function(x) {
        return skope.date.month_names[_this.date.getMonth()];
      };
    })(this));
    str = str.replace('%d', (function(_this) {
      return function(x) {
        if (_this.date.getDate() >= 10) {
          return _this.date.getDate();
        } else {
          return "0" + (_this.date.getDate());
        }
      };
    })(this));
    str = str.replace('%H', (function(_this) {
      return function(x) {
        if (_this.date.getHours() >= 10) {
          return _this.date.getHours();
        } else {
          return "0" + (_this.date.getHours());
        }
      };
    })(this));
    return str = str.replace('%M', (function(_this) {
      return function(x) {
        if (_this.date.getMinutes() >= 10) {
          return _this.date.getMinutes();
        } else {
          return "0" + (_this.date.getMinutes());
        }
      };
    })(this));
  };

  return Date;

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDLEtBQUMsQ0FBQSxJQUFJLENBQUMsT0FBTixDQUFBLENBQUQsRUFBdEQ7O01BQVA7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWxCO0lBQ04sR0FBQSxHQUFNLEdBQUcsQ0FBQyxPQUFKLENBQVksSUFBWixFQUFrQixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRDtRQUFPLElBQUcsS0FBQyxDQUFBLElBQUksQ0FBQyxRQUFOLENBQUEsQ0FBQSxJQUFvQixFQUF2QjtpQkFBK0IsS0FBQyxDQUFBLElBQUksQ0FBQyxRQUFOLENBQUEsRUFBL0I7U0FBQSxNQUFBO2lCQUFxRCxHQUFBLEdBQUcsQ0FBQyxLQUFDLENBQUEsSUFBSSxDQUFDLFFBQU4sQ0FBQSxDQUFELEVBQXhEOztNQUFQO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFsQjtXQUNOLEdBQUEsR0FBTSxHQUFHLENBQUMsT0FBSixDQUFZLElBQVosRUFBa0IsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLENBQUQ7UUFBTyxJQUFHLEtBQUMsQ0FBQSxJQUFJLENBQUMsVUFBTixDQUFBLENBQUEsSUFBc0IsRUFBekI7aUJBQWlDLEtBQUMsQ0FBQSxJQUFJLENBQUMsVUFBTixDQUFBLEVBQWpDO1NBQUEsTUFBQTtpQkFBeUQsR0FBQSxHQUFHLENBQUMsS0FBQyxDQUFBLElBQUksQ0FBQyxVQUFOLENBQUEsQ0FBRCxFQUE1RDs7TUFBUDtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBbEI7RUFYRSIsImZpbGUiOiJzZXJ2aWNlcy9kYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwLlNlcnZpY2VzLkRhdGVcbiAgY29uc3RydWN0b3I6IChkYXRlKSAtPiBAZGF0ZSA9IGRhdGVcblxuICB0b1N0cmluZzogKGZvcm1hdCA9ICdkZWZhdWx0JykgLT5cbiAgICBza29wZSA9IEFwcC5JMThuW0FwcC5FbnYubG9jby5nZXRMb2NhbGUoKV0uZGF0ZS5mb3JtYXRzXG4gICAgc3dpdGNoIGZvcm1hdFxuICAgICAgd2hlbiAnZGVmYXVsdCcgdGhlbiB0aGlzLnN0cmZ0aW1lIHNrb3BlLmRlZmF1bHRcbiAgICAgIHdoZW4gJ3Nob3J0JyB0aGVuIHRoaXMuc3RyZnRpbWUgc2tvcGUuc2hvcnRcbiAgICAgIHdoZW4gJ2xvbmcnIHRoZW4gdGhpcy5zdHJmdGltZSBza29wZS5sb25nXG4gICAgICBlbHNlXG4gICAgICAgIGNvbnNvbGUubG9nICdBcHAuU2VydmljZXMuRGF0ZSN0b1N0cmluZzogdW5rbm93biBmb3JtYXQuJ1xuXG4gIHN0cmZ0aW1lOiAoc3RyKSAtPlxuICAgIHNrb3BlID0gQXBwLkkxOG5bQXBwLkVudi5sb2NvLmdldExvY2FsZSgpXVxuICAgIHN0ciA9IHN0ci5yZXBsYWNlICclWScsICh4KSA9PiBAZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgc3RyID0gc3RyLnJlcGxhY2UgJyV5JywgKHgpID0+IEBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKVstMi4uLTFdXG4gICAgc3RyID0gc3RyLnJlcGxhY2UgJyVtJywgKHgpID0+XG4gICAgICBtb250aCA9IEBkYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgICBpZiBtb250aCA+PSAxMCB0aGVuIG1vbnRoIGVsc2UgXCIwI3ttb250aH1cIlxuICAgIHN0ciA9IHN0ci5yZXBsYWNlICclYicsICh4KSA9PiBza29wZS5kYXRlLmFiYnJfbW9udGhfbmFtZXNbQGRhdGUuZ2V0TW9udGgoKV1cbiAgICBzdHIgPSBzdHIucmVwbGFjZSAnJUInLCAoeCkgPT4gc2tvcGUuZGF0ZS5tb250aF9uYW1lc1tAZGF0ZS5nZXRNb250aCgpXVxuICAgIHN0ciA9IHN0ci5yZXBsYWNlICclZCcsICh4KSA9PiBpZiBAZGF0ZS5nZXREYXRlKCkgPj0gMTAgdGhlbiBAZGF0ZS5nZXREYXRlKCkgZWxzZSBcIjAje0BkYXRlLmdldERhdGUoKX1cIlxuICAgIHN0ciA9IHN0ci5yZXBsYWNlICclSCcsICh4KSA9PiBpZiBAZGF0ZS5nZXRIb3VycygpID49IDEwIHRoZW4gQGRhdGUuZ2V0SG91cnMoKSBlbHNlIFwiMCN7QGRhdGUuZ2V0SG91cnMoKX1cIlxuICAgIHN0ciA9IHN0ci5yZXBsYWNlICclTScsICh4KSA9PiBpZiBAZGF0ZS5nZXRNaW51dGVzKCkgPj0gMTAgdGhlbiBAZGF0ZS5nZXRNaW51dGVzKCkgZWxzZSBcIjAje0BkYXRlLmdldE1pbnV0ZXMoKX1cIiJdfQ==

App.Helpers.Text = (function() {
  function Text(opts) {
    if (opts == null) {
      opts = {};
    }
  }

  Text.prototype.simpleFormat = function(str) {
    str = str.replace(/\r\n?/, "\n");
    str = $.trim(str);
    if (str.length > 0) {
      str = str.replace(/\n\n+/g, '</p><p>');
      str = str.replace(/\n/g, '<br>');
      str = '<p>' + str + '</p>';
    }
    return str;
  };

  return Text;

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvdGV4dC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQztFQUNILGNBQUMsSUFBRDs7TUFBQyxPQUFPOztFQUFSOztpQkFFYixZQUFBLEdBQWMsU0FBQyxHQUFEO0lBQ1osR0FBQSxHQUFNLEdBQUcsQ0FBQyxPQUFKLENBQVksT0FBWixFQUFxQixJQUFyQjtJQUNOLEdBQUEsR0FBTSxDQUFDLENBQUMsSUFBRixDQUFPLEdBQVA7SUFDTixJQUFHLEdBQUcsQ0FBQyxNQUFKLEdBQWEsQ0FBaEI7TUFDRSxHQUFBLEdBQU0sR0FBRyxDQUFDLE9BQUosQ0FBWSxRQUFaLEVBQXNCLFNBQXRCO01BQ04sR0FBQSxHQUFNLEdBQUcsQ0FBQyxPQUFKLENBQVksS0FBWixFQUFtQixNQUFuQjtNQUNOLEdBQUEsR0FBTSxLQUFBLEdBQVEsR0FBUixHQUFjLE9BSHRCOztXQUlBO0VBUFkiLCJmaWxlIjoiaGVscGVycy90ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwLkhlbHBlcnMuVGV4dFxuICBjb25zdHJ1Y3RvcjogKG9wdHMgPSB7fSkgLT5cblxuICBzaW1wbGVGb3JtYXQ6IChzdHIpIC0+XG4gICAgc3RyID0gc3RyLnJlcGxhY2UgL1xcclxcbj8vLCBcIlxcblwiXG4gICAgc3RyID0gJC50cmltIHN0clxuICAgIGlmIHN0ci5sZW5ndGggPiAwXG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSAvXFxuXFxuKy9nLCAnPC9wPjxwPidcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlIC9cXG4vZywgJzxicj4nXG4gICAgICBzdHIgPSAnPHA+JyArIHN0ciArICc8L3A+J1xuICAgIHN0ciJdfQ==

App.I18n.en = {
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
      "default": "%Y-%m-%d",
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsZXMvZW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBVCxHQUNFO0VBQUEsUUFBQSxFQUFVLEVBQVY7RUFDQSxNQUFBLEVBQVEsRUFEUjtFQUVBLFVBQUEsRUFBWSxFQUZaO0VBR0EsRUFBQSxFQUNFO0lBQUEsSUFBQSxFQUNFO01BQUEsT0FBQSxFQUFTLFlBQVQ7TUFDQSxPQUFBLEVBQVMsU0FEVDtNQUVBLE1BQUEsRUFDRTtRQUFBLFVBQUEsRUFBWSxrQkFBWjtRQUNBLFlBQUEsRUFBYyxjQURkO09BSEY7S0FERjtHQUpGO0VBVUEsSUFBQSxFQUNFO0lBQUEsT0FBQSxFQUNFO01BQUEsU0FBQSxFQUFTLFVBQVQ7TUFDQSxLQUFBLEVBQU8sT0FEUDtNQUVBLElBQUEsRUFBTSxXQUZOO0tBREY7SUFJQSxTQUFBLEVBQVcsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixTQUFyQixFQUFnQyxXQUFoQyxFQUE2QyxVQUE3QyxFQUF5RCxRQUF6RCxFQUFtRSxVQUFuRSxDQUpYO0lBS0EsY0FBQSxFQUFnQixDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxDQUxoQjtJQU1BLFdBQUEsRUFBYSxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLE9BQXhCLEVBQWlDLE9BQWpDLEVBQTBDLEtBQTFDLEVBQWlELE1BQWpELEVBQXlELE1BQXpELEVBQWlFLFFBQWpFLEVBQTJFLFdBQTNFLEVBQXdGLFNBQXhGLEVBQW1HLFVBQW5HLEVBQStHLFVBQS9HLENBTmI7SUFPQSxnQkFBQSxFQUFrQixDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRCxFQUF5RCxLQUF6RCxFQUFnRSxLQUFoRSxFQUF1RSxLQUF2RSxFQUE4RSxLQUE5RSxDQVBsQjtHQVhGO0VBbUJBLE1BQUEsRUFDRTtJQUFBLFFBQUEsRUFDRTtNQUFBLFFBQUEsRUFBVSxrQkFBVjtNQUNBLEtBQUEsRUFBTyxnQkFEUDtNQUVBLFlBQUEsRUFBYyw0QkFGZDtNQUdBLEtBQUEsRUFBTyxnQkFIUDtNQUlBLFFBQUEsRUFBVSwyQkFKVjtNQUtBLElBQUEsRUFBTSxjQUxOO01BTUEsU0FBQSxFQUFXLGFBTlg7TUFPQSxZQUFBLEVBQWMsK0JBUGQ7TUFRQSx3QkFBQSxFQUEwQiwyQ0FSMUI7TUFTQSxTQUFBLEVBQVcsNkJBVFg7TUFVQSxPQUFBLEVBQVMsWUFWVDtNQVdBLFNBQUEsRUFBVyw0QkFYWDtNQVlBLHFCQUFBLEVBQXVCLHdDQVp2QjtNQWFBLFlBQUEsRUFBYyxpQkFiZDtNQWNBLGNBQUEsRUFBZ0Isb0JBZGhCO01BZUEsR0FBQSxFQUFLLGFBZkw7TUFnQkEsT0FBQSxFQUFTLGVBaEJUO01BaUJBLFFBQUEsRUFDRTtRQUFBLEdBQUEsRUFBSyxzQ0FBTDtRQUNBLEtBQUEsRUFBTyw4Q0FEUDtPQWxCRjtNQW9CQSxTQUFBLEVBQ0U7UUFBQSxHQUFBLEVBQUssdUNBQUw7UUFDQSxLQUFBLEVBQU8sK0NBRFA7T0FyQkY7TUF1QkEsWUFBQSxFQUNFO1FBQUEsR0FBQSxFQUFLLDZDQUFMO1FBQ0EsS0FBQSxFQUFPLHFEQURQO09BeEJGO01BMEJBLFVBQUEsRUFBWSw2QkExQlo7S0FERjtHQXBCRiIsImZpbGUiOiJsb2NhbGVzL2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiQXBwLkkxOG4uZW4gPVxuICB2YXJpYW50czoge31cbiAgbW9kZWxzOiB7fVxuICBhdHRyaWJ1dGVzOiB7fVxuICB1aTpcbiAgICBmb3JtOlxuICAgICAgc2VuZGluZzogXCJTZW5kaW5nLi4uXCJcbiAgICAgIHN1Y2Nlc3M6IFwiU3VjY2Vzc1wiXG4gICAgICBlcnJvcnM6XG4gICAgICAgIGNvbm5lY3Rpb246IFwiQ29ubmVjdGlvbiBFcnJvclwiXG4gICAgICAgIGludmFsaWRfZGF0YTogXCJJbnZhbGlkIGRhdGFcIlxuICBkYXRlOlxuICAgIGZvcm1hdHM6XG4gICAgICBkZWZhdWx0OiBcIiVZLSVtLSVkXCJcbiAgICAgIHNob3J0OiBcIiViICVkXCJcbiAgICAgIGxvbmc6IFwiJUIgJWQsICVZXCJcbiAgICBkYXlfbmFtZXM6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxuICAgIGFiYnJfZGF5X25hbWVzOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddXG4gICAgbW9udGhfbmFtZXM6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG4gICAgYWJicl9tb250aF9uYW1lczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddXG4gIGVycm9yczpcbiAgICBtZXNzYWdlczpcbiAgICAgIGFjY2VwdGVkOiBcIm11c3QgYmUgYWNjZXB0ZWRcIlxuICAgICAgYmxhbms6IFwiY2FuJ3QgYmUgYmxhbmtcIlxuICAgICAgY29uZmlybWF0aW9uOiBcImRvZXNuJ3QgbWF0Y2ggJXthdHRyaWJ1dGV9XCJcbiAgICAgIGVtcHR5OiBcImNhbid0IGJlIGVtcHR5XCJcbiAgICAgIGVxdWFsX3RvOiBcIm11c3QgYmUgZXF1YWwgdG8gJXtjb3VudH1cIlxuICAgICAgZXZlbjogXCJtdXN0IGJlIGV2ZW5cIlxuICAgICAgZXhjbHVzaW9uOiBcImlzIHJlc2VydmVkXCJcbiAgICAgIGdyZWF0ZXJfdGhhbjogXCJtdXN0IGJlIGdyZWF0ZXIgdGhhbiAle2NvdW50fVwiXG4gICAgICBncmVhdGVyX3RoYW5fb3JfZXF1YWxfdG86IFwibXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gJXtjb3VudH1cIlxuICAgICAgaW5jbHVzaW9uOiBcImlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgbGlzdFwiXG4gICAgICBpbnZhbGlkOiBcImlzIGludmFsaWRcIlxuICAgICAgbGVzc190aGFuOiBcIm11c3QgYmUgbGVzcyB0aGFuICV7Y291bnR9XCJcbiAgICAgIGxlc3NfdGhhbl9vcl9lcXVhbF90bzogXCJtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAle2NvdW50fVwiXG4gICAgICBub3RfYV9udW1iZXI6IFwiaXMgbm90IGEgbnVtYmVyXCJcbiAgICAgIG5vdF9hbl9pbnRlZ2VyOiBcIm11c3QgYmUgYW4gaW50ZWdlclwiXG4gICAgICBvZGQ6IFwibXVzdCBiZSBvZGRcIlxuICAgICAgcHJlc2VudDogXCJtdXN0IGJlIGJsYW5rXCJcbiAgICAgIHRvb19sb25nOlxuICAgICAgICBvbmU6IFwiaXMgdG9vIGxvbmcgKG1heGltdW0gaXMgMSBjaGFyYWN0ZXIpXCJcbiAgICAgICAgb3RoZXI6IFwiaXMgdG9vIGxvbmcgKG1heGltdW0gaXMgJXtjb3VudH0gY2hhcmFjdGVycylcIlxuICAgICAgdG9vX3Nob3J0OlxuICAgICAgICBvbmU6IFwiaXMgdG9vIHNob3J0IChtaW5pbXVtIGlzIDEgY2hhcmFjdGVyKVwiXG4gICAgICAgIG90aGVyOiBcImlzIHRvbyBzaG9ydCAobWluaW11bSBpcyAle2NvdW50fSBjaGFyYWN0ZXJzKVwiXG4gICAgICB3cm9uZ19sZW5ndGg6XG4gICAgICAgIG9uZTogXCJpcyB0aGUgd3JvbmcgbGVuZ3RoIChzaG91bGQgYmUgMSBjaGFyYWN0ZXIpXCJcbiAgICAgICAgb3RoZXI6IFwiaXMgdGhlIHdyb25nIGxlbmd0aCAoc2hvdWxkIGJlICV7Y291bnR9IGNoYXJhY3RlcnMpXCJcbiAgICAgIG90aGVyX3RoYW46IFwibXVzdCBiZSBvdGhlciB0aGFuICV7Y291bnR9XCIiXX0=
