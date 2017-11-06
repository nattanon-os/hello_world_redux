import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducers as productScore} from './reducers/productScore'
import thunk from 'redux-thunk';
const reducer = combineReducers({productScore});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
