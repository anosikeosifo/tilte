import React, { Component, PropTypes } from 'react';
import { postComment, fetchComments, fetchEventDetails, loadMapView, registerForEvent, saveEvent } from '../actions/EventActionCreators';
import { connect } from 'react-redux';
import EventDetailHeader from '../components/EventDetailHeader';
import EventDetailBody from '../components/EventDetailBody';
import DefaultLayout from '../layouts/DefaultLayout';

const mapStateToProps = (state) => ({
  appConfig: state.config,
  eventObject: state.event,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDetails: (eventId, actorId) => dispatch(fetchEventDetails(eventId, actorId)),
  makeComment: (eventId, actorId, content) => dispatch(postComment(eventId, actorId, content)),
  loadComments: (eventId, actorId) => dispatch(fetchComments(eventId, actorId)),
  showMapView: (eventId, actorId, longitude, latitude) => dispatch(loadMapView(eventId, actorId, longitude, latitude)),
  register: (eventId, actorId) => dispatch(registerForEvent(eventId, actorId)),
  saveForLater: (eventId, actorId) => dispatch(saveEvent(eventId, actorId)),
});

class EventDetailContainer extends Component {
  componentWillMount() {
    this.props.fetchDetails(this.props.params.id, this.props.appConfig.currentUser.id);
    this.props.loadComments(this.props.params.id, this.props.appConfig.currentUser.id);
    this.props.showMapView(this.props.params.id, this.props.appConfig.currentUser.id);
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
    const { register: registerNow, saveForLater, makeComment, showMapView, eventObject , appConfig } = this.props
    return(
      <DefaultLayout currentUser={ appConfig.currentUser } appDetails={ appConfig.appDetails }>
        <section className='event__detail__container'>
          <EventDetailHeader eventObject={ eventObject } actor={ appConfig.currentUser } userActions={[
            { title: "Register Now", value: registerNow },
            { title: "Save for later", value: saveForLater },
          ]}/>
          <EventDetailBody actor={ appConfig.currentUser } actionCallbacks = { { makeComment, showMapView } } eventObject={ eventObject } />
        </section>
      </DefaultLayout>
    );
  }

  render() {
    console.log('props: ', this.props)
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
