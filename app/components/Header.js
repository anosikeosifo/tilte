require('../styles/header.scss');

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import HeaderProfile from './HeaderProfile';

//TODO:: get the root url from: this.props.appDefaults.rootUrl
class Header extends Component {
  handleTilteAction() {
    this.props.loggedInUser ? this.props.showTilteForm() : this.props.showLoginView();
  }

  render() {
    return(
      <section className='header'>
        <nav className='navbar navigation__container'>
          <section className='app__info'>
            <span className='app__logo'><img width='40' src={ this.props.appDetails.logo } alt={ this.props.appDetails.name }/></span>
            <span className='app__name'>{ this.props.appDetails.name }</span>
          </section>

          <section className={ classNames({ actions: true, tilte__action: true, btn__primary: true }) }>
            <Link className='tilte__action_link' to={ (this.props.loggedInUser == null ? '/new_tilte' : '/login') }>tilte!</Link>
            <HeaderProfile user={ this.props.loggedInUser }/>
          </section>
        </nav>
        <nav className='navbar category__container'>
          <div>Category Navigation</div>
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
