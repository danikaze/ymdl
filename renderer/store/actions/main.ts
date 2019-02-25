import { Action } from 'redux';

export interface UpdateUrlAction extends Action {
  type: 'updateUrl';
  url: string;
}

export const updateUrl = (url: string): UpdateUrlAction => ({
  url,
  type: 'updateUrl',
});
