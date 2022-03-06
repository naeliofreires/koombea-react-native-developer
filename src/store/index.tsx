import {createContext} from 'react';

import {StoreBase} from '~/store/types';
import {GlobalStore, GlobalStoreKey} from '~/store/Global';

export const StoreInitializer = {
  [GlobalStoreKey]: GlobalStore,
} as unknown as Record<string, StoreBase>;

export const StoreContext = createContext({});
