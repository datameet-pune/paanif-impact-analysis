import { FETCH_TEHSILS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TEHSILS:
      return action.payload.data.tehsils;
  }
  return state;
}
