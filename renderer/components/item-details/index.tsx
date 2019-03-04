import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import { Item } from '../../store/model';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

export interface StateProps {
  data: Item;
}

export interface DispatchProps {
}

type StackProps = StateProps & DispatchProps & WithStyles<typeof styles>;

class RawItemDetails extends React.PureComponent<StackProps> {
  public render(): JSX.Element {
    const {
      classes,
    } = this.props;

    return (
      <Card className={classes.root}>
        <CardHeader
          title='Video details'
        />
        <CardContent />
      </Card>
    );
  }
}

export const ItemDetails = withStyles(styles)(RawItemDetails);
