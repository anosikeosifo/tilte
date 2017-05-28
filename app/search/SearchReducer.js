import { RECEIVE_SEARCH_SUGGESTIONS } from './constants';
import update from 'immutability-helper';

export const searchData = (state = { suggestions: [] }, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_SUGGESTIONS:
      if(action.payload.success) {
        return action.payload.data;
      } else {
      }

    default:
      return state;
  }
}
