require('../styles/event_detail_container');

import React, { Component, PropTypes } from 'react';
import { postComment, fetchEventDetails, loadMapView, registerForEvent, saveEvent } from '../actions/EventActionCreators';
import { fetchUserStats } from '../actions/UserActionCreators';
import { connect } from 'react-redux';
import EventDetailHeader from '../components/EventDetailHeader';
import EventDetailBody from '../components/EventDetailBody';
import DefaultLayout from '../layouts/DefaultLayout';
import EventMapViewContainer from './EventMapViewContainer';
import update from 'immutability-helper';


const mapStateToProps = (state) => ({
  appConfig: state.configData,
  eventObject: state.eventData.eventDetail,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDetails: (eventId, actorId) => dispatch(fetchEventDetails(eventId, actorId)),
  makeComment: (eventId, actorId, content) => dispatch(postComment(eventId, actorId, content)),
  showMapView: (eventId, actorId, longitude, latitude) => dispatch(loadMapView(eventId, actorId, longitude, latitude)),
  register: (eventId, actorId) => dispatch(registerForEvent(eventId, actorId)),
  saveForLater: (eventId, actorId) => dispatch(saveEvent(eventId, actorId)),
});

class EventDetailContainer extends Component {
  constructor() {
    super();
    this.state = {
      scrollState: {
        header: '',
        sideBar: '',
      }
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.props.fetchDetails(this.props.params.id, (this.props.appConfig.currentUser && this.props.appConfig.currentUser.id));
    this.props.showMapView(this.props.params.id, (this.props.appConfig.currentUser && this.props.appConfig.currentUser.id));
  }

  handleScroll(event) {
    if(event.target.body.scrollTop >= 461) {
      this.updateScrollState(true);
    } else {
      this.updateScrollState(false);
    }
  }

  updateScrollState(isFixed) {
    this.setState(update(this.state, {
      scrollState: {
        header: { $set: isFixed ? 'fixed' : '' },
      }
    }));
  }

  postComment(content, actorId) {
    this.makeComment(content, actorId);
  }

  renderLoadState() {
    return(
      <span>Loading...</span>
    )
  }

  renderComponentElements() {
    const { register: registerNow, saveForLater, makeComment, showMapView, eventObject, appConfig, setCurrentModal } = this.props

    return(
      <DefaultLayout currentUser={ appConfig.currentUser } setCurrentModal={ setCurrentModal } appDetails={ appConfig.appDetails }>
        <section className='event__detail__container'>
          <div className='detail__view'>
            <EventDetailHeader eventObject={ this.props.eventObject } />
            <EventDetailBody
              actor={ appConfig.currentUser }
              scrollState={ this.state.scrollState }
              actionCallbacks = { { makeComment, showMapView } }
              eventObject={ eventObject }
              userActions={[
                { title: "Register Now", key: 'registerNow', value: registerNow },
              ]} />
          </div>
          <div className='map__view'>
            <EventMapViewContainer eventObject={ this.props.eventObject } actor={ appConfig.currentUser }/>
          </div>
        </section>
      </DefaultLayout>
    );
  }

  render() {
    if (this.props.eventObject) {
      return this.renderComponentElements();
    } else {
      return this.renderLoadState();
    }
  }
}

EventDetailContainer.propTypes = {
  currentUser: PropTypes.object,
};

const ConnectedEventDetailConrainer = connect(mapStateToProps, mapDispatchToProps)(EventDetailContainer);
export default ConnectedEventDetailConrainer;
