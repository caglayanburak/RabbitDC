import {Dispatch as ReduxDispatch, Store as ReduxStore, Action} from 'redux';
import { StateType } from 'typesafe-actions';

export type stateType  = StateType<ReturnType<typeof import('./root-reducer').default>>

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<stateType, Action<string>>;
