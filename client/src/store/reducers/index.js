import { combineReducers } from 'redux';

import collection from './collection';
import collectionsTypes from './collectionsTypes';
import teaTypes from './teaTypes';
import notification from './notification';

const rootReducer = combineReducers({
  collection,
  collectionsTypes,
  teaTypes,
  notification,
});

export default rootReducer;
