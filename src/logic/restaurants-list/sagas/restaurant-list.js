import { takeEvery, put } from 'redux-saga/effects';
import {
  RESTAURANT_LIST_REQUESTED,
  fetchRestaurantList,
  fetchRestaurantListStarted,
  fetchRestaurantListSucceeded,
  fetchRestaurantListFailed,
} from '../ducks/restaurant-list';

import RestaurantListModel from '../ducks/restaurant-list-model';

import networkInterfaceFactory from '../../../mechanisms/network/server-network-interface-factory';

export function* restaurantsListFetchHandler(action) {
  try {
    const network = networkInterfaceFactory();
    console.log('SAGA!!!');
    yield put(fetchRestaurantListStarted());
    const restaurantsListResponse = yield network.Restaurants.fetchList();

    const restaurantsList = RestaurantListModel.getDataFromResponse(restaurantsListResponse);
    const meta = RestaurantListModel.getMetaFromResponce(restaurantsListResponse);
    const aggregates = RestaurantListModel.getAggregatesFromResponce(restaurantsListResponse);

    yield put(fetchRestaurantListSucceeded({ restaurantsList, meta, aggregates }));
    console.log('SAGA ENDED!!!');
  } catch (e) {
    yield put(fetchRestaurantListFailed({ e }));
  }
}

export function* restaurantsListSaga() {
  yield takeEvery(RESTAURANT_LIST_REQUESTED, restaurantsListFetchHandler);
}
