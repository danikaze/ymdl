import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export interface StateProps {
  url: string;
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
      <Grid
        container
        alignItems='flex-end'
        className={this.props.classes.root}
        justify='space-between'
        spacing={16}
      >
        <Grid item xs={8} sm={10}>
          <TextField
            inputRef={this.inputRef}
            defaultValue={this.props.url}
            label='Video or playlist URL'
            placeholder='https://youtube.com/?w=foobar'
            autoFocus
            fullWidth
          />
        </Grid>

        <Grid item xs={4} sm={2}>
          <Button
            color='primary'
            variant='outlined'
            onClick={this.onClick}
            fullWidth
          >
            Fetch
          </Button>
        </Grid>
      </Grid>
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
