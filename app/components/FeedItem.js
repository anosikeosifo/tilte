require('../styles/feed_item');

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { fetchMomentDetails } from '../actions/MomentActionCreators';
import MomentDetail from './MomentDetail';


class FeedItem extends Component {
  render() {
    return(
      <section className='component__feed_item'>
          <MomentDetail { ...this.props.data } />
      </section>
    );
  }
}

FeedItem.propTypes = {

}

export default FeedItem;