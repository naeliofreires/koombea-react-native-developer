import {STATUS} from '~/redux/store/types';

export type SortBy = 'name' | 'price' | 'rate' | 'downloads' | string;
export type RateType = 1 | 2 | 3 | 4 | 5 | number;

export type FilterOptions = {
  sortBy: SortBy | null;
  filterBy: RateType | null;
};

export type FilterState = {
  status: STATUS;
  options: FilterOptions;
};
