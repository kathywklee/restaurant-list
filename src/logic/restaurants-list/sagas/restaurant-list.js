import { takeEvery, put } from 'redux-saga/effects';
import { RESTAURANT_LIST_REQUESTED } from '../ducks/restaurant-list';

import networkInterfaceFactory from '../../../mechanisms/network/server-network-interface-factory';

export function* restaurantsListFetchHandler(action) {
  try {
    const network = networkInterfaceFactory();
    console.log(yield network.Restaurants.fetchList());
  } catch (e) {
    console.error(e);
  }
}

export function* restaurantsListSaga() {
  yield takeEvery(RESTAURANT_LIST_REQUESTED, restaurantsListFetchHandler);
}
