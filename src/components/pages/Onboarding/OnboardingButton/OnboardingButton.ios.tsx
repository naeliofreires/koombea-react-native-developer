import React from 'react';

import {Text} from '~/components/commons/Text';
import {BaseButton} from '~/components/commons/BaseButton';

import * as S from './styles';
import {OnboardingButtonProps} from './types';

export const OnboardingButtonIOS = React.memo(
  ({onClose}: OnboardingButtonProps) => {
    return (
      <S.GoButtonViewIOS>
        <BaseButton onPress={onClose}>
          <Text
            value={"Let's Go"}
            color={'primaryColor'}
            typography={'primary'}
          />
        </BaseButton>
      </S.GoButtonViewIOS>
    );
  },
);
