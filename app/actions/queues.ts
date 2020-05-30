import { GetState, Dispatch } from '../reducers/types';

export const ADD_Q = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function addQueue(queue){
return function(dispatch){
  return queuesApi.addQueue(queue).then()
}
}

export function deleteQueue(queue){
  return { type: "DELETE_QUEUE", queue}
}

export function loadCourses(){
  return function(dispatch){
    return courseApi.getCourses().then(courses => {
      dispatch(loadCourseSuccess(courses));
    } 
  }
}


