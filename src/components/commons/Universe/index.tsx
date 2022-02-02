import React, {useCallback} from 'react';
import {observer} from 'mobx-react-lite';

import {useStore} from '~/store/hooks';
import {Text} from '~/components/commons/Text';
import {UniverseStoreProps} from '~/store/Universe/types';

import * as S from './styles';
import {UniverseProps} from './types';

export const Universe = observer(({name, objectID}: UniverseProps) => {
  const store = useStore<UniverseStoreProps>('universe');

  const onSelectUniverseID = useCallback(() => {
    try {
      if (objectID) {
        store?.onSelectUniverseID(objectID);
      } else if (objectID === 0) {
        if (store.universeSelectedID !== 0) {
          store?.onSelectUniverseID(0);
        }
      }
    } catch (e) {
      throw new Error(`An error at Universe.onSelectUniverseID: ${e}`);
    }
  }, [objectID, store.universeSelectedID]); // eslint-disable-line

  return (
    <S.Container
      onPress={onSelectUniverseID}
      selected={Boolean(store.universeSelectedID === objectID)}>
      <Text value={name} color={'primaryText'} typography={'secondaryFont'} />
    </S.Container>
  );
});
