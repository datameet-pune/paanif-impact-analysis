import { UPDATE_PERIOD } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_PERIOD:
      return action.payload;
  }
  return state;
}
