import {Action} from 'redux';
import {
  CHANGE_ENVIRONMENT,
  ADD_ENVIRONMENT,
  GET_ENVIRONMENTS,
  REMOVE_ENVIRONMENT, GET_CURRENT_ENVIRONMENT,
  FETCH_VHOSTS_SUCCESS,
  CHANGE_VHOSTS, GET_CURRENT_VHOST
} from '../actions/environment-actions';
import {
  addEnvironment,
  changeCurrentEnvironment, getCurrentEnvironment,
  getEnvironments,
  removeEnvironment
} from "../services/environment-services";
import {changeCurrentVhosts, getCurrentVhost} from "../services/queues-service";

export default function environment(state = {
  environments: [] as any,
  currentEnvironment: "",
  currentVhost: "",
  vHosts: [] as any
}, action: Action<string>) {
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
    case GET_CURRENT_VHOST:
      let currentVhost = getCurrentVhost();

      return ({
        ...state,
        currentVhost: currentVhost
      })
    case FETCH_VHOSTS_SUCCESS:
      let hosts = action.payload;
      return ({
        ...state,
        vHosts: hosts
      })
    case CHANGE_VHOSTS:
      changeCurrentVhosts(action.payload);
      return {
        ...state,
        currentVhost: action.payload
      }
    default:
      return state;
  }
}
