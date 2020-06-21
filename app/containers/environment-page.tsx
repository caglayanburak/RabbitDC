import {connect} from 'react-redux';
import EnvironmentEdit from '../components/environment/environment-edit';
import {
  add,
  remove,
  change,
  getAll
} from '../actions/environment-actions';
import {stateType} from "../reducers/types";

function mapStateToProps(state: stateType) {
  return {
    environments: state.environments,
    currentEnvironment: state.environments.currentEnvironment
  };
}

const mapDispatchToProps = {
      add,
      remove,
      change,
      getAll,
}

export default connect(mapStateToProps, mapDispatchToProps)(EnvironmentEdit);
