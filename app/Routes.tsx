import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import {Navbar} from "./components/Header/Navbar";
import EnvironmentPage from "./containers/EnvironmentPage";

export default function Routes() {
  return (
    <App>
      <Navbar />
      <Switch>
        <Route path={routes.COUNTER} component={CounterPage}  />
        <Route path={routes.HOME} exact  component={HomePage} />
        <Route path={routes.QUEUES} component={HomePage} />
        <Route path={routes.EnvironmentEdit} sensitive component={EnvironmentPage} />
      </Switch>
    </App>
  );
}
