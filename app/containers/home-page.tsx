import {connect} from 'react-redux';
import {stateType} from '../reducers/types';
import {
  getNodesAsync,
  getOverviewAsync,
} from '../actions/queue-actions';
import Home from "../components/home/home";

function mapStateToProps(state: stateType) {
  return {
    nodes: state.nodes,
    overview:state.overview
  };
}

const mapDispatchToProps =
  {
    getNodes: getNodesAsync.request,
    getOverview:getOverviewAsync.request
  };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
