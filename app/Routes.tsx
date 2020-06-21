import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/home-page';
import EnvironmentPage from "./containers/environment-page";
import HeaderPage from "./containers/header-page";
import QueuesPage from './containers/queues-page';

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
