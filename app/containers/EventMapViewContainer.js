import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import EventMapView from '../components/EventMapView'

const mapStateToProps = (state )=> ({

});

const mapDispatchToProps = (dispatch) => ({

});

class EventMapViewContainer extends Component {
  render() {
    return (
      <EventMapView />
      //nest map's associate widgets inside this parent
    );
  }
}

EventMapViewContainer.propTypes = {
  eventObject: PropTypes.object.isRequired,
  actor: PropTypes.object,
};

const ConnectedEventMapViewContainer = connect(mapStateToProps, mapDispatchToProps)(EventMapViewContainer);
export default ConnectedEventMapViewContainer;
