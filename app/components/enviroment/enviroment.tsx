import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import * as constants from '../../constants/constants.json';

export const Environment = () => {
  const dispatch = useDispatch();

  const changeEnvironment = (e: any) => {
    dispatch({
      type: "CHANGE_ENVIRONMENT",
      payload: e.target.value
    })
  }

  const [environments, setEnvironments] = useState([]);
  useEffect(() => {
    let envDatas = localStorage.getItem(constants.enviroments);
    let envs = JSON.parse(envDatas);
    setEnvironments(envs);
  }, []);

  return (
    <div className="bp3-select .modifier">
      <select onChange={changeEnvironment}>
        <option>Environments</option>
        {environments.map((item: any) => (<option value={item.url}>{item.name}</option>))}
      </select>
    </div>)
};
