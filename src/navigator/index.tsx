import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from '~/routes';

export const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
);
