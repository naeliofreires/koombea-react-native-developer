import {makeAutoObservable, runInAction} from 'mobx';

import {api} from '~/api';
import {STATE} from '~/store/types';
import {UniverseStoreProps} from '~/store/Universe/types';
import {UniverseType} from '~/components/commons/Universe/types';

export const UniverseStoreKey = 'universe';
export class UniverseStore {
  name: string;
  state: STATE;
  universeSelectedID: string | number = 0;
  universes = [] as UniverseType[];

  constructor(restoredStore: UniverseStoreProps | null) {
    this.name = UniverseStoreKey;
    this.state = STATE.NONE;
    this.universes = [];

    if (restoredStore) {
      if (restoredStore.universeSelectedID) {
        this.universeSelectedID = restoredStore.universeSelectedID;
      }

      if (restoredStore.universes) {
        this.universes = restoredStore.universes;
      }
    }

    makeAutoObservable(this);
  }

  async getUniverseByID(id: number | string): Promise<UniverseType> {
    return new Promise((resolve, reject) => {
      try {
        const [universe] = this.universes.filter(item => item.objectID === id);

        if (universe !== undefined) {
          resolve(universe);
        } else {
          reject('Universe not found');
        }
      } catch (e) {
        reject(e);
      }
    });
  }

  onSelectUniverseID(id: number | string) {
    runInAction(() => {
      if (id) {
        this.universeSelectedID = id;
      } else {
        this.universeSelectedID = 0;
      }
    });
  }

  async getAllUniverses() {
    try {
      this.state = STATE.PENDING;

      await api.get('universes').then(({data}) => {
        runInAction(() => {
          this.universes = data;
          this.state = STATE.SUCCESS;
        });
      });
    } catch (e) {
      runInAction(() => {
        this.universes = [];
        this.state = STATE.ERROR;
      });

      console.error(`An error at getAllUniverses: ${e}`);
    }
  }
}
