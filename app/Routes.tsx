import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import EnvironmentPage from "./containers/EnvironmentPage";
import HeaderPage from "./containers/HeaderPage";
import QueuesPage from './containers/QueuesPage';

export default function Routes() {
  return (
    <App>
      <HeaderPage />
      <Switch>
        <Route path={routes.HOME} exact  component={HomePage} />
        <Route path={routes.QUEUES} component={QueuesPage} />
        <Route path={routes.EnvironmentEdit} sensitive component={EnvironmentPage} />
      </Switch>
    </App>
  );
}
