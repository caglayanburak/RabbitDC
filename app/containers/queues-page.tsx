import {connect} from 'react-redux';
import {stateType} from '../reducers/types';
import {Queues} from '../components/queues/queues';
import {
  getQueuesAsync,
  purgeQueuesAsync,
  moveQueueAsync,
  deleteQueueAsync,
  getQueueDetailsAsync
} from '../actions/queue-actions';

function mapStateToProps(state: stateType) {
  return {
    queues: state.queues,
    queueDetails:state.queueDetails,
    currentVhost: state.environments.currentVhost
  };
}

const mapDispatchToProps =
  {
    getQueues: getQueuesAsync.request,
    getQueueDetails:getQueueDetailsAsync.request,
    purgeQueue: purgeQueuesAsync.request,
    moveQueue: moveQueueAsync.request,
    deleteQueue: deleteQueueAsync.request
  };

export default connect(mapStateToProps, mapDispatchToProps)(Queues);
