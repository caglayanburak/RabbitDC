import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';


export type environmentStateType = {
  environment: string;
};

export type GetEnvironment = () => environmentStateType;

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<environmentStateType, Action<string>>;
