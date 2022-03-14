import {styled, css} from '~/theme';

export const Container = styled.View`
  align-items: center;

  ${({theme}) =>
    theme.platform.android &&
    css`
      flex: 1;
    `};
`;

export const ImageContainer = styled.View`
  margin-top: 144px;

  ${({theme}) =>
    theme.platform.android &&
    css`
      flex: 1;
      height: 100%;
      margin-bottom: 30px;
      justify-content: space-between;
    `};
`;

export const Img = styled.Image`
  width: 300px;
  height: 300px;
`;

export const TextView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;

  ${({theme}) =>
    theme.platform.ios &&
    css`
      margin-top: 84px;
      margin-bottom: 60px;
    `};

  ${({theme}) => theme.platform.android && css``};
`;
