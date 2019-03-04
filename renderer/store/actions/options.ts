import { Action } from 'redux';
import { ProfileOptions } from '../model';

export interface ToggleOptionsAction extends Action {
  type: 'toggleOptions';
}

export interface UpdateOptionsAction extends Action {
  data;
  type: 'updateOptions';
}

export const toggleOptions = (): ToggleOptionsAction => ({
  type: 'toggleOptions',
});

export const updateOptions = (data: ProfileOptions): UpdateOptionsAction => ({
  data,
  type: 'updateOptions',
});
