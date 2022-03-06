import React, {useCallback, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {useDispatch} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {Alert, FlatList, RefreshControl} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useTheme} from '~/theme';
import {STATUS} from '~/redux/store/types';
import {Text} from '~/components/commons/Text';
import {useResource} from '~/redux/store/hooks';
import {Fighter} from '~/components/commons/Fighter';
import {BaseButton} from '~/components/commons/BaseButton';
import {FighterType} from '~/components/commons/Fighter/types';
import {FighterService} from '~/redux/store/slices/fighter/services';
import NoSearchResult from '~/assets/icons/feedback/no_search_result.png';

import * as S from './style';

export const FightersList = observer(() => {
  const palette = useTheme().palette;

  const dispatch = useDispatch();
  const {options} = useResource('filter');
  const {data, status} = useResource('fighter');
  const {selectedUniverse: universe} = useResource('universe');

  const handleFilterFightersList = useCallback(() => {
    try {
      if (universe) {
        const {objectID} = universe;

        if (objectID === 0) {
          dispatch(FighterService.getAll());
        } else {
          dispatch(FighterService.getByUniverse({universe, options}));
        }
      }
    } catch (e) {
      Alert.alert('Universe App', e as string);
    }
  }, [universe, dispatch, options]);

  useEffect(() => {
    dispatch(FighterService.getAll());
  }, [dispatch]);

  useEffect(
    () => handleFilterFightersList(),
    [handleFilterFightersList, universe, options],
  );

  const renderItem = useCallback(({item}) => <Fighter {...item} />, []);

  const reload = useCallback(() => {
    dispatch(FighterService.getAll());
  }, [dispatch]);

  return (
    <S.Container>
      {status === STATUS.ERROR && (
        <S.FeedbackView>
          <Entypo name={'emoji-sad'} color={palette.tertiaryColor} size={60} />
          <BaseButton onPress={handleFilterFightersList}>
            <Text
              alignment={'center'}
              value={'Try again'}
              typography={'primaryFont'}
              color={palette.tertiaryColor}>
              <>
                <S.GhostBox />
                <AntDesign
                  size={22}
                  name={'reload1'}
                  color={palette.tertiaryColor}
                />
              </>
            </Text>
          </BaseButton>
        </S.FeedbackView>
      )}

      {status === STATUS.SUCCESS && data?.length === 0 && (
        <S.FeedbackView>
          <S.Image
            source={NoSearchResult}
            resizeMode={FastImage.resizeMode.contain}
          />
        </S.FeedbackView>
      )}

      <FlatList<FighterType>
        data={data}
        removeClippedSubviews
        style={S.Styles.list}
        initialScrollIndex={0}
        initialNumToRender={5}
        renderItem={renderItem}
        keyExtractor={useCallback(
          item => String(item.objectID + item.name),
          [],
        )}
        refreshControl={
          <RefreshControl
            onRefresh={reload}
            refreshing={Boolean(status === STATUS.PENDING)}
          />
        }
      />
    </S.Container>
  );
});
