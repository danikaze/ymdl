import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import { Item } from '../../store/model';

export interface StateProps {
  selected: boolean;
  data: Item;
}

export interface DispatchProps {
}

type StackProps = StateProps & DispatchProps & WithStyles<typeof styles>;

class RawItemPreview extends React.PureComponent<StackProps> {
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

export const ItemPreview = withStyles(styles)(RawItemPreview);
