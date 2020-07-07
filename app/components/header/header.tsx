import * as React from 'react';
import {Environment} from "../environment/environment";
import {Button, ButtonGroup, Menu, MenuItem, Popover} from "@blueprintjs/core";
import {Position} from "@blueprintjs/core/lib/esm/common/position";
import {Link} from "react-router-dom";
import routes from "../../constants/routes.json";
import {Vhosts} from "../environment/vhosts";
import {useEffect} from "react";

type Props = {
  change: (payload: any) => void,
  changeVhosts: (payload: any) => void,
  getVhosts: () => void,
  getCurrentVhost: () => void,
  vHosts: any[],
  currentVhost: string
};

export const Header = ({change, getVhosts, vHosts, changeVhosts, currentVhost, getCurrentVhost}: Props) => {
  useEffect(() => {
    getVhosts();
    getCurrentVhost();
  }, []);

  return (
    <nav className="bp3-navbar bp3-dark">
      <div>
        <div className="bp3-navbar-group bp3-align-left">
          <div className="bp3-navbar-heading">
            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/RabbitMQ_logo.svg/1280px-RabbitMQ_logo.svg.png" height="35" style={{marginTop:5}}/>

            <Link to={routes.HOME} style={{color:'white'}}> Desktop Client
            </Link>
          </div>
        </div>
        <div className="bp3-navbar-group bp3-align-right">
          <ButtonGroup minimal={true} vertical={false}>
            <Button>
              <label>Hosts: </label>
              <Vhosts changeVhosts={changeVhosts} vHosts={vHosts} currentVhost={currentVhost}/>
            </Button>
            <Button>
              <label>Environments :</label>
              <Environment change={change}/>

            </Button>
          </ButtonGroup>
          <span className="bp3-navbar-divider"/>
          <button className="bp3-button bp3-minimal bp3-icon-user"/>
          <button className="bp3-button bp3-minimal bp3-icon-notifications"/>
          <Popover content={<Menu>
            <Link to={routes.EnvironmentEdit}>
              <MenuItem icon="graph" text="Environments">
              </MenuItem>
            </Link>

          </Menu>} position={Position.BOTTOM_LEFT}>
            <Button className="bp3-button bp3-minimal bp3-icon-cog"/>
          </Popover>
        </div>
      </div>
    </nav>
  );
};
