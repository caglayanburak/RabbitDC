import { connect } from 'react-redux';
import { environmentStateType } from '../reducers/types';
import { Queues } from '../components/Queues/Queues';
import { getQueuesAsync } from '../actions/queues';

function mapStateToProps(state: environmentStateType) {
  return {
    queues: state.queues
  };
}

const mapDispatchToProps =
    {
      getQueues: getQueuesAsync.request
    }

export default connect(mapStateToProps, mapDispatchToProps)(Queues);
