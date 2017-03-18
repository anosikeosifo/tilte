require('../styles/text_search.scss');
import React, { Component, PropTypes } from 'react';
import { connect, Provider } from 'react-redux';
import { loadSuggestions } from '../actions/SearchActionCreators';
import { ICON_SEARCH } from '../constants';
import Icon from './Icon';

const mapStateToProps = (state) => ({
  searchResults: state.results,
});

const mapDispatchToProps = (dispatch) => ({
  searchAction: (text) => dispatch(loadSuggestions(text)),
});

class TextSearch extends Component {
  constructor() {
    super();
    this.handleFocusTrigger = this.handleFocusTrigger.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput() {
    const searchText = this.searchText.value;
    if (searchText.length > 3) {
      clearTimeout(this.delayTimer);
      this.delayTimer = setTimeout(() => this.props.searchAction(searchText), 1000);
    }
  }

  handleFocusTrigger() {
    this.searchText.focus();
  }

  buildSearchInput() {
    let inputDOM;
    if(this.props.triggerType == 'text_input') {
      inputDOM = <input type='text' className='search__text inline__block' ref={ (ref) => this.searchText = ref } placeholder="Find what you're looking for" onInput={ this.handleSearchInput } />
    } else {
      inputDOM = <input type='text' className='search__text inline__block' ref={ (ref) => this.searchText = ref } placeholder="Find what you're looking for" />
    }
    return inputDOM;
  }

  buildSearchTrigger() {
    if(this.props.triggerType == 'button_click') {
      return(<button className='search__trigger btn btn-primary'>Search</button>);
    }
  }

  render() {
    const iconColor = '#ff5a5f'
    return(
      <section className='component__textsearch'>
        <div className='search__wrap'>
        <div className='search__input inline__block'>
          <span onClick={ this.handleFocusTrigger } className='logo inline__block'><Icon icon={ICON_SEARCH} color={ iconColor } size={ 24 }/></span>
          { this.buildSearchInput() }
        </div>
          {this.buildSearchTrigger() }
        </div>
      </section>
    );
  }
}

TextSearch.propTypes = {
  triggerType: PropTypes.string.isRequired
}

TextSearch.defaultProps = {
  triggerType: 'text_input'
}


const TextSearchContainer = connect(mapStateToProps, mapDispatchToProps)(TextSearch);
export default TextSearchContainer;
