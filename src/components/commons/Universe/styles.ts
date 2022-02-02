import {styled} from '~/theme';

export const Container = styled.TouchableOpacity<{selected: boolean}>`
  height: 40px;
  min-width: 70px;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.units.half}px;
  margin: 0 ${p => p.theme.units.half}px;
  background-color: ${({selected, theme}) =>
    selected ? theme.palette.secondaryColor : theme.palette.primaryColor};
`;
