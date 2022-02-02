import React, {useCallback, useEffect} from 'react';
import {observer} from 'mobx-react-lite';

import {useStore} from '~/store/hooks';
import {Text} from '~/components/commons/Text';
import {Universe} from '~/components/commons/Universe';
import {UniverseStoreProps} from '~/store/Universe/types';
import {BaseButton} from '~/components/commons/BaseButton';

import * as S from './style';
import {STATE} from '~/store/types';

export const UniverseList = observer(() => {
  const store = useStore('universe') as UniverseStoreProps;

  useEffect(() => {
    (async () => {
      await store?.getAllUniverses();
    })();
  }, [store]);

  const onTryToLoad = useCallback(async () => {
    await store?.getAllUniverses();
  }, [store]);

  return (
    <>
      {store?.state === STATE.ERROR && (
        <S.FeedbackErrorBox>
          <BaseButton onPress={onTryToLoad}>
            <Text
              color={'tertiaryText'}
              typography={'tertiaryFont'}
              value={'Sorry, an error occurred. '}>
              <Text
                value={'Click to try again'}
                color={'primaryColor'}
                typography={'tertiaryFont'}
              />
            </Text>
          </BaseButton>
        </S.FeedbackErrorBox>
      )}

      {store?.state === STATE.SUCCESS && (
        <S.ScrollContainer>
          <Universe objectID={0} name={'All'} description={'default'} />

          {store?.universes?.map(universe => (
            <Universe key={universe.objectID} {...universe} />
          ))}
        </S.ScrollContainer>
      )}
    </>
  );
});
