(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'html2canvas', 'stackblur-canvas', './debounce', './imgNoise'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('html2canvas'), require('stackblur-canvas'), require('./debounce'), require('./imgNoise'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.html2canvas, global.stackblurCanvas, global.debounce, global.imgNoise);
    global.Acrylic = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _html2canvas, _stackblurCanvas, _debounce, _imgNoise) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _html2canvas2 = _interopRequireDefault(_html2canvas);

  var _stackblurCanvas2 = _interopRequireDefault(_stackblurCanvas);

  var _debounce2 = _interopRequireDefault(_debounce);

  var _imgNoise2 = _interopRequireDefault(_imgNoise);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Acrylic = function (_Component) {
    _inherits(Acrylic, _Component);

    function Acrylic() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Acrylic);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Acrylic.__proto__ || Object.getPrototypeOf(Acrylic)).call.apply(_ref, [this].concat(args))), _this), _this.showHideElement = function () {
        var $$acrylics = document.querySelectorAll('.js-acrylic');
        if ($$acrylics) {
          $$acrylics.forEach(function ($acrylic) {
            $acrylic.style.display = 'none';
            // $acrylic.style.transition = 'opacity 1s'
            var vv = setTimeout(function () {
              $acrylic.style.display = 'block';
              clearTimeout(vv);
            }, 20);
          });
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Acrylic, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        var self = this;

        // not capturing this element
        self.showHideElement();

        // capturing body
        var init = function init(firstTime) {
          (0, _html2canvas2.default)(document.body, {
            onrendered: function onrendered(canvas) {
              self.canvas = canvas;

              self.blurEl.appendChild(self.canvas);

              canvas.style.position = 'absolute';
              var clientRect = canvas.getBoundingClientRect();

              canvas.style.top = -clientRect.top + window.scrollY + 'px';
              canvas.style.left = -clientRect.left + window.scrollX + 'px';
              self.canvas.style.transform = 'translate(-' + window.scrollX + 'px, -' + window.scrollY + 'px)';
              if (firstTime) {}

              // blurring body
              _stackblurCanvas2.default.canvasRGB(canvas, 0, 0, canvas.width, canvas.height, self.props.blur);
            }
          });
        };

        init(true);

        window.addEventListener('scroll', function () {
          if (_this2.props.position === 'fixed') {
            self.canvas.style.transform = 'translate(-' + window.scrollX + 'px, -' + window.scrollY + 'px)';
          }
        });

        window.addEventListener('resize', (0, _debounce2.default)(function () {
          // console.log(self.canvas.width) 
          _this2.blurEl.innerHTML = '';
          setTimeout(function () {
            _this2.showHideElement();
            init();
          }, 10);
          _this2.canvas.width = window.innerWidth;
          // self.canvas.height = window.innerHeight
        }, 100));
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        return _react2.default.createElement(
          'span',
          {
            className: 'js-acrylic'
          },
          _react2.default.createElement(
            'span',
            {
              ref: function ref(el) {
                return _this3.contentEl = el;
              },
              style: {

                position: this.props.position,
                left: this.props.left,
                top: this.props.top,
                height: this.props.height,
                width: this.props.width,

                borderRadius: this.props.borderRadius,
                boxShadow: this.props.boxShadow,

                zIndex: 2
              }
            },
            _react2.default.createElement('span', {
              style: {
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background: this.props.colorOverlay,
                opacity: this.props.opacity,
                content: '',
                zIndex: -1
              }
            }),
            _react2.default.createElement('span', {
              style: {
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background: 'url(' + _imgNoise2.default + ')',
                opacity: this.props.opacity / 3,
                content: '',
                zIndex: -2
              }
            }),
            this.props.children
          ),
          _react2.default.createElement('span', {
            style: {

              position: this.props.position,
              left: this.props.left,
              top: this.props.top,
              height: this.props.height,
              width: this.props.width,

              borderRadius: this.props.borderRadius,
              boxShadow: this.props.boxShadow,

              zIndex: 1,

              overflow: 'hidden'
            },
            ref: function ref(el) {
              return _this3.blurEl = el;
            }
          })
        );
      }
    }]);

    return Acrylic;
  }(_react.Component);

  Acrylic.defaultProps = {
    blur: 30,

    position: 'fixed',
    left: 0,
    top: 0,
    width: 0,
    height: 0,

    colorOverlay: '#fff',
    opacity: 0.5,

    borderRadius: 0,
    boxShadow: null
  };

  Acrylic.propTypes = {
    theme: _propTypes2.default.string,
    blur: _propTypes2.default.number
  };

  exports.default = Acrylic;
});