"user strict";
/**
 * Creates main view.
 */
//Importing required components.
import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';

//Importing required views from ./app/views/ dir.
import ArticleSummary from './ArticleSummary';
import Header from './Header';
import TabBar from './TabBar';


// External library https://github.com/skv-headless/react-native-scrollable-tab-view
var ScrollableTabView = require('react-native-scrollable-tab-view');

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{flex:1}}>
        <TabBar mainProps={this.props}/>
      </View>
    )
  }

}
