import { OAUTH_ACTIONS, AUTH_REDIRECT_URL, LINKEDIN_AUTH_URL } from './constants';
import { oauthLoginAPI, oauthSignupAPI, verifyOAuthAPI, loginWithLinkedinAPI } from './AuthAPI';
import { initializeFacebookAuth, setupFacebook, loginWithFacebook, loginWithLinkedin, generateStateValue, deleteAuthToken, isAuthenticated, getDecodedToken, openAuthWindow, requestTwitterAuthToken } from './AuthService';
import { buildUrlEncodedParams } from '../helpers/HttpHelper';

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
      isAuthenticated() ? verfiyOAuthCredentials(dispatch, response.data.authResponse, 'facebookAuth') : setGuestUser(dispatch);
      break;
    default:
  }
};

const setGuestUser = (dispatch) => {
  return dispatch({
    type: OAUTH_ACTIONS.setGuestUser
  });
}

const verfiyOAuthCredentials = (dispatch, response, authType) => {
  const actionType = `${ authType }Verify`;

  triggerOAuthVerification(authType);
  verifyOAuthAPI(response)
    .then(payload => dispatch(oauthActionSuccess(actionType, payload)))
    .then(error => dispatch(oauthActionError(actionType, error)));
}

const setupAuth = (dispatch, authType) => {
  switch (authType) {
    case 'facebook':
      setupFacebookAuth(dispatch);
      break;
    case 'linkedin':
    default:
  }
};


const setupFacebookAuth = (dispatch) => {
  setupFacebook((response) => {
    handlefacbookLoginCheck(dispatch, response)
  });
}

const initNecessaryOAuthProviders = () => {
  //register oauth services that need to exist at page-load time
  return initializeFacebookAuth(process.env.FACEBOOK_CLIENT_ID);
};

const handleFailedLogin = (failureMessage) => {
  console.log('fb login failed: ', failureMessage);
}

export const checkLoggedInStatus = () => {
  return (dispatch) => {
    initNecessaryOAuthProviders()
      .then(() => {
        if(!isAuthenticated()) return setGuestUser(dispatch);
        const token = getDecodedToken().authType
        setupAuth(dispatch, token)
      });
  }
};

export const triggerFacebookLogin = (dispatch, response) => {
  const actionType = 'facebookAuth';

  return (dispatch) => {
    loginWithFacebook((response) => {
      if(!response.success) return handleFailedLogin(response.message);

      verifyOAuthAPI(response.data)
        .then(payload => dispatch(oauthActionSuccess(actionType, payload)))
        .catch(error => dispatch(oauthActionError(actionType, error)));
    });
  }
};

export const triggerTwitterLogin = () => {
  const actionType = 'twitterAuth';

  return (dispatch) => {
    requestTwitterAuthToken()
    .then((response) => {
      console.log('twitter response: ', response);
      return response;
    })
    .then(payload => dispatch(oauthActionSuccess(actionType, payload)))
  };
}

export const triggerLinkedinLogin = (dispatch) => {
  const actionType = 'linkedinAuth';
  const requestParams = {
    response_type: 'code',
    client_id: '775hsq11h0nd6e', //process.env.LINKEDIN_CLIENT_ID,
    redirect_uri: AUTH_REDIRECT_URL,
    state: generateStateValue(),
  };

  return (dispatch) => {
    openAuthWindow(`${LINKEDIN_AUTH_URL}?${ buildUrlEncodedParams(requestParams) }`);
  }
};

export const completeLinkedinLogin = (accessCode, stateCheck) => {
  const actionType = 'linkedinAuth';
  return (dispatch) => {
    loginWithLinkedin(accessCode, (response) => {
      verifyOAuthAPI(response.data)
      .then(payload => dispatch(oauthActionSuccess(actionType, payload)))
      .catch(error => dispatch(oauthActionError(actionType, error)));
    });
  }
};

export const logout = () => {
  deleteAuthToken();
  return { type: OAUTH_ACTIONS.setGuestUser };
}
