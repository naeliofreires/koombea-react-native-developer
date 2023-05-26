import {styled} from '~/theme';
import {Image} from '~/components/commons/Image';

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${p => p.theme.palette.tertiaryColor};
  padding: ${p => p.theme.units.base}px 22px ${p => p.theme.units.base}px 13px;
`;

export const InformationView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-left: 13px;
`;

export const View = styled.View`
  height: 60px;
  flex-direction: column;
`;

export const Img = styled(Image).attrs({
  width: 73,
  height: 73,
})``;
