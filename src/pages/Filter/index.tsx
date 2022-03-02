import React, {useCallback, useMemo, useState} from 'react';
import {Platform, ScrollView} from 'react-native';
import {observer} from 'mobx-react-lite';
import {Rating} from 'react-native-ratings';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {useTheme} from '~/theme';
import {useStore} from '~/store/hooks';
import {Text} from '~/components/commons/Text';
import {Header} from '~/components/commons/Header';
import {BaseButton} from '~/components/commons/BaseButton';
import {InputRadio} from '~/components/commons/InputRadio';
import {FighterStoreProps, FilterOptions} from '~/store/Fighter/types';

import * as S from './styles';
import {FilterProps} from './types';

export const Filter = observer(({onClose}: FilterProps) => {
  const palette = useTheme().palette;
  const fighterStore = useStore<FighterStoreProps>('fighter');

  const [options, setOptions] = useState({
    ...fighterStore?.options,
  } as FilterOptions);

  const sortOptions = useMemo(
    () => [
      {
        name: 'Name',
        value: 'name',
      },
      {
        name: 'Price',
        value: 'price',
      },
      {
        name: 'Rate',
        value: 'rate',
      },
      {
        name: 'Downloads',
        value: 'downloads',
      },
    ],
    [],
  );

  const onChangeInputRadio = useCallback((text: string) => {
    setOptions((prevState: FilterOptions) => {
      return {...prevState, sortBy: text};
    });
  }, []);

  const onChangeInputRating = useCallback((value: number) => {
    setOptions((prevState: FilterOptions) => {
      return {...prevState, filterBy: value};
    });
  }, []);

  const onApply = useCallback(async () => {
    await fighterStore.setOptions(options);

    onClose();
  }, [fighterStore, onClose, options]);

  const onReset = useCallback(async () => {
    const emptyOptions = {filterBy: null, sortBy: null};

    setOptions(emptyOptions);
    await fighterStore.setOptions(emptyOptions);
  }, [fighterStore]);

  return (
    <S.Container>
      <Header
        leftChild={
          <S.BackButtonView>
            <BaseButton onPress={onClose}>
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
        title="Filters"
      />

      <ScrollView>
        <S.SortByView>
          <Text
            value={'Sort by'}
            color={'quartenaryText'}
            typography={'tertiaryFont'}
          />

          {sortOptions.map((item, idx) => (
            <InputRadio
              key={item.value}
              title={item.name}
              value={item.value}
              onChange={onChangeInputRadio}
              last={Boolean(sortOptions.length - 1 === idx)}
              selected={Boolean(options.sortBy === item.value)}
            />
          ))}
        </S.SortByView>

        <S.FilterByView>
          <Text
            value={'Filter by'}
            color={'quartenaryText'}
            typography={'tertiaryFont'}
          />

          <S.RatingView>
            <Rating
              type="star"
              imageSize={30}
              ratingCount={5}
              onFinishRating={onChangeInputRating}
              startingValue={options.filterBy || 0}
            />
          </S.RatingView>
        </S.FilterByView>
      </ScrollView>

      <S.ActionsView>
        <S.ButtonView onPress={onReset}>
          <Text
            fontSize={20}
            value={'Reset'}
            color={'secondaryText'}
            typography={'primaryFont'}
          />
        </S.ButtonView>

        <S.ButtonView onPress={onApply}>
          <Text
            fontSize={20}
            value={'Apply'}
            color={'secondaryText'}
            typography={'primaryFont'}
          />
        </S.ButtonView>
      </S.ActionsView>
    </S.Container>
  );
});
