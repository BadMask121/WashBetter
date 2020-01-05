import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import AppNavigation from './App';
import AuthNavigation from './Auth';
const Navigation = createSharedElementStackNavigator(
  createSwitchNavigator,
  {
    App: AppNavigation,
    Auth: AuthNavigation(),
  },
  {
    initialRouteName: 'App',
  },
);

export default createAppContainer(Navigation);
