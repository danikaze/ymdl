import React from 'react';
import { remote } from 'electron';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import { TextField } from '@material-ui/core';
import { ProfileOptions } from '../../store/model';

export interface StateProps {
  open: boolean;
  data: ProfileOptions;
}

export interface DispatchProps {
  onClose(): void;
  onChange(data: ProfileOptions): void;
}

type StackProps = StateProps & DispatchProps & WithStyles<typeof styles>;

class RawOptions extends React.PureComponent<StackProps> {
  private readonly refObjects: { [key in keyof ProfileOptions]: React.RefObject<HTMLInputElement> } = {
    outputFolder: React.createRef<HTMLInputElement>(),
    outputName: React.createRef<HTMLInputElement>(),
  };

  public render() {
    const { open, onClose, data } = this.props;
    const refs = this.refObjects;

    return (
      <Dialog open={open} onClose={onClose} maxWidth='md' fullWidth>
        <DialogTitle>Options</DialogTitle>

        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            label='Output folder'
            fullWidth
            defaultValue={data.outputFolder}
            inputRef={refs.outputFolder}
            disabled
            onClick={this.chooseFolder}
          />

          <TextField
            margin='dense'
            label='Output file name'
            fullWidth
            defaultValue={data.outputName}
            inputRef={refs.outputName}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={this.saveAndClose} color='primary'>Save</Button>
        </DialogActions>
      </Dialog>
    );
  }

  private readonly saveAndClose = () => {
    const { onClose, onChange } = this.props;
    const refs = this.refObjects;

    onChange({
      outputFolder: refs.outputFolder.current.value,
      outputName: refs.outputName.current.value,
    });
    onClose();
  }

  private readonly chooseFolder = async () => {
    remote.dialog.showOpenDialog({
      title: 'Select output folder',
      properties: ['openDirectory'],
    }, (data?) => {
      if (data) {
        this.refObjects.outputFolder.current.value = data[0];
      }
    });
  }
}

export const Options = withStyles(styles)(RawOptions);
