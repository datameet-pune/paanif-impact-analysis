import { UPDATE_MAP_CENTER } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_MAP_CENTER:
      return action.payload;
  }
  return state;
}
