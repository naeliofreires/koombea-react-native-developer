import {StyleSheet, TextStyle} from 'react-native';

export type FONTS =
  | 'primaryFont'
  | 'secondaryFont'
  | 'tertiaryFont'
  | 'quartenaryFont'
  | 'onboarding'
  | 'descriptionFront';

export const TEXT_STYLES = StyleSheet.create({
  primaryFont: {
    fontSize: 20,
    fontFamily: 'Roboto',
  },
  secondaryFont: {
    fontSize: 18,
    fontFamily: 'Roboto',
  },
  tertiaryFont: {
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  quartenaryFont: {
    fontSize: 14,
    fontFamily: 'Roboto',
  },
  descriptionFront: {
    fontSize: 14,
    lineHeight: 27,
    fontWeight: '400',
    fontFamily: 'Roboto',
  },
  onboarding: {
    fontSize: 25,
    lineHeight: 29.3,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
} as StyleSheet.NamedStyles<Record<FONTS, TextStyle>>);
