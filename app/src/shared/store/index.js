import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import combineReducers from '../combineReducers';

const middleware = [thunk];
const store = createStore(combineReducers, applyMiddleware(...middleware));

export default store;