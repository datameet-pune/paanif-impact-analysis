import { FETCH_DISTRICTS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DISTRICTS:
      return action.payload.data.districts;
  }
  return state;
}
