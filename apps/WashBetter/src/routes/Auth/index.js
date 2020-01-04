import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Login, Signup} from '../../containers';
import {createAppContainer} from 'react-navigation';
const index = values =>
  createStackNavigator(
    {
      Login: {
        screen: props => <Login {...props} {...values} />,
      },
      Signup: {
        screen: props => <Signup {...props} {...values} />,
      },
    },
    {
      headerMode: 'none',
      initialRouteName: 'Login',
    },
  );

export default index;
