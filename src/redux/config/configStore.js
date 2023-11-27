import { createStore, combineReducers } from 'redux';
import userReducer from 'redux/modules/User';
import boards from 'redux/modules/boards';
import selectedCategory from 'redux/modules/selectedCategory';

const rootReducer = combineReducers({
  userReducer,
  selectedCategory,
  boards,
});
const store = createStore(rootReducer);

export default store;
