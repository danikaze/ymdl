import { name, version } from '../../package.json';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { reducer } from './reducers';
import { State } from './model';

const defaultState: State = {
  app: {
    version,
    title: name,
  },
  profiles: [],
  items: [],
  selectedItem: null,
  options: {
    outputFolder: '',
    outputName: '',
  },
  ui: {
    showOptions: true,
  },
};

export function initializeStore(initialState: State = defaultState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
