import { saveAuthToken, decodeToken } from './AuthService';
import { OAUTH_ACTIONS } from './constants';
import update from 'immutability-helper';

let currentAuthState;

export const authData = (state = { currentUser: undefined }, action) => {
  currentAuthState = state;

  switch (action.type) {
    case OAUTH_ACTIONS.setGuestUser:
      return update(currentAuthState, {
        currentUser: { $set: null }
      });
    case OAUTH_ACTIONS.facebookAuthVerifySuccess:
    case OAUTH_ACTIONS.facebookAuthSuccess:
      return finishAuthentication(action.payload);
    default:
      return state;
  }
};

const finishAuthentication = (payload) => {
  saveAuthToken(payload.data);
  return update(currentAuthState, {
    currentUser: { $set: decodeToken(payload.data) }
  });
};
