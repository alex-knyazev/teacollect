import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import saga from '@/sagas';
import rootReducer from '@/store/reducers';

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(saga);

  return store;
}
