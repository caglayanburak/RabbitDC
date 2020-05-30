import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Queues from '../components/Queues';

import {
  addQueue,
  deleteQueue
} from '../actions/counter';
import { counterStateType } from '../reducers/types';
import { Queues } from '../components/Queues/Queues';

function mapStateToProps(state: counterStateType) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      increment,
      decrement,
      incrementIfOdd,
      incrementAsync
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Queues);