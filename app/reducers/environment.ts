import { Action } from 'redux';
import { CHANGE_ENVIRONMENT } from '../actions/enviroment';

export default function environment(state = {environment:""}, action: Action<string>) {
  switch (action.type) {
    case CHANGE_ENVIRONMENT:
       //todo:change environment on local storage
      console.log("reducer:" + action.payload);
      return (
        {
          environment: action.payload
        }
      )
    default:
        return state;
  }
}
