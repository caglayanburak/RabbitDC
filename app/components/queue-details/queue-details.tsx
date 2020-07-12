import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import {ScrollablePane} from "office-ui-fabric-react/lib/ScrollablePane";
import {DetailsList, IColumn} from "office-ui-fabric-react/lib/DetailsList";
import JSONPretty from 'react-json-pretty';
import {HoverCard, IExpandingCardProps} from 'office-ui-fabric-react/lib/HoverCard';

type props = {
  queueDetails: any[]
  getQueueDetails: (queueName: any) => any[]
}

export default function QueueDetails({getQueueDetails, queueDetails}: props) {
  let {queue} = useParams();


  useEffect(() => {
    getQueueDetails(queue);
  }, []);


  const _columns: IColumn[] = [
    {key: 'body', name: 'Body', fieldName: 'payload', minWidth: 100, maxWidth: 200, isResizable: true},
    {
      key: 'properties',
      name: 'Fault-Message',
      fieldName: 'properties',
      minWidth: 100,
      maxWidth: 200,
      isResizable: true
    },
    {key: 'exchange', name: 'Exchange', fieldName: 'exchange', minWidth: 100, maxWidth: 200, isResizable: true},
    {key: 'sentTime', name: 'Sent Time', fieldName: 'sentTime', minWidth: 100, maxWidth: 200, isResizable: true}
  ];

  const onRenderExpandedCard = (item: any): JSX.Element => {
    return (
      <div>
        <h5>Message:</h5>
        <JSONPretty id="json-pretty" data={item}></JSONPretty>
      </div>
    );
  };

  const onRenderCompactCard = (item: any): JSX.Element => {
    return (
      <div>
        <h3>QueueName: {queue}</h3>
      </div>
    );
  };


  const _renderItemColumn = (item: any, index: number, column: IColumn) => {

    switch (column.key) {

      case 'body':
        let payload = item.payload;
        if (payload) {
          payload = JSON.parse(item.payload);
        } else {
          payload = 'empty';
        }
        console.log(payload.messageId);
        let message = payload?.message;

        const expandingCardProps: IExpandingCardProps = {

          onRenderCompactCard: onRenderCompactCard,
          onRenderExpandedCard: onRenderExpandedCard,
          renderData: payload,
        };

        return <HoverCard expandingCardProps={expandingCardProps} instantOpenOnClick={true} style={{margin: 10}}>
          <div>{JSON.stringify(payload.message)}</div>
        </HoverCard>;
      case 'properties':
        return <span>{item.properties.headers['MT-Fault-Message'] ?? 'empty'}</span>;
      case 'sentTime':
        var sentTime = JSON.parse(item.payload)?.sentTime
        return <span>{sentTime}</span>;
      default:
        return <span>{item.exchange}</span>;
    }
  }

  return (
    <ScrollablePane style={{margin: 15}}>
      <div data-tid="container">
        <h3 style={{color: 'black'}}>Queue Details:{queue} - {queueDetails.length} messages</h3>
        <hr/>
        <DetailsList
          items={queueDetails}
          columns={_columns}
          onRenderItemColumn={_renderItemColumn}
        >
        </DetailsList>
      </div>
    </ScrollablePane>
  );
}
