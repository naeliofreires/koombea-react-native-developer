import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {Text} from '~/components/commons/Text';
import {UniverseActions} from '~/redux/store/slices/universe';

import * as S from './styles';
import {UniverseProps, UniverseType} from './types';

export const Universe = React.memo(
  ({name, objectID, description, first, selected}: UniverseProps) => {
    const dispatch = useDispatch();

    const onSelectUniverseID = useCallback(() => {
      if (!objectID) {
        return;
      }

      try {
        dispatch(
          UniverseActions.onSelect({
            name,
            objectID,
            description,
          }),
        );

        if (objectID === 0) {
          dispatch(UniverseActions.onSelect({objectID} as UniverseType));
        }
      } catch (e) {
        throw new Error(`An error at Universe.onSelectUniverseID: ${e}`);
      }
    }, [description, dispatch, name, objectID]);

    return (
      <S.Container
        first={Boolean(first)}
        selected={selected}
        onPress={onSelectUniverseID}>
        <Text value={name} color={'primaryText'} typography={'secondary'} />
      </S.Container>
    );
  },
  (prevProps, nextProps) => {
    /**
     * to avoid extra renders, the component will just render again if the selected flag change
     */
    return prevProps.selected === nextProps.selected;
  },
);
