import { buildPostParams, buildUrlQueryParams } from '../helpers/HttpHelper';
import { USER_ACTIONS } from '../constants';
import { fetchUserStatsAPI, followUserAPI, unfollowUserAPI, getFollowStatusAPI, fetchUserDetailsAPI } from '../api/UserAPI';

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

const triggerFetchUserDetails = () =>({
  type: USER_ACTIONS.fetchUserDetailsRequest
});

const triggerFollowUser = () => ({
  type: USER_ACTIONS.followUserRequest
});

const triggerUnfollowUser = () => ({
  type: USER_ACTIONS.unfollowUserRequest
});

const triggerGetFollowStatus = () => ({
  type: USER_ACTIONS.getFollowStatusRequest
})

export const fetchUserDetails = (userId, actorId) => {
  const actionType = 'fetchUserDetails';

  const requestParams = buildPostParams({
    actorId, userId
  });

  return (dispatch) => {
    triggerFetchUserDetails();
    fetchUserDetailsAPI(requestParams)
      .then(payload => dispatch(userActionSuccess(actionType, payload)))
      // .catch(error => dispatch(userActionError(actionType, error)));
  }
}

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

export const followAction = (actionType, userId, actorId) => {
  const requestData = buildPostParams({
    actorId, userId
  });

  return (actionType.toLowerCase() == 'follow') ? followUserTrigger(requestData) : unfollowUserTrigger(requestData);
}

export const fetchFollowStatus = (userId, actorId) => {
  const actionType = 'getFollowStatus';

  const requestData = buildUrlQueryParams({
    actorId, userId
  });

  return (dispatch) => {
    triggerGetFollowStatus();
    getFollowStatusAPI(requestData)
      .then(payload => dispatch(userActionSuccess(actionType, payload)))
  }
};
