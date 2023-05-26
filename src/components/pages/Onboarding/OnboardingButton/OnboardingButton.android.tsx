import React from 'react';
import Ant from 'react-native-vector-icons/AntDesign';

import {useTheme} from '~/theme';
import {BaseButton} from '~/components/commons/BaseButton';

import * as S from './styles';
import {OnboardingButtonProps} from './types';

export const OnboardingButtonAndroid = React.memo(
  ({onClose}: OnboardingButtonProps) => {
    const palette = useTheme().palette;

    return (
      <S.GoButton>
        <BaseButton onPress={onClose}>
          <Ant name={'arrowright'} color={palette.primaryColor} size={18} />
        </BaseButton>
      </S.GoButton>
    );
  },
);
