import { ToggleOptionsAction, UpdateOptionsAction } from './options';
import { UpdateUrlAction } from './main';

export type Action = ToggleOptionsAction
                   | UpdateOptionsAction
                   | UpdateUrlAction;
