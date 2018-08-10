import { FETCH_WCEDITIONS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WCEDITIONS:
      return action.payload.data.wceditions;
  }
  return state;
}
