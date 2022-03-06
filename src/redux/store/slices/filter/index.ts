import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {STATUS} from '~/redux/store/types';

import {FilterState, FilterOptions} from './types';

const initialState: FilterState = {
  status: STATUS.NONE,
  options: {
    sortBy: null,
    filterBy: null,
  },
};

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<FilterOptions>) => {
      state.options = action.payload;
    },
  },
});

export const FilterActions = FilterSlice.actions;
