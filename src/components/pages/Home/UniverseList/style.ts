import {styled} from '~/theme';

export const ScrollContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  max-height: 70px;
  padding: ${p => p.theme.units.base}px 0;
`;

export const FeedbackErrorBox = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${p => p.theme.palette.tertiaryColor};
  width: 100%;

  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.units.base}px;
`;
