import { USER_ACTIONS } from '../constants';
import SessionUtils from '../utils/SessionStorage';
import update from 'immutability-helper';

let userState;

export const userData = (state = {}, action) => {
  userState = state;
  switch (action.type) {
    case USER_ACTIONS.fetchUserDetailsSuccess:
      return loadUserDetails(action);
    case USER_ACTIONS.fetchUserStatsSuccess:
      return loadUserStats(action);
    case USER_ACTIONS.followUserSuccess:
      return followUser(action);
    case USER_ACTIONS.unfollowUserSuccess:
      return unfollowUser(action);
    case USER_ACTIONS.getFollowStatusSuccess:
      return updateFollowStatus(action);
    default:
      return state;
  }
}

const loadUserStats = (action) => {
  return update(userState, {
    stats: {
      $set: action.payload.data
    }
  });
}

const followUser = (action) => {
  return update(userState, {
    userDetails: {
      canBeFollowed: { $set: false },
      stats: {
        followerCount: { $apply: (count) => count + 1 }
      }
    }
  });
};

const unfollowUser = (action) => {
  return update(userState, {
    userDetails: {
      canBeFollowed: { $set: true },
      stats: {
        followerCount: { $apply: (count) => count - 1 }
      }
    }
  });
};

const loadUserDetails = (action) => {
  return update(userState, {
    userDetails: { $set: action.payload.data }
  });
};
