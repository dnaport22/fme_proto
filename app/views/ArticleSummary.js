"use strict";
/**
 * Creates view to display summary of news articles.
 */
//Importing required components.
import React, {Component} from 'react';
import {
  Image,
  ListView,
  RefreshControl,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

//Importing required controller from ./app/controllers/ dir.
import {getNews} from './../controllers/Feed';
// External library for material design http://react-native-material-design.github.io/
import {Avatar, Button, Card, Divider} from 'react-native-material-design';
//External vector icon library https://github.com/oblador/react-native-vector-icons
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ArticleSummary extends Component {
  constructor(props) {
    super(props);
    // This is to compare if the data in the list view and json array
    // has any changes.
    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = ({
      newsFeeds: dataSource,
      refreshing: false,
      animating: true,
    });

    //Initialising news feeds
    this.getNewsData();
  }

  /**
   * Description: Implements the list Component including Pull to refresh component.
   * @return jsx
   */
  render() {
    const {newsFeeds} = this.state
    return(
        <ListView
          dataSource={newsFeeds}
          renderRow={this.renderRow.bind(this)}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.getNewsData.bind(this)}
            />
          }
        />

    );
  }

  /**
   * Description: Renders the feed data inside Card UI component. The Card UI
   * component is rendered inside the TouchableOpacity component.
   * @return jsx
   */
  renderRow(feed) {
    return(
      <TouchableOpacity onPress={this.navigate.bind(this, feed.title, feed.image, feed.body, feed.date, feed.category, feed.video)}>
        <Card>
          <Card.Media
            image={<Image source={{uri: feed.image }} />}
            overlay
          />
          <Card.Body>
            <Text style={styles.title}>{ feed.title }</Text>
          </Card.Body>
          <Divider />
          <Card.Body>
            <Text style={styles.cardFooterDate}>{feed.date} | {feed.category}</Text>
          </Card.Body>
        </Card>
      </TouchableOpacity>

    );
  }

  /**
   * @return array this.state.dataSource
   */
   getNewsData() {
     return getNews(this.getUrl())
      .then((response) => {
        this.setState({
          newsFeeds: this.state.newsFeeds.cloneWithRows(response)
        });
      });
   }

   /**
    * @return url
    */
    getUrl() {
      switch(this.props.viewType) {
        case "all-articles":
          return "http://dev-flare-cms.pantheonsite.io/get-news";
          break;
        case "music-articles":
          return "http://dev-flare-cms.pantheonsite.io/music-articles";
          break;
        case "lifestyle-articles":
          return "http://dev-flare-cms.pantheonsite.io/lifestyle-articles";
          break;
        case "travel-articles":
          return "http://dev-flare-cms.pantheonsite.io/travel-articles";
          break;
      }
    }

   /**
    * Description: Called onPress event to change view.
    * @return view
    */
   navigate(title, image, body, date, category, video) {
     this.props.tabProps.mainProps.navigator.push({
       view: 'ArticleDetailed',
       passProps: {
         title: title,
         image: image,
         body: body,
         date: date,
         category: category,
         video: video,
         header: this.getRouteHeader(category),
       }
     });
   }

   /**
    * @param string category
    * @return string
    */
   getRouteHeader(category) {
     switch(category) {
       case "Lifestyle":
         return "Lifestyle";
         break;
       case "Music":
         return "Music";
         break;
       case "Travel":
         return "Travel";
         break;
     }
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
