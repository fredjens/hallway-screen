import { call, put, select, take, fork } from 'redux-saga/effects';
import RuterApi from '../services/RuterApi.js';

import {
  selectedPublicTransportSelector,
} from '../reducers/selectors';

import * as actions from '../actions';

function fetchRuterApi(id) {
    return RuterApi(id).then(data => data);
}

export function* fetchData(id) {
  yield put(actions.requestPublicTransport(id))
  const data = yield call(fetchRuterApi, id)
  yield put(actions.recievePublicTransport(data));
}

export function* getPublicTransport() {
  while(true) {
    yield take(actions.SELECT_PUBLIC_TRANSPORT);
    const id = yield select(selectedPublicTransportSelector);
    yield fork(fetchData, id);
  }
}


export default function* root() {
  yield fork(getPublicTransport)
}
