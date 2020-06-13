import React, {useState} from 'react';
import styles from './Environment.css';
import {Link} from "react-router-dom";
import routes from "../../constants/routes.json";
import {Button, FormGroup, InputGroup} from "@blueprintjs/core";
import EnvironmentList from "./EnvironmentList";
import {AppToaster} from "../../toast/toaster";

export default function EnvironmentEdit() {
  const [environment, setEnvironment] = useState("");
  const [url, setUrl] = useState("");
  const saveEnvironment = () => {
    let environments = JSON.parse(localStorage.getItem("environments"));
    var env = {name: environment, url: url};

    environments.push(env);
    localStorage.setItem("environments", JSON.stringify(environments));

    AppToaster.show({message: "Environment added.", icon: "confirm", intent: "success"});
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
        <InputGroup id="text-input" placeholder="Environment" onChange={e => setEnvironment(e.target.value)}/>
      </FormGroup>

      <FormGroup
        label="Url"
        labelFor="text-input"
        labelInfo="(required)"
        className={`${styles.myClass} bp3-dark`}
      >
        <InputGroup id="text-input" placeholder="Url" onChange={e => {
          setUrl(e.target.value)
        }}/>
        <Button className={styles.saveButton} icon={"saved"} onClick={saveEnvironment}>Save</Button>
      </FormGroup>

      <EnvironmentList/>
    </div>
  );
}
