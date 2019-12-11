import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {SplashScreen} from '../../components/screens';
const index = values =>
  createStackNavigator(
    {
      SplashScreen: {
        screen: props => <SplashScreen {...props} {...values} />,
      },
    },
    {
      initialRouteName: 'SplashScreen',
    },
  );

export default index;
