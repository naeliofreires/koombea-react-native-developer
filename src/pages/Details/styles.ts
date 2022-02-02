import {styled} from '~/theme';
import {Image} from '~/components/commons/Image';

export const Container = styled.View`
  flex: 1;

  background-color: ${p => p.theme.palette.quartenaryColor};
`;

export const Img = styled(Image).attrs({
  width: 160,
  height: 160,
})``;

export const BackButtonView = styled.View`
  padding-right: ${p => p.theme.units.double}px;
`;

export const Card = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 ${p => p.theme.units.base}px;
`;

export const CardView = styled.View`
  flex: 1;
`;

export const DescriptionBox = styled.View`
  padding: 0 ${p => p.theme.units.base}px;
`;
