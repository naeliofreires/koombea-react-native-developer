import {StyleSheet, TextStyle} from 'react-native';

export type FONTS =
  | 'primary'
  | 'secondary'
  | 'tertiaryFont'
  | 'quartenaryFont'
  | 'onboarding'
  | 'description'
  | 'cardTitle';

export const TEXT_STYLES = StyleSheet.create({
  primary: {
    fontSize: 34,
    lineHeight: 41,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
  },
  secondary: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    fontStyle: 'normal',
  },
  tertiaryFont: {
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  quartenaryFont: {
    fontSize: 14,
    fontFamily: 'Roboto',
  },
  description: {
    fontSize: 14,
    lineHeight: 27,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },
  onboarding: {
    fontSize: 25,
    lineHeight: 29.3,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  cardTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    fontStyle: 'normal',
  },
} as StyleSheet.NamedStyles<Record<FONTS, TextStyle>>);
