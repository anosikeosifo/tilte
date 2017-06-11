import { USER_ACTIONS } from './constants';
import { fetchUserStatsAPI, followUserAPI, unfollowUserAPI, getFollowStatusAPI, fetchUserDetailsAPI } from './UserAPI';

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

  const requestParams = {
    actorId, userId
  };

  return (dispatch) => {
    triggerFetchUserDetails();
    fetchUserDetailsAPI(requestParams)
      .then(payload => dispatch(userActionSuccess(actionType, payload)))
      // .catch(error => dispatch(userActionError(actionType, error)));
  }
}

export const fetchUserStats = (userId, actorId) => {
  const actionType = 'fetchUserStats';

  return (dispatch) => {
    triggerFetchUserStats();
    fetchUserStatsAPI({ actorId, userId })
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
  const requestData = {
    actorId, userId
  };

  return (actionType.toLowerCase() == 'follow') ? followUserTrigger(requestData) : unfollowUserTrigger(requestData);
}

export const fetchFollowStatus = (userId, actorId) => {
  const actionType = 'getFollowStatus';

  return (dispatch) => {
    triggerGetFollowStatus();
    getFollowStatusAPI({ actorId, userId })
      .then(payload => dispatch(userActionSuccess(actionType, payload)))
  }
};
