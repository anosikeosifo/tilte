import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMomentDetails } from '../actions/MomentActionCreators';
import FeedItem from '../components/FeedItem';

const mapStateToProps = (state) => ({
  momentData: state.moment,
});

const mapDispatchToProps = (dispatch) => ({
  loadMomentDetails: (momentId, actorId) => dispatch(fetchMomentDetails(momentId, actorId))
})

class FeedItemContainer extends Component {
  componentWillMount() {
    this.props.loadMomentDetails(this.props.params.id, '7');
  }

  render() {
    return(
      <div className='feeditem__container'>
        <FeedItem data={ this.props.momentData }></FeedItem>
      </div>
    );
  }
}

const ConnectedItemContainer = connect(mapStateToProps, mapDispatchToProps)(FeedItemContainer);
export default ConnectedItemContainer;