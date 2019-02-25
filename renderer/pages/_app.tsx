import React from 'react';
import { Store } from 'redux';
import App, { Container } from 'next/app';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { default as CssBaseline } from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import { Provider } from 'react-redux';
import { getPageContext } from '../lib/get-page-context';
import { initializeStore } from '../store';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState?) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

class MyApp extends App {
  private readonly pageContext = null;
  private readonly reduxStore: Store;

  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
    this.reduxStore = getOrCreateStore();
  }

  public render() {
    const { Component, pageProps } = this.props;
    const { registry, generateClassName, theme, sheetsManager } = this.pageContext;

    return (
      <Container>
        <Provider store={this.reduxStore}>
          <JssProvider registry={registry} generateClassName={generateClassName}>
            <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
              <CssBaseline />
              <Component pageContext={this.pageContext} {...pageProps} />
            </MuiThemeProvider>
          </JssProvider>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
