import {Dispatch as ReduxDispatch, Store as ReduxStore, Action} from 'redux';

export type environmentStateType = {
  environments: any[];
  vHosts: any[];
  currentEnvironment: string;
  currentVhost: string;
};

export type GetState = () => environmentStateType;

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<environmentStateType, Action<string>>;
