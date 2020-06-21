import {connect} from 'react-redux';
import {
  change,
  changeVhosts,
  getVhosts,
  getCurrentVhost
} from '../actions/environment-actions';
import {stateType} from "../reducers/types";
import {Header} from "../components/header/header";
import { getQueuesAsync } from '../actions/queue-actions';

function mapStateToProps(state: stateType) {
  return {
    environments: state.environments,
    currentEnvironment: state.environments.currentEnvironment,
    vHosts: state.environments.vHosts,
    currentVhost: state.environments.currentVhost
  };
}

const mapDispatchToProps =  {
      change,
      changeVhosts,
      getVhosts,
      getCurrentVhost,
      getQueues : getQueuesAsync.request
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
