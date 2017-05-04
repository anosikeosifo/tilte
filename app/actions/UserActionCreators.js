import { buildPostParams, buildUrlQueryParams } from '../helpers/HttpHelper';
import { USER_ACTIONS } from '../constants';
import { fetchUserStatsAPI, followUserAPI, unfollowUserAPI } from '../api/UserAPI';

// const USER_FOLLOW_ACTIONS = {
//   follow: 'followUser',
//   unfollow: 'UnfollowUser',
// };

const userActionSuccess = (actionType, payload) => ({
  type: USER_ACTIONS[`${actionType}Success`], success: true, payload
});

const userActionError = (actionType, error) => ({
  type: USER_ACTIONS[`${actionType}Error`], success: false, error
});

export const getCurrentUser = () => {
  return {
    type: REQUEST_CURRENT_USER
  };
}

const triggerFetchUserStats = () =>({
  type: USER_ACTIONS.fetchUserStatsRequest
});

const triggerFollowUser = () => ({
  type: USER_ACTIONS.followUserRequest
});

const triggerUnfollowUser = () => ({
  type: USER_ACTIONS.unfollowUserRequest
});

export const fetchUserStats = (userId, actorId) => {
  const actionType = 'fetchUserStats';
  const requestParams = buildUrlQueryParams({
    actorId, userId
  });

  return (dispatch) => {
    triggerFetchUserStats();
    fetchUserStatsAPI(requestParams)
      .then(payload => dispatch(userActionSuccess(actionType, payload)))
      .catch(error => dispatch(userActionError(actionType, error)));
  }
};

const followUserTrigger = (requestData) => {
  const actionType = 'followUser';

  return (dispatch) => {
    triggerFollowUser();
    followUserAPI(requestData)
      .then(payload => dispatch(userActionSuccess(actionType, payload)))
      // .catch(error => dispatch(userActionError(actionType, error)));
  }
}

const unfollowUserTrigger = (requestData) => {
  const actionType = 'unfollowUser';

  return (dispatch) => {
    triggerUnfollowUser();
    unfollowUserAPI(requestData)
      .then(payload => dispatch(userActionSuccess(actionType, payload)))
      // .catch(error => dispatch(userActionError(actionType, error)));
  }
}


export const followActionTrigger = (actionType, userId, actorId) => {
  const requestData = buildPostParams({
    actorId, userId
  });

  return (actionType.toLowerCase() == 'follow') ? followUserTrigger(requestData) : unfollowUserTrigger(requestData);
}
