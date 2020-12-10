import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/home-page';
import EnvironmentPage from './containers/environment-page';
import HeaderPage from './containers/header-page';
import QueuesPage from './containers/queues-page';
import QueueDetailsPage from './containers/queue-details-page';
import BusinessQueuesPage from './containers/business-queues-page';
import styled from 'styled-components';
import {CommandBarButton} from 'office-ui-fabric-react/lib/Button';
import {OverflowSet} from 'office-ui-fabric-react/lib/OverflowSet';
import {initializeIcons} from 'office-ui-fabric-react/lib/Icons';
import {useHistory} from "react-router";

const StyledContainer = styled.div`
    width: 100%;
    height: 100vh;
    position:relative;
    display: grid;
    grid-template-columns: 0fr 5fr;
`;

const RightContainer = styled.div`
    position:relative;
`;


export default function Routes() {
  const history = useHistory();
  useEffect(() => {
    initializeIcons();
  }, []);
  const onRenderItemStyles = {
    root: {padding: '20px', backgroundColor: '#394b59', color: 'white'},
    icon: {color: 'gray'}
  };
  const onRenderOverflowButtonStyles = {
    root: {padding: '10px'},
    menuIcon: {fontSize: '25px', color: 'white'},
  };

  const onRenderItem = (item: any): any => {
    return (
      <CommandBarButton
        role="menuitem"
        aria-label={item.name}
        styles={onRenderItemStyles}
        iconProps={{iconName: item.icon}}
        onClick={item.onClick}
      />
    );
  };

  const onRenderOverflowButton = (overflowItems: any[] | undefined): any => {
    return (
      <CommandBarButton
        role="menuitem"
        title="More items"
        styles={onRenderOverflowButtonStyles}
        menuIconProps={{iconName: 'More'}}
        menuProps={{items: overflowItems!}}
      />
    );
  };
  const home = () => {
    history.push(routes.HOME)
  }

  const queue = () => {
    history.push(routes.QUEUES)
  }
  const businessQueue = () => {
    history.push(routes.BusinessQueues)
  }

  const environment = () => {
    history.push(routes.EnvironmentEdit)
  }
  return (
    <App>
      <HeaderPage/>
      <StyledContainer>
        <div style={{height:'100%',display:'grid',backgroundColor: '#394b59'}}>
          <OverflowSet
            aria-label="Vertical Example"
            role="menubar"
            vertical
            items={[
              {
                key: 'item1',
                icon: 'Home',
                name: 'Home',
                onClick: home,
                ariaLabel: 'New. Use left and right arrow keys to navigate'
              },
              {
                key: 'item2',
                icon: 'BuildQueue',
                name: 'Queues',
                onClick: queue
              },
              {
                key: 'item3',
                icon: 'AccountActivityIcon',
                name: 'Business Queues',
                onClick: businessQueue
              },
              {
                key: 'item4',
                icon: 'Settings',
                onClick: environment,
                name: 'Environments'
              },
            ]}
            onRenderOverflowButton={onRenderOverflowButton}
            onRenderItem={onRenderItem}
          />
        </div>

        <RightContainer>
          <Switch>
            <Route path={routes.HOME} exact component={HomePage}/>
            <Route path={routes.QUEUES} component={QueuesPage}/>
            <Route path={routes.EnvironmentEdit} sensitive component={EnvironmentPage}/>
            <Route path={routes.QueueDetails} component={QueueDetailsPage}/>
            <Route path={routes.BusinessQueues} component={BusinessQueuesPage}/>
          </Switch>
        </RightContainer>
      </StyledContainer>
    </App>
  );
}
