import * as React from 'react';
import {ScrollablePane} from "office-ui-fabric-react/lib/ScrollablePane";
import {
  environmentContainerStyle,
  headerStyles,
  saveButtonStyles,
  stackItemStyles
} from "../environment/environment-styles";
import {DefaultButton, Stack} from "office-ui-fabric-react";
import {Link} from "react-router-dom";
import routes from "../../constants/routes.json";
import {TextField} from "office-ui-fabric-react/lib/TextField";
import {useEffect, useState} from "react";
import { DetailsList } from 'office-ui-fabric-react/lib/DetailsList';

export const BusinessQueues = () => {

  const [businessQueue, setBusinessQueue] = useState("");
  const [queueName, setQueueName] = useState("");
  const [queueNames, setQueueNames] = useState([]);

  useEffect(()=>{
    
  },[])

  const saveBusiness = () => {

    let qNames = JSON.parse(localStorage.getItem(businessQueue));
    if (qNames == null) {
      qNames = [];
    }

    queueNames.push({name:businessQueue,queue:queueName});
    setQueueNames(qNames);
    localStorage.setItem(businessQueue,JSON.stringify(qNames));
  }

  const _columns = [
    { key: 'name', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'queue', name: 'Queue', fieldName: 'queue', minWidth: 100, maxWidth: 200, isResizable: true },
  ];


  return (
    <ScrollablePane style={environmentContainerStyle}>
      <Stack>
        <Stack.Item align="auto" styles={stackItemStyles}>
          <div className="ms-Grid " dir="ltr">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">

                <Link to={routes.HOME}>
                  <i className="fa fa-arrow-left fa-3x"/>
                </Link>
                <h3 style={headerStyles}>>>Business Queue</h3>
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6 ">
                <TextField
                  label="Business Name"
                  value={businessQueue}
                  onChange={(e: any) => setBusinessQueue(e.target.value)}
                />
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
                <TextField
                  label="Queue Name"
                  value={queueName} onChange={(e: any) => {
                  setQueueName(e.target.value)
                }}
                />

              </div>
            </div>

            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
                <DefaultButton text="Save" onClick={saveBusiness} style={saveButtonStyles}/>
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md10 ms-lg10">
                <DetailsList
                  items={queueNames}
                  columns={_columns}
                  setKey="set"
                  selectionPreservedOnEmptyClick={true}
                  ariaLabelForSelectionColumn="Toggle selection"
                  ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                  checkButtonAriaLabel="Row checkbox"
                />
              </div>
            </div>
          </div>
        </Stack.Item>

      </Stack>

    </ScrollablePane>
  )
}
