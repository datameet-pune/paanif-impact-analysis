import { UPDATE_WCEDITION } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_WCEDITION:
      return action.payload.wcEdition;
  }
  return state;
}
