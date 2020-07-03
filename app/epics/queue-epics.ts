import { isActionOf } from 'typesafe-actions';

import * as actions from '../actions/queue-actions'

import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap} from 'rxjs/operators';
import {getQueues, purgeQueue, moveQueue, deleteQueue} from '../services/queues-service';

export const queueEpic: any = (action$ : any) =>
  action$.pipe(
    filter(isActionOf(actions.getQueuesAsync.request)),
    switchMap((action : any) =>
      from(getQueues(action.payload)).pipe(
        map(result => actions.getQueuesAsync.success(result)),
        catchError(err => of(actions.getQueuesAsync.failure(err)))
      )
    )
  );

export const queuePurgeEpic: any = (action$ : any) =>
  action$.pipe(
    filter(isActionOf(actions.purgeQueuesAsync.request)),
    switchMap((action : any) =>
      from(purgeQueue(action.payload)).pipe(
        map(result => actions.purgeQueuesAsync.success(result)),
        catchError(err => of(actions.getQueuesAsync.failure(err)))
      )
    )
  );

export const queueMoveEpic: any = (action$ : any) =>
  action$.pipe(
    filter(isActionOf(actions.moveQueueAsync.request)),
    switchMap((action : any) =>
      from(moveQueue(action.payload.fromQueueName,action.payload.toQueueName)).pipe(
        map(result => actions.moveQueueAsync.success(result)),
        catchError(err => of(actions.moveQueueAsync.failure(err)))
      )
    )
  );

export const queueDeleteEpic: any = (action$ : any) =>
  action$.pipe(
    filter(isActionOf(actions.deleteQueueAsync.request)),
    switchMap((action : any) =>
      from(deleteQueue(action.payload)).pipe(
        map(result => actions.deleteQueueAsync.success(result)),
        catchError(err => of(actions.deleteQueueAsync.failure(err)))
      )
    )
  );
