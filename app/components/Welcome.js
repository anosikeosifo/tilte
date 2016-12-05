import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Banner from './Banner';
import CategoryNavbar from './CategoryNavbar';
import Feed from './Feed';

export default class Welcome extends Component {
  render() {
    //implement and use a view configuration reducer
    
    return(
      <section className='welcome__shell'>
        <Header user={ this.props.user }/>
        <CategoryNavbar categoryData={ this.props.viewConfig.filter }/>
        <Banner/>
        <Feed items={ this.props.feedItems }/>
      </section>
    );
  }
}

Welcome.propTypes = {
  user: PropTypes.object.isRequired,
  viewConfig: PropTypes.object.isRequired,
  feedItems: PropTypes.array.isRequired,
}
