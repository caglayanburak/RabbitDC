import * as React from 'react';
import {Environment} from "../enviroment/Environment";
import {Button, Menu, MenuDivider, MenuItem, Popover} from "@blueprintjs/core";
import {Position} from "@blueprintjs/core/lib/esm/common/position";
import {Link} from "react-router-dom";
import routes from "../../constants/routes.json";

export const Navbar = () => {
  return (
    <nav className="bp3-navbar bp3-dark">
      <div>
        <div className="bp3-navbar-group bp3-align-left">
          <div className="bp3-navbar-heading">RabbitMQ Desktop Client</div>
        </div>
        <div className="bp3-navbar-group bp3-align-right">
          <button className="bp3-button bp3-minimal bp3-icon-home">
            Queues
          </button>
          <button className="bp3-button bp3-minimal bp3-icon-document">
            Error Queues
          </button>
          <Environment />
          <span className="bp3-navbar-divider" />
          <button className="bp3-button bp3-minimal bp3-icon-user" />
          <button className="bp3-button bp3-minimal bp3-icon-notifications" />
          <Popover content={<Menu>
              <Link to={routes.EnvironmentEdit}>
                <MenuItem icon="graph" text="Environments">
                </MenuItem>
              </Link>

          </Menu>} position={Position.BOTTOM_LEFT}>
            <Button className="bp3-button bp3-minimal bp3-icon-cog" />
          </Popover>
        </div>
      </div>
    </nav>
  );
};
