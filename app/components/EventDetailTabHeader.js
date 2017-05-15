import React, { Component, PropTypes } from 'react';
import update from 'immutability-helper';

class EventDetailTabHeader extends Component {
  handleTabClick(event) {
    this.props.clickCallback(event.target);
    // console.log('tab clicked: ', event.target.dataset.tab);
  }

  render() {
    return (
      <div className='details__header_nav'>
        <ul className='nav__list'  onClick={ this.handleTabClick.bind(this) }>
          <li className='item active'><button className='trigger' data-tab='description'>Description</button></li>
          <li className='item'><button className='trigger' data-tab='organizer'>Organizer</button></li>
          <li className='item'><button className='trigger' data-tab='going'>{ "Who's going" }</button></li>
        </ul>
      </div>
    );
  }
}

EventDetailTabHeader.prototypes = {

}

export default EventDetailTabHeader;
