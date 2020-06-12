import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import EnvironmentEdit from "./components/enviroment/EnvironmentEdit";
import {Navbar} from "./components/Header/Navbar";

export default function Routes() {
  return (
    <App>
      <Navbar />
      <Switch>
        <Route path={routes.COUNTER} component={CounterPage}  />
        <Route path={routes.HOME} exact  component={HomePage} />
        <Route path={routes.QUEUES} component={HomePage} />
        <Route path={routes.EnvironmentEdit} sensitive component={EnvironmentEdit} />
      </Switch>
    </App>
  );
}
