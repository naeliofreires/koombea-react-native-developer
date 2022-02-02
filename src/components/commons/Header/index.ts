import {Fragment} from 'react';
import {Platform} from 'react-native';

import {HeaderIOS} from '~/components/commons/Header/Header.ios';
import {HeaderAndroid} from '~/components/commons/Header/Header.android';

export const Header =
  Platform.select({
    ios: () => HeaderIOS,
    android: () => HeaderAndroid,
  })?.() || Fragment;
