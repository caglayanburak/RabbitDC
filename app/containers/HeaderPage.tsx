import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import {
  change,
  changeVhosts,
  getVhosts,
  getCurrentVhost
} from '../actions/environment';
import {environmentStateType} from "../reducers/types";
import {Navbar} from "../components/Header/Navbar";

function mapStateToProps(state: environmentStateType) {
  return {
    environments: state.environments,
    currentEnvironment: state.currentEnvironment,
    vHosts: state.environments.vHosts,
    currentVhost: state.environments.currentVhost
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      change,
      changeVhosts,
      getVhosts,
      getCurrentVhost
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
