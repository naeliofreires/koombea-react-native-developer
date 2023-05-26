import {StyleSheet} from 'react-native';
import {styled, Theme, css} from '~/theme';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  align-items: center;
  background-color: ${p => p.theme.palette.primaryColor};
`;

export const GoButton = styled.View`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  padding: ${p => p.theme.units.base}px;
  background-color: ${p => p.theme.palette.quartenaryColor};

  position: absolute;
  right: ${p => p.theme.units.base}px;
  bottom: ${p => p.theme.units.base}px;
`;

export const PaginationView = styled.View`
  ${({theme}) =>
    theme.platform.android &&
    css`
      padding-bottom: 25px;
    `}
`;
export const PaginatonStyles = StyleSheet.create({
  dots: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: Theme.palette.secondaryColor,
  },
  inactiveDot: {
    backgroundColor: Theme.palette.primaryText,
  },
});
