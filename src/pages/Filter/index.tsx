import React, {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Rating} from 'react-native-ratings';
import {Platform, ScrollView} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {useTheme} from '~/theme';
import {Text} from '~/components/commons/Text';
import {useResource} from '~/redux/store/hooks';
import {Header} from '~/components/commons/Header';
import {FilterActions} from '~/redux/store/slices/filter';
import {BaseButton} from '~/components/commons/BaseButton';
import {InputRadio} from '~/components/commons/InputRadio';
import {FilterOptions} from '~/redux/store/slices/filter/types';

import * as S from './styles';
import {FilterProps} from './types';
import sortedOptions from './options';

export const Filter = ({onClose}: FilterProps) => {
  const dispatch = useDispatch();
  const palette = useTheme().palette;
  const filter = useResource('filter');

  const [options, setOptions] = useState({...filter.options});

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

  const onApply = useCallback(() => {
    dispatch(FilterActions.set(options));

    onClose();
  }, [dispatch, onClose, options]);

  const onReset = useCallback(async () => {
    const resetedOptions = {filterBy: null, sortBy: null};

    setOptions(resetedOptions);
    dispatch(FilterActions.set(resetedOptions));
  }, [dispatch]);

  return (
    <S.Container>
      <Header
        title="Filters"
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
      />

      <ScrollView>
        <S.SortByView>
          <Text
            value={'Sort by'}
            color={'quartenaryText'}
            typography={'tertiaryFont'}
          />

          {sortedOptions.map((item, idx) => (
            <InputRadio
              key={item.value}
              title={item.name}
              value={item.value}
              onChange={onChangeInputRadio}
              last={Boolean(sortedOptions.length - 1 === idx)}
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
};
