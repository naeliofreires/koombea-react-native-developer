import {StoreBase} from '~/store/types';

export enum WARNS_TYPES {
  ONBOARDING = 'ONBOARDING',
}

export interface GlobalStoreProps extends StoreBase {
  warns: string[];
  setWarn(value: WARNS_TYPES): void;
}
