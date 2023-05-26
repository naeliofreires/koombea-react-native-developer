import React from 'react';

import FastImage from 'react-native-fast-image';

import NoSearchResultIcon from '~/assets/icons/feedback/no_search_result.png';

import * as S from './style';

export const NoSearchResult = React.memo(() => {
  return (
    <S.FeedbackView>
      <S.Image
        source={NoSearchResultIcon}
        resizeMode={FastImage.resizeMode.contain}
      />
    </S.FeedbackView>
  );
});
