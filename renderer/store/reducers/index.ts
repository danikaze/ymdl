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

    case 'updateOptions':
      return updateState(state, {
        options: action.data,
      });

    case 'updateUrl':
      return updateState(state, {
        url: action.url,
      });

    default:
      return state;
  }
}
