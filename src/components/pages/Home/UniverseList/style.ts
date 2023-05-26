import {css, styled} from '~/theme';

export const ScrollContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  max-height: 70px;
  padding-top: 20px;
  padding-bottom: 4px;

  ${({theme}) =>
    theme.platform.ios &&
    css`
      padding-top: 17px;
      padding-bottom: 0;
    `};
`;

export const FeedbackErrorBox = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${p => p.theme.palette.tertiaryColor};
  width: 100%;

  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.units.base}px;
`;
