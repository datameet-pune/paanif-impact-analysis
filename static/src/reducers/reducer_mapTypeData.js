import { FETCH_MAPTYPE_DATA } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MAPTYPE_DATA:
      return action.payload.data;
  }
  return state;
}
