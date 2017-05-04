import { USER_ACTIONS } from '../constants';
import SessionUtils from '../utils/SessionStorage';
import update from 'immutability-helper';

let userState;

export const userData = (state = {}, action) => {
  userState = state;

  switch (action.type) {
    case USER_ACTIONS.fetchUserStatsSuccess:
      return loadUserStats(action);
    case USER_ACTIONS.followUserSuccess:
      return updateFollowedUser(action);
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

const updateFollowedUser = (action) => {
  console.log('userState: ', userState);
  return update(userState, {
    isFollowing: { $set: true }
  });
};
