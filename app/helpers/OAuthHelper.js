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
      if(response.authResponse) {
        statusCheckCallback({ success: true, data: response });
      } else {
        statusCheckCallback({ success: false, data: response, message: "User cancelled login or did not fully authorized." });
      }
    });
  };
};

export const setupLinkedin = () => {

};

export const loginWithFacebook = (loginCallback) => {
  FB.login((response) => {
    if(response.authResponse) {
      FB.api(`/${ response.authResponse.userID }?fields=id,email,first_name, last_name,interested_in,picture,age_range,birthday,cover`, (response) => {
        loginCallback({ success: true, data: response });
      });
    } else {
      loginCallback({ success: false, data: response, message: "User cancelled login or did not fully authorized." });
    }
  }, {
    scope: 'email,public_profile,user_friends',
    return_scopes: true,
  });
}
