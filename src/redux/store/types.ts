import {UniverseState} from '~/redux/store/slices/universe/types';
import {FighterState} from '~/redux/store/slices/fighter/types';

export enum STATUS {
  NONE = 'none',
  SUCCESS = 'fulfilled',
  PENDING = 'pending',
  ERROR = 'rejected',
}

export interface ReduxState {
  universe: UniverseState;
  fighter: FighterState;
}
