import React, {useEffect} from 'react';
import styles from './environment.css';
import {Cell, Column, Table} from "@blueprintjs/table";
import {Button} from "@blueprintjs/core";

type Props = {
  getAll: () => any,
  remove: (payload: any) => void,
  environments: any[]
};

export default function EnvironmentList( { getAll, remove, environments}: Props) {

  const deleteEnvironment = (deleteEnvironment: string) => {
    remove(deleteEnvironment);
  }

  const cellRendererEnvironment = (rowIndex: number) => {
    return <Cell>{environments[rowIndex].name}</Cell>
  };

  const cellRendererUrl = (rowIndex: number) => {
    return <Cell>{environments[rowIndex].url}</Cell>
  };

  const cellRendererUserName = (rowIndex: number) => {
    return <Cell>{environments[rowIndex].userName}</Cell>
  };

  const cellRendererPassword = (rowIndex: number) => {
    return <Cell>{environments[rowIndex].password}</Cell>
  };
  const cellRendererDelete = (rowIndex: number) => {
    return <Cell><Button className="bp3-button" icon="delete" intent="danger" text=""
                         onClick={() => deleteEnvironment(environments[rowIndex].name)}/></Cell>
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div data-tid="table-container" className={styles.tablecontainer}>
      <Table numRows={environments?.length} defaultRowHeight={35} columnWidths={[100, 200, 100,100,50]}
             minColumnWidth={20}
             className={`${styles.myClass} bp3-dark`}>
        <Column name="Environment" cellRenderer={cellRendererEnvironment}/>
        <Column name="Url" cellRenderer={cellRendererUrl} />
        <Column name="Username" cellRenderer={cellRendererUserName} />
        <Column name="Password" cellRenderer={cellRendererPassword} />
        <Column name="#" cellRenderer={cellRendererDelete} />
      </Table>
    </div>
  );
}
