import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '~/pages/Home';
import {Details} from '~/pages/Details';

import {PAGES, RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={PAGES.HOME}>
      <Stack.Screen
        name={PAGES.HOME}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={PAGES.DETAILS}
        component={Details}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
