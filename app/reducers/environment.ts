import {Action} from 'redux';
import {
  CHANGE_ENVIRONMENT,
  ADD_ENVIRONMENT,
  GET_ENVIRONMENTS,
  REMOVE_ENVIRONMENT, GET_CURRENT_ENVIRONMENT
} from '../actions/environment';
import {
  addEnvironment,
  changeCurrentEnvironment, getCurrentEnvironment,
  getEnvironments,
  removeEnvironment
} from "../services/environment-services";

export default function environment(state = {environments: [], currentEnvironment: ""}, action: Action<string>) {
  switch (action.type) {
    case CHANGE_ENVIRONMENT:
      changeCurrentEnvironment(action.payload);
      return {
        ...state,
        currentEnvironment: action.payload
      }
    case ADD_ENVIRONMENT:
      addEnvironment(action.payload);
      return {
        ...state
      }
    case REMOVE_ENVIRONMENT:
      removeEnvironment(action.payload);

      return {
        ...state,
      }
    case GET_ENVIRONMENTS:
      let environments = getEnvironments();

      return ({
        ...state,
        environments: environments
      })
    case GET_CURRENT_ENVIRONMENT:
      let currentEnvironment = getCurrentEnvironment();

      return ({
        ...state,
        currentEnvironment: currentEnvironment
      })
    default:
      return state;
  }
}
