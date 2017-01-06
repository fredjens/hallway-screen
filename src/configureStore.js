import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

import createSagaMiddleware from 'redux-saga';


export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(
      rootReducer,
      compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      )
    ),
    runSaga: sagaMiddleware.run,
  }
}
