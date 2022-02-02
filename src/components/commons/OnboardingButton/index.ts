import {Fragment} from 'react';
import {Platform} from 'react-native';
import {OnboardingButtonIOS} from '~/components/commons/OnboardingButton/OnboardingButton.ios';
import {OnboardingButtonAndroid} from '~/components/commons/OnboardingButton/OnboardingButton.android';

export const OnboardingButton =
  Platform.select({
    ios: () => OnboardingButtonIOS,
    android: () => OnboardingButtonAndroid,
  })?.() || Fragment;
