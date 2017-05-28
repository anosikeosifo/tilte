import '../styles/user_stats';

import React, { PropTypes, Component } from 'react';
import { ICON_FOLLOWERS, ICON_FOLLOWING, ICON_HOSTED, ICON_MOMENT, ICON_TICKET } from '../constants';
import Icon from '../../core/components/Icon';

class UserStats extends Component {
  constructor() {
    super();

    this.legend = {
      followerCount: { title: 'Followers', icon: ICON_FOLLOWERS, iconData: { size: 42 } },
      followingCount: { title: 'Following', icon: ICON_FOLLOWING, iconData: { size: 42 } },
      attendedEventsCount: { title: 'Attended', icon: ICON_TICKET, iconData: { viewBox: 1148 } },
      hostedEventsCount: { title: 'Hosted', icon: ICON_HOSTED },
      momentCount: { title: 'Moments', icon: ICON_MOMENT, iconData: { viewBox: 1124}},
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!this.props.user && nextProps.user) return true;
    if (this.props.user && (nextProps.user.stats != this.props.user.stats)) return true;
    return false;
  }

  handleScrollLeft(event) {
    this.scrollLeftControl = event.target.closest('.scroll__control');
    const scrollDimension = this.boardContentWrap.style.transform.match(/translateX\(-?(\d+)%\)/);
    const containerCanScrollLeft = this.firstElement.getBoundingClientRect().left < this.boardContentScrollArea.getBoundingClientRect().left;

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
    const containerCanScrollLeft = this.firstElement.getBoundingClientRect().left < this.boardContentScrollArea.getBoundingClientRect().left;

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

  render() {
    if (this.props.user) {
      return this.renderComponent();
    } else {
      return this.renderLoadState();
    }
  }

  renderLoadState() {
    return(
      <span>Loading...</span>
    )
  }

  renderComponent() {
    const metadataItems = Object.keys(this.props.user.stats).map((key) => (
        <div className='stats_item' key={ key }>
          <div className='item__icon__wrap'>
            <Icon icon={ this.legend[key].icon } size={36} scaleTo={6} {...this.legend[key].iconData} />
          </div>
          <div className='item__text__wrap'>
            <span className='item__value'>{ this.props.user.stats[key] }</span>
            <span className='item__title'>{ this.legend[key].title }</span>
          </div>
        </div>
      ));

    return(
      <section className='component__user__stats'>
        <div className='data__container__wrap'>
          { metadataItems }
        </div>
      </section>
    );
  }
}

UserStats.propTypes = {
  user: PropTypes.object
};

export default UserStats
