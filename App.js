import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from "./screens/SignandLoginScreen";
import  { DrawerNavigator } from './components/DrawerNav';


import {createSwitchNavigator, createAppContainer} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return(
      <AppContainer />
    )
  }
}

const switchNavigator =  createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  TabNavigator: {screen: DrawerNavigator}
});

const AppContainer = createAppContainer(switchNavigator)