import React from 'react';
import {Platform} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {useTheme} from '~/theme';
import {useStore} from '~/store/hooks';
import {DetailsProps} from '~/routes/types';
import {Text} from '~/components/commons/Text';
import {Header} from '~/components/commons/Header';
import {Card} from '~/components/pages/Details/Card';
import {FighterStoreProps} from '~/store/Fighter/types';
import {BaseButton} from '~/components/commons/BaseButton';

import * as S from './styles';

export const Details = ({route, navigation}: DetailsProps) => {
  const {name, universe} = route.params;

  const palette = useTheme().palette;
  const store = useStore('fighter') as FighterStoreProps;

  const fighter = store?.getOne(name, universe);

  return (
    <S.Container>
      <Header
        title={fighter?.name || 'Details'}
        leftChild={
          <S.BackButtonView>
            <BaseButton onPress={navigation.goBack}>
              <MaterialIcon
                size={26}
                name={'keyboard-backspace'}
                color={
                  Platform.OS === 'ios'
                    ? palette.quartenaryText
                    : palette.primaryText
                }
              />
            </BaseButton>
          </S.BackButtonView>
        }
      />

      <Card
        rate={fighter?.rate || 0}
        name={fighter?.name || ''}
        price={fighter?.price || ''}
        universe={fighter?.universe || ''}
        imageURL={fighter?.imageURL || ''}
        downloads={fighter?.downloads || '-'}
      />

      <S.DescriptionBox>
        <Text
          color={'tertiaryText'}
          typography={'descriptionFront'}
          value={fighter?.description || ''}
        />
      </S.DescriptionBox>
    </S.Container>
  );
};
