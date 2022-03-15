import {StyleSheet, TextStyle} from 'react-native';

export type FONTS =
  | 'primaryFont'
  | 'secondaryFont'
  | 'tertiaryFont'
  | 'quartenaryFont'
  | 'onboarding'
  | 'descriptionFront'
  | 'cardTitle'
  | 'secondary';

export const TEXT_STYLES = StyleSheet.create({
  primaryFont: {
    fontSize: 20,
    fontFamily: 'Roboto',
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
  cardTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    fontStyle: 'normal',
  },
} as StyleSheet.NamedStyles<Record<FONTS, TextStyle>>);
