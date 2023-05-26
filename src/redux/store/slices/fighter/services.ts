import {createAsyncThunk} from '@reduxjs/toolkit';
import {FighterUtil} from '~/utils/FighterUtil';

const GET_ALL = 'fighter/getAll';
const GET_BY_UNIVERSE = 'fighter/getByUniverse';

export const FighterService = {
  getAll: createAsyncThunk(GET_ALL, FighterUtil.getAll),
  getByUniverse: createAsyncThunk(GET_BY_UNIVERSE, FighterUtil.getByUniverse),
};
