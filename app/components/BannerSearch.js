require('../styles/banner_search.scss');

import React, { Component, PropTypes } from 'react';
import { loadSuggestions } from '../actions/SearchActionCreators';
import { connect, Provider } from 'react-redux';
import Select from 'react-select';
import { ICON_SEARCH } from '../constants';
import Icon from './Icon';

const mapStateToProps = (state) => ({
  searchResults: state.results,
});

const mapDispatchToProps = (dispatch) => ({
  loadSearchSuggestions: (text) => dispatch(loadSuggestions(text)),
});

class BannerSearch extends Component {
  handleSearchInput() {
    const searchText = this.refs.searchText.value;
    if (searchText.length > 3) {
      clearTimeout(this.delayTimer);
      this.delayTimer = setTimeout(() => this.props.loadSearchSuggestions(searchText), 1000);
    }
  }

  handleFocusTrigger() {
    this.refs.searchText.focus();
  }

  render() {
    const iconColor = '#ff5a5f';

    return(
      <section className='bannersearch'>
        <div className='search__wrap'>
          <div className='search__input inline__block'>
            <span onClick={ this.handleFocusTrigger.bind(this) } className='logo inline__block'><Icon icon={ICON_SEARCH} color={ iconColor } size={ 36 }/></span>
            <input type='text' className='search__text inline__block' ref='searchText' placeholder="Find what you're looking for" onInput={ this.handleSearchInput.bind(this) }/>
          </div>
          <button className='search__trigger btn btn-primary'>Search</button>
        </div>
      </section>
    );
  }
}

const BannerSearchContainer = connect(mapStateToProps, mapDispatchToProps)(BannerSearch);
export default BannerSearchContainer;
