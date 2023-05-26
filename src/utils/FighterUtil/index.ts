import {api} from '~/api';
import {FighterType} from '~/components/commons/Fighter/types';
import {UniverseType} from '~/components/commons/Universe/types';
import {FilterOptions} from '~/redux/store/slices/filter/types';
import {SortUtil} from '../SortUtil';

async function getAll(universeName?: string): Promise<FighterType[]> {
  let response = [];
  try {
    response = await api
      .get(`fighters?universe=${universeName ?? ''}`)
      .then(({data}) => data);
  } catch (error) {
    throw new Error(`an error at getAllFighters func: ${error}`);
  }
  return response;
}

async function getByUniverse(args: {
  universe: UniverseType;
  options?: FilterOptions;
}) {
  const {universe, options} = args;

  const key = options?.sortBy;
  const rate = options?.filterBy;

  let _data = await getAll(universe.name);

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
}

export const FighterUtil = {
  getAll,
  getByUniverse,
};
