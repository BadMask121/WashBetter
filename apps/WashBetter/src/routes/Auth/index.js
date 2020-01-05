import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Login, Signup} from '../../containers';
import Welcome from '../../components/screens/Welcome';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
