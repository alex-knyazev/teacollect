import { combineReducers } from 'redux';

import collection from './collection';
import collectionsTypes from './collectionsTypes';
import teaTypes from './teaTypes';

const rootReducer = combineReducers({
  collection,
  collectionsTypes,
  teaTypes,
});

export default rootReducer;
