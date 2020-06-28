import * as React from 'react';
import {useEffect, useState} from 'react';
import {QueueDto} from '../../response-types/queue-dto';
import {ScrollablePane} from 'office-ui-fabric-react/lib/ScrollablePane';
import {initializeIcons} from 'office-ui-fabric-react/lib/Icons';
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
  getQueues: any
}


export const Queues = ({currentVhost, queues, getQueues}: props) => {
  const [openModal, setOpenModal] = useState(false);
  const [dialogState, setDialogState] = useState(false);
  const [currentQueueName, setCurrentQueueName] = useState("");
  const [dialogMessage, setDialogMessage] = useState({});
  useEffect(() => {
    initializeIcons();
    getQueues(currentVhost);
  }, [currentVhost]);

  const _columns: IColumn[] = [
    {key: 'Name', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true},
    {key: 'Messages', name: 'Messages', fieldName: 'messages', minWidth: 100, maxWidth: 200, isResizable: true},
    {key: 'Vhost', name: 'Vhost', fieldName: 'vhost', minWidth: 100, maxWidth: 200, isResizable: true},
    {key: 'State', name: 'State', fieldName: 'state', minWidth: 100, maxWidth: 200, isResizable: true},
    {key: 'Consumer', name: 'Consumer', fieldName: 'consumers', minWidth: 100, maxWidth: 200, isResizable: true},
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
                openDialog(true);
                setDialogMessage({
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
                openDialog(true);
                setDialogMessage({
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
      <MoveModal modalOpen={openModal} openModal={openMoveModal} queueName={currentQueueName}/>
      <DialogBasicExample toggleDialog={openDialog} dialogState={dialogState} queueName={currentQueueName} dialogMessage={dialogMessage}/>
      <DetailsList
        items={queues}
        columns={_columns}
        onRenderItemColumn={_renderItemColumn}
      >
      </DetailsList>
    </ScrollablePane>
  );
};
