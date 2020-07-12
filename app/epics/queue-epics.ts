import {isActionOf} from 'typesafe-actions';

import * as actions from '../actions/queue-actions'

import {from, of} from 'rxjs';
import {catchError, filter, map, switchMap} from 'rxjs/operators';
import {
  getQueues,
  purgeQueue,
  moveQueue,
  deleteQueue,
  getQueueDetails,
  getOverview,
  getNodes
} from '../services/queues-service';

export const queueEpic: any = (action$: any) =>
  action$.pipe(
    filter(isActionOf([actions.getQueuesAsync.request, actions.moveQueueAsync.success, actions.purgeQueuesAsync.success,actions.deleteQueueAsync.success])),
    switchMap((action: any) =>
      from(getQueues(action.payload)).pipe(
        map(result => actions.getQueuesAsync.success(result)),
        catchError(err => of(actions.getQueuesAsync.failure(err)))
      )
    )
  );

export const overviewEpic: any = (action$: any) =>
  action$.pipe(
    filter(isActionOf([actions.getOverviewAsync.request])),
    switchMap((action: any) =>
      from(getOverview()).pipe(
        map(result => actions.getOverviewAsync.success(result)),
        catchError(err => of(actions.getOverviewAsync.failure(err)))
      )
    )
  );

export const nodesEpic: any = (action$: any) =>
  action$.pipe(
    filter(isActionOf([actions.getNodesAsync.request])),
    switchMap((action: any) =>
      from(getNodes()).pipe(
        map(result => actions.getNodesAsync.success(result)),
        catchError(err => of(actions.getNodesAsync.failure(err)))
      )
    )
  );

export const queueDetailsEpic: any = (action$: any) =>
  action$.pipe(
    filter(isActionOf([actions.getQueueDetailsAsync.request])),
    switchMap((action: any) =>
      from(getQueueDetails(action.payload)).pipe(
        map(result => actions.getQueueDetailsAsync.success(result)),
        catchError(err => of(actions.getQueueDetailsAsync.failure(err)))
      )
    )
  );

export const queuePurgeEpic: any = (action$: any) =>
  action$.pipe(
    filter(isActionOf(actions.purgeQueuesAsync.request)),
    switchMap((action: any) =>
      from(purgeQueue(action.payload)).pipe(
        map(result => actions.purgeQueuesAsync.success(result)),
        catchError(err => of(actions.getQueuesAsync.failure(err)))
      )
    )
  );

export const queueMoveEpic: any = (action$: any) =>
  action$.pipe(
    filter(isActionOf(actions.moveQueueAsync.request)),
    switchMap((action: any) =>
      from(moveQueue(action.payload.fromQueueName, action.payload.toQueueName)).pipe(
        map(result => actions.moveQueueAsync.success(result)),
        catchError(err => of(actions.moveQueueAsync.failure(err)))
      )
    )
  );

export const queueDeleteEpic: any = (action$: any) =>
  action$.pipe(
    filter(isActionOf(actions.deleteQueueAsync.request)),
    switchMap((action: any) =>
      from(deleteQueue(action.payload)).pipe(
        map(result => actions.deleteQueueAsync.success(result)),
        catchError(err => of(actions.deleteQueueAsync.failure(err)))
      )
    )
  );
