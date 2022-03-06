import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {STATUS} from '~/redux/store/types';
import {UniverseState} from '~/redux/store/slices/universe/types';
import {UniverseType} from '~/components/commons/Universe/types';

import {UniverseService} from './services';

const initialState: UniverseState = {
  status: STATUS.NONE,
  data: [],
  selectedUniverse: undefined,
};

export const UniverseSlice = createSlice({
  name: 'universe',
  initialState,
  reducers: {
    onSelect: (state, action: PayloadAction<UniverseType>) => {
      state.selectedUniverse = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(UniverseService.getAll.pending, (state, action) => {
      state.status = action.meta.requestStatus as STATUS;
    });

    builder.addCase(UniverseService.getAll.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = action.meta.requestStatus as STATUS;
    });
  },
});

export const UniverseActions = UniverseSlice.actions;
