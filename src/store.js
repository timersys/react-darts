import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

//import comments from './data/comments';
//import posts from './data/posts';

// create an object for the default data
const defaultState = {
	users : [
	{	"ID" : 1,
		"name" : 'Chifliiiii',
	},
	{	"ID" : 2,
		"name" : 'Dardero de la Muerte',
	},
	{	"ID" : 3,
		"name" : 'The Embers Keepers',
	},
	{	"ID" : 4,
		"name" : 'Hostigador Cósmico',
	} ],
	players : [],
	temp : {currentPlayer : 0, winner : ''}
};

const store = createStore(rootReducer, defaultState,  window.devToolsExtension && window.devToolsExtension());

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
