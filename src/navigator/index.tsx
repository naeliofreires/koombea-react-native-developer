import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from '~/routes';

export const AppNavigator = () => (
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
);
