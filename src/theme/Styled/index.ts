import * as styledComponents from 'styled-components/native';

import DefaultTheme from '~/@types/styled-components/native';

const {
  default: styled,
  css,
  ThemeProvider,
  useTheme,
} = styledComponents as unknown as styledComponents.ReactNativeThemedStyledComponentsModule<DefaultTheme>;

export {styled, css, ThemeProvider, useTheme};

export default styled;
