import {connect} from 'react-redux';
import EnvironmentEdit from '../components/environment/EnvironmentEdit';
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

const mapDispatchToProps = {
      add,
      remove,
      change,
      getAll,
}

export default connect(mapStateToProps, mapDispatchToProps)(EnvironmentEdit);
