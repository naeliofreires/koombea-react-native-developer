import React from 'react';
import {Text} from '~/components/commons/Text';

import * as S from './style';
import {OnboardingImage} from './types';

export const ImageViewAndroid: React.FC<OnboardingImage> = React.memo(
  ({source, text, children}) => {
    return (
      <S.Container>
        <S.ImageContainer>
          <S.Img
            source={source}
            resizeMode={'contain'}
            resizeMethod={'resize'}
          />

          <S.TextView>
            <Text
              value={text}
              alignment={'center'}
              color={'primaryText'}
              typography={'onboarding'}
            />
          </S.TextView>
        </S.ImageContainer>

        {children}
      </S.Container>
    );
  },
);
