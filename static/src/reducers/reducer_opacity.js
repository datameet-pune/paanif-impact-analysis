import { UPDATE_OPACITY } from '../actions/index';

export default function(state = 0.8, action) {
  switch (action.type) {
    case UPDATE_OPACITY:
      return action.payload;
  }
  return state;
}
