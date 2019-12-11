import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {Login, Signup} from '../../containers';
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
      initialRouteName: 'Login',
    },
  );

export default index;
