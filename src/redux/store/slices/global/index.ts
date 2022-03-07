import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {GlobalState, WARNS} from './types';

const initialState: GlobalState = {
  warns: {},
};

export const GlobalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<WARNS>) => {
      state.warns[action.payload] = action.payload;
    },
  },
});

export const GlobalActions = GlobalSlice.actions;
