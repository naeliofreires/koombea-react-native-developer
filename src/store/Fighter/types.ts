import {StoreBase} from '~/store/types';
import {FighterProps} from '~/components/commons/Fighter/types';

export type SortBy = 'name' | 'price' | 'rate' | 'downloads' | string;
export type RateType = 1 | 2 | 3 | 4 | 5 | number;

export type FilterOptions = {
  sortBy: SortBy | null;
  filterBy: RateType | null;
};

export interface FighterStoreProps extends StoreBase {
  fighters: FighterProps[];
  options: FilterOptions;

  loadByUniverse(name?: string): Promise<void>;
  loadAll(universe?: string, options?: FilterOptions): Promise<void>;

  setOptions(options: FilterOptions): Promise<void>;
  getOne(name: string, universe: string): Promise<FighterProps>;
}
