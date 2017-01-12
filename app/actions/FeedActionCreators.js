import { FEED_ACTIONS } from '../constants';
import { fetchUserFeed } from '../api/FeedAPI';


const feedActionSuccess = (actionType, payload) => ({
  type: FEED_ACTIONS[`${actionType}Success`], success: true, payload 
});

const feedActionError = (actionType, error) => ({
  type: FEED_ACTIONS[`${actionType}Error`], success: false, error 
});

const requestUserFeed = () => ({
  type: FEED_ACTIONS.fetchRequest
});

export const loadUserFeed = (actorId = null, actorLocation = null, pageNumber = 1) => {
  const actionType = 'fetch';

  return (dispatch) => {
    const actionType = 'fetch';
    requestUserFeed();

    fetchUserFeed(actorId, actorLocation, pageNumber)
      .then(payload => dispatch(feedActionSuccess(actionType, payload)))
      .catch(error => dispatch(feedActionError(actionType, error)));
  }
}
