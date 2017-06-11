import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import OAuth from '../components/OAuth';
import { setActiveModal } from '../../core/CoreActionCreators';
import { triggerFacebookLogin, triggerTwitterLogin, triggerLinkedinLogin } from '../AuthActionCreators';

const mapStateToProps = (state) => ({
  configData: state.configData,
});

const mapDispatchToProps = (dispatch) => ({
  loginWithFacebook: () => dispatch(triggerFacebookLogin()),
  loginWithTwitter: () => dispatch(triggerTwitterLogin()),
  loginWithLinkedin: () => dispatch(triggerLinkedinLogin()),
});


class OAuthContainer extends Component {
  render() {
    const { loginWithFacebook, loginWithTwitter, loginWithLinkedin } = this.props;
    const strategies = [
      { name: 'facebook', authUrl: '', callbackUrl: '', callbackAction: loginWithFacebook },
      { name: 'twitter', authUrl: '', callbackUrl: '', callbackAction: loginWithTwitter },
      { name: 'linkedin', authUrl: '', callbackUrl: '', callbackAction: loginWithLinkedin },
    ];

    return <OAuth strategies={ strategies }/>;
  }
}

OAuthContainer.propTypes = {
}

const ConnectedOAuthContainer = connect(mapStateToProps, mapDispatchToProps)(OAuthContainer);


export default ConnectedOAuthContainer;
