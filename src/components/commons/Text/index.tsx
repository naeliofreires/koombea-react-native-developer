import React, {useMemo} from 'react';
import {Text as ReactNativeText} from 'react-native';

import {useTheme} from '~/theme';
import {TextProps} from '~/components/commons/Text/types';
import {TEXT_STYLES} from '~/components/commons/Text/styles';

export const Text: React.FC<TextProps> = ({
  typography,
  color,
  value,
  transform,
  fontSize,
  styles,
  alignment = 'auto',
  children,
  ...rest
}) => {
  const palette = useTheme().palette;

  const fontFamily = TEXT_STYLES[typography] || TEXT_STYLES.primaryFont;

  const _color = useMemo(
    () => (palette as Record<string, string>)[color],
    [color, palette],
  );

  const _styles = useMemo(
    () => ({
      ...fontFamily,
      fontSize: fontSize || fontFamily.fontSize,
      color: _color || color,
      textAlign: alignment,
      textTransform: transform,
      ...styles,
    }),
    [_color, alignment, color, fontFamily, fontSize, styles, transform],
  );

  return (
    <ReactNativeText style={{..._styles}} {...rest}>
      {value}
      {React.isValidElement(children) && children}
    </ReactNativeText>
  );
};
