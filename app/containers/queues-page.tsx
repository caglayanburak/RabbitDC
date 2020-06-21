import { connect } from 'react-redux';
import { stateType } from '../reducers/types';
import { Queues } from '../components/queues/queues';
import { getQueuesAsync } from '../actions/queue-actions';

function mapStateToProps(state: stateType) {
  return {
    queues: state.queues,
    currentVhost: state.environments.currentVhost
  };
}

const mapDispatchToProps =
  {
    getQueues: getQueuesAsync.request
  };

export default connect(mapStateToProps, mapDispatchToProps)(Queues);
