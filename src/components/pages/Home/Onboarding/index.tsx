import React, {useCallback, useMemo, useState} from 'react';
import {useDispatch} from 'react-redux';
import {observer} from 'mobx-react-lite';
import {useWindowDimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {Text} from '~/components/commons/Text';
import {WARNS} from '~/redux/store/slices/global/types';
import {GlobalActions} from '~/redux/store/slices/global';
import {OnboardingButton} from '~/components/commons/OnboardingButton';

import steps from './steps';
import * as S from './styles';
import {OnboardingProps, OnboardingStep} from './types';

export const Onboarding = observer(({onClose}: OnboardingProps) => {
  const disptach = useDispatch();
  const {width} = useWindowDimensions();
  const [state, setState] = useState({activeSlide: 0});

  const pagination = useCallback(() => {
    const {activeSlide} = state;
    return (
      <Pagination
        dotsLength={steps.length}
        activeDotIndex={activeSlide}
        inactiveDotScale={1}
        inactiveDotOpacity={1}
        dotStyle={S.Styles.dots}
        inactiveDotStyle={S.Styles.inactiveDot}
      />
    );
  }, [state]);

  const renderItem = useCallback(({item}: {item: OnboardingStep}) => {
    return (
      <>
        <S.ImageView>
          <S.Img
            source={item.img}
            resizeMethod={'resize'}
            resizeMode={'contain'}
          />
        </S.ImageView>

        <S.TextView>
          <Text
            value={item.text}
            alignment={'center'}
            color={'primaryText'}
            typography={'primaryFont'}
          />
        </S.TextView>
      </>
    );
  }, []);

  const onCloseOnboarding = useCallback(async () => {
    try {
      disptach(GlobalActions.set(WARNS.ONBOARDING));
    } catch (e) {
      throw new Error('an error occurred in global.setWarn func');
    }

    onClose();
  }, [disptach, onClose]);

  const onNextButton = useMemo(
    () => state.activeSlide === steps.length - 1,
    [state.activeSlide],
  );

  return (
    <S.Container>
      <Carousel
        data={steps}
        itemWidth={width}
        sliderWidth={width}
        renderItem={renderItem}
        onSnapToItem={index => setState({activeSlide: index})}
      />

      {onNextButton && <OnboardingButton onClose={onCloseOnboarding} />}

      {pagination()}
    </S.Container>
  );
});
