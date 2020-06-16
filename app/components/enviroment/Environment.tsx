import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

export const Environment = () => {
  const dispatch = useDispatch();

  const changeEnvironment = (e: any) => {
    dispatch({
      type: "CHANGE_ENVIRONMENT",
      payload: e.target.value
    })
  }

  const environments = useSelector(state => state.environments.environments);
  const currentEnvironment = useSelector(state => state.environments.currentEnvironment);
  useEffect(() => {
    dispatch({
      type: "GET_ENVIRONMENTS"
    });
    dispatch({
      type: "GET_CURRENT_ENVIRONMENT"
    })
  }, []);

  return (
    <div className="bp3-select .modifier">
      <select onChange={changeEnvironment}>
        <option>Environments</option>
        {environments?.map((item: any) => (<option value={item.name} selected={item.name == currentEnvironment}>{item.name}</option>))}
      </select>
    </div>)
};
