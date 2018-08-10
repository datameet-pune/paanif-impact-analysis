import { FETCH_VILLAGES } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_VILLAGES:
      return action.payload.data.villages;
  }
  return state;
}
