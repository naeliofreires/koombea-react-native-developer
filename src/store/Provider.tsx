import React, {useEffect, useMemo, useState} from 'react';
import {autorun} from 'mobx';

import Config from '~/config';
import {StoreContext} from '~/store';
import {StoreBase} from '~/store/types';
import {StoreUtil} from '~/utils/StoreUtil';

export const StoreProvider: React.FC = ({children}) => {
  const [stores, setStores] = useState<Record<string, StoreBase>>({});

  useEffect(() => {
    (async () => {
      setStores((await StoreUtil.loadStore()) ?? {});
    })();
  }, []);

  useEffect(() => {
    /**
     * @autorun
     * the function will catch all store changes, and will update it back to the local storage.
     * */
    const unbind = Object.values(stores || {}).map(store => {
      return autorun(
        async () => {
          try {
            await StoreUtil.setStore(store as StoreBase);
          } catch (error) {
            console.error(`Unable to save ${(store as StoreBase).name}:`);
          }
        },
        {delay: Config.AUTORUN_MOBX_PERSIST_DELAY},
      );
    });

    return () => {
      unbind.forEach(u => u());
    };
  }, [stores]);

  const value = useMemo(() => ({...stores}), [stores]);

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
