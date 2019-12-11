import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {SplashScreen} from '../../components/screens';

export default createStackNavigator(
  {
    SplashScreen: {
      screen: props => <SplashScreen {...props} />,
    },
  },
  {
    initialRouteName: 'SplashScreen',
  },
);
