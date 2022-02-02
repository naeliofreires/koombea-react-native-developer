import React from 'react';
import {observer} from 'mobx-react-lite';
import Ant from 'react-native-vector-icons/AntDesign';

import {useTheme} from '~/theme';
import {BaseButton} from '~/components/commons/BaseButton';

import * as S from './styles';
import {OnboardingButtonProps} from './types';

export const OnboardingButtonAndroid = observer(
  ({onClose}: OnboardingButtonProps) => {
    const palette = useTheme().palette;

    return (
      <S.GoButton>
        <BaseButton onPress={onClose}>
          <Ant name={'arrowright'} color={palette.primaryColor} size={22} />
        </BaseButton>
      </S.GoButton>
    );
  },
);
