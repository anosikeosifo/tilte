import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchConfigData, updateCategoryPreference } from '../actions/ConfigActionCreators';
import { togglePrevious, toggleNext } from '../actions/SlideActionCreators';
import Carousel from '../components/Carousel';

const mapStateToProps = (state) => ({
  carouselConfig: state.configData.carouselConfig,
});

const mapDispatchToProps = (dispatch) => ({
  togglePreviousSlide: () => dispatch(togglePrevious()),
  toggleNextSlide: () => dispatch(toggleNext()),
  autoToggleSlide: () => setInterval(() => dispatch(toggleNext()), 5000),
});


class CarouselContainer extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.carouselConfig != nextProps.carouselConfig;
  }

  render() {
    const { togglePreviousSlide, toggleNextSlide, autoToggleSlide, carouselConfig } = this.props;

    return(
      <Carousel togglePrevious={ togglePreviousSlide }
      toggleNext={ toggleNextSlide }
      autoToggle={ autoToggleSlide }
      carouselConfig={ carouselConfig } />
    );
  }
}

const ConnectedCarouselContainer = connect(mapStateToProps, mapDispatchToProps)(CarouselContainer);
export default ConnectedCarouselContainer;
