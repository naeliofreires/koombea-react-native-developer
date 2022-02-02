import {StyleSheet} from 'react-native';
import {styled, Theme} from '~/theme';

export const Styles = StyleSheet.create({
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

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 ${p => p.theme.units.base}px;
  background-color: ${p => p.theme.palette.primaryColor};
`;

export const ImageView = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.Image`
  width: 300px;
  height: 300px;
`;

export const TextView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-bottom: ${p => p.theme.units.double}px;
  padding-bottom: ${p => p.theme.units.double}px;
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
