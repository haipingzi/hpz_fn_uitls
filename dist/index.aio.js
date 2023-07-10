/*!
 * hpz_fn_uitls 1.0.1
 * Licensed under MIT
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.clone = {})));
}(this, (function (exports) { 'use strict';

  function type (el) {
    return Object.prototype.toString.call(el).slice(8, -1).toLowerCase();
  }

  function clone(source) {
    var t = type(source);
    if (!['array', 'object'].includes(t)) return source;
    if (t === 'array') {
      return source.map(function (el) {
        return clone(el);
      });
    } else {
      var obj = {};
      for (var key in source) {
        if (Object.hasOwnProperty.call(source, key)) {
          var element = source[key];
          obj[key] = element;
        }
      }
      return obj;
    }
  }

  exports.clone = clone;
  exports.type = type;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
