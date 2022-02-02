import {StyleSheet, TextStyle} from 'react-native';

export type FONTS =
  | 'primaryFont'
  | 'secondaryFont'
  | 'tertiaryFont'
  | 'quartenaryFont'
  | 'descriptionFront';

export const TEXT_STYLES = StyleSheet.create({
  primaryFont: {
    fontSize: 20,
  },
  secondaryFont: {
    fontSize: 18,
  },
  tertiaryFont: {
    fontSize: 16,
  },
  quartenaryFont: {
    fontSize: 14,
  },
  descriptionFront: {
    fontSize: 14,
    lineHeight: 27,
    fontWeight: '400',
  },
} as StyleSheet.NamedStyles<Record<FONTS, TextStyle>>);
