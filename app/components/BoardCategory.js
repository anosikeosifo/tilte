require('../styles/board_category.scss');

import React, { Component, PropTypes } from 'react';
import EventCard from './EventCard.js';
import MomentCard from './MomentCard.js'
import { titleize } from '../helpers/StringHelper';
import { DATA_GROUPS, ICON_SCROLL_LEFT, ICON_SCROLL_RIGHT } from '../constants';
import Icon from './Icon';
import classNames from 'classnames';
import update from 'immutability-helper';


class BoardCategory extends Component {
  constructor() {
    super();
    this.handleScrollRight = this.handleScrollRight.bind(this);
    this.handleScrollLeft = this.handleScrollLeft.bind(this);
    this.handleConainerTransition = this.handleConainerTransition.bind(this);
  }

  componentWillMount() {
    this.setState(Object.assign({}, this.state, {
      scrolledBy: { transform: `translateX(0%)` }
    }));
  }

  componentDidMount() {
    const containerWrap = this.boardContentWrap.querySelectorAll('.component__eventcard');
    this.firstElement = containerWrap.item(0).getBoundingClientRect();
    this.lastElement = containerWrap.item(containerWrap.length - 1);
  }

  handleScrollLeft(event) {
    this.scrollLeftControl = event.target.closest('.scroll__control');
    const scrollDimension = this.boardContentWrap.style.transform.match(/translateX\(-?(\d+)%\)/);
    const containerCanScrollLeft = this.firstElement.left > this.boardContentWrap.getBoundingClientRect().left;

    if (containerCanScrollLeft) {
      this.scrollContainer(parseInt(scrollDimension[1]) - 25);
      this.scrollRightControl && this.scrollRightControl.classList.remove('hidden');
    }
  }

  handleScrollRight(event) {
    this.scrollRightControl =  event.target.closest('.scroll__control');
    const scrollDimension = this.boardContentWrap.style.transform.match(/translateX\(-?(\d+(\.\d+)?)%\)/);
    const containerCanScrollRight = (this.lastElement.getBoundingClientRect().right - this.boardContentScrollArea.getBoundingClientRect().right) > 15;

    if (containerCanScrollRight) {
      this.scrollContainer(parseInt(scrollDimension[1]) + 25);
      this.scrollLeftControl && this.scrollLeftControl.classList.remove('hidden');
    }
  }

  handleConainerTransition(event) {
    const containerCanScrollRight = (this.lastElement.getBoundingClientRect().right - this.boardContentScrollArea.getBoundingClientRect().right) > 15;
    const containerCanScrollLeft = this.firstElement.left > this.boardContentWrap.getBoundingClientRect().left;

    if(event.propertyName == 'transform' && event.target.classList.contains('content__wrap')) {
      if(this.scrollRightControl && !containerCanScrollRight) this.scrollRightControl.classList.add('hidden');
      if(this.scrollLeftControl && !containerCanScrollLeft) this.scrollLeftControl.classList.add('hidden');
    }
  }

  scrollContainer(scrollValue) {
    this.setState(update(this.state, {
      scrolledBy: {
        transform: { $set: `translateX(-${ scrollValue }%)` }
      }
    }));
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
            <span className='scroll__control left' onClick={ this.handleScrollLeft }><Icon icon={ ICON_SCROLL_LEFT } color='#444' /></span>
            <span className='scroll__control right' onClick={ this.handleScrollRight }><Icon icon={ ICON_SCROLL_RIGHT } color='#444' /></span>
            <div className='scrollable_area' ref={ (ref) => this.boardContentScrollArea = ref }>
              <div className='content__wrap' ref={ (ref) => this.boardContentWrap = ref } onTransitionEnd={ this.handleConainerTransition } style={ this.state.scrolledBy }>
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
