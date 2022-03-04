import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {STATUS} from '~/redux/store/types';
import {UniverseState} from '~/redux/store/slices/universe/types';
import {getAllUniverses} from '~/redux/store/slices/universe/services';
import {UniverseType} from '~/components/commons/Universe/types';

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
    builder.addCase(getAllUniverses.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = action.meta.requestStatus as STATUS;
    });
  },
});

export const UniverseActions = UniverseSlice.actions;
