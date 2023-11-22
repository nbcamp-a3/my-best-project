import { createStore, combineReducers } from 'redux';
import userReducer from 'redux/modules/user';

const rootReducer = combineReducers({ userReducer });
const store = createStore(rootReducer);

export default store;
