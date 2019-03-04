import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { name, version } from '../../package.json';
import { reducer } from './reducers';
import { State } from './model';

export function initializeStore(initialState?: State) {
  const defaultState: State = {
    app: {
      version,
      title: name,
    },
    profiles: [],
    items: [],
    url: '',
    options: {
      outputFolder: '',
      outputName: '%author - %name.mp3',
    },
    ui: {
      showOptions: false,
    },
  };

  return createStore(
    reducer,
    initialState || defaultState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}
