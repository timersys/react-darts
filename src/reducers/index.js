import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './users';
import players from './players';
import temp from './temp';
// import comments from './comments';

// const rootReducer = combineReducers({posts, comments, routing: routerReducer });
const rootReducer = combineReducers({ users, players,temp, routing: routerReducer });

export default rootReducer;
