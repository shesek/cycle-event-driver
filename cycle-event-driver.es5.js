'use strict';

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = function (emitter) {
  return function (out$) {
    return out$.subscribe(function (ev) {
      return emitter.emit.apply(emitter, _toConsumableArray(ev));
    }), function (name) {
      return _rx2.default.Observable.fromEvent(emitter, name);
    };
  };
};

