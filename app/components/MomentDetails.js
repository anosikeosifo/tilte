require('../styles/moment_details');

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { fetchMomentDetails } from '../actions/MomentActionCreators';

class MomentDetils extends Component {
  willComponentMount() {
    // fetchMomentDetails()
    console.log('inside moment details: ', this.props)
  }

  render() {
    return(
      <section className='component__moment__detail'>
        <div className='moment__content'></div>
      </section>
    );
  }
}

MomentDetils.propTypes = {

}

export default MomentDetils;