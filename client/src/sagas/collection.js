import { put, call, takeEvery } from 'redux-saga/effects';

import actionsTypes from '@/constants/actionsTypes';
import request from '@/utils/request';

function* callFetch() {
  const { data, error } = yield call(request.get, '/api/collection');
  if (!error) {
    yield put({ type: actionsTypes.COLLECTION_FETCH_SUCCESS, payload: data });
  } else {
    yield put({ type: actionsTypes.COLLECTION_FETCH_ERROR, payload: error });
  }
}

export default function* waitFetchCashDesksRequest() {
  yield takeEvery(actionsTypes.COLLECTION_FETCH_REQUEST, callFetch);
}
