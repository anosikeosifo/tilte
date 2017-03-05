require('../styles/header');

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import HeaderProfile from './HeaderProfile';
import CategoryNavbar from './CategoryNavbar';

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
            <span className='app__logo inline__block'><img width='40' src={ this.props.appDetails.logo } alt={ this.props.appDetails.name }/></span>
            <span className='app__name inline__block'>{ this.props.appDetails.name }</span>
          </section>

          <section className={ classNames({ actions: true, tilte__action: true }) }>
            <Link className='tilte__action_link btn btn-primary' to={ (this.props.loggedInUser == null ? '/new_tilte' : '/login') }>tilte!</Link>
            <HeaderProfile currentUser={ this.props.loggedInUser }/>
          </section>
        </nav>
        <nav className={ classNames({ hidden: !this.props.loggedInUser, navbar: true, category__container: true }) }>
          <CategoryNavbar user={ this.props.loggedInUser } updatePreference={ this.props.updateCategoryPreference }/>
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
