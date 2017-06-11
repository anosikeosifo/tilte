import jwtDecode from 'jwt-decode';
import { buildUrlEncodedParams, makePostRequest } from '../helpers/HttpHelper';
import { AUTH_REDIRECT_URL, LINKEDIN_AUTHTOKEN_URL, TWITTER_AUTHTOKEN_URL } from './constants';

export const setupFacebook = (statusCheckCallback) => {
  FB.getLoginStatus(function(response) {
    if(response.authResponse) response.authResponse['type'] = 'facebook';
    statusCheckCallback({ success: true, data: response });
  });
};

export const loginWithLinkedin = (accessCode, loginCallback) => {
  const requestData = {
    grant_type: 'authorization_code',
    code: accessCode,
    redirect_uri: AUTH_REDIRECT_URL,
    client_id: process.env.LINKEDIN_CLIENT_ID,
    client_secret: process.env.LINKEDIN_CLIENT_SECRET,
  }

  return makePostRequest(LINKEDIN_AUTHTOKEN_URL, buildUrlEncodedParams(requestData), {
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      'Access-Control-Allow-Origin' : '*'
    }),
  })
  .then((response) => {
    console.log('linkedin response', response);
    response['type'] = 'linkedin'
    loginCallback({ success: true, data: response });
  })
};

export const loginWithFacebook = (loginCallback) => {
  FB.login((response) => {
    const loginResponse = response.authResponse;

    if(loginResponse) {
      loginResponse['type'] = 'facebook';
      loginCallback({ success: true, data: loginResponse });
    } else {
      loginCallback({ success: false, data: response, message: "User cancelled login or did not fully authorized." });
    }
  }, {
    scope: 'email,public_profile,user_friends',
  });
}

export const saveAuthToken = (token) => {
  localStorage.setItem('auth_token', token);
}

export const deleteAuthToken = () => {
  localStorage.removeItem('auth_token');
}

export const getAuthToken = () => {
  return localStorage.getItem('auth_token');
}

export const decodeToken = (token) => {
  return jwtDecode(token);
}

export const isAuthenticated = () => {
  const token = getAuthToken();
  if (token) {
    return !isTokenExpired(token)
  } else {
    return false
  }
}

export const getDecodedToken = () => {
  return jwtDecode(getAuthToken());
};

export const authenticateAccess = (nextState, replace) => {
  if (!isAuthenticated()) {
    // logoutUser()
    replace({ pathname: '/verify' })
  } else {
    return true;
  }
};

export const generateStateValue = () => {
  return 'linkedin__rae5+364y=rgf536_rsg^sv_+aeaw435';
};

export const initializeFacebookAuth = (appId) => {
  let initComplete = false;

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  return new Promise((resolve, reject) => {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : appId,
        cookie     : true,
        xfbml      : true,
        version    : 'v2.8'
      });

      FB.AppEvents.logPageView();
      initComplete = true;
      resolve();
    };
  });
};

const isTokenExpired = (token) => {
  return jwtDecode(token).exp > Date.now();
};

export const openAuthWindow = (requestUrl) => {
  let authWindow;
  const width = 550;
  const height = 600;
  const left = window.screen.width/2 - width/2;
  const top = window.screen.height/2 - height/2;
  const windowFeatures = `location=yes,resizable=no,scrollbars=yes,status=yes,width=${ width },height=${ height },top=${ top },left=${ left }`;

  authWindow = window.open(requestUrl, 'authWindow', windowFeatures);
  return authWindow;
};

export const requestTwitterAuthToken = () => {
  return makePostRequest(TWITTER_AUTHTOKEN_URL,
    buildUrlEncodedParams({ oauth_callback: AUTH_REDIRECT_URL}), {
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin' : '*'
      }),
  });
};
