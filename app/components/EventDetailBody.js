require('../styles/event_detail_body');

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { fetchEventDetails } from '../actions/EventActionCreators';
import { FEED_IMAGE_PLACEHOLDERS, USER_AVATAR_PLACEHOLDER } from '../constants';
import ActorCard from './ActorCard';
import LocationDetailsTrigger from './LocationDetailsTrigger';
import LikeTrigger from './LikeTrigger';
import CommentTrigger from './CommentTrigger';
import CommentList from './CommentList';
import CommentInput from './CommentInput';
import EventDateFormatter from './EventDateFormatter';
import Location from './Location';
import EventActions from './EventActions';
import EventDescription from './EventDescription';
import UserCardContainer from '../containers/UserCardContainer';
import Attendance from './Attendance';
import { getEventShortDate } from '../helpers/DateHelper';
import EventDetailTabHeader from './EventDetailTabHeader';
import animatedScrollTo from 'animated-scrollto';


class EventDetailBody extends Component {
  setActiveTab(tabHeaderItem) {
    //TODO:this implementation should be iproved to use state
    this.tabHeader.querySelector('.item.active').classList.remove('active');
    tabHeaderItem.classList.add('active');
  }

  handleTabClick(event) {
    if (!event.target.dataset.tab) return;
    const trigger = event.target;

    this.setActiveTab(trigger);
    animatedScrollTo(
        document.body,
        this[`${ trigger.dataset.tab }Section`].offsetTop + 210,
        500
    );
  }

  render() {
    return (
      <section className='component__event__detail__body'>
        <div className='event__detail__wrap'>
          <section className={ `eventdetail__sidebar__wrap ${ this.props.scrollState.header }` }>
          </section>
          <section className={ `event__detail__main ${ this.props.scrollState.header }` }>
            <div className='main__wrap'>
              <div className={ `details__header__wrap ${ this.props.scrollState.header }` }>
                <div className='details__header'>
                  <section className='event__information__wrap'>
                    <div className='event__date__wrap'>
                      <span className='date__value'>{ getEventShortDate(this.props.eventObject.startTime, this.props.eventObject.endTime) }</span>
                    </div>
                    <span className='event__name'>{ this.props.eventObject.title }</span>
                    <div className='location__info'>
                      <Location latitude={ "6.4367" || this.props.eventObject.location.latitude} longitude={ "3.4192" || this.props.eventObject.location.longitude } action={ this.props.showMapAction } size={ 16 }/>
                    </div>
                  </section>
                  <section className='event__action__wrap'>
                    <EventActions eventId={ this.props.eventObject.id } isAttending={ this.props.eventObject.isAttending } actionsSet={ this.props.userActions } actor={ this.props.actor }/>
                  </section>
                </div>
                <div className='details__header_nav'>
                  <ul className='nav__list' ref={ (ref) => this.tabHeader = ref } onClick={ this.handleTabClick.bind(this) }>
                    <li className='item active' data-tab='description'>Description</li>
                    <li className='item' data-tab='organizer'>Organizer</li>
                    <li className='item' data-tab='going'>{ "Who's going" }</li>
                  </ul>
                </div>
              </div>
              <section className='details__body' ref={ (ref) => this.detailMainBody = ref }>
                <div className='body__content'>
                  <div className='section__wrap' ref={ (ref) => this.descriptionSection = ref }>
                    <EventDescription eventObject={ this.props.eventObject }/>
                  </div>

                  <div className='section__wrap' ref={ (ref) => this.organizerSection = ref }>
                    <section className='section__header'>
                      <span>Meet the Organizer</span>
                    </section>
                    <section className='section__body'>
                      <UserCardContainer actor={ this.props.actor } user={ this.props.eventObject.organizer } />
                    </section>
                  </div>

                  <div className='section__wrap' ref={ (ref) => this.goingSection = ref }>
                    <section className='section__header'>
                      <span>{ "Who's going" }</span>
                    </section>
                    <section className='section__body'>
                      <Attendance actor={ this.props.actor } attendees={ this.props.eventObject.attendees }/>
                    </section>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

EventDetailBody.propTypes = {
  event: PropTypes.shape({
    can_repost: PropTypes.bool,
    can_comment: PropTypes.bool,
    is_favorite: PropTypes.bool,
    comments: PropTypes.array,
    // comments_count: PropTypes.number.isRequired,
    // favorites_count: PropTypes.number.isRequired,
    // reposts_count: PropTypes.number.isRequired,
    description: PropTypes.string,
    image_url: PropTypes.string,
    origin_post: PropTypes.object,
    created_at: PropTypes.string,
    comments: PropTypes.array,
  }),
  actor: PropTypes.object,
}

export default EventDetailBody;
