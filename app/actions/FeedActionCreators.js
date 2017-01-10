import constants from '../constants';
import FeedAPI from '../api/FeedAPI';


const feedActionSuccess = (actionType, payload) => ({
  type: constants[`${actionType}_SUCCESS`], success: true, payload 
});

const feedActionError = (actionType, error) => ({
  type: constants[`${actionType}_ERROR`], success: false, error 
});

const requestUserFeed = () => ({
  type: constants.FETCH_USER_FEED
});

export const fetchUserFeed = (actorId = null, actorLocation =null, pageNumber=1) => {
  const actionType = 'FETCH_USER_FEED';

  return (dispatch) => {
    requestUserFeed();

    FeedAPI.fetchUserFeed(actorId, userLocation, pageNumber)
      .then((payload) => feedActionSuccess(actionType, payload))
      .catch((error) => feedActionSuccess(actionType, error))
  }
}
