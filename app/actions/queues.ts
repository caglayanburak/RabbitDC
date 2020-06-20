import { createAsyncAction } from 'typesafe-actions';
import { QueueDto } from '../response-types/queue-dto';

export const getQueuesAsync = createAsyncAction(
  `GET_QUEUES_REQUEST`,
  `GET_QUEUES_SUCCESS`,
  `GET_QUEUES_FAILED`
)<undefined, QueueDto[], Error>();
