import {makeAutoObservable, runInAction} from 'mobx';

import {STATE} from '~/store/types';
import {GlobalStoreProps, WARNS_TYPES} from '~/store/Global/types';

export const GlobalStoreKey = 'global';
export class GlobalStore {
  name: string;
  state: STATE;
  warns = [] as string[];

  constructor(restoredStore: GlobalStoreProps | null) {
    this.name = GlobalStoreKey;
    this.state = STATE.NONE;

    if (restoredStore) {
      if (restoredStore.warns) {
        this.warns = restoredStore.warns;
      }
    }

    makeAutoObservable(this);
  }

  setWarn(value: WARNS_TYPES) {
    if (value) {
      runInAction(() => {
        this.warns.push(value);
      });
    }
  }
}
