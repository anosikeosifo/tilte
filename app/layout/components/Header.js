require('../styles/header');

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import HeaderProfile from './HeaderProfile';
import HeaderAuth from './HeaderAuth';
import SearchInput from '../../search/containers/SearchInputContainer';

//TODO:: get the root url from: this.props.appDefaults.rootUrl
class Header extends Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    if(this.props.usage == 'home') {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll(event) {
    if(event.target.body.scrollTop >= 250) {
      this.appHeader && this.appHeader.classList.add('opaque');
    } else {
      this.appHeader && this.appHeader.classList.remove('opaque');
    }
  }

  render() {
    const uiClasses = classNames({
      'component__header': true,
      'opaque': this.props.usage != 'home',
      'layout': this.props.usage.toLowerCase() == 'layout',
    });

    const { callBacks, appDetails, loggedInUser } = this.props;
    return(
      <section className={ uiClasses } ref={ (ref) => this.appHeader = ref }>
        <nav className='navbar navigation__container'>
          <div className='pull__left'>
            <section className='app__info'>
              <span className='app__logo inline__block'>
                <Link to='/'>
                  <img width='40' src={ appDetails.logo } alt={ appDetails.name }/>
                </Link>
              </span>
              <span className='app__name inline__block'>{ appDetails.name }</span>
            </section>
            <div className='search__container'>
              <SearchInput/>
            </div>
          </div>

          <div className='pull__right'>
            { loggedInUser ? <HeaderProfile currentUser={ loggedInUser  }/> : <HeaderAuth callBacks={ callBacks }/> }
          </div>
        </nav>
      </section>
    );
  }
}

Header.propTypes = {
  loggedInUser: PropTypes.object,
  appDetails: PropTypes.object.isRequired,
}

export default Header;
