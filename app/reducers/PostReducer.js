import constants from '../constants';

class PostReducer {
  posts(state =[], action) {
    switch (action.type) {
      case constants.REQUEST_USER_FEED:
        return state;
      default:
        return state;
    }
  }
}

export default new PostReducer();
