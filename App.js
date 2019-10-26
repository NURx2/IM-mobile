import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageChoise from './src/pages/ImageChoisePage/ImageChoise'
import MusicShower from './src/pages/MusicShowerPage/MusicShower'

import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'


const AppNavigator = createStackNavigator({
    Chooser: {
        screen: ImageChoise
    },
    Shower: {
        screen: MusicShower
    }
},{
    initialRouteName: "Chooser",
    defaultNavigationOptions: {
      headerStyle: {
        display: "none"
      },
    }
});

let AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
