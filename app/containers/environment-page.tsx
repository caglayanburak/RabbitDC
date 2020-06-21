import {connect} from 'react-redux';
import EnvironmentEdit from '../components/environment/environment-edit';
import {
  add,
  remove,
  change,
  getAll
} from '../actions/environment';
import {environmentStateType} from "../reducers/types";

function mapStateToProps(state: environmentStateType) {
  return {
    environments: state.environments,
    currentEnvironment: state.currentEnvironment
  };
}

const mapDispatchToProps = {
      add,
      remove,
      change,
      getAll,
}

export default connect(mapStateToProps, mapDispatchToProps)(EnvironmentEdit);
