import { combineEpics } from 'redux-observable';

import * as queueEpics from './queue-epics'

export default combineEpics(
  ...Object.values(queueEpics)
);
