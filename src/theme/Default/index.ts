import {Platform} from 'react-native';
import IDefaultTheme from '~/@types/styled-components/native';
Platform.OS === 'ios';
export default {
  palette: {
    primaryColor: '#007AFF',
    secondaryColor: '#003C7E',
    tertiaryColor: '#E5E5E5',
    quartenaryColor: '#FFFFFF',

    primaryText: '#F5F5F5',
    secondaryText: '#000000',
    tertiaryText: '#404040',
    quartenaryText: '#979797',
  },
  units: {
    none: 0,
    half: 8,
    base: 16,
    double: 32,
  },

  platform: {
    ios: Platform.OS === 'ios',
    android: Platform.OS === 'android',
  },
} as IDefaultTheme;
