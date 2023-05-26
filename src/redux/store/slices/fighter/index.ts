import {createSlice} from '@reduxjs/toolkit';
import {STATUS} from '~/redux/store/types';
import {FighterState} from './types';
import {FighterService} from './services';

const initialState: FighterState = {
  status: STATUS.NONE,
  data: [],
};

export const FighterSlice = createSlice({
  name: 'fighter',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(FighterService.getAll.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = action.meta.requestStatus as STATUS;
    });

    builder.addCase(FighterService.getByUniverse.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = action.meta.requestStatus as STATUS;
    });
  },
});

export const FighterActions = FighterSlice.actions;
