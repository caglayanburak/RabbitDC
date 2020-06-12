import React from 'react';
import styles from './Environment.css';
import {Link} from "react-router-dom";
import routes from "../../constants/routes.json";
import { FormGroup, InputGroup} from "@blueprintjs/core";
import EnvironmentList from "./EnvironmentList";

export default function EnvironmentEdit() {
  return (
    <div data-tid="container" className={styles.container}>
      <Link to={routes.HOME}>
        <i className="fa fa-arrow-left fa-3x" />
      </Link>
      <h4>Add Environment</h4>
      <FormGroup
        label="Environment"
        labelFor="text-input"
        labelInfo="(required)"
        className={`${styles.myClass} bp3-dark`}
      >
        <InputGroup id="text-input" placeholder="Environment" />
      </FormGroup>

      <FormGroup
        label="Url"
        labelFor="text-input"
        labelInfo="(required)"
        className={`${styles.myClass} bp3-dark`}
      >
        <InputGroup id="text-input" placeholder="Url" />
      </FormGroup>

     <EnvironmentList />
    </div>
  );
}
