import * as React from 'react';
import {useEffect, useState} from 'react';
import {QueueDto} from '../../response-types/queue-dto';
import {ScrollablePane} from 'office-ui-fabric-react/lib/ScrollablePane';
import {initializeIcons} from 'office-ui-fabric-react/lib/Icons';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import {
  DetailsList,
  IColumn
} from 'office-ui-fabric-react/lib/DetailsList';
import {CommandBar, ICommandBarItemProps} from 'office-ui-fabric-react/lib/CommandBar';
import {FontIcon} from 'office-ui-fabric-react/lib/Icon';
import {MoveModal} from "./move-modal";
import {DialogBasicExample} from "./dialog";

type props = {
  currentVhost: string
  queues: QueueDto[]
  getQueues: any,
  purgeQueue: (paramters: any) => boolean,
  moveQueue: (payload: any) => boolean,
  deleteQueue: (payload: any) => boolean

}


export const Queues = ({currentVhost, queues, getQueues, purgeQueue, moveQueue, deleteQueue}: props) => {
  const [openModal, setOpenModal] = useState(false);
  const [dialogState, setDialogState] = useState(false);
  const [currentQueueName, setCurrentQueueName] = useState("");
  const [dialogMessage, setDialogMessage] = useState({});
  const [cacheQueues, setCacheQueues] = useState([] as QueueDto[]);
  const [sort, setSort] = useState({column: 'messages', isSorted: false});


  useEffect(() => {
    initializeIcons();
    getQueues(currentVhost);
  }, [currentVhost]);

  useEffect(() => {
    setCacheQueues(queues);
  }, [queues])

  const _onColumnClick = (ev: any, column: IColumn): void => {

    const newColumns: IColumn[] = _columns.slice();
    const currColumn: IColumn = newColumns.filter(currCol => column.key === currCol.key)[0];
    setSort({column: currColumn.fieldName, isSorted: !sort.isSorted});
    const newItems = _copyAndSort(cacheQueues, sort.column, sort.isSorted);
    setCacheQueues(newItems);
  }

  const _columns: IColumn[] = [
    {key: 'Name', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true},
    {
      key: 'Messages',
      name: 'Messages',
      fieldName: 'messages',
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
      isSorted: true,
      onColumnClick: _onColumnClick
    },
    {key: 'Vhost', name: 'Vhost', fieldName: 'vhost', minWidth: 100, maxWidth: 200, isResizable: true},
    {key: 'State', name: 'State', fieldName: 'state', minWidth: 100, maxWidth: 200, isResizable: true},
    {key: 'Consumer', name: 'Consumer', fieldName: 'consumers', minWidth: 100, maxWidth: 200, isResizable: true, isSorted: true,
      onColumnClick: _onColumnClick},
    {key: 'Actions', name: 'Actions', fieldName: '', minWidth: 100, maxWidth: 200, isResizable: true},
  ];


  const _renderItemColumn = (item: QueueDto, index: number, column: IColumn) => {
    const fieldContent = item[column.fieldName as keyof QueueDto] as string;
    switch (column.key) {
      case 'State':
        return <span><FontIcon iconName="CircleFill"
                               style={{color: fieldContent == "running" ? "#4ef04e" : "red"}}></FontIcon> {fieldContent}</span>;
      case 'Actions':
        return <CommandBar
          items={_items(item)}
          ariaLabel="Use left and right arrow keys to navigate between commands"
        />;

      default:
        return <span>{fieldContent}</span>;
    }
  }

  const openMoveModal = (state: any) => {
    setOpenModal(state);
  }

  const openDialog = (state: any) => {
    setDialogState(state);
  }


  const _copyAndSort = (items: any[], columnKey: string, isSortedDescending?: boolean): any[] => {
    return items.slice(0).sort((a: any, b: any) => ((isSortedDescending ? a[columnKey] < b[columnKey] : a[columnKey] > b[columnKey]) ? 1 : -1));
  }

const  _onChangeText = (text:string): void => {
    setCacheQueues(text ? queues.filter(i => i.name.toLowerCase().indexOf(text) > -1): queues);
  };

  const _items = (item: QueueDto): ICommandBarItemProps[] => {

    return [
      {
        key: 'action',
        text: 'Choose Action...',
        cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
        subMenuProps: {
          items: [
            {
              key: 'purge',
              text: 'Purge',
              ['data-automation-id']: 'newEmailButton', // optional
              iconProps: {iconName: 'RecycleBin'},
              onClick: () => {
                setCurrentQueueName(item.name);
                openDialog(true);
                setDialogMessage({
                  action: 'Purge',
                  title: "Purge Queue",
                  description: "This queue messages will permenantly delete.Are you sure?"
                })
              }
            },
            {
              key: 'move',
              text: 'Move',
              onClick: () => {
                openMoveModal(true);
                setCurrentQueueName(item.name);
              },
              iconProps: {iconName: 'Move'}
            },
            {
              key: 'delete',
              text: 'Delete',
              onClick: () => {
                setCurrentQueueName(item.name);
                openDialog(true);
                setDialogMessage({
                  action: 'Delete',
                  title: "Delete Queue",
                  description: "This queue messages will permenantly delete.Are you sure?"
                })
              },
              iconProps: {iconName: 'trash'},
            },
          ],
        },
      }
    ];
  }

  return (
    <ScrollablePane>
      <MoveModal modalOpen={openModal} openModal={openMoveModal} queueName={currentQueueName} moveQueue={moveQueue}/>
      <DialogBasicExample toggleDialog={openDialog} dialogState={dialogState} actionParameters={currentQueueName}
                          dialogMessage={dialogMessage}
                          confirmAction={dialogMessage.action == 'Purge' ? purgeQueue : deleteQueue}/>
      <TextField label="Filter by queue:" onChange={(e)=>{_onChangeText(e.target.value)}}  style={{color: 'green', margin: 5, float: 'left'}}  />
      <DetailsList
        items={cacheQueues}
        columns={_columns}
        onRenderItemColumn={_renderItemColumn}
      >
      </DetailsList>
    </ScrollablePane>
  );
};
