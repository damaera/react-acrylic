(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', 'chai', '../Test'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('chai'), require('../Test'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.chai, global.Test);
    global.Test = mod.exports;
  }
})(this, function (_react, _enzyme, _chai, _Test) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _Test2 = _interopRequireDefault(_Test);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('<Test />', function () {
    it('should render children when condition is true', function () {
      var Children = _react2.default.createElement(
        'span',
        null,
        'Hello'
      );
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _Test2.default,
        { condition: true },
        Children
      ));
      (0, _chai.expect)(wrapper.contains(Children)).to.equal(true);
    });

    it('should not render children when condition is false', function () {
      var Children = _react2.default.createElement(
        'span',
        null,
        'Hai'
      );
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _Test2.default,
        { condition: false },
        Children
      ));
      (0, _chai.expect)(wrapper.contains(Children)).to.equal(false);
    });
  });
});