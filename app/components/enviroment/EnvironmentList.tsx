import React, {useEffect, useState} from 'react';
import styles from './Environment.css';
import {Cell, Column, Table} from "@blueprintjs/table";
import {Button} from "@blueprintjs/core";
import {HeaderCell} from "@blueprintjs/table/lib/cjs/headers/headerCell";
import {AppToaster} from "../../toast/toaster";

export default function EnvironmentList() {
  const [environments, setEnvironments] = useState([]);

  const deleteEnvironment = (deleteEnvironment) => {
    let environments = JSON.parse(localStorage.getItem("environments"));

    var deleteIndex = environments.findIndex(x => x.name == deleteEnvironment);
    environments.splice(deleteIndex, 1);
    setEnvironments(environments);
    localStorage.setItem("environments", JSON.stringify(environments));
    AppToaster.show({message: "Environment deleted.", icon: "confirm", intent: "success"});
  }

  const cellRendererEnvironment = (rowIndex: number) => {
    return <Cell>{environments[rowIndex].name}</Cell>
  };

  const cellRendererUrl = (rowIndex: number) => {
    return <Cell>{environments[rowIndex].url}</Cell>
  };
  const cellRendererDelete = (rowIndex: number) => {
    return <Cell><Button className="bp3-button" icon="delete" intent="danger" text=""
                         onClick={() => deleteEnvironment(environments[rowIndex].name)}/></Cell>
  };

  const environmentHeaderCellRenderer = () => {
    return <HeaderCell>Environment</HeaderCell>
  };

  const urlHeaderCellRenderer = () => {
    return <HeaderCell>Url</HeaderCell>
  };

  const deleteHeaderCellRenderer = () => {
    return <HeaderCell>#</HeaderCell>
  };

  useEffect(() => {
    let list = JSON.parse(localStorage.getItem("environments"));
    setEnvironments(list);
  }, []);

  return (
    <div data-tid="table-container" className={styles.tablecontainer}>

      <Table numRows={environments.length} defaultRowHeight={35} columnWidths={[150, 300, 50]} minColumnWidth={20}
             className={`${styles.myClass} bp3-dark`}>
        <Column name="Environment" cellRenderer={cellRendererEnvironment}
                columnHeaderCellRenderer={environmentHeaderCellRenderer}/>
        <Column name="Url" cellRenderer={cellRendererUrl} columnHeaderCellRenderer={urlHeaderCellRenderer}/>
        <Column name="#" cellRenderer={cellRendererDelete} columnHeaderCellRenderer={deleteHeaderCellRenderer}/>
      </Table>
    </div>
  );
}
