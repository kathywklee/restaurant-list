import { takeEvery, put } from 'redux-saga/effects';
import { RESET, setCount } from '../ducks/counter';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* resetHandler() {
  try {
    yield delay(1000);
    yield put(setCount(99));
  } catch (e) {
    console.error(e);
  }
}

export function* counterSaga() {
  yield takeEvery(RESET, resetHandler);
}
