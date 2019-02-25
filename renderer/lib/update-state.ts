import { extendObjectsOnly } from './extend-objects-only';

type PartialDeep<T> = {
  [P in keyof T]?: PartialDeep<T[P]>
} | string | number | boolean;

/**
 * Use this function to correctly extend and return the next redux state based on your reducers
 *
 * @param currentState Current redux state
 * @param update Changes to apply to the current state
 * @returns New state object
 */
export function updateState<T>(currentState: T, update: PartialDeep<T>): T {
  // tslint:disable-next-line:no-any
  return extendObjectsOnly({}, currentState, (update as any) as T) as T;
}
