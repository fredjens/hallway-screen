export const GET_TIME = 'GET_TIME';
export const GET_WEATHER = 'GET_WEATHER';
export const SELECT_PUBLIC_TRANSPORT = 'SELECT_PUBLIC_TRANSPORTT';
export const REQUEST_PUBLIC_TRANSPORT = 'REQUEST_PUBLIC_TRANSPORT';
export const RECEIVE_PUBLIC_TRANSPORT = 'RECEIVE_PUBLIC_TRANSPORT';

export function getTime() {
  return {
    type: GET_TIME,
    payload: new Date(),
  }
};

export function selectPublicTransport(id) {
  return {
    type: SELECT_PUBLIC_TRANSPORT,
    id,
  }
};

export function requestPublicTransport(id) {
  return {
    type: REQUEST_PUBLIC_TRANSPORT,
    id,
  }
};

export function recievePublicTransport(data) {
  return {
    type: RECEIVE_PUBLIC_TRANSPORT,
    data,
  }
};
