require('../styles/signup.scss');

import React, { Proptypes, Component } from 'react';
import ModalWrapper from '../../core/components/ModalWrapper';
import { ICON_EMAIL, ICON_USER, ICON_PASSWORD } from '../constants';
import Icon from '../../core/components/Icon';
import OAuthContainer from '../containers/OAuthContainer';


class Signup extends Component {
  componentWillMount() {
    this.setState({
      viewType: 'SocialView',
    });
  }

  renderSocialView() {
    return(
      <section className='social__view'>
        <div className='header'>
          <span>{ 'Continue with' }</span>
        </div>

        <div className='oauth__holder'>
          <OAuthContainer />
        </div>

        <div className='separator__wrap'>
          <span className='separator'>
            <span>or</span>
          </span>
        </div>

        <div className='email__optout'>
          <div className='email__signup btn btn-default btn-large'>
            <div className='action__group'>
              <span className='icon__wrap'>
                <Icon icon={ ICON_EMAIL } viewBox={ 640 } size={ 18 }/>
              </span>
              <span className='text'>{ 'Sign up with Email' }</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderEmailView() {

  }

  render() {
    const VIEW_DATA = {
      dimension: { width: 500, height: 350 },
    };

    return(
      <ModalWrapper
        width={ VIEW_DATA.dimension.width }
        height={ VIEW_DATA.dimension.height }
        closeCallback={ this.props.setCurrentModal }>

        <section className='component__signup'>
          <div className='signup__container'>
            { this[`render${this.state.viewType }`]() }
          </div>
        </section>
      </ModalWrapper>
    );
  }
};

Signup.propTypes = {

}

export default Signup;
