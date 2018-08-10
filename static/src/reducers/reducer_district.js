import { UPDATE_DISTRICT } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_DISTRICT:
      return action.payload.district;
  }
  return state;
}
