require('../styles/feed_item');

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { fetchMomentDetails } from '../actions/MomentActionCreators';
import MomentDetail from './MomentDetail';


class FeedItem extends Component {
  render() {
    return(
      <section className='component__feed_item'>
        <div className='item__content'>
          <MomentDetail { ...this.props.data } />
        </div>
        <div className='map__view'>
        </div>
      </section>
    );
  }
}

FeedItem.propTypes = {

}

export default FeedItem;