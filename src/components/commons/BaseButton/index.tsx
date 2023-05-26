import React, {FC} from 'react';

import * as S from './styles';
import {ButtonBaseProps} from './types';

export const BaseButton: FC<React.PropsWithChildren<ButtonBaseProps>> =
  React.memo(
    ({
      children,
      hitSlop,
      ...props
      /**
       * Rect accepts numeric pixel values to describe how far to extend a rectangular area.
       * These values are added to the original area's size to expand it.
       *
       *
       * @Attention
       * You must use this button when you have small buttons to click,
       * to pay attention if you have near button around of this component
       * with the same wrapper
       */
    }) => {
      const HIT_SLOP = {bottom: 20, left: 20, right: 20, top: 20};

      return (
        <S.Container>
          <S.Button
            {...props}
            accessibilityRole="button"
            hitSlop={hitSlop || HIT_SLOP}>
            {children}
          </S.Button>
        </S.Container>
      );
    },
  );
