import { saveAuthToken } from './AuthService';
import { OAUTH_ACTIONS } from './constants';

let currentAuthState;

export const authData = (state = {}, action) => {
  currentAuthState = state;

  switch (action.type) {
    case OAUTH_ACTIONS.setGuestUser:
      return update(currentAuthState, {
        currentUser: { $set: null }
      });
    case OAUTH_ACTIONS.facebookAuthVerifySuccess:
      finishAuthentication(action.payload);
      return currentAuthState;
    default:
      return state;
  }
}

const finishAuthentication = (payload) => {
  saveAuthToken(payload.token);

}
