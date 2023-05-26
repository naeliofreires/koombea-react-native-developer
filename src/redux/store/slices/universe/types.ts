import {UniverseType} from '~/components/commons/Universe/types';
import {STATUS} from '~/redux/store/types';

export type UniverseState = {
  status: STATUS;
  data: UniverseType[];
  selectedUniverse?: UniverseType;
};
