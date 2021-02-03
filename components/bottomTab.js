import React from 'react';
import { Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import  HomeScreen  from '../screens/HomeScreen'
import ExchangeScreen  from '../screens/ExchangeScreen'

export const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "Home"
        }
    },
    Request: {
        screen: ExchangeScreen,
        navigationOptions: {
            tabBarLabel: "Exchange"
        }
    },
})