import React from 'react';
import {View} from 'react-native';
import {Rating} from 'react-native-ratings';

import {Text} from '~/components/commons/Text';
import {FighterType} from '~/components/commons/Fighter/types';

import * as S from './styles';

export const Card = React.memo(
  ({
    name,
    universe,
    imageURL,
    price = '0',
    downloads,
    rate,
  }: Pick<
    FighterType,
    'name' | 'universe' | 'imageURL' | 'price' | 'downloads' | 'rate'
  >) => {
    return (
      <S.Card>
        <S.CardView>
          <View>
            <Text
              fontSize={40}
              numberOfLines={1}
              color={'secondaryText'}
              typography={'primaryFont'}
              value={name}
            />
            <Text
              color={'tertiaryText'}
              typography={'tertiaryFont'}
              value={universe}
            />
          </View>

          <S.DownloadsView>
            <Rating
              readonly
              type="star"
              imageSize={16}
              ratingCount={5}
              startingValue={rate}
            />

            <Text
              color={'tertiaryText'}
              typography={'tertiaryFont'}
              value={`Downloads: ${downloads}`}
            />
          </S.DownloadsView>

          <S.PriceView>
            <Text
              fontSize={22}
              value={`$${price}`}
              color={'primaryText'}
              typography={'primaryFont'}
            />
          </S.PriceView>
        </S.CardView>

        <S.CardView align={'flex-end'}>
          <S.Img url={imageURL} />
        </S.CardView>
      </S.Card>
    );
  },
);
