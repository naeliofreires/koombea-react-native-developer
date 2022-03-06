import React, {useEffect, useMemo} from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {ThemeProvider} from 'styled-components/native';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {store, persistor} from '~/redux/store';
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
      <ThemeProvider theme={DefaultTheme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <StoreProvider>
              <AppNavigator />
            </StoreProvider>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
