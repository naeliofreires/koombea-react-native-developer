import React, {useCallback, useMemo, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useWindowDimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {WARNS} from '~/redux/store/slices/global/types';
import {GlobalActions} from '~/redux/store/slices/global';
import {OnboardingImage} from '~/components/pages/Onboarding/OnboardingImage';
import {OnboardingButton} from '~/components/pages/Onboarding/OnboardingButton';

import steps from './steps';
import * as S from './styles';
import {OnboardingProps, OnboardingStep} from './types';

export const Onboarding = React.memo(({onClose}: OnboardingProps) => {
  const dispatch = useDispatch();
  const {width} = useWindowDimensions();
  const [state, setState] = useState({activeSlide: 0});

  const pagination = useCallback(() => {
    const {activeSlide} = state;
    return (
      <S.PaginationView>
        <Pagination
          dotsLength={steps.length}
          activeDotIndex={activeSlide}
          inactiveDotScale={1}
          inactiveDotOpacity={1}
          dotStyle={S.PaginatonStyles.dots}
          inactiveDotStyle={S.PaginatonStyles.inactiveDot}
        />
      </S.PaginationView>
    );
  }, [state]);

  const renderItem = useCallback(
    ({item}: {item: OnboardingStep}) => {
      return (
        <OnboardingImage source={item.img} text={item.text}>
          {pagination()}
        </OnboardingImage>
      );
    },
    [pagination],
  );

  const onCloseOnboarding = useCallback(async () => {
    try {
      dispatch(GlobalActions.set(WARNS.ONBOARDING));
    } catch (e) {
      throw new Error(`An error occurred in global.setWarn func: ${e}`);
    }

    onClose();
  }, [dispatch, onClose]);

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
    </S.Container>
  );
});
