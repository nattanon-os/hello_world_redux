import {createStore, combineReducers} from 'redux';
import {reducers as productScore} from './reducers/productScore'
const reducer = combineReducers({productScore});
const store = createStore(reducer);

export default store;
