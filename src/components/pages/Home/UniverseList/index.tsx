import React, {useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {STATUS} from '~/redux/store/types';
import {Text} from '~/components/commons/Text';
import {useResource} from '~/redux/store/hooks';
import {Universe} from '~/components/commons/Universe';
import {BaseButton} from '~/components/commons/BaseButton';
import {UniverseService} from '~/redux/store/slices/universe/services';

import * as S from './style';

export const UniverseList = React.memo(() => {
  const dispatch = useDispatch();
  const {data, status, selectedUniverse} = useResource('universe');

  const load = useCallback(() => {
    dispatch(UniverseService.getAll());
  }, [dispatch]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <>
      {status === STATUS.ERROR && (
        <S.FeedbackErrorBox>
          <BaseButton onPress={load}>
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

      {status === STATUS.SUCCESS && (
        <S.ScrollContainer>
          <Universe
            first
            objectID={0}
            name={'All'}
            description={'default'}
            selected={selectedUniverse?.objectID === 0}
          />
          {data.map(u => (
            <Universe
              {...u}
              key={u.objectID}
              selected={selectedUniverse?.objectID === u.objectID}
            />
          ))}
        </S.ScrollContainer>
      )}
    </>
  );
});
