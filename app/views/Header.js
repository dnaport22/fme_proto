"use strict";
/**
 * Creates toolbar/header.
 */
//Importing required components.
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

// External library for material design http://react-native-material-design.github.io/
import {Toolbar, THEME_NAME} from 'react-native-material-design';
//External vector icon library https://github.com/oblador/react-native-vector-icons
import Icon from 'react-native-vector-icons/MaterialIcons';

import ArticleSummary from './ArticleSummary';

export default class Header extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{paddingBottom:60}}>
        <Toolbar
          title={this.props.header}
          theme="dark"
          primary="paperDeepPurple"
          icon={this.getIcon()}
          onIconPress={() => this.navigationBackandFourth()}
        />
      </View>

    );
  }

  /**
   * @return vector-icon
   */
  getIcon() {
    if(this.props.header == "Forbes") {
      return
    }
    return "arrow-back"
  }

  /**
   * @return navigator.push() previous view
   */
  navigationBackandFourth() {
    if(this.props.header == "Forbes") {
      return
    }
    return this.props.navigator.pop()
  }
}
