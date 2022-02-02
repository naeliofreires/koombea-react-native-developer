import {styled} from '~/theme';

export const Container = styled.TouchableOpacity<{last?: boolean}>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: ${p => p.theme.units.base}px;

  border-bottom-color: rgba(0, 0, 0, 0.12);
  border-bottom-width: ${p => (p.last ? 0 : 1)}px;
`;

export const Bullet = styled.View<{selected: boolean}>`
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: ${p => p.theme.units.base}px;
  border-color: ${p =>
    p.selected ? p.theme.palette.primaryColor : p.theme.palette.quartenaryText};
`;

export const InnerBullet = styled.View<{selected: boolean}>`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${p =>
    p.selected ? p.theme.palette.primaryColor : 'transparent'};
`;
