require('../styles/header');

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import HeaderProfile from './HeaderProfile';
import CategoryNavbar from './CategoryNavbar';
import TextSearch from './TextSearch';

//TODO:: get the root url from: this.props.appDefaults.rootUrl
class Header extends Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    if(this.props.usage == 'homecontainer') {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  handleTilteAction() {
    this.props.loggedInUser ? this.props.showTilteForm() : this.props.showLoginView();
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
      'header': true,
      'opaque': this.props.usage != 'homecontainer',
      'layout': this.props.usage.toLowerCase() == 'layout',
    });

    return(
      <section className={ uiClasses } ref={ (ref) => this.appHeader = ref }>
        <nav className='navbar navigation__container'>
          <div className='pull__left'>
            <section className='app__info'>
              <span className='app__logo inline__block'><img width='40' src={ this.props.appDetails.logo } alt={ this.props.appDetails.name }/></span>
              <span className='app__name inline__block'>{ this.props.appDetails.name }</span>
            </section>
            <div className='search__container'>
              <TextSearch/>
            </div>
          </div>

          <div className='pull__right'>
            <section className={ classNames({ actions: true, tilte__action: true }) }>
              <Link className='tilte__action_link btn btn-primary' to={ (this.props.loggedInUser == null ? '/new_tilte' : '/login') }>tilte!</Link>
            </section>
            <HeaderProfile currentUser={ this.props.loggedInUser }/>
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
