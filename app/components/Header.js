require('../styles/header.scss');

import React, { Component, PropTypes } from 'react';

//TODO:: get the root url from: this.props.appDefaults.rootUrl
export default class Header extends Component {
  render() {
    return(
      <nav className='navbar header__container'>
        <section className='app__info'>
          <span>Header</span>
        </section>
      </nav>
    );
  }
}
