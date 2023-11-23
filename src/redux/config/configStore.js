import { createStore, combineReducers } from 'redux';
import userReducer from 'redux/modules/User';
import selectedCategory from 'redux/modules/selectedCategory';

const rootReducer = combineReducers({
  userReducer,
  selectedCategory,
});
const store = createStore(rootReducer);

export default store;
 