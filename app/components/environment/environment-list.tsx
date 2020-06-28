import React, {useEffect} from 'react';
import { DetailsList, DetailsListLayoutMode, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import {QueueDto} from "../../response-types/queue-dto";
import { DefaultButton, IIconProps, IButtonStyles } from 'office-ui-fabric-react';
import {initializeIcons} from "office-ui-fabric-react/lib/Icons";
import {gridStyles} from "./environment-styles";
import {IColumnProps} from "@blueprintjs/table";

type Props = {
  getAll: () => any,
  remove: (payload: any) => void,
  environments: any[]
};

export default function EnvironmentList( { getAll, remove, environments}: Props) {
  const deleteIcon: IIconProps = { iconName: 'trash' };

  const deleteEnvironment = (deleteEnvironment: string) => {
    remove(deleteEnvironment);
  }

  useEffect(() => {
    initializeIcons();
    getAll();
  }, []);

  const _columns: IColumn[] = [
    {key: 'Name', name: 'Name', fieldName: 'name', minWidth: 100,maxWidth:200, isResizable: true },
    {key: 'Url', name: 'Url', fieldName: 'url', minWidth: 100,  isResizable: true},
    {key: 'User Name', name: 'User Name', fieldName: 'userName', minWidth: 100, isResizable: true},
    {key: 'Password', name: 'Password', fieldName: 'password', minWidth: 100,  isResizable: true},
    {key: 'delete', name: '#', fieldName: '', minWidth: 100,  isResizable: true},
  ];

  const deleteButtonStyles: IButtonStyles = {
    root : { backgroundColor: 'white', color: 'red',border:'1px solid red' },
  };

  const _renderItemColumn = (item: QueueDto, index: number, column: IColumn) => {
    const fieldContent = item[column.fieldName as keyof QueueDto] as string;

    switch (column.key) {
      case 'delete':
        return  <DefaultButton iconProps={deleteIcon} styles={deleteButtonStyles} allowDisabledFocus onClick={() => deleteEnvironment(environments[index].name)}  >
          Delete
        </DefaultButton>;

      default:
        return <span>{fieldContent}</span>;
    }
  }

  return (
    <div data-tid="table-container">
      <DetailsList
        compact={true}
        items={environments}
        columns={_columns}
        layoutMode={DetailsListLayoutMode.justified}
        onRenderItemColumn={_renderItemColumn}
      />
    </div>
  );
}
