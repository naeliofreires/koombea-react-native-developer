import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {Text} from '~/components/commons/Text';
import {useResource} from '~/redux/store/hooks';
import {UniverseActions} from '~/redux/store/slices/universe';

import * as S from './styles';
import {UniverseType} from './types';

export const Universe = React.memo(
  ({name, objectID, description}: UniverseType) => {
    const dispatch = useDispatch();
    const {selectedUniverse} = useResource('universe');

    const onSelectUniverseID = useCallback(() => {
      try {
        if (objectID) {
          dispatch(UniverseActions.onSelect({name, objectID, description}));
        } else if (objectID === 0) {
          if (selectedUniverse?.objectID !== 0) {
            dispatch(UniverseActions.onSelect({objectID: 0} as UniverseType));
          }
        }
      } catch (e) {
        throw new Error(`An error at Universe.onSelectUniverseID: ${e}`);
      }
    }, [description, dispatch, name, objectID, selectedUniverse?.objectID]);

    return (
      <S.Container
        onPress={onSelectUniverseID}
        selected={selectedUniverse?.objectID === objectID}>
        <Text value={name} color={'primaryText'} typography={'secondaryFont'} />
      </S.Container>
    );
  },
);
