require('../styles/oauth_response.scss');

import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import { completeLinkedinLogin, completeTwitterLogin } from '../AuthActionCreators';

const mapStateToProps = () => ({

});
const mapDispatchToProps = (dispatch) => ({
  getTwitterToken: () => dispatch(getTwitterAccessToken()),
  getLinkedinToken: (accessCode, stateCheck) => dispatch(completeLinkedinLogin(accessCode, stateCheck)),
});

class OAuthResponse extends Component {
  componentDidMount() {
    this.completeAuthProcess();
  }

  buildAuthParams() {
    const urlHost = window.location.host;
    const urlString = decodeURIComponent(window.location.search.substring(1));
    const urlSegment = urlString.split('&');

    let accessCode;
    let authType;
    let codeVerifyValue;

    for(const segment of urlSegment) {
      if(segment.startsWith('code')) accessCode = segment.split('=')[1];
      if(segment.startsWith('state')) {
        authType = segment.split('=')[1].split('__')[0];
        codeVerifyValue = segment.split('=')[1].split('__')[1];
      }
    }

    return { authType, accessCode, codeVerifyValue };
  }

  completeAuthProcess() {
    const params = this.buildAuthParams();
    switch (params.authType.toLowerCase()) {
      case 'linkedin':
        this.props.getLinkedinToken(params.accessCode, params.codeVerifyValue);
        break;
      default:

    }
  }

  render() {
    const loaderSVG = (
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="55 55 30 30" preserveAspectRatio="xMidYMid" className="lds-ripple">
        <circle cx="70" cy="70" r="7.54719" fill="none" stroke="#ff5a5f">
          <animate attributeName="r" calcMode="spline" values="0;10" keyTimes="0;1" dur="2" keySplines="0 0.2 0.8 1" begin="-1s" repeatCount="indefinite"/>
          <animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="2" keySplines="0.2 0 0.8 1" begin="-1s" repeatCount="indefinite"/>
        </circle>
        <circle cx="70" cy="70" r="2.25357" fill="none" stroke="#ccc">
          <animate attributeName="r" calcMode="spline" values="0;10" keyTimes="0;1" dur="2" keySplines="0 0.2 0.8 1" begin="0s" repeatCount="indefinite"/>
          <animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="2" keySplines="0.2 0 0.8 1" begin="0s" repeatCount="indefinite"/>
        </circle>
      </svg>
    );

    return(
      <section className='component__oauthresponse'>
        <div className='loader__wrap'>
          { loaderSVG }
        </div>
        <div className='information_wrap'>
          <span className='text'>Authenticating...</span>
        </div>
      </section>
    );
  }
}

const ConnectedOAuthResponse = connect(mapStateToProps, mapDispatchToProps)(OAuthResponse);
export default ConnectedOAuthResponse;
