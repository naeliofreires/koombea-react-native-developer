import {Fragment} from 'react';
import {Platform} from 'react-native';

import {ImageViewIOS} from './ImageViewIOS.ios';
import {ImageViewAndroid} from './ImageViewAndroid.android';

export const OnboardingImage =
  Platform.select({
    ios: () => ImageViewIOS,
    android: () => ImageViewAndroid,
  })?.() || Fragment;
