import {StoreBase} from '~/store/types';
import {UniverseProps} from '~/components/commons/Universe/types';

export interface UniverseStoreProps extends StoreBase {
  universes: UniverseProps[];
  universeSelectedID: string | number;

  getAllUniverses(): Promise<void>;
  onSelectUniverseID(id: number | string): void;
  getUniverseByID(id: number | string): Promise<UniverseProps>;
}
