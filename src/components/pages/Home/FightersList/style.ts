import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import {styled} from '~/theme';

export const Styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export const Container = styled.View`
  flex: 1;
`;

export const FeedbackView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const GhostBox = styled.View`
  padding: ${p => p.theme.units.base}px;
`;

export const Image = styled(FastImage)`
  width: 200px;
  height: 200px;
`;
