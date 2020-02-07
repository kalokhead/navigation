
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from'./homeScreen';
import SecondScreen from './secondScreen';

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Second: { screen: SecondScreen },

  },
  { initialRouteName: 'Home' }

);


const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }

}