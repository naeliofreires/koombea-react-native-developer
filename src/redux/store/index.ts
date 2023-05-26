import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {UniverseSlice} from '~/redux/store/slices/universe';
import {FighterSlice} from './slices/fighter';
import {FilterSlice} from './slices/filter';
import {GlobalSlice} from './slices/global';

const rootReducer = combineReducers({
  universe: UniverseSlice.reducer,
  fighter: FighterSlice.reducer,
  filter: FilterSlice.reducer,
  global: GlobalSlice.reducer,
});

const persistConfig = {
  key: 'root',
  debug: true,
  storage: AsyncStorage,
  whitelist: ['global', 'universe', 'fighter', 'filter'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persist = persistStore(store);
