import React, {useEffect, useMemo} from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {ThemeProvider} from 'styled-components/native';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {store} from '~/redux/store';
import {AppNavigator} from '~/navigator';
import DefaultTheme from '~/theme/Default';
import {StoreProvider} from './store/Provider';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const style = useMemo(() => ({flex: 1}), []);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={style}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
        <ThemeProvider theme={DefaultTheme}>
          <StoreProvider>
            <AppNavigator />
          </StoreProvider>
        </ThemeProvider>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
