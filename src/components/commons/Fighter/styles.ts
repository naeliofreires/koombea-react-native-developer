import {styled} from '~/theme';
import {Image} from '~/components/commons/Image';

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: ${p => p.theme.units.base}px;

  border-bottom-width: 1px;
  border-bottom-color: ${p => p.theme.palette.tertiaryColor};
`;

export const InformationView = styled.View`
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: ${p => p.theme.units.base}px;
`;

export const View = styled.View`
  flex-direction: column;
`;

export const Img = styled(Image).attrs({
  width: 73,
  height: 73,
})``;
