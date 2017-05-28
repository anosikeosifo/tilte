require('../styles/attendee');

import React, { Component, ReactDOM, PropTypes } from 'react';
import { USER_AVATAR_PLACEHOLDER } from '../../users/constants';

class Attendee extends Component {
  handleMouseHover() {

  }

  handleMouseOut() {

  }

  render() {
    return(
      <section className='component__attendee'>
        <div className='attendee__wrap'>
          <div className='avatar__wrap' onMouseOver={this.handleMouseHover.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
            <img src={ USER_AVATAR_PLACEHOLDER || this.props.user.avatarUrl } className='avatar'/>
          </div>
        </div>
      </section>
    )
  }
}

Attendee.propTypes = {
  user: PropTypes.object.isRequired
}

export default Attendee;
