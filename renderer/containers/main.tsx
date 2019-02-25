import { ThunkDispatch } from 'redux-thunk';
import { createContainer, ContainerConfig } from '../helpers/create-container';
import { State } from '../store/model';
import { Action } from '../store/actions';
import { Main, StateProps, DispatchProps } from '../components/main';
import { toggleOptions } from '../store/actions/options';
import { updateUrl } from '../store/actions/main';

type TDispatch = ThunkDispatch<State, null, Action>;

function mapStateToProps(state: State): StateProps {
  return {
    title: state.app.title,
    version: state.app.version,
    showOptions: state.ui.showOptions,
  };
}

function mapDispatchToProps(dispatch: TDispatch): DispatchProps {
  return {
    onToggleOptions: () => dispatch(toggleOptions()),
    onUrlChange: (url) => dispatch(updateUrl(url)),
  };
}

const config: ContainerConfig<State, StateProps, DispatchProps> = {
  mapStateToProps,
  mapDispatchToProps,
  component: Main,
};

export const MainContainer = createContainer(config);
