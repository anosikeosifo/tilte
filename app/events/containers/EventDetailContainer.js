require('../styles/event_detail_container');

import React, { Component, PropTypes } from 'react';
import { postComment, fetchEventDetails, loadMapView, registerForEvent, saveEvent } from '../EventActionCreators';
import { fetchUserStats } from '../../users/UserActionCreators';
import { connect } from 'react-redux';
import EventDetailHeader from '../components/EventDetailHeader';
import EventDetailBody from '../components/EventDetailBody';
import DefaultLayout from '../../layout/components/DefaultLayout';
import EventMapViewContainer from '../../location/containers/MapViewContainer';
import update from 'immutability-helper';


const mapStateToProps = (state) => ({
  configData: state.configData,
  authData: state.authData,
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
  initUIState() {
    this.state = {
      scrollState: {
        header: '',
        sideBar: '',
      }
    };
  }

  componentDidMount() {
    this.initUIState();
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.props.fetchDetails(this.props.params.id, (this.props.configData.currentUser && this.props.configData.currentUser.id));
    this.props.showMapView(this.props.params.id, (this.props.configData.currentUser && this.props.configData.currentUser.id));
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
    const { register: registerNow, saveForLater, makeComment, showMapView, eventObject, configData, authData, setCurrentModal, logoutUser } = this.props

    return(
      <DefaultLayout currentUser={ authData.currentUser } callbacks={{ setCurrentModal, logoutUser }} appDetails={ configData.appDetails }>
        <section className='event__detail__container'>
          <div className='detail__view'>
            <EventDetailHeader eventObject={ this.props.eventObject } />
            <EventDetailBody
              actor={ authData.currentUser }
              scrollState={ this.state.scrollState }
              actionCallbacks = { { makeComment, showMapView, setCurrentModal } }
              eventObject={ eventObject }
              userActions={[
                { title: "Register Now", key: 'registerNow', value: registerNow },
              ]} />
          </div>
          <div className='map__view'>
            <EventMapViewContainer eventObject={ this.props.eventObject } actor={ authData.currentUser }/>
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
