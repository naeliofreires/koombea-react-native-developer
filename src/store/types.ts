export type StoreKey = 'universe' | 'fighter' | 'global';

export enum STATE {
  NONE,
  ERROR,
  SUCCESS,
  PENDING,
}
export interface StoreBase {
  name: StoreKey;
  state: STATE;
}
