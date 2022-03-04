import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '~/api';
import {FighterType} from '~/components/commons/Fighter/types';
import {UniverseType} from '~/components/commons/Universe/types';
import {SortUtil} from '~/utils/SortUtil';

const load = createAsyncThunk(
  'fighter/get_all',
  async (): Promise<FighterType[]> => {
    let response = [];
    try {
      response = await api.get('fighters').then(({data}) => data);
    } catch (error) {
      throw new Error(`an error at getAllFighters func: ${error}`);
    }
    return response;
  },
);

const getByUniverse = createAsyncThunk(
  'fighter/get_all_by_universe',
  async (universe: UniverseType, options?: any) => {
    let _data = [] as FighterType[];

    const key = options?.sortBy;
    const rate = options?.filterBy;

    try {
      _data = await api
        .get(`fighters?universe=${universe.name}`)
        .then(({data}) => {
          let response = data as FighterType[];

          if (rate) {
            response = response.filter(
              item => Number(rate) >= Number(item.rate),
            );
          }

          switch (key) {
            case 'name':
              response = response.sort((a, b) =>
                SortUtil.compareStrings(a.name, b.name),
              );
              break;
            case 'price':
              response = response.sort((a, b) =>
                SortUtil.compareNumbers(Number(a.price), Number(b.price)),
              );
              break;
            case 'downloads':
              response = response.sort((a, b) =>
                SortUtil.compareNumbers(
                  Number(a.downloads),
                  Number(b.downloads),
                ),
              );
              break;
            case 'rate':
              response = response.sort((a, b) =>
                SortUtil.compareNumbers(
                  Number(a.downloads),
                  Number(b.downloads),
                ),
              );
              break;
            default:
              break;
          }

          return response;
        });
    } catch (error) {
      throw new Error(`an error at getAllByUniverse func: ${error}`);
    }
    return _data;
  },
);

export const FighterService = {
  load,
  getByUniverse,
};
