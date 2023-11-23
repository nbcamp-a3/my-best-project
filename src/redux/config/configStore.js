import { createStore, combineReducers } from 'redux';
import userReducer from 'redux/modules/User';

const rootReducer = combineReducers({ userReducer });
const store = createStore(rootReducer);

export default store;
