import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Options } from '../options';
import { styles } from './styles';
import { UrlBar } from '../url-bar';
import { AppTitleBar } from '../app-title-bar.tsx';

export interface StateProps {
  title: string;
  version: string;
  showOptions: boolean;
}

export interface DispatchProps {
  onToggleOptions(): void;
  onUrlChange(url: string): void;
}

type StackProps = StateProps & DispatchProps & WithStyles<typeof styles>;

class RawMain extends React.PureComponent<StackProps> {
  public render(): JSX.Element {
    const { title, version, showOptions, onUrlChange, classes, onToggleOptions } = this.props;

    return (
      <div className={classes.root}>
        <AppTitleBar
          title={title}
          version={version}
          showOptions={showOptions}
          onToggleOptions={onToggleOptions}
        />

        <UrlBar onClick={onUrlChange} />

        {showOptions ? <Options /> : null}
      </div>
    );
  }
}

export const Main = withStyles(styles)(RawMain);
