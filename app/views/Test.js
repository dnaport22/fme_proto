'use strict';

import React, {
  Component
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  WebView,
} from 'react-native';

import Video from 'react-native-video';

export default class Test extends Component {

  render() {

    return (
      <WebView
        source={require('./../assets/webapp/index.html')}
        style={{marginTop: 20}}
        domStorageEnabled={true}
        javaScriptEnabled={true}
        startInLoadingState={true}
        automaticallyAdjustContentInsets={false}
        scalesPageToFit={this.state.scalesPageToFit}
      />
    );
  }
}
