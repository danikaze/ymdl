import { Action } from '../actions';
import { State } from '../model';
import { updateState } from '../../lib/update-state';

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'toggleOptions':
      return updateState(state, {
        ui: {
          showOptions: !state.ui.showOptions,
        },
      });

    case 'updateUrl':
      return state;

    default:
      return state;
  }
}
