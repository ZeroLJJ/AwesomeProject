/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import Main from './ui/Main';
export default class navigator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let defaultName = 'Main';
    let defaultComponent = Main;
    return (
      <Navigator
        initialRoute={{ name: defaultName, component: defaultComponent }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
      />
    );
  }

};