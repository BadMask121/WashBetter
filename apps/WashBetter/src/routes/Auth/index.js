import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import Welcome from '../../components/screens/Welcome';
import {Login, Signup, FindWashers, PreviewWasher} from '../../containers';
const index = values =>
  createStackNavigator(
    {
      Welcome: {
        screen: props => <Welcome {...props} {...values} />,
        navigationOptions: ({navigation}) => ({
          headerShown: false,
        }),
      },
      Login: {
        screen: props => <Login {...props} {...values} />,
      },
      Signup: {
        screen: props => <Signup {...props} {...values} />,
      },
      FindWashers: {
        screen: props => <FindWashers {...props} {...values} />,
      },
      PreviewWasher: {
        screen: props => <PreviewWasher {...props} {...values} />,
      },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0,
        },
        headerTintColor: 'gray',
        headerBackTitle: null,
        headerTitle: () => null,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
      initialRouteName: 'Welcome',
    },
  );

export default index;
