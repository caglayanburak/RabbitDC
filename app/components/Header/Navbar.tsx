import * as React from 'react';
import {Environment} from "../enviroment/enviroment";

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
          <button className="bp3-button bp3-minimal bp3-icon-cog" />
        </div>
      </div>
    </nav>
  );
};
