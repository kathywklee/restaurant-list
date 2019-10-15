import { combineReducers } from 'redux';
import { counterReducer } from './counter/ducks/counter';
import { restaurantListReducer } from './restaurants-list/ducks/restaurant-list';

export const rootReducer = combineReducers({
  counter: counterReducer,
  restaurantList: restaurantListReducer,
});
