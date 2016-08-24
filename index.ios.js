/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SwipeCards from 'react-native-swipe-cards';
import Tinder from './Tinder.js'
import { Router, Scene } from 'react-native-router-flux';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class CardsMobile extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} hideNavBar={true} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" hideNavBar={true}/>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#671fab',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CardsMobile', () => CardsMobile);
