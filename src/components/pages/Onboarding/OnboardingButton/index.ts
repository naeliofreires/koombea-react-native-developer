import {Fragment} from 'react';
import {Platform} from 'react-native';
import {OnboardingButtonIOS} from './OnboardingButton.ios';
import {OnboardingButtonAndroid} from './OnboardingButton.android';

export const OnboardingButton =
  Platform.select({
    ios: () => OnboardingButtonIOS,
    android: () => OnboardingButtonAndroid,
  })?.() || Fragment;
