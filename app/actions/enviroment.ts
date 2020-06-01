export const CHANGE_ENVIRONMENT = 'CHANGE_ENVIRONMENT';

export function change() {
  return {
    type: CHANGE_ENVIRONMENT
  };
}

/*
export function changeEnvironment() {
  return (dispatch: Dispatch, getState: GetState) => {
    const { environment } = getState();

    console.log(environment);
    //todo:change environment on local storage

    dispatch(change());
  };
}*/


