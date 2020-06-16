import {Dispatch} from "../reducers/types";

export const CHANGE_ENVIRONMENT = 'CHANGE_ENVIRONMENT';
export const ADD_ENVIRONMENT = 'ADD_ENVIRONMENT';
export const GET_ENVIRONMENTS = 'GET_ENVIRONMENTS';
export const REMOVE_ENVIRONMENT = 'REMOVE_ENVIRONMENT';
export const GET_CURRENT_ENVIRONMENT = 'GET_CURRENT_ENVIRONMENT';

export function change(currentEnvironment: any) {
  return {
    type: CHANGE_ENVIRONMENT,
    payload: currentEnvironment
  };
}

export function getAll() {
  return {
    type: GET_ENVIRONMENTS
  };
}

export function getCurrentEnvironment() {
  return {
    type: GET_CURRENT_ENVIRONMENT
  };
}

export const add = (env: any) => {
  return (dispatch: Dispatch) => {
    dispatch(save(env));
    dispatch(getAll());
  };
}

const save = (env: any) => {
  return {
    type: ADD_ENVIRONMENT,
    payload: env
  };
}

export const remove = (env: any) => {
  return (dispatch: Dispatch) => {
    dispatch(removeItem(env));
    dispatch(getAll());
  };
}

const removeItem = (env: any) => {
  return {
    type: REMOVE_ENVIRONMENT,
    payload: env
  };
}
