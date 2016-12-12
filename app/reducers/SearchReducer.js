import constants from '../constants';
import update from 'react-addons-update';

class SearchReducer {
  suggestions(state = { suggestions: [] }, action) {
    switch (action.type) {
      case constants.RECEIVE_SEARCH_SUGGESTIONS:
        if(action.payload.success) {
          return action.payload.data;
        } else {
        }

      default:
        return state;
    }
  }
}

export default new SearchReducer();
