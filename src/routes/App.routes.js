import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import AppNavigation from './App';
import AuthNavigation from './Auth';
const Navigation = createSwitchNavigator(
  {
    App: AppNavigation,
    Auth: AuthNavigation,
  },
  {
    initialRouteName: 'App',
  },
);

export default createAppContainer(Navigation);
