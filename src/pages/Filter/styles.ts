import {styled} from '~/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${p => p.theme.palette.tertiaryColor};
`;

export const BackButtonView = styled.View`
  padding-right: ${p => p.theme.units.double}px;
`;

export const SortByView = styled.View`
  padding-top: ${p => p.theme.units.base}px;
  padding-left: ${p => p.theme.units.base}px;
  background-color: ${p => p.theme.palette.quartenaryColor};

  margin-bottom: ${p => p.theme.units.double}px;
`;

export const FilterByView = styled.View`
  min-height: 140px;

  padding-top: ${p => p.theme.units.base}px;
  padding-left: ${p => p.theme.units.base}px;
  background-color: ${p => p.theme.palette.quartenaryColor};
`;

export const RatingView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.units.base}px 0;
`;

export const ActionsView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  bottom: 0;
  width: 100%;
  position: absolute;
  align-items: center;
  padding: ${p => p.theme.units.double}px;
`;

export const ButtonView = styled.TouchableOpacity`
  flex: 1;
  margin: 0 ${p => p.theme.units.base}px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: ${p => p.theme.units.base}px;
  background-color: ${p => p.theme.palette.quartenaryColor};
`;
