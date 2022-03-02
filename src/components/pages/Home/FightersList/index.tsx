import React, {useCallback, useEffect, useMemo} from 'react';
import {observer} from 'mobx-react-lite';
import FastImage from 'react-native-fast-image';
import {Alert, FlatList, RefreshControl} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useTheme} from '~/theme';
import {STATE} from '~/store/types';
import {useStore} from '~/store/hooks';
import {Text} from '~/components/commons/Text';
import {Fighter} from '~/components/commons/Fighter';
import {FighterStoreProps} from '~/store/Fighter/types';
import {BaseButton} from '~/components/commons/BaseButton';
import {UniverseStoreProps} from '~/store/Universe/types';
import {FighterProps} from '~/components/commons/Fighter/types';
import NoSearchResult from '~/assets/icons/feedback/no_search_result.png';

import * as S from './style';

type FighterStore = FighterStoreProps;
type UniverseStore = UniverseStoreProps;
export const FightersList = observer(() => {
  const palette = useTheme().palette;
  const fightersStore = useStore('fighter') as FighterStore;
  const universesStore = useStore('universe') as UniverseStore;

  const handleFilterFightersList = useCallback(async () => {
    try {
      const universeID = universesStore?.universeSelectedID;

      if (universeID === 0) {
        await fightersStore?.loadAll();
      } else {
        const universe = await universesStore?.getUniverseByID(universeID);
        await fightersStore?.loadByUniverse(universe.name);
      }
    } catch (e) {
      Alert.alert('Universe App', e as string);
    }
  }, [fightersStore, universesStore?.universeSelectedID]); // eslint-disable-line

  useEffect(() => {
    (async () => {
      await fightersStore?.loadAll();
    })();
  }, [fightersStore]);

  useEffect(() => {
    (async () => {
      await handleFilterFightersList();
    })();
  }, [
    handleFilterFightersList,
    universesStore?.universeSelectedID,
    fightersStore?.options,
  ]);

  const extractorID = useCallback(
    (item: FighterProps, idx: number) => String(item.objectID + idx),
    [],
  );

  const renderItem = useCallback(({item}) => <Fighter {...item} />, []);

  const onRefresh = useCallback(async () => {
    await fightersStore?.loadAll();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const data = useMemo(
    () => fightersStore?.fighters || [],
    [fightersStore?.fighters],
  );

  return (
    <S.Container>
      {fightersStore?.state === STATE.ERROR && (
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

      {fightersStore?.state === STATE.SUCCESS && data?.length === 0 && (
        <S.FeedbackView>
          <FastImage
            style={{width: 200, height: 200}}
            source={NoSearchResult}
            resizeMode={FastImage.resizeMode.contain}
          />
        </S.FeedbackView>
      )}

      <FlatList<FighterProps>
        data={data}
        removeClippedSubviews
        style={S.Styles.list}
        initialScrollIndex={0}
        initialNumToRender={5}
        renderItem={renderItem}
        keyExtractor={extractorID}
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={Boolean(fightersStore?.state === STATE.PENDING)}
          />
        }
      />
    </S.Container>
  );
});
