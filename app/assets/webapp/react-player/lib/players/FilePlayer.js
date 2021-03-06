'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base2 = require('./Base');

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AUDIO_EXTENSIONS = /\.(mp3|wav|m4a)($|\?)/i;

var FilePlayer = function (_Base) {
  _inherits(FilePlayer, _Base);

  function FilePlayer() {
    _classCallCheck(this, FilePlayer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FilePlayer).apply(this, arguments));
  }

  _createClass(FilePlayer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.player = this.refs.player;
      this.player.oncanplay = this.onReady;
      this.player.onplay = this.onPlay;
      this.player.onpause = function () {
        return _this2.props.onPause();
      };
      this.player.onended = function () {
        return _this2.props.onEnded();
      };
      this.player.onerror = function (e) {
        return _this2.props.onError(e);
      };
      this.player.setAttribute('webkit-playsinline', '');
      _get(Object.getPrototypeOf(FilePlayer.prototype), 'componentDidMount', this).call(this);
    }
  }, {
    key: 'load',
    value: function load(url) {
      this.player.src = url;
    }
  }, {
    key: 'play',
    value: function play() {
      this.player.play();
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.player.pause();
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.pause();
      this.player.removeAttribute('src');
    }
  }, {
    key: 'seekTo',
    value: function seekTo(fraction) {
      _get(Object.getPrototypeOf(FilePlayer.prototype), 'seekTo', this).call(this, fraction);
      this.player.currentTime = this.getDuration() * fraction;
    }
  }, {
    key: 'setVolume',
    value: function setVolume(fraction) {
      this.player.volume = fraction;
    }
  }, {
    key: 'getDuration',
    value: function getDuration() {
      if (!this.isReady) return null;
      return this.player.duration;
    }
  }, {
    key: 'getFractionPlayed',
    value: function getFractionPlayed() {
      if (!this.isReady) return null;
      return this.player.currentTime / this.getDuration();
    }
  }, {
    key: 'getFractionLoaded',
    value: function getFractionLoaded() {
      if (!this.isReady || this.player.buffered.length === 0) return null;
      return this.player.buffered.end(0) / this.getDuration();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var loop = _props.loop;
      var controls = _props.controls;
      var fileConfig = _props.fileConfig;

      var Media = AUDIO_EXTENSIONS.test(this.props.url) ? 'audio' : 'video';
      var style = {
        width: '100%',
        height: '100%',
        display: this.props.url ? 'block' : 'none'
      };
      return _react2['default'].createElement(Media, _extends({
        ref: 'player',
        style: style,
        preload: 'auto',
        controls: controls,
        loop: loop
      }, fileConfig.attributes));
    }
  }], [{
    key: 'canPlay',
    value: function canPlay(url) {
      return true;
    }
  }]);

  return FilePlayer;
}(_Base3['default']);

FilePlayer.displayName = 'FilePlayer';
exports['default'] = FilePlayer;
module.exports = exports['default'];