import {createAsyncThunk} from '@reduxjs/toolkit';
import {UniverseUtil} from '~/utils/Universe';

const {getAll} = UniverseUtil;

export const UniverseService = {
  getAll: createAsyncThunk('universe/getAll', getAll),
};
