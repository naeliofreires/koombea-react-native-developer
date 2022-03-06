import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '~/api';
import {SortUtil} from '~/utils/SortUtil';
import {FighterType} from '~/components/commons/Fighter/types';
import {UniverseType} from '~/components/commons/Universe/types';
import {FilterOptions} from '../filter/types';

export const getAll = createAsyncThunk('fighter/getAll', async () => {
  let response = [];
  try {
    response = await api.get('fighters').then(({data}) => data);
  } catch (error) {
    throw new Error(`an error at getAllFighters func: ${error}`);
  }
  return response;
});

const getByUniverse = createAsyncThunk(
  'fighter/getByUniverse',
  async (args: {universe: UniverseType; options?: FilterOptions}) => {
    const {universe, options} = args;

    let _data = [] as FighterType[];
    const key = options?.sortBy;
    const rate = options?.filterBy;

    try {
      _data = await api
        .get(`fighters?universe=${universe.name}`)
        .then(({data}) => data);
    } catch (error) {
      throw new Error(`an error at getAllByUniverse func: ${error}`);
    }

    if (rate) {
      _data = _data.filter(item => Number(rate) >= Number(item.rate));
    }

    switch (key) {
      case 'name':
        _data = _data.sort((a, b) => SortUtil.compareStrings(a.name, b.name));
        break;
      case 'price':
        _data = _data.sort((a, b) =>
          SortUtil.compareNumbers(Number(a.price), Number(b.price)),
        );
        break;
      case 'downloads':
        _data = _data.sort((a, b) =>
          SortUtil.compareNumbers(Number(a.downloads), Number(b.downloads)),
        );
        break;
      case 'rate':
        _data = _data.sort((a, b) =>
          SortUtil.compareNumbers(Number(a.downloads), Number(b.downloads)),
        );
        break;
      default:
        break;
    }

    return _data;
  },
);

export const FighterService = {getAll, getByUniverse};
