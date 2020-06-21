import {connect} from 'react-redux';
import {
  change,
  changeVhosts,
  getVhosts,
  getCurrentVhost
} from '../actions/environment';
import {environmentStateType} from "../reducers/types";
import {Header} from "../components/header/header";
import { getQueuesAsync } from '../actions/queues';

function mapStateToProps(state: environmentStateType) {
  return {
    environments: state.environments,
    currentEnvironment: state.currentEnvironment,
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
