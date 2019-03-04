import { ThunkDispatch } from 'redux-thunk';
import { Action } from '../actions';

export interface AppProps {
  title: string;
  version: string;
}

export interface ProfileOptions {
  outputFolder: string;
  outputName: string;
}

export interface Profile {
  name: string;
  url: string;
  options: ProfileOptions;
}

export interface Item {
  title: string;
  thumbnails: string[];
  url: string;
}

export interface Ui {
  showOptions: boolean;
}

export interface State {
  app: AppProps;
  profiles: Profile[];
  items: Item[];
  selectedItem?: Item;
  url: string;
  options: ProfileOptions;
  ui: Ui;
}

export type TypeDispatch = ThunkDispatch<State, null, Action>;
