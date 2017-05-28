const initializeFacebook = (appId) => {
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
}

export const setupFacebook = (appId, statusCheckCallback) => {
  initializeFacebook(appId);

  window.fbAsyncInit = function() {
    FB.init({
      appId      : appId,
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    });

    FB.AppEvents.logPageView();
    FB.getLoginStatus(function(response) {
      if(response.authResponse) response.authResponse['type'] = 'facebook';
      statusCheckCallback({ success: true, data: response });
    });
  };
};

export const setupLinkedin = () => {

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
  console.log('inside : ', token);

  localStorage.setItem('auth_token', token);
}

export const getAuthToken = (token) => {
  localStorage.getItem('auth_token');
}
