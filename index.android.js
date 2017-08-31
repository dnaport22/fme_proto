"user strict";
/**
 * Forbes middle east prototype
 */
 //Importing required components.
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

//Importing required views from ./app/views/ dir.
import ArticleSummary from './app/views/ArticleSummary';
import ArticleDetailed from './app/views/ArticleDetailed';
import Header from './app/views/Header';
import Main from './app/views/Main';
import Routing from './app/views/Routing';
import TabBar from './app/views/TabBar';

// For testing

import Test from './app/views/Test';
import Login from './app/views/Login';

AppRegistry.registerComponent('fme_proto', () => Routing);
