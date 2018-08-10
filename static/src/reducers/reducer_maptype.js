import { UPDATE_MAP_TYPE } from '../actions/index';

export default function(state = 'Land Use', action) {
  switch (action.type) {
    case UPDATE_MAP_TYPE:
      return action.payload;
  }
  return state;
}
