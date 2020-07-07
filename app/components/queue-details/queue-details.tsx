import React, {useEffect} from 'react';
import {ScrollablePane} from "office-ui-fabric-react/lib/ScrollablePane";

type props = {
  queueDetails: any[]
  getQueueDetails: (queueName: any) => any[]
}

export default function QueueDetails({getQueueDetails}:props) {

  useEffect(()=>{
    getQueueDetails('ghost.all_keys_update_command_error');
  },[]);

  return (
    <ScrollablePane style={{margin: 15}}>
      <div data-tid="container">
        <h2>Queue DeTails</h2>
      </div>
    </ScrollablePane>
  );
}
