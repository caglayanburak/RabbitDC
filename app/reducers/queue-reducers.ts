import { ActionType, createReducer } from 'typesafe-actions';
import { QueueDto } from '../response-types/queue-dto';
import * as actions from '../actions/queues'

type SessionActions = ActionType<typeof actions>;

export const queues = createReducer<QueueDto[], SessionActions>([])
  .handleAction(actions.getQueuesAsync.success, (state, action) => action.payload)
  .handleAction(actions.getQueuesAsync.failure, () => []);
