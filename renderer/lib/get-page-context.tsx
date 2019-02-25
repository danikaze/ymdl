import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';

// tslint:disable:no-magic-numbers

// https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

function createPageContext() {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName(),
  };
}

interface Window {
  __INIT_MATERIAL_UI__: any; // tslint:disable-line:no-any
}

declare var window: Window;

export function getPageContext() {
  if (typeof window === 'undefined') {
    return createPageContext();
  }
  if (!window.__INIT_MATERIAL_UI__) {
    window.__INIT_MATERIAL_UI__ = createPageContext();
  }
  return window.__INIT_MATERIAL_UI__;
}
