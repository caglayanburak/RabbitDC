import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

type Props = {
  change: (payload: any) => void
};

export const Environment = ({change}: Props) => {
  const dispatch = useDispatch();

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
      <select onChange={ (e) => change(e.target.value)}>
        {environments?.map((item: any, index: number) => (
          <option value={item.name} key={index} selected={item.name == currentEnvironment?.name}>{item.name}</option>))}
      </select>
    </div>)
};
