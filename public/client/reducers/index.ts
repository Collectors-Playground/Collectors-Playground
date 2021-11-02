import { combineReducers } from 'redux';

import userReducer from './userReducer';
import dashboardReducer from './dashboardReducer';

const reducers = combineReducers({
  userReducer,
  dashboardReducer,
});

export default reducers;
