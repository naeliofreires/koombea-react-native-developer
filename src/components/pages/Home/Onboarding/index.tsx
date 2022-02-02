import React, {useCallback, useMemo, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {useWindowDimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {useStore} from '~/store/hooks';
import {Text} from '~/components/commons/Text';
import {OnboardingButton} from '~/components/commons/OnboardingButton';
import {GlobalStoreProps, WARNS_TYPES} from '~/store/Global/types';

import data from './data';
import * as S from './styles';
import {OnboardingProps, OnboardingStep} from './types';

export const Onboarding = observer(({onClose}: OnboardingProps) => {
  const {width} = useWindowDimensions();
  const globalStore = useStore<GlobalStoreProps>('global');

  const [state, setState] = useState({activeSlide: 0});

  const pagination = useCallback(() => {
    const {activeSlide} = state;
    return (
      <Pagination
        dotsLength={data.length}
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

  const onCloseOnboarding = () => {
    globalStore?.setWarn(WARNS_TYPES.ONBOARDING);

    onClose();
  };

  const onNextButton = useMemo(
    () => state.activeSlide === data.length - 1,
    [state.activeSlide],
  );

  return (
    <S.Container>
      <Carousel
        data={data}
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
