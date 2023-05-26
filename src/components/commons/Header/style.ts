import {styled, css} from '~/theme';

export const Container = styled.View<{
  activeBorder?: boolean;
  background?: string;
  justifyContent:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'space-between';
}>`
  height: 80px;
  padding: ${p => p.theme.units.base}px;
  background-color: ${p => p.background || p.theme.palette.primaryColor};

  flex-direction: row;
  align-items: center;
  justify-content: ${p => p.justifyContent || 'flex-start'};

  ${p =>
    p.activeBorder &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${p.theme.palette.tertiaryColor};
    `}
`;

export const ChildView = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerIOS = styled(Container)`
  padding-left: 20px;
  flex-direction: column;
  align-items: flex-start;

  border-bottom-width: 1px;
  border-bottom-color: ${p => p.theme.palette.tertiaryColor};
`;
