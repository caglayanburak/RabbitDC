import { createAsyncAction } from 'typesafe-actions';
import { QueueDto } from '../response-types/queue-dto';

export const getQueuesAsync = createAsyncAction(
  `GET_QUEUES_REQUEST`,
  `GET_QUEUES_SUCCESS`,
  `GET_QUEUES_FAILED`
)<undefined, QueueDto[], Error>();

export const getNodesAsync = createAsyncAction(
  `GET_NODES_REQUEST`,
  `GET_NODES_SUCCESS`,
  `GET_NODES_FAILED`
)<undefined, any[], Error>();

export const getOverviewAsync = createAsyncAction(
  `GET_OVERVIEW_REQUEST`,
  `GET_OVERVIEW_SUCCESS`,
  `GET_OVERVIEW_FAILED`
)<undefined, any, Error>();

export const getQueueDetailsAsync = createAsyncAction(
  `GET_QUEUE_DETAILS_REQUEST`,
  `GET_QUEUE_DETAILS_SUCCESS`,
  `GET_QUEUE_DETAILS_FAILED`
)<undefined, any[], Error>();

export const purgeQueuesAsync = createAsyncAction(
  `PURGE_QUEUE_REQUEST`,
  `PURGE_QUEUE_SUCCESS`,
  `PURGE_QUEUE_FAILED`
)<undefined, boolean, Error>();

export const moveQueueAsync = createAsyncAction(
  `MOVE_QUEUE_REQUEST`,
  `MOVE_QUEUE_SUCCESS`,
  `MOVE_QUEUE_FAILED`
)<undefined, boolean, Error>();

export const deleteQueueAsync = createAsyncAction(
  `DELETE_QUEUE_REQUEST`,
  `DELETE_QUEUE_SUCCESS`,
  `DELETE_QUEUE_FAILED`
)<undefined, boolean, Error>();
