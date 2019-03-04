import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import { Item } from '../../store/model';
import { ItemPreview } from '../item-preview';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

export interface StateProps {
  items: Item[];
  selectedItem: Item;
}

export interface DispatchProps {
}

type StackProps = StateProps & DispatchProps & WithStyles<typeof styles>;

class RawItemList extends React.PureComponent<StackProps> {
  public render(): JSX.Element {
    const {
      classes,
      items,
      selectedItem,
    } = this.props;

    return (
      <Card className={classes.root}>
        <CardHeader
          title='Videos'
        />
        <CardContent>
          {items.map((item) => <ItemPreview data={item} selected={item === selectedItem} />)}
        </CardContent>
      </Card>
    );
  }
}

export const ItemList = withStyles(styles)(RawItemList);
