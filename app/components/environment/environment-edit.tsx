import React, {useState} from 'react';
import {Link} from "react-router-dom";
import routes from "../../constants/routes.json";
import EnvironmentList from "./environment-list";
import {ScrollablePane} from "office-ui-fabric-react/lib/ScrollablePane";
import {TextField} from 'office-ui-fabric-react/lib/TextField';
import {DefaultButton, Stack } from "office-ui-fabric-react";
import {environmentContainerStyle, headerStyles, saveButtonStyles, stackItemStyles} from "./environment-styles";

type Props = {
  add: (payload: any) => void,
  remove: (payload: any) => void,
  getAll: () => any,
  environments: any
};

export default function EnvironmentEdit({add, remove, getAll, environments}: Props) {
  const environmentInitalState = "";
  const urlInitalState = "";
  const userNameInitalState = "";
  const passwordInitalState = "";
  const [environment, setEnvironment] = useState(environmentInitalState);
  const [url, setUrl] = useState(urlInitalState);
  const [userName, setUserName] = useState(userNameInitalState);
  const [password, setPassword] = useState(passwordInitalState);



  const saveEnvironment = () => {
    let env = {name: environment, url: url, userName: userName, password: password};
    add(env);

    clearFields();
  }

  const clearFields = () => {
    setEnvironment("");
    setUrl(urlInitalState);
    setUserName(userNameInitalState);
    setPassword(passwordInitalState);
  }

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
                <h3 style={headerStyles}>>>Environment Management</h3>
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6 ">
                <TextField
                  label="Name"
                  value={environment}
                  onChange={(e: any) => setEnvironment(e.target.value)}
                />
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
                <TextField
                  label="Url"
                  value={url} onChange={(e: any) => {
                  setUrl(e.target.value)
                }}
                />

              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
                <TextField
                  label="User Name"
                  value={userName}
                  onChange={(e: any) => setUserName(e.target.value)}
                />
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
                <TextField
                  label="Password"
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
                <DefaultButton text="Save" onClick={saveEnvironment} style={saveButtonStyles}/>
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md10 ms-lg10">
                <EnvironmentList getAll={getAll} environments={environments?.environments} remove={remove} />
              </div>
            </div>
          </div>
        </Stack.Item>

      </Stack>

    </ScrollablePane>
  );
}
