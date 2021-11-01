import { combineReducers } from 'redux';

// import all reducers here
import userReducer from './userReducer';
import dashboardReducer from './dashboardReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  userReducer,
  dashboardReducer,
});

// make the combined reducers available for import
export default reducers;
