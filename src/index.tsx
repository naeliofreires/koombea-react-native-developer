import React, {useEffect, useMemo} from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {ThemeProvider} from 'styled-components/native';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {AppNavigator} from '~/navigator';
import DefaultTheme from '~/theme/Default';
import {persist, store} from '~/redux/store';

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
          <PersistGate loading={null} persistor={persist}>
            <AppNavigator />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
