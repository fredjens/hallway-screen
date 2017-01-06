import { combineReducers } from 'redux';

import {
  SELECT_PUBLIC_TRANSPORT,
  REQUEST_PUBLIC_TRANSPORT,
  RECEIVE_PUBLIC_TRANSPORT,
} from '../actions';

function selectPublicTransport(state = null, action) {
  switch (action.type) {
    case SELECT_PUBLIC_TRANSPORT:
      return action.id
    default:
      return state
  }
}

function publicTransportData(
  state = {
    loading: false,
    data: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_PUBLIC_TRANSPORT:
      console.log('request');
      return { ...state, loading: true }

    case RECEIVE_PUBLIC_TRANSPORT:
      console.log('receive');
      return { ...state,
        loading: false,
        data: action.data,
      }
    default:
      return state
  }
}

const publicTransport = combineReducers({
  selectPublicTransport,
  publicTransportData,
});

export default publicTransport;
