import { all } from 'redux-saga/effects';
import { counterSaga } from './counter/sagas/counter';
import { restaurantsListSaga } from './restaurants-list/sagas/restaurant-list';

export function* rootSaga() {
  yield all([counterSaga(), restaurantsListSaga()]);
}
