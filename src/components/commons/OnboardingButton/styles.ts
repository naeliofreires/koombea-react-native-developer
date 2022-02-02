import {styled} from '~/theme';

export const GoButton = styled.View`
  width: 56px;
  height: 56px;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  padding: ${p => p.theme.units.base}px;
  background-color: ${p => p.theme.palette.quartenaryColor};

  position: absolute;
  right: ${p => p.theme.units.base}px;
  bottom: ${p => p.theme.units.base}px;
`;

export const GoButtonViewIOS = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  padding: ${p => p.theme.units.base}px;
  background-color: ${p => p.theme.palette.quartenaryColor};
`;
