import {configureStore} from '@reduxjs/toolkit';

import {UniverseSlice} from '~/redux/store/slices/universe';
import {FighterSlice} from './slices/fighter';

export const store = configureStore({
  reducer: {
    universe: UniverseSlice.reducer,
    fighter: FighterSlice.reducer,
  },
});
