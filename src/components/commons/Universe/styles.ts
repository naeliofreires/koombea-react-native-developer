import {styled} from '~/theme';

export const Container = styled.TouchableOpacity<{
  first: boolean;
  selected: boolean;
}>`
  height: 40px;
  min-width: 74px;

  border-radius: 3px;
  align-items: center;
  justify-content: center;

  margin-left: ${p => (p.first ? 12 : 10)}px;
  padding: ${p => p.theme.units.half}px ${p => p.theme.units.base}px;

  background-color: ${({selected, theme}) =>
    selected ? theme.palette.secondaryColor : theme.palette.primaryColor};
`;
