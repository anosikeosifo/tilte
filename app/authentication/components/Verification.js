// require('../styles/verification');

import React, { Component, PropTypes } from 'react';
import DefaultLayout from '../../layout/components/DefaultLayout';


class Verification extends Component {
  render() {
    const { authData, configData, setCurrentModal } = this.props;
    return(
      <DefaultLayout currentUser={ authData.currentUser } setCurrentModal={ setCurrentModal } appDetails={ configData.appDetails }>
        <section className='component__verification'>
          <div className='verification__wrap'>
            <p>Hey, your token has expired!</p>
            <span> Please login again </span>
          </div>
        </section>
      </DefaultLayout>
    );
  }
}

export default Verification;
