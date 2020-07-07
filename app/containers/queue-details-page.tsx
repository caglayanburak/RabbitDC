import {connect} from 'react-redux';
import {stateType} from '../reducers/types';
import QueueDetails from '../components/queue-details/queue-details';
import{
  getQueueDetailsAsync
} from '../actions/queue-actions';

function mapStateToProps(state: stateType) {
  return {
    queueDetails:state.queueDetails
  };
}

const mapDispatchToProps =
  {
    getQueueDetails:getQueueDetailsAsync.request
  };

export default connect(mapStateToProps, mapDispatchToProps)(QueueDetails);
