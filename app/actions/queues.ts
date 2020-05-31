import {GetState, Dispatch} from '../reducers/types';

export const ADD_Q = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function addQueue(queue: any) {
  return function(dispatch: any) {
    return queuesApi.addQueue(queue).then();
  };
}

export function deleteQueue(queue: any) {
  return {type: 'DELETE_QUEUE', queue}
}

export function loadCourses() {
  return function(dispatch: any) {
    return courseApi.getCourses().then(courses => {
      dispatch(loadCourseSuccess(courses));
    });
  };
}
