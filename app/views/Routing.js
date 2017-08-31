"user strict";
/**
 * Creates routing for the app.
 */
//Importing required components.
import React, { Component } from 'react';
import {
  View,
  Text,
  BackAndroid
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
//Importing required views from ./app/views/ dir.
import Main from './Main';
import ArticleDetailed from './ArticleDetailed';
import Header from './Header';
import Login from './Login';
import Register from './Register';

export default class Routing extends Component {
  constructor(props) {
    super(props)
  }

  /**
   * @param array route
   * @param object navigator
   *
   * @return view
   */
  navigatorRenderView(route, navigator) {
    _navigator = navigator;
    switch (route.view) {
      case 'ArticleDetailed':
        return (
          <View style={{flex:1}}>
            <Header navigator={navigator} {...route.passProps}/>
            <ArticleDetailed navigator={navigator} {...route.passProps}/>
          </View>
        )
      case 'Main':
        return (
          <View style={{flex:1}}>
            <Header navigator={navigator} {...route.passProps} />
            <Main navigator={navigator} {...route.passProps}/>
          </View>
        )
        case 'Login':
            return (
                <Login navigator={navigator}/>
            )
        case 'Register':
            return (
            <View style={{flex:1}}>
                <Header navigator={navigator} {...route.passProps} />
                <Register navigator={navigator}/>
            </View>
            )
    }
  }

  render() {
    return(
        <Navigator
          initialRoute={{
            view: 'Login'
          }}
          renderScene={this.navigatorRenderView.bind(this)}
        />
    )
  }
}

//Enabling hardware button for navigating to previous view.
BackAndroid.addEventListener('hardwareBackPress', function() {
   if (_navigator.getCurrentRoutes().length === 1) {
     return false;
   }
   _navigator.pop();
   return true;
 });
