import constants from '../constants';

class FeedReducer {
  userFeed(state =[], action) {
    switch (action.type) {
      case constants.RECEIVE_USER_FEED:
        console.log('action: ', action);
        if(action.success) {
          return action.payload.data;
        } else {
          console.log('an error occurred: ', action.error);
        }
      default:
        return state;
    }
  }
}

export default new FeedReducer();
