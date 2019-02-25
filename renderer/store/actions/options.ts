import { Action } from 'redux';

export interface ToggleOptionsAction extends Action {
  type: 'toggleOptions';
}

export const toggleOptions = (): ToggleOptionsAction => ({
  type: 'toggleOptions',
});
