import { createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import createMiddleware from './createMiddleware';
import getRootReducer from './getRootReducer';

let reduxStore = null;
const middleware = createMiddleware(thunkMiddleware);

export default () => {
  if (!process.browser || !reduxStore) {
    reduxStore = createStore(getRootReducer(), middleware);
  }
  return reduxStore;
};
