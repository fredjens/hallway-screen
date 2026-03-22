import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

import createSagaMiddleware from 'redux-saga';


export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  return {
    ...createStore(
      rootReducer,
      composeEnhancers(
        applyMiddleware(sagaMiddleware)
      )
    ),
    runSaga: sagaMiddleware.run,
  }
}
