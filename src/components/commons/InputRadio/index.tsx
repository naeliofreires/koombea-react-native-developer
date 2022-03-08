import React, {useCallback} from 'react';
import {Text} from '~/components/commons/Text';

import * as S from './styles';
import {InputRadioProps as Props} from './types';

export const InputRadio = React.memo(
  ({onChange, title, value, selected, last}: Props) => {
    const onPress = useCallback(() => {
      onChange?.(value);
    }, [onChange, value]);

    return (
      <S.Container onPress={onPress} last={last}>
        <S.Bullet selected={selected}>
          <S.InnerBullet selected={selected} />
        </S.Bullet>

        <Text
          value={title || ''}
          color={'quartenaryText'}
          typography={'primaryFont'}
        />
      </S.Container>
    );
  },
);
