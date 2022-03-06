import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Alert, Platform} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {useTheme} from '~/theme';
import {DetailsProps} from '~/routes/types';
import {Text} from '~/components/commons/Text';
import {Header} from '~/components/commons/Header';
import {Card} from '~/components/pages/Details/Card';
import {BaseButton} from '~/components/commons/BaseButton';
import {useResource} from '~/redux/store/hooks';
import {FighterType} from '~/components/commons/Fighter/types';

import * as S from './styles';

type Fighter = FighterType;

export const Details = ({route, navigation}: DetailsProps) => {
  const {name, universe} = route.params;
  const palette = useTheme().palette;
  const {data} = useResource('fighter');
  const [fighter, setFighter] = useState<Fighter>();

  const getOne = useCallback(
    (list: Fighter[]) =>
      new Promise((resolve, reject) => {
        const item = list.find(i => i.name === name && i.universe === universe);

        if (item) {
          resolve(item);
        }

        reject('Fighter Not Found!');
      }) as Promise<Fighter>,
    [name, universe],
  );

  useEffect(() => {
    try {
      getOne(data).then(setFighter);
    } catch (error) {
      Alert.alert('Universe App', error as string);
    }
  }, [data, getOne]);

  const color = useMemo(
    () =>
      Platform.OS === 'ios' ? palette.quartenaryText : palette.primaryText,
    [palette.primaryText, palette.quartenaryText],
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
            name={fighter.name}
            price={fighter.price}
            universe={fighter.universe}
            imageURL={fighter.imageURL}
            downloads={fighter.downloads}
          />

          <S.DescriptionBox>
            <Text
              color={'tertiaryText'}
              value={fighter.description}
              typography={'descriptionFront'}
            />
          </S.DescriptionBox>
        </>
      )}
    </S.Container>
  );
};
