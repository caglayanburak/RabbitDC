import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {History} from 'history';
import {queues, queuePurge, queueMove, queueDelete} from './queue-reducers';
import environments from './environment';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    environments,
    queues,
    queuePurge,
    queueMove,
    queueDelete
  });
}
