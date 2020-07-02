import { createAsyncAction } from 'typesafe-actions';
import { QueueDto } from '../response-types/queue-dto';

export const getQueuesAsync = createAsyncAction(
  `GET_QUEUES_REQUEST`,
  `GET_QUEUES_SUCCESS`,
  `GET_QUEUES_FAILED`
)<undefined, QueueDto[], Error>();

export const purgeQueuesAsync = createAsyncAction(
  `PURGE_QUEUE_REQUEST`,
  `PURGE_QUEUE_SUCCESS`,
  `PURGE_QUEUE_FAILED`
)<undefined, boolean, Error>();
