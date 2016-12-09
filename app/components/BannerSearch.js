require('../styles/banner_search.scss');

import React, { Component, PropTypes } from 'react';

export default class BannerSearch extends Component {
  render() {
    return(
      <section className='bannersearch'>
        <div className='search__wrap'>
          <div className='search__input inline__block'>
            <span className='logo inline__block'></span>
            <input type='text' className='search__text inline__block' ref='search__text'  placeholder="Find what you're looking for"/>
          </div>
          <button className='search__trigger btn btn-primary'>Search</button>
        </div>
      </section>
    );
  }
}
