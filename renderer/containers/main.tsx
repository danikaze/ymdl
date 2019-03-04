import { ThunkDispatch } from 'redux-thunk';
import { createContainer, ContainerConfig } from '../helpers/create-container';
import { State } from '../store/model';
import { Action } from '../store/actions';
import { Main, StateProps, DispatchProps } from '../components/main';
import { toggleOptions, updateOptions } from '../store/actions/options';
import { updateUrl } from '../store/actions/main';

type TDispatch = ThunkDispatch<State, null, Action>;

function mapStateToProps(state: State): StateProps {
  return {
    url: state.url,
    title: state.app.title,
    version: state.app.version,
    showOptions: state.ui.showOptions,
    options: state.options,
    items: state.items,
    selectedItem: state.selectedItem,
  };
}

function mapDispatchToProps(dispatch: TDispatch): DispatchProps {
  return {
    onUrlChange: (url) => dispatch(updateUrl(url)),
    onToggleOptions: () => dispatch(toggleOptions()),
    onChangeOptions: (data) => dispatch(updateOptions(data)),
  };
}

const config: ContainerConfig<State, StateProps, DispatchProps> = {
  mapStateToProps,
  mapDispatchToProps,
  component: Main,
};

export const MainContainer = createContainer(config);
