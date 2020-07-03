import { ActionType, createReducer } from 'typesafe-actions';
import { QueueDto } from '../response-types/queue-dto';
import * as actions from '../actions/queue-actions'

type SessionActions = ActionType<typeof actions>;

export const queues = createReducer<QueueDto[], SessionActions>([])
  .handleAction(actions.getQueuesAsync.success, (state, action) => action.payload)
  .handleAction(actions.getQueuesAsync.failure, () => []);

export const queuePurge = createReducer<boolean, SessionActions>(false)
  .handleAction(actions.purgeQueuesAsync.success, (state, action) => action.payload)
  .handleAction(actions.purgeQueuesAsync.failure, () => false);

export const queueMove = createReducer<boolean, SessionActions>(false)
  .handleAction(actions.moveQueueAsync.success, (state, action) => action.payload)
  .handleAction(actions.moveQueueAsync.failure, () => false);

export const queueDelete = createReducer<boolean, SessionActions>(false)
  .handleAction(actions.deleteQueueAsync .success, (state, action) => action.payload)
  .handleAction(actions.deleteQueueAsync.failure, () => false);
