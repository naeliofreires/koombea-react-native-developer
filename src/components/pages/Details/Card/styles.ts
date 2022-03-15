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
  flex: 1;
  overflow: hidden;
  align-items: ${p => p.align ?? 'flex-start'};
`;

export const DownloadsView = styled.View`
  padding-top: 23px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PriceView = styled.View`
  min-width: 80px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.palette.primaryColor};

  margin-top: 23px;
  margin-bottom: 34px;
  padding: 6px ${p => p.theme.units.base}px 6px ${p => p.theme.units.base - 3}px;
`;
