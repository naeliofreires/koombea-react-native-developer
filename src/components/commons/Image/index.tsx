import React from 'react';
import FastImage from 'react-native-fast-image';

import {ImageProps} from './types';

export const Image = React.memo(({url, width, height}: ImageProps) => {
  return (
    <FastImage
      style={{width, height}}
      resizeMode={FastImage.resizeMode.contain}
      source={{
        uri: url,
        priority: FastImage.priority.normal,
        cache: FastImage.cacheControl.immutable,
      }}
    />
  );
});
