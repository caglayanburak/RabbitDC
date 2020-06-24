import * as React from 'react';
import {useEffect} from 'react';
import {QueueDto} from '../../response-types/queue-dto';
import {ScrollablePane} from 'office-ui-fabric-react/lib/ScrollablePane';
import {
  DetailsList,
  IColumn
} from 'office-ui-fabric-react/lib/DetailsList';

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

  const _renderItemColumn = (item: QueueDto, index: number, column: IColumn) => {
    const fieldContent = item[column.fieldName as keyof QueueDto] as string;

    switch (column.key) {
      case 'Actions':
        console.log('tesr');
        return <span>test</span>;

      default:
        return <span>{fieldContent}</span>;
    }
  }


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
