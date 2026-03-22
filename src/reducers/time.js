import {
  GET_TIME,
} from '../actions';

const time = (state = new Date(), action) => {
  if (action.type === GET_TIME) {
    return action.payload;
  }
  return state;
}

export default time;
