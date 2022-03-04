import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '~/api';

export const getAllUniverses = createAsyncThunk(
  'universe/get_all',
  async () => {
    let response = [];
    try {
      response = await api.get('universes').then(({data}) => data);
    } catch (error) {
      throw new Error(`an error at getAllUniverses func: ${error}`);
    }
    return response;
  },
);
