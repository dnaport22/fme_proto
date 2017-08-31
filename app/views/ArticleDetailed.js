"use strict";
/**
 * Creates view to display summary of news articles.
 */
//Importing required components.
import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  WebView
} from 'react-native';

//Importing required views from ./app/views/ dir.
import {Avatar, Button, Card, Divider} from 'react-native-material-design';
import {getNews} from './../controllers/Feed';
let Video = require('react-native-video').default;

export default class ArticleDetailed extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    /**
     * Creates a static HTML container for <video></video> tag.
     * @var videoWrapper
     */
    let videoWrapper = '<html><head><style>' +
        '.videoContainer{position:absolute;height:100% !important;width:100% !important;overflow: hidden !important;}.videoContainer video {min-width: 100%;min-height: 100%;}' +
        '</style></head>' +
        '<body>' +
        "<div class=videoContainer>" + this.props.video + "</div>"
        '</body>' +
        '</html>'
    let videoComponent;
    // Enabling videoComponent if there is any video in the content.
    if(this.props.video) {
      videoComponent = <Card.Media
        image={<WebView
          source={{html: videoWrapper}}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          startInLoadingState={true}
          automaticallyAdjustContentInsets={false}
          scalesPageToFit={true}/>}
        overlay
      />
    }

    return(
        <ScrollView>
          <Card>
            <Card.Media
              image={<Image source={{uri: this.props.image}} />}
              overlay
            />
            <Card.Body>
              <Text style={styles.title}>{ this.props.title }</Text>
            </Card.Body>
            <Divider />
            <Card.Body>
              <Text style={styles.cardFooterDate}>{this.props.date} | {this.props.category}</Text>
            </Card.Body>
            <Divider />
            <Card.Body>
              <Text style={styles.cardFooterDate}>{this.props.body}</Text>
            </Card.Body>
            {videoComponent}
          </Card>

        </ScrollView>
    )
  }
}

/**
 * Implements react native StyleSheet component.
 */
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black'
  },
  cardFoooterDate: {
    fontSize: 10
  },
  cardFoooterCat: {
    fontSize: 10
  }
});
