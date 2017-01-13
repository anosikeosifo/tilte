import { RECEIVE_SEARCH_SUGGESTIONS } from '../constants';
import update from 'react-addons-update';

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