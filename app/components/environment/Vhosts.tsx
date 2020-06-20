import React from 'react';

type Props = {
  changeVhosts: (payload: any) => void,
  currentVhost: string,
  vHosts: any[]
};

export const Vhosts = ({changeVhosts, vHosts, currentVhost}: Props) => {

  return (
    <div className="bp3-select .modifier">
      <select onChange={(e) => {
        changeVhosts(e.target.value)
      }}>
        <option>Vhosts</option>
        {vHosts?.map((item: any, index: number) => (
          <option value={item.name} selected={item.name == currentVhost} key={index}>{item.name}</option>))}
      </select>
    </div>)
};
