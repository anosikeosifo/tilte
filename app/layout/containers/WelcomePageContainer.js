require('../styles/welcome_page_container.scss');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchFeaturedEvents,
         fetchTrendingEvents
       } from '../../events/EventActionCreators';
import { fetchTopMoments } from '../../moments/MomentActionCreators';
import BoardCategory from '../components/BoardCategory';
import EventBoard from '../../events/components/EventBoard';
import { WELCOME_VIEW_DATA_GROUPS } from '../constants';
import Banner from '../components/Banner';

const mapStateToProps = (state) => {
  return({
    trendingMoments: state.momentData ? state.momentData.trendingMoments : [],
    trendingEvents: state.eventData ? state.eventData.trendingEvents : [],
    featuredEvents: state.eventData ? state.eventData.featuredEvents : [],
  });
};

const mapDispatchToProps = (dispatch) => ({
  loadFeaturedEvents: () => dispatch(fetchFeaturedEvents()),
  loadTrendingEvents: () => dispatch(fetchTrendingEvents()),
  loadTopMoments: () => dispatch(fetchTopMoments()),
  handleEventAction: (actionType, eventId, userId) => dispatch(takeEventAction(actionType, eventId, userId)),
  showItemDetail: (itemId, actorId) => dispatch(showEventDetail(itemId, actorId)),
});

class WelcomePageContainer extends Component {
  componentDidMount() {
    this.props.loadFeaturedEvents();
    // this.props.loadTrendingEvents();
    // this.props.loadTopMoments();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.currentUser != nextProps.currentUser
      || this.props.featuredEvents != nextProps.featuredEvents;
  }

  showItemDetail(itemId, actorId) {
    this.props.showItemDetail(itemId, actorId);
  }

  render() {
    return(
      <div className='container__welcomepage'>
        <Banner/>
        {/*
          <BoardCategory categoryName={ DATA_GROUPS.FEATURED_EVENTS } dataset={ this.props.trendingEvents } />
          <BoardCategory categoryName={ DATA_GROUPS.TRENDING_MOMENTS } dataset={ this.props.trendingMoments } />
        */}
        <EventBoard dataset={ this.props.featuredEvents }/>
      </div>
    );
  }
}

const ConnectedWelcomePageContainer = connect(mapStateToProps, mapDispatchToProps)(WelcomePageContainer);
export default ConnectedWelcomePageContainer;
