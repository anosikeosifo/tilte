import React, { Component, PropTypes } from 'react';

class CategoryNavbar extends Component {
  render() {
    return(
      <section className='category__filter__container'>
        This is the category section
      </section>
    );
  }
}

CategoryNavbar.PropTypes = {
  user: PropTypes.object,
  updatePreference: PropTypes.func,
}

export default CategoryNavbar
