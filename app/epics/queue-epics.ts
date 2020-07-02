import { isActionOf } from 'typesafe-actions';

import * as actions from '../actions/queue-actions'

import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap} from 'rxjs/operators';
import {getQueues, purgeQueue} from '../services/queues-service';

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
