import {connect} from 'react-redux';
import {stateType} from '../reducers/types';
import {
} from '../actions/queue-actions';
import {BusinessQueues} from "../components/queues/business-queues";

function mapStateToProps(state: stateType) {
  return {
  };
}

const mapDispatchToProps =
  {
  };

export default connect(mapStateToProps, mapDispatchToProps)(BusinessQueues);
