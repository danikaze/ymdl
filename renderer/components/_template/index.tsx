import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';

export interface StateProps {
}

export interface DispatchProps {
}

type StackProps = StateProps & DispatchProps & WithStyles<typeof styles>;

class RawTemplate extends React.PureComponent<StackProps> {
  public render(): JSX.Element {
    const {
      classes,
    } = this.props;

    return (
      <div className={classes.root}>
        <span />
      </div>
    );
  }
}

export const Template = withStyles(styles)(RawTemplate);
