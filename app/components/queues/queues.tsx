import * as React from 'react';
import {useEffect} from 'react';
import {QueueDto} from '../../response-types/queue-dto';
import {ScrollablePane} from 'office-ui-fabric-react/lib/ScrollablePane';
import {
  DetailsList,
  IColumn
} from 'office-ui-fabric-react/lib/DetailsList';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import {IButtonProps} from "@blueprintjs/core";

type props = {
  currentVhost: string
  queues: QueueDto[]
  getQueues: any
}


export const Queues = ({currentVhost, queues, getQueues}: props) => {
  useEffect(() => {
    getQueues(currentVhost);
  }, [currentVhost]);

  const _columns: IColumn[] = [
    {key: 'Name', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true},
    {key: 'Messages', name: 'Messages', fieldName: 'messages', minWidth: 100, maxWidth: 200, isResizable: true},
    {key: 'Vhost', name: 'Vhost', fieldName: 'vhost', minWidth: 100, maxWidth: 200, isResizable: true},
    {key: 'State', name: 'State', fieldName: 'state', minWidth: 100, maxWidth: 200, isResizable: true},
    {key: 'Actions', name: 'Actions', fieldName: '', minWidth: 100, maxWidth: 200, isResizable: true},
  ];

  const overflowProps: IButtonProps = { ariaLabel: 'More commands' };

  const _renderItemColumn = (item: QueueDto, index: number, column: IColumn) => {
    const fieldContent = item[column.fieldName as keyof QueueDto] as string;

    switch (column.key) {
      case 'Actions':
        return  <CommandBar
          items={_items}
          overflowItems={_overflowItems}
          overflowButtonProps={overflowProps}
          farItems={_farItems}
          ariaLabel="Use left and right arrow keys to navigate between commands"
        />;

      default:
        return <span>{fieldContent}</span>;
    }
  }

  const _items: ICommandBarItemProps[] = [
    {
      key: 'newItem',
      text: 'New',
      cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
      iconProps: { iconName: 'Add' },
      subMenuProps: {
        items: [
          {
            key: 'emailMessage',
            text: 'Email message',
            iconProps: { iconName: 'Mail' },
            ['data-automation-id']: 'newEmailButton', // optional
          },
          {
            key: 'calendarEvent',
            text: 'Calendar event',
            iconProps: { iconName: 'Calendar' },
          },
        ],
      },
    }
  ];

  const _overflowItems: ICommandBarItemProps[] = [
    { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
    { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
    { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } },
  ];

  const _farItems: ICommandBarItemProps[] = [
    {
      key: 'tile',
      text: 'Grid view',
      // This needs an ariaLabel since it's icon-only
      ariaLabel: 'Grid view',
      iconOnly: true,
      iconProps: { iconName: 'Tiles' },
      onClick: () => console.log('Tiles'),
    },
    {
      key: 'info',
      text: 'Info',
      // This needs an ariaLabel since it's icon-only
      ariaLabel: 'Info',
      iconOnly: true,
      iconProps: { iconName: 'Info' },
      onClick: () => console.log('Info'),
    },
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
