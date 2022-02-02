import {makeAutoObservable, runInAction} from 'mobx';

import {api} from '~/api';
import {STATE} from '~/store/types';
import {UniverseStoreProps} from '~/store/Universe/types';
import {UniverseProps} from '~/components/commons/Universe/types';

export const UniverseStoreKey = 'universe';
export class UniverseStore {
  name: string;
  state: STATE;
  universeSelectedID: string | number = 0;
  universes = [] as UniverseProps[];

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

  getUniverseByID(id: number | string): UniverseProps | undefined {
    try {
      if (id) {
        return this.universes.filter(
          item => item.objectID === id,
        )[0] as UniverseProps;
      }
    } catch (e) {
      console.error(`An error at ${e}`);
    }
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

      await api
        .get('universes')
        .then(({data}) => {
          runInAction(() => {
            this.universes = data;
            this.state = STATE.SUCCESS;
          });
        })
        .catch(() => {
          runInAction(() => {
            this.universes = [];
            this.state = STATE.ERROR;
          });
        });
    } catch (e) {
      console.log(`An error at getAllUniverses: ${e}`);
    }
  }
}
