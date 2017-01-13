import { FEED_ACTIONS } from '../constants';

class FeedReducer {
  userFeed(state =[], action) {
    switch (action.type) {
      case FEED_ACTIONS.fetchSuccess:
        return action.payload.data;
      case FEED_ACTIONS.fetchError:
        return console.log('an error occurred: ', action.error);
      default:
        return state;
    }
  }
}

export default new FeedReducer();
