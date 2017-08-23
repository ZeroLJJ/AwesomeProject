/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
//以下HomeScreen可以与'./ui/Main'中默认导出的名字不一致，因为是export default
import HomeScreen from "./ui/Main";
import LoginSuccessScreen from "./ui/LoginSuccess";

const App = StackNavigator({
  Home: { screen: HomeScreen },
  LoginSuccess: { screen: LoginSuccessScreen }
});

export default App;