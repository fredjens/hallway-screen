import {
  GET_TIME,
} from '../actions';

const time = (state = null, action) => {
  if (action.type === GET_TIME) {
    return action.payload;
  }
  return state;
}

export default time;
