import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from '../containers/Main';

function mapStateToProps(state) {
  return {
    users : state.users,
    players : state.players,
    temp : state.temp,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}


const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
