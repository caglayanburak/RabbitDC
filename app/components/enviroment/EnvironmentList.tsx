import React, {useEffect, useState} from 'react';
import styles from './Environment.css';
import { Cell, Column, Table } from "@blueprintjs/table";
import {Button} from "@blueprintjs/core";


export default function EnvironmentList() {
  const [environments,setEnvironments]=useState([]);

  const cellRendererName = (rowIndex: number) => {
    return <Cell>{environments[rowIndex].name}</Cell>
  };

  const cellRendererUrl = (rowIndex: number) => {
    return <Cell>{environments[rowIndex].url}</Cell>
  };
  const cellRendererDelete = (rowIndex: number) => {
    return <Cell><Button class="bp3-button"  icon="refresh" intent="danger" text="Delete" /></Cell>
  };

  useEffect(()=>{
    let list= JSON.parse(localStorage.getItem("environments"));
    setEnvironments(list);
  },[])

  return (
    <div data-tid="table-container" className={styles.container}>

      <Table  numRows={environments.length} className={`${styles.myClass} bp3-dark`}>
        <Column name="Environment" cellRenderer={cellRendererName}/>
        <Column name="Url" cellRenderer={cellRendererUrl}/>
        <Column name="#" cellRenderer={cellRendererDelete}/>
      </Table>
    </div>
  );
}
