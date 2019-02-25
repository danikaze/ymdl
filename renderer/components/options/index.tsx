import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';

export interface StateProps {
}

export interface DispatchProps {
}

type StackProps = StateProps & DispatchProps & WithStyles<typeof styles>;

class RawOptions extends React.PureComponent<StackProps> {
  public render() {
    const { classes } = this.props;

    return (
      <Typography variant='h5' className={classes.root}>
        Options
      </Typography>
    );
  }
}

export const Options = withStyles(styles)(RawOptions);
