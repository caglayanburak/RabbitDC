import React from 'react';
import {Switch, Route} from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/home-page';
import EnvironmentPage from './containers/environment-page';
import HeaderPage from './containers/header-page';
import QueuesPage from './containers/queues-page';
import {Menu, MenuItem} from '@blueprintjs/core';
import {useHistory} from 'react-router';
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 4fr;
`;

const RightContainer = styled.div`
    position:relative;
`;

export default function Routes() {
  const history = useHistory();

  return (
    <App>
      <HeaderPage/>
      <StyledContainer className={'bp3-dark'}>
        <Menu>
          <MenuItem text="Home" icon="home" onClick={() => history.push(routes.HOME)}/>
          <MenuItem text="Queues" icon="layout-auto" onClick={() => history.push(routes.QUEUES)}/>
        </Menu>
        <RightContainer>
          <Switch>
            <Route path={routes.HOME} exact component={HomePage}/>
            <Route path={routes.QUEUES} component={QueuesPage}/>
            <Route path={routes.EnvironmentEdit} sensitive component={EnvironmentPage}/>
          </Switch>
        </RightContainer>
      </StyledContainer>
    </App>
  );
}
