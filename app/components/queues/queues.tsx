import * as React from 'react';
import {useEffect} from 'react';
import {QueueDto} from '../../response-types/queue-dto';
import {ScrollablePane} from 'office-ui-fabric-react/lib/ScrollablePane';
import {initializeIcons} from 'office-ui-fabric-react/lib/Icons';
import {
  DetailsList,
  IColumn
} from 'office-ui-fabric-react/lib/DetailsList';
import {CommandBar, ICommandBarItemProps} from 'office-ui-fabric-react/lib/CommandBar';
import {FontIcon} from 'office-ui-fabric-react/lib/Icon';

type props = {
  currentVhost: string
  queues: QueueDto[]
  getQueues: any
}


export const Queues = ({currentVhost, queues, getQueues}: props) => {
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
          items={_items}
          ariaLabel="Use left and right arrow keys to navigate between commands"
        />;

      default:
        return <span>{fieldContent}</span>;
    }
  }

  const _items: ICommandBarItemProps[] = [
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
            iconProps: {iconName: 'RecycleBin'}
          },
          {
            key: 'move',
            text: 'Move',
            iconProps: {iconName: 'Move'},
          },
          {
            key: 'delete',
            text: 'Delete',
            iconProps: {iconName: 'trash'},
          },
        ],
      },
    }
  ];


  return (
    <ScrollablePane>
      <DetailsList
        items={queues}
        columns={_columns}
        onRenderItemColumn={_renderItemColumn}
      >

      </DetailsList>

    </ScrollablePane>

  );
};
