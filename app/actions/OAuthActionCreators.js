import { OAUTH_ACTIONS } from '../constants';
import { oauthLoginAPI, verifyOAuthAPI } from '../api/OAuthAPI';
import { setupFacebook, loginWithFacebook } from '../helpers/OAuthHelper';


const oauthActionSuccess = (actionType, payload) => ({
  type: OAUTH_ACTIONS[`${actionType}Success`], success: true, payload
});

const oauthActionError = (actionType, error) => ({
  type: OAUTH_ACTIONS[`${actionType}Error`], success: false, error
});

const triggerAuthentication = (authType) => ({
  type: `${ authType }Request`
});

const setAuthenticatedUser = (authType) => ({
  type: `${ authType }Request`
});

const triggerOAuthVerification = (authType) => ({
  type: `${ authType }VerifyRequest`
});

const handlefacbookLoginCheck = (dispatch, response) => {
  switch (response.data.status) {
    case 'not_authorized':
    case 'unknown':
      setGuestUser(dispatch);
      break;
    case 'connected':
      handleOAuthVerification(dispatch, response.data, 'facebookAuth');
      break;
    default:
  }
};

const setGuestUser = (dispatch) => dispatch({
  type: OAUTH_ACTIONS.setGuestUser
});


const handleOAuthVerification = (dispatch, response, authType) => {
  const actionType = `${ authType }Verify`;

  triggerOAuthVerification(authType);
  verifyOAuthAPI(authType, response)
    .then(payload => dispatch(oauthActionSuccess(actionType, payload)))
    .then(error => dispatch(oauthActionError(actionType, error)));
}

export const checkLoggedInStatus = () => {
  return (dispatch) => {
    setupFacebook('1344401955668048', (response) => {
      handlefacbookLoginCheck(dispatch, response)
    });
  }
};

const handleFailedLogin = (failureMessage) => {
  console.log('fb login failed: ', failureMessage);
}

export const triggerFacebookLogin = (dispatch, response) => {
  const actionType = 'facebookAuth';

  return (dispatch) => {
    loginWithFacebook((response) => {
      if(!response.success) return handleFailedLogin(response.message);

      oauthLoginAPI(actionType, response.data)
        .then(payload => dispatch(oauthActionSuccess(actionType, payload)))
        .catch(error => dispatch(oauthActionError(actionType, error)));
    });
  }
};

export const triggerTwitterLogin = () => {
  const actionType = 'twitterAuth';
}

export const triggerLinkedinLogin = () => {
  const actionType = 'linkedinAuth';
}
