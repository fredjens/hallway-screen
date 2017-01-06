import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import rootSaga from './sagas';

import App from './containers/App';

import './index.css';

const store = configureStore();
store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
