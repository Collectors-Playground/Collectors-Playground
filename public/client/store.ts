import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import { GlobalState } from '../Types/interfaces';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store: GlobalState = createStore(reducers, composeWithDevTools());

export default store;
