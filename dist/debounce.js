(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.debounce = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function debounce(callback, wait) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    var timeout = null;
    var callbackArgs = null;

    var later = function later() {
      return callback.apply(context, callbackArgs);
    };

    return function () {
      callbackArgs = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  exports.default = debounce;
});