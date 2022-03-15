import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import {PAGES} from '~/routes/types';
import {Text} from '~/components/commons/Text';

import {FighterType} from './types';
import * as S from './styles';

export const Fighter = React.memo(
  ({name, price, imageURL, rate, downloads, universe}: FighterType) => {
    const navigation = useNavigation();

    const onNavigation = useCallback(() => {
      navigation.navigate(PAGES.DETAILS as never, {name, universe} as never);
    }, [name, navigation, universe]);

    return (
      <S.Container onPress={onNavigation}>
        <S.Img url={imageURL} />

        <S.InformationView>
          <S.View>
            <Text
              value={name}
              color={'secondaryText'}
              typography={'cardTitle'}
            />
            <Text
              numberOfLines={1}
              value={universe}
              color={'tertiaryText'}
              typography={'secondary'}
            />
          </S.View>

          <S.View>
            <Text
              alignment={'right'}
              color={'tertiaryText'}
              value={`Price: $${price}`}
              typography={'tertiaryFont'}
            />

            <Text
              alignment={'right'}
              color={'tertiaryText'}
              value={`Rate: ${rate}`}
              typography={'secondary'}
            />

            <Text
              alignment={'right'}
              color={'tertiaryText'}
              typography={'secondary'}
              value={`Downloads: ${downloads}`}
            />
          </S.View>
        </S.InformationView>
      </S.Container>
    );
  },
);
