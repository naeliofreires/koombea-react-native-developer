import {StoreBase, StoreKey} from '~/store/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StoreInitializer} from '~/store';

const getStoreStoragePath = (key: StoreKey): string => `store/${key}`;

const setStore = async (store: StoreBase): Promise<void> => {
  try {
    const path = getStoreStoragePath(store.name);
    const value = JSON.stringify(store);
    await AsyncStorage.setItem(path, value);
  } catch (error) {
    console.error(`Can't load store: ${store.name} - ${error}`);
  }
};

const getStore = async (key: StoreKey): Promise<any> => {
  try {
    const path = getStoreStoragePath(key);
    const value = await AsyncStorage.getItem(path);

    if (value) {
      return JSON.parse(value) as StoreBase;
    } else {
      await setStore({name: key} as StoreBase);
    }
  } catch (error) {
    console.error(`Can't load store: ${key} - ${error}`);
  }
};

const loadStore = async (): Promise<Record<string, StoreBase> | undefined> => {
  try {
    const resource = {} as Record<string, StoreBase>;

    await Promise.all(
      Object.keys(StoreInitializer).map(async key => {
        const restoredStore = await getStore(key as StoreKey);

        // @ts-ignore
        resource[key] = new StoreInitializer[key](restoredStore);
      }),
    );

    return resource;
  } catch (e) {
    console.error(e);
  }
};

export const StoreUtil = {getStoreStoragePath, getStore, setStore, loadStore};
