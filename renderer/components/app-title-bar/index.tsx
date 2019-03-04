import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import Toolbar from '@material-ui/core/Toolbar';

export interface StateProps {
  title: string;
  version: string;
  showOptions: boolean;
}

export interface DispatchProps {
  onToggleOptions(): void;
}

type StackProps = StateProps & DispatchProps & WithStyles<typeof styles>;

class RawAppTitleBar extends React.PureComponent<StackProps> {
  public render(): JSX.Element {
    const { classes, title, version, onToggleOptions } = this.props;

    return (
      <AppBar className={classes.root} position='static'>
        <Toolbar>
          <Typography color='inherit' variant='h2' className={classes.title}>
            {title}
            <span className={classes.version}>
              {version}
            </span>
          </Typography>

          <Button color='inherit' onClick={onToggleOptions}>
            Options
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export const AppTitleBar = withStyles(styles)(RawAppTitleBar);
