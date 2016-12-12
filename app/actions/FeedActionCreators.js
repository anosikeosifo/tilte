import constants from '../constants';
import FeedAPI from '../api/FeedAPI';

export default class FeedActionCreators {
  static fetchUserFeed(userId, userLocation, pageNumber) {
    return (dispatch) => {
      dispatch({ type: constants.FETCH_USER_FEED });

      FeedAPI.fetchUserFeed(userId = null,userLocation=null, pageNumber=1).then(
        (feedItems) => dispatch({ type: constants.RECEIVE_USER_FEED, success: true, payload: feedItems }),
        (error) => dispatch({ type: constants.RECEIVE_USER_FEED, success: false, error })
      );
    }
  }

  static reportItem(itemId, itemType, userId) {

  }

  static showItemDetail(itemId, itemType, userId) {

  }

  static favoriteItem(itemId, itemType, userId) {

  }

  static fetchSimilarItemsByTag(itemId, itemType, userId) {

  }

  static fetchSimilarItemsByLocation(itemId, itemType, userId) {

  }

  static fetchSimilarItemsByUser(itemId, itemType, userId) {

  }
}
