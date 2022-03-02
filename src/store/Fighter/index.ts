import {makeAutoObservable, runInAction} from 'mobx';

import {api} from '~/api';
import {STATE} from '~/store/types';
import {FighterStoreProps, FilterOptions} from '~/store/Fighter/types';
import {FighterProps} from '~/components/commons/Fighter/types';
import {SortUtil} from '~/utils/SortUtil';

export const FighterStoreKey = 'fighter';
export class FighterStore {
  name: string;
  state: STATE;
  fighters: FighterProps[];
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

  async getOne(
    name: string,
    universe: string,
  ): Promise<FighterProps | undefined> {
    try {
      const check = (item: FighterProps) =>
        item.name === name && item.universe === universe;

      return this.fighters.filter(check)[0];
    } catch (e) {
      console.error(`An error at getById: ${e}`);
    }
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
          let response = data;

          /**
           * Options to filter
           */
          const key = this.options?.sortBy;
          const rate = this.options?.filterBy;

          if (rate) {
            response = (response as FighterProps[]).filter(
              item => Number(rate) >= Number(item.rate),
            );
          }

          switch (key) {
            case 'name':
              response = (response as FighterProps[]).sort((a, b) =>
                SortUtil.compareStrings(a.name, b.name),
              );
              break;
            case 'price':
              response = (response as FighterProps[]).sort((a, b) =>
                SortUtil.compareNumbers(Number(a.price), Number(b.price)),
              );
              break;
            case 'downloads':
              response = (response as FighterProps[]).sort((a, b) =>
                SortUtil.compareNumbers(
                  Number(a.downloads),
                  Number(b.downloads),
                ),
              );
              break;
            case 'rate':
              response = (response as FighterProps[]).sort((a, b) =>
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
        })
        .catch(() => {
          runInAction(() => {
            this.fighters = [];
            this.state = STATE.ERROR;
          });
        });
    } catch (e) {
      console.log(`An error at getAllFighters: ${e}`);
    }
  }

  async loadByUniverse(universe: string) {
    await this.loadAll(universe);
  }
}
