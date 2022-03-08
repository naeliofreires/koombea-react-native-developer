import React, {useCallback, useEffect, useMemo} from 'react';
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
  const {data, status} = useResource('universe');

  const load = useCallback(() => {
    dispatch(UniverseService.getAll());
  }, [dispatch]);

  useEffect(() => {
    load();
  }, [load]);

  const renderUniverses = useMemo(
    () => data.map(u => <Universe key={u.objectID} {...u} />),
    [data],
  );

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
          <Universe objectID={0} name={'All'} description={'default'} />
          {renderUniverses}
        </S.ScrollContainer>
      )}
    </>
  );
});
