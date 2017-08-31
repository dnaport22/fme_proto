"use strict";
/**
 * Creates toolbar/header.
 */
//Importing required components.
import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

// External library for material design http://react-native-material-design.github.io/
import {Toolbar, THEME_NAME, Subheader} from 'react-native-material-design';
// External library https://github.com/skv-headless/react-native-scrollable-tab-view
var ScrollableTabView = require('react-native-scrollable-tab-view');
// Improting required views.
import ArticleSummary from  './ArticleSummary';

export default class TabBar extends Component{
  constructor(props) {
    super(props)
  }
  render() {

    return(
      <ScrollableTabView>
        <View tabLabel="Top Stories" style={styles.list}>
          <ArticleSummary tabProps={this.props} viewType="all-articles"/>
        </View>
        <View tabLabel="Music" style={styles.list}>
          <ArticleSummary tabProps={this.props} viewType="music-articles"/>
        </View>
        <View tabLabel="Lifestyle" style={styles.list}>
          <ArticleSummary tabProps={this.props} viewType="lifestyle-articles"/>
        </View>
        <View tabLabel="Travel" style={styles.list}>
          <ArticleSummary tabProps={this.props} viewType="travel-articles"/>
        </View>
      </ScrollableTabView>
    );
  };
}

let styles = StyleSheet.create({
  list: {
    flex: 1
  }
})
