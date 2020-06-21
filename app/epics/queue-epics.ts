import { isActionOf } from 'typesafe-actions';

import * as actions from '../actions/queues'

import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap} from 'rxjs/operators';
import { getQueues } from '../services/queues-service';

export const queueEpic: any = (action$) =>
  action$.pipe(
    filter(isActionOf(actions.getQueuesAsync.request)),
    switchMap(() =>
      from(getQueues()).pipe(
        map(result => actions.getQueuesAsync.success(result)),
        catchError(err => of(actions.getQueuesAsync.failure(err)))
      )
    )
  );
