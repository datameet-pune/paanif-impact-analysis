import { UPDATE_TEHSIL } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_TEHSIL:
      return action.payload.tehsil;
  }
  return state;
}
