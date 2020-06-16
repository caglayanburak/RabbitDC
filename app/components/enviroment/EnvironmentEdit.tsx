import React, {useState} from 'react';
import styles from './Environment.css';
import {Link} from "react-router-dom";
import routes from "../../constants/routes.json";
import {Button, FormGroup, InputGroup} from "@blueprintjs/core";
import EnvironmentList from "./EnvironmentList";

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
    <div data-tid="container" className={styles.container}>
      <Link to={routes.HOME}>
        <i className="fa fa-arrow-left fa-3x"/>
      </Link>
      <h4>Add Environment</h4>
      <FormGroup
        label="Environment"
        labelFor="text-input"
        labelInfo="(required)"
        className={`${styles.myClass} bp3-dark`}
      >
        <InputGroup id="text-input" placeholder="Environment" value={environment}
                    onChange={(e: any) => setEnvironment(e.target.value)}/>
      </FormGroup>

      <FormGroup
        label="Url"
        labelFor="text-input"
        labelInfo="(required)"
        className={`${styles.myClass} bp3-dark`}
      >
        <InputGroup id="text-input" placeholder="Url" value={url} onChange={(e: any) => {
          setUrl(e.target.value)
        }}/>
      </FormGroup>

      <FormGroup
        label="User Name"
        labelFor="text-input"
        labelInfo="(required)"
        className={`${styles.myClass} bp3-dark`}
      >
        <InputGroup id="text-input" placeholder="User Name" value={userName}
                    onChange={(e: any) => setUserName(e.target.value)}/>
      </FormGroup>
      <FormGroup
        label="Password"
        labelFor="text-input"
        labelInfo="(required)"
        className={`${styles.myClass} bp3-dark`}
      >
        <InputGroup id="text-input" placeholder="Password" value={password}
                    onChange={(e: any) => setPassword(e.target.value)}/>
        <Button className={styles.saveButton} icon={"saved"} onClick={saveEnvironment}>Save</Button>

      </FormGroup>

      <EnvironmentList getAll={getAll} environments={environments?.environments} remove={remove}/>
    </div>
  );
}
