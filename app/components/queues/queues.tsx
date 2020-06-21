import * as React from 'react';
import { useEffect } from 'react';
import { QueueDto } from '../../response-types/queue-dto';
import { Cell, Column, Table } from '@blueprintjs/table';


type props = {
  currentVhost: string
  queues: QueueDto[]
  getQueues: any
}

export const Queues = ({ currentVhost, queues, getQueues }: props) => {
  useEffect(() => {
    getQueues(currentVhost);
  }, [currentVhost]);

  const cellRendererQueues = (rowIndex: number) => {
    return <Cell>{queues[rowIndex]?.name}</Cell>;
  };

  return (
    <div>
      <Table numRows={queues?.length ?? 0}>
        <Column name="Queues" cellRenderer={cellRendererQueues}/>
      </Table>
    </div>
  );
};
