import { all, call } from 'redux-saga/effects';
import collection from './collection';

export default function* root() {
  yield all([
    call(collection),
    // add new sagas here
  ]);
}
