import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { TabNavigator } from './BottomTab';
import  Sidebar  from './Sidebar';
import SettingScreen from '../screens/SettingScreen';


export const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: TabNavigator
    },
    Setting: {
        screen: SettingScreen
    }
    },
    {
        contentComponent: Sidebar
    },
    {
        initialRouteName: "Home"                                                              
    }
)
