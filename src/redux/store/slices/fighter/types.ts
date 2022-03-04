import {FighterType} from '~/components/commons/Fighter/types';
import {STATUS} from '~/redux/store/types';

export type FighterState = {
  status: STATUS;
  data: FighterType[];
};
