import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import EnvironmentEdit from '../components/enviroment/EnvironmentEdit';
import {
  add,
  remove,
  change,
  getAll
} from '../actions/environment';
import {counterStateType} from "../reducers/types";

function mapStateToProps(state: counterStateType) {
  return {
    environments: state.environments,
    currentEnvironment: state.currentEnvironment
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      add,
      remove,
      change,
      getAll
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EnvironmentEdit);
