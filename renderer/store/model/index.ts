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
  optinos: ProfileOptions;
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
  selectedItem: Item;
  options: ProfileOptions;
  ui: Ui;
}
