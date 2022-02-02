import React from 'react';

import {useTheme} from '~/theme';
import {Text} from '~/components/commons/Text';
import {HeaderProps} from '~/components/commons/Header/types';

import * as S from './style';
import {View} from 'react-native';

export const HeaderIOS = ({
  title = 'Fighters',
  leftChild,
  rightChild,
  justifyContent = 'flex-start',
}: HeaderProps) => {
  const palette = useTheme().palette;
  return (
    <S.ContainerIOS
      activeBorder
      justifyContent={justifyContent}
      background={palette.quartenaryColor}>
      <S.ChildView>
        <View>{React.isValidElement(leftChild) && leftChild}</View>

        <View>{React.isValidElement(rightChild) && rightChild}</View>
      </S.ChildView>

      <Text
        value={title}
        fontSize={26}
        color={'secondaryText'}
        typography={'primaryFont'}
      />
    </S.ContainerIOS>
  );
};
