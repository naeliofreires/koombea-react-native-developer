import React from 'react';
import {observer} from 'mobx-react-lite';

import {Text} from '~/components/commons/Text';
import {BaseButton} from '~/components/commons/BaseButton';

import * as S from './styles';
import {OnboardingButtonProps} from './types';

export const OnboardingButtonIOS = observer(
  ({onClose}: OnboardingButtonProps) => {
    return (
      <S.GoButtonViewIOS>
        <BaseButton onPress={onClose}>
          <Text
            value={"Let's Go"}
            color={'primaryColor'}
            typography={'primaryFont'}
          />
        </BaseButton>
      </S.GoButtonViewIOS>
    );
  },
);
