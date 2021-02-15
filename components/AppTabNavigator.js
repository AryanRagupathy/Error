import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookDonateScreen from '../screens/BookDonate';
import BookRequestScreen from '../screens/BookRequest';


export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks:{
        screen:BookDonateScreen,
        navigationOptions:{
            tabLabel:'Donate Books'
        }
    },
    BookRequest:{
        screen:BookRequestScreen,
        navigationOptions:{
            tabLabel:'Request Books'
        }
    }


})