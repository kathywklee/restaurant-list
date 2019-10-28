import { combineReducers } from 'redux';
import { restaurantListReducer } from './restaurants-list/ducks/restaurant-list';

export const rootReducer = combineReducers({
  restaurantList: restaurantListReducer,
});
