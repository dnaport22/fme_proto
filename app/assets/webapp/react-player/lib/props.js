'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _react = require('react');

var propTypes = exports.propTypes = {
  url: _react.PropTypes.string,
  playing: _react.PropTypes.bool,
  loop: _react.PropTypes.bool,
  controls: _react.PropTypes.bool,
  volume: _react.PropTypes.number,
  width: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,
  progressFrequency: _react.PropTypes.number,
  soundcloudConfig: _react.PropTypes.shape({
    clientId: _react.PropTypes.string
  }),
  youtubeConfig: _react.PropTypes.shape({
    playerVars: _react.PropTypes.object,
    preload: _react.PropTypes.bool
  }),
  vimeoConfig: _react.PropTypes.shape({
    iframeParams: _react.PropTypes.object,
    preload: _react.PropTypes.bool
  }),
  fileConfig: _react.PropTypes.shape({
    attributes: _react.PropTypes.object
  }),
  onStart: _react.PropTypes.func,
  onPlay: _react.PropTypes.func,
  onPause: _react.PropTypes.func,
  onBuffer: _react.PropTypes.func,
  onEnded: _react.PropTypes.func,
  onError: _react.PropTypes.func,
  onDuration: _react.PropTypes.func,
  onProgress: _react.PropTypes.func
};

var defaultProps = exports.defaultProps = {
  playing: false,
  loop: false,
  controls: false,
  volume: 0.8,
  width: 640,
  height: 360,
  progressFrequency: 1000,
  soundcloudConfig: {
    clientId: 'e8b6f84fbcad14c301ca1355cae1dea2'
  },
  youtubeConfig: {
    playerVars: {},
    preload: false
  },
  vimeoConfig: {
    iframeParams: {},
    preload: false
  },
  fileConfig: {
    attributes: {}
  },
  onStart: function onStart() {},
  onPlay: function onPlay() {},
  onPause: function onPause() {},
  onBuffer: function onBuffer() {},
  onEnded: function onEnded() {},
  onError: function onError() {},
  onDuration: function onDuration() {},
  onProgress: function onProgress() {}
};