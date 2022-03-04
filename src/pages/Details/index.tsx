import React, {useEffect, useMemo, useState} from 'react';
import {Alert, Platform} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {useTheme} from '~/theme';
import {useStore} from '~/store/hooks';
import {DetailsProps} from '~/routes/types';
import {Text} from '~/components/commons/Text';
import {Header} from '~/components/commons/Header';
import {Card} from '~/components/pages/Details/Card';
import {FighterStoreProps} from '~/store/Fighter/types';
import {BaseButton} from '~/components/commons/BaseButton';
import {FighterType} from '~/components/commons/Fighter/types';

import * as S from './styles';

type Fighter = FighterType;

export const Details = ({route, navigation}: DetailsProps) => {
  const {name, universe} = route.params;

  const palette = useTheme().palette;
  const [fighter, setFighter] = useState<Fighter>();
  const store = useStore('fighter') as FighterStoreProps;

  useEffect(() => {
    try {
      store.getOne(name, universe).then(setFighter);
    } catch (error) {
      Alert.alert('Universe App', error as string);
    }
  }, [name, store, universe]);

  const color = useMemo(
    () =>
      Platform.OS === 'ios' ? palette.quartenaryText : palette.primaryText,
    [], // eslint-disable-line
  );

  return (
    <S.Container>
      {!!fighter && (
        <>
          <Header
            title={fighter.name || 'Details'}
            leftChild={
              <S.BackButtonView>
                <BaseButton onPress={navigation.goBack}>
                  <MaterialIcon
                    size={26}
                    color={color}
                    name={'keyboard-backspace'}
                  />
                </BaseButton>
              </S.BackButtonView>
            }
          />

          <Card
            rate={fighter.rate || 0}
            name={fighter.name || ''}
            price={fighter.price || ''}
            universe={fighter.universe || ''}
            imageURL={fighter.imageURL || ''}
            downloads={fighter.downloads || '-'}
          />

          <S.DescriptionBox>
            <Text
              color={'tertiaryText'}
              typography={'descriptionFront'}
              value={fighter.description || ''}
            />
          </S.DescriptionBox>
        </>
      )}
    </S.Container>
  );
};
