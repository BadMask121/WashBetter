import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {SplashScreen} from '../../components/screens';
import {createAppContainer} from 'react-navigation';

const Navigator = createSharedElementStackNavigator(
  createStackNavigator,
  {
    SplashScreen: {
      screen: props => <SplashScreen {...props} />,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'SplashScreen',
  },
);
export default createAppContainer(Navigator);
