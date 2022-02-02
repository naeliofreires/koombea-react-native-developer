import {createContext} from 'react';

import {StoreBase} from '~/store/types';
import {UniverseStore, UniverseStoreKey} from '~/store/Universe';
import {FighterStore, FighterStoreKey} from '~/store/Fighter';
import {GlobalStore, GlobalStoreKey} from '~/store/Global';

export const StoreInitializer = {
  [UniverseStoreKey]: UniverseStore,
  [FighterStoreKey]: FighterStore,
  [GlobalStoreKey]: GlobalStore,
} as unknown as Record<string, StoreBase>;

export const StoreContext = createContext({});
