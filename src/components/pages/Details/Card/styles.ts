import {styled} from '~/theme';
import {Image} from '~/components/commons/Image';

export const Img = styled(Image).attrs({
  width: 160,
  height: 160,
})``;

export const Card = styled.View`
  max-width: 100%;
  flex-direction: row;
  align-items: center;
  padding: ${p => p.theme.units.base}px;
`;

export const CardView = styled.View<{align?: 'flex-start' | 'flex-end'}>`
  overflow: hidden;
  flex: 1;
  justify-content: space-around;
  align-items: ${p => p.align ?? 'flex-start'};
`;

export const DownloadsView = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
  padding: ${p => p.theme.units.base}px 0;
`;

export const PriceView = styled.View`
  min-width: 80px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.units.base}px;
  padding: ${p => p.theme.units.half}px;
  background-color: ${p => p.theme.palette.primaryColor};

  margin-bottom: ${p => p.theme.units.double}px;
`;
