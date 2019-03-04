import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import { UrlBar } from '../url-bar';
import { AppTitleBar } from '../app-title-bar';
import Grid from '@material-ui/core/Grid';
import { ProfileOptions, Item } from '../../store/model';
import { Options } from '../options';
import { ItemList } from '../item-list';
import { ItemDetails } from '../item-details';

export interface StateProps {
  url: string;
  title: string;
  version: string;
  showOptions: boolean;
  options: ProfileOptions;
  items: Item[];
  selectedItem?: Item;
}

export interface DispatchProps {
  onUrlChange(url: string): void;
  onToggleOptions(): void;
  onChangeOptions(data: ProfileOptions): void;
}

type StackProps = StateProps & DispatchProps & WithStyles<typeof styles>;

class RawMain extends React.PureComponent<StackProps> {
  public render(): JSX.Element {
    const {
      classes,
      url,
      title,
      version,
      options,
      items,
      selectedItem,
      showOptions,
      onUrlChange,
      onToggleOptions,
      onChangeOptions,
    } = this.props;

    return (
      <div className={classes.root}>
        <AppTitleBar
          title={title}
          version={version}
          showOptions={showOptions}
          onToggleOptions={onToggleOptions}
        />

        <Grid container justify='center' spacing={24} className={classes.main}>
          <Grid item xs={12}>
            <UrlBar url={url} onClick={onUrlChange} />
          </Grid>

          <Grid item xs={12} md={6}>
            <ItemList
              items={items}
              selectedItem={selectedItem}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <ItemDetails
              data={selectedItem}
            />
          </Grid>
        </Grid>

        <Options
          open={showOptions}
          data={options}
          onClose={onToggleOptions}
          onChange={onChangeOptions}
        />
      </div>
    );
  }
}

export const Main = withStyles(styles)(RawMain);
