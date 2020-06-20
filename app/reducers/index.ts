import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import counter from './counter';
import queue from './queue-reducers';
import environments from './environment';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    counter,
    environments,
    queue
  });
}
