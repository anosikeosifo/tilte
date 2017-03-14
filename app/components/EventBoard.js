import React, { Component, PropTypes } from 'react';
import Event from './EventCard.js';
import Moment from './MomentCard.js'
import BoardCategory from './BoardCategory.js'
import { titleize } from '../helpers/StringHelper';

class EventBoard extends Component {
  handleScrollLeft(event) {
    console.log('scroll left triggered: ', event);
  }

  handleScrollRight(event) {
    console.log('scroll right triggered: ', event);
  }

  renderData() {
    return this.props.dataset.map((category) => {
      return <BoardCategory key={ category.name } categoryName={ category.name } dataset={ category.events }/>
    });
  }

  renderContentHolder() {
    return(
      <div className='eventboard__holder'>
        <span>Loading...</span>
      </div>
    )
  }

  render() {
    let renderContent;

    if (this.props.dataset) {
      renderContent = this.renderData();
    } else {
      renderContent = this.renderContentHolder();
    }

    return(
      <section className='component__event__board'>
        <div className='group__container'>
          { renderContent }
        </div>
      </section>
    );
  }
}

export default EventBoard;
