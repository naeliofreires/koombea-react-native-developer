import {makeAutoObservable, runInAction} from 'mobx';

import {api} from '~/api';
import {STATE} from '~/store/types';
import {FighterStoreProps, FilterOptions} from '~/store/Fighter/types';
import {FighterType} from '~/components/commons/Fighter/types';
import {SortUtil} from '~/utils/SortUtil';

export const FighterStoreKey = 'fighter';
export class FighterStore {
  name: string;
  state: STATE;
  fighters: FighterType[];
  options = {} as FilterOptions;

  constructor(restoredStore: FighterStoreProps | null) {
    this.name = FighterStoreKey;
    this.state = STATE.NONE;
    this.fighters = [];
    this.options = {filterBy: null, sortBy: null} as FilterOptions;

    if (restoredStore) {
      if (restoredStore.fighters) {
        this.fighters = restoredStore.fighters;
      }

      if (restoredStore.options) {
        this.options = restoredStore.options;
      }
    } else {
      this.fighters = [];
    }

    makeAutoObservable(this);
  }

  async getOne(name: string, universe: string): Promise<FighterType> {
    const check = (item: FighterType) =>
      item.name === name && item.universe === universe;

    return new Promise((resolve, reject) => {
      const [data] = this.fighters.filter(check);

      if (data) {
        resolve(data);
      }

      reject('Not found');
    });
  }

  async setOptions(options: FilterOptions): Promise<void> {
    runInAction(() => {
      this.options = options;
    });
  }

  async loadAll(universe = '') {
    try {
      this.state = STATE.PENDING;

      await api
        .get(`fighters?universe=${universe}`)
        .then(({data}) => {
          let response = data as FighterType[];

          const key = this.options?.sortBy;
          const rate = this.options?.filterBy;

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
        })
        .then(data => {
          runInAction(() => {
            this.fighters = data;
            this.state = STATE.SUCCESS;
          });
        });
    } catch (e) {
      console.log(`an error getting all fighters func: ${e}`);

      runInAction(() => {
        this.fighters = [];
        this.state = STATE.ERROR;
      });
    }
  }

  async loadByUniverse(name?: string): Promise<void> {
    await this.loadAll(name);
  }
}
