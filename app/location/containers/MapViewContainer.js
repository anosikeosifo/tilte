import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MapView from '../components/MapView'

const mapStateToProps = (state )=> ({

});

const mapDispatchToProps = (dispatch) => ({

});

class MapViewContainer extends Component {
  render() {
    return (
      <MapView />
      //nest map's associate widgets inside this parent
    );
  }
}

MapViewContainer.propTypes = {
  eventObject: PropTypes.object.isRequired,
  actor: PropTypes.object,
};

const ConnectedMapViewContainer = connect(mapStateToProps, mapDispatchToProps)(MapViewContainer);
export default ConnectedMapViewContainer;
