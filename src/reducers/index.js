import { combineReducers } from 'redux';

import time from './time';
import publicTransport from './publicTransport';

const rootReducer = combineReducers({
  time,
  publicTransport,
})

export default rootReducer;
