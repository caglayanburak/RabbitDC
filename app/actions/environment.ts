import {Dispatch} from "../reducers/types";
import {getHosts} from "../services/queues-service";

export const CHANGE_ENVIRONMENT = 'CHANGE_ENVIRONMENT';
export const ADD_ENVIRONMENT = 'ADD_ENVIRONMENT';
export const GET_ENVIRONMENTS = 'GET_ENVIRONMENTS';
export const REMOVE_ENVIRONMENT = 'REMOVE_ENVIRONMENT';
export const GET_CURRENT_ENVIRONMENT = 'GET_CURRENT_ENVIRONMENT';
export const CHANGE_VHOSTS = 'CHANGE_VHOSTS';
export const GET_CURRENT_VHOST = 'GET_CURRENT_VHOST';
export const FETCH_VHOSTS_REQUEST = 'FETCH_VHOSTS_REQUEST';
export const FETCH_VHOSTS_FAILURE = 'FETCH_VHOSTS_FAILURE';
export const FETCH_VHOSTS_SUCCESS = 'FETCH_VHOSTS_SUCCESS';

export function change(currentEnvironment: any) {
  return {
    type: CHANGE_ENVIRONMENT,
    payload: currentEnvironment
  };
}

export function changeVhosts(currentVhosts: any) {
  return {
    type: CHANGE_VHOSTS,
    payload: currentVhosts
  };
}

export function getAll() {
  return {
    type: GET_ENVIRONMENTS
  };
}

export function getVhosts() {
  return (dispatch: Dispatch) => {
    getHosts().then((result: any) => {
      dispatch(fetchVhostsSuccess(result.data));
    }).catch((error: any) => {
      dispatch(fetchVhostsFailure(error));
    });
  };
}

export function getCurrentEnvironment() {
  return {
    type: GET_CURRENT_ENVIRONMENT
  };
}

export function getCurrentVhost() {
  return {
    type: GET_CURRENT_VHOST
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

const fetchVhostsRequest = () => {
  return {
    type: FETCH_VHOSTS_REQUEST
  };
}

const fetchVhostsFailure = () => {
  return {
    type: FETCH_VHOSTS_FAILURE
  };
}

const fetchVhostsSuccess = (vhosts: any[]) => {
  return {
    type: FETCH_VHOSTS_SUCCESS,
    payload: vhosts
  };
}


