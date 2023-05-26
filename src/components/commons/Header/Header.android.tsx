import React from 'react';

import {Text} from '~/components/commons/Text';
import {HeaderProps} from '~/components/commons/Header/types';

import * as S from './style';

export const HeaderAndroid = React.memo(
  ({
    title = 'Fighters',
    leftChild,
    rightChild,
    justifyContent = 'flex-start',
  }: HeaderProps) => {
    return (
      <S.Container justifyContent={justifyContent}>
        {React.isValidElement(leftChild) && leftChild}
        <Text value={title} color={'primaryText'} typography={'primary'} />
        {React.isValidElement(rightChild) && rightChild}
      </S.Container>
    );
  },
);
