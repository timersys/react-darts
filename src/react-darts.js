import React from 'react';
import { render } from 'react-dom'

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Main from './containers/Main';
import X01 from './containers/X01';
import Cricket from './containers/Cricket';
import GamePicker from './containers/GamePicker';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      	<IndexRoute component={GamePicker}></IndexRoute>
      	<Route path="/X01" component={X01} />
      	<Route path="/cricket" component={Cricket} />
      </Route>	
    </Router>
 </Provider>
)

render(router, document.getElementById('root'));