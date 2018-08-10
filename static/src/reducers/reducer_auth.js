import { AUTHENTICATE_USER } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return action.payload.data || false;
  }
  return state;
}
