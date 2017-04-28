import React, { Component, ReactDOM, PropTypes } from 'react';

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
            <img src={ props.attendee.avatarUrl } className='avatar'/>
          </div>
        </div>
      </section>
    )
  }
}

Attendee.propTypes = {
  user: propTypes.object.isRequired
}

export default Attendee;
