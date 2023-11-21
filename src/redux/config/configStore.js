import { createStore, combineReducers } from 'redux';
import user from 'redux/modules/User';

const rootReducer = combineReducers({ user });
const store = createStore(rootReducer);

export default store;
