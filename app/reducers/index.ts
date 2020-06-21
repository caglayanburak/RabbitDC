import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { queues } from './queue-reducers';
import environments from './environment';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    environments,
    queues
  });
}
