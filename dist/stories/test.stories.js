(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'react', '@storybook/react', '../Test'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('react'), require('@storybook/react'), require('../Test'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.react, global.react, global.Test);
    global.testStories = mod.exports;
  }
})(this, function (module, _react, _react3, _Test) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _Test2 = _interopRequireDefault(_Test);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  (0, _react3.storiesOf)('Test', module).add('True', function () {
    return _react2.default.createElement(
      _Test2.default,
      { condition: true },
      'Tadaa'
    );
  }).add('False', function () {
    return _react2.default.createElement(
      _Test2.default,
      { condition: false },
      'Tadaa'
    );
  });
});