import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class HeaderProfile extends Component {
  render() {
    return(
      <section className='header__profile'>{ this.props.user }</section>
    );
  }
}

HeaderProfile.PropTypes = {
  user: PropTypes.object
}

export default HeaderProfile;
