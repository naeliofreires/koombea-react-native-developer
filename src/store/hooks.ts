import {useContext} from 'react';
import {StoreContext} from '.';
import {StoreKey} from './types';

export const useStore = <T>(key: StoreKey): T => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error(
      "Can't find a StoreContext, you should wrap App with a StoreProvider.",
    );
  }

  // @ts-ignore
  return context[key] as unknown as T;
};
