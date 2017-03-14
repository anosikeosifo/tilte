require('../styles/board_category.scss');

import React, { Component, PropTypes } from 'react';
import EventCard from './EventCard.js';
import MomentCard from './MomentCard.js'
import { titleize } from '../helpers/StringHelper';
import { DATA_GROUPS, ICON_SCROLL_LEFT, ICON_SCROLL_RIGHT } from '../constants';
import Icon from './Icon';
import classNames from 'classnames';


class BoardCategory extends Component {
  handleScrollLeft(event) {
    console.log('scroll left triggered: ', event);
  }

  handleScrollRight(event) {
    console.log('scroll right triggered: ', event);
  }

  renderData() {
    let categoryItems;

    switch(this.props.categoryName) {
      case DATA_GROUPS.FEATURED_EVENTS:
        categoryItems = this.props.dataset.map(item => (<EventCard key={ item.id } { ...item }/>));
        break;
      case DATA_GROUPS.TRENDING_POSTS:
        categoryItems = this.props.dataset.map(item => (<MomentCard key={ item.id } actions={ props.actions} {...item}  actor={ props.actor }/>));
        break;
      default:
        categoryItems = this.props.dataset.map(item => (<EventCard key={ item.id } { ...item }/>));
    }

    return categoryItems;
  }


  renderContentHolder() {
    return(
      <div className='board__category__holder'>
        <span>Loading...</span>
      </div>
    )
  }

  render() {
    let renderContent;
    let uiClassList = classNames({
      'with__content': this.props.dataset,
      'component__board__category': true,
    });

    if(this.props.dataset) {
      renderContent = this.renderData();
    } else {
      renderContent = this.renderContentHolder();
    }

    return(
      <section className={ uiClassList }>
        <div className='category__container'>
          <div className='name'>
            <span>{ titleize(this.props.categoryName) }</span>
          </div>

          <div className='data__container__wrap'>
            <span className='scroll__control left' onClick={ this.handleScrollLeft() }><Icon icon={ ICON_SCROLL_LEFT } color='#fff' /></span>
            <span className='scroll__control right' onClick={ this.handleScrollRight() }><Icon icon={ ICON_SCROLL_RIGHT } color='#fff' /></span>
            <div className='scrollable_area'>
              <div className='content__wrap'>
                { renderContent }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

BoardCategory.propTypes = {
  categoryName: PropTypes.string.isRequired,
  dataset: PropTypes.array
};

export default BoardCategory;
