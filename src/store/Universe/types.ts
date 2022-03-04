import {StoreBase} from '~/store/types';
import {UniverseType} from '~/components/commons/Universe/types';

export interface UniverseStoreProps extends StoreBase {
  universes: UniverseType[];
  universeSelectedID: string | number;

  getAllUniverses(): Promise<void>;
  onSelectUniverseID(id: number | string): void;
  getUniverseByID(id: number | string): Promise<UniverseType>;
}
