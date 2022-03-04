import {useSelector} from 'react-redux';
import {ReduxState} from '~/redux/store/types';

export function useResource<T extends keyof ReduxState>(
  resourceName: T,
): ReduxState[T] {
  return useSelector((state: ReduxState) => state[resourceName]);
}
