import React, {useEffect} from 'react';
import styles from './Environment.css';
import {Cell, Column, Table} from "@blueprintjs/table";
import {Button} from "@blueprintjs/core";
import {HeaderCell} from "@blueprintjs/table/lib/cjs/headers/headerCell";

type Props = {
  getAll: () => any,
  remove: (payload: any) => void,
  environments: any[]
};

export default function EnvironmentList(props: Props) {

  const deleteEnvironment = (deleteEnvironment: string) => {
    props.remove(deleteEnvironment);
  }

  const cellRendererEnvironment = (rowIndex: number) => {
    return <Cell>{props.environments[rowIndex].name}</Cell>
  };

  const cellRendererUrl = (rowIndex: number) => {
    return <Cell>{props.environments[rowIndex].url}</Cell>
  };

  const cellRendererUserName = (rowIndex: number) => {
    return <Cell>{props.environments[rowIndex].userName}</Cell>
  };

  const cellRendererPassword = (rowIndex: number) => {
    return <Cell>{props.environments[rowIndex].password}</Cell>
  };
  const cellRendererDelete = (rowIndex: number) => {
    return <Cell><Button className="bp3-button" icon="delete" intent="danger" text=""
                         onClick={() => deleteEnvironment(props.environments[rowIndex].name)}/></Cell>
  };

  const environmentHeaderCellRenderer = () => {
    return <HeaderCell>Environment</HeaderCell>
  };

  const urlHeaderCellRenderer = () => {
    return <HeaderCell>Url</HeaderCell>
  };

  const userNameHeaderCellRenderer = () => {
    return <HeaderCell>User Name</HeaderCell>
  };

  const passwordHeaderCellRenderer = () => {
    return <HeaderCell>Password</HeaderCell>
  };

  const deleteHeaderCellRenderer = () => {
    return <HeaderCell>#</HeaderCell>
  };

  useEffect(() => {
    props.getAll();
  }, []);

  return (
    <div data-tid="table-container" className={styles.tablecontainer}>
      <Table numRows={props.environments?.length} defaultRowHeight={35} columnWidths={[100, 200, 100,100,50]}
             minColumnWidth={20}
             className={`${styles.myClass} bp3-dark`}>
        <Column name="Environment" cellRenderer={cellRendererEnvironment}
                columnHeaderCellRenderer={environmentHeaderCellRenderer}/>
        <Column name="Url" cellRenderer={cellRendererUrl} columnHeaderCellRenderer={urlHeaderCellRenderer}/>
        <Column name="UserName" cellRenderer={cellRendererUserName} columnHeaderCellRenderer={userNameHeaderCellRenderer}/>
        <Column name="password" cellRenderer={cellRendererPassword} columnHeaderCellRenderer={passwordHeaderCellRenderer}/>
        <Column name="#" cellRenderer={cellRendererDelete} columnHeaderCellRenderer={deleteHeaderCellRenderer}/>
      </Table>
    </div>
  );
}
