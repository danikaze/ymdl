import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import Input from '@material-ui/core/Input';

export interface StateProps {
  url?: string;
}

export interface DispatchProps {
  onClick?(url: string): void;
}

type StackProps = StateProps & DispatchProps & WithStyles<typeof styles>;

class RawUrlBar extends React.PureComponent<StackProps> {
  private readonly inputRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  public render(): JSX.Element {
    return (
      <div className={this.props.classes.root}>
        <Input
          inputRef={this.inputRef}
          value={this.props.url}
          placeholder='https://youtube.com/?w=foobar'
          autoFocus={true}
        />

        <Button color='primary' variant='outlined' onClick={this.onClick}>
          Fetch
        </Button>
      </div>
    );
  }

  private readonly onClick = () => {
    const { onClick } = this.props;

    if (onClick) {
      onClick(this.inputRef.current.value);
    }
  }
}

export const UrlBar = withStyles(styles)(RawUrlBar);
