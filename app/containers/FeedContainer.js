import React, { Component, PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import { loadUserFeed } from '../actions/FeedActionCreators';
import { reportMoment, favoriteMoment, showMomentDetail, fetchSimilarMomentsByTag, fetchSimilarMomentsByLocation, fetchSimilarMomentsByUser } from '../actions/MomentActionCreators';
import Feed from '../components/Feed';

const mapStateToProps = (state) => ({
  feedData: state.userFeed
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserFeed: () => dispatch(loadUserFeed()),
  reportItem: (itemId, itemType, userId) => dispatch(reportMoment(itemId, itemType, userId)),
  favoriteItem: (itemId, itemType, userId) => dispatch(favoriteMoment(itemId, itemType, userId)),
  showItemDetail: (itemId, itemType, userId) => dispatch(showMomentDetail(itemId, itemType, userId)),
  fetchSimilarItemsByTag: (itemId, itemType, userId) => dispatch(fetchSimilarMomentsByTag(itemId, itemType, userId)),
  fetchSimilarItemsByLocation: (itemId, itemType, userId) => dispatch(fetchSimilarMomentsByLocation(itemId, itemType, userId)),
  fetchSimilarItemsByUser: (itemId, itemType, userId) => dispatch(fetchSimilarMomentsByUser(itemId, itemType, userId)),
});

class FeedContainer extends Component {
  componentWillMount() {
    this.props.fetchUserFeed();
  }

  reportItem(itemId, itemType, userId) {
    this.props.reportItem(itemId, itemType, userId);
  }

  showItemDetail(itemId, itemType, userId) {
    this.props.showItemDetail(itemId, itemType, userId);
  }

  favoriteItem(itemId, itemType, userId) {
    this.props.favoriteItem(itemId, itemType, userId);
  }

  fetchSimilarItemsByTag(itemId, itemType, userId) {
    this.props.fetchSimilarItemsByTag(itemId, itemType, userId);
  }

  fetchSimilarItemsByLocation(itemId, itemType, userId) {
    this.props.fetchSimilarItemsByLocation(itemId, itemType, userId);
  }

  fetchSimilarItemsByUser(itemId, itemType, userId) {
    this.props.fetchSimilarItemsByUser(itemId, itemType, userId);
  }

  render() {
    let feedActions = {
      report: this.reportItem,
      showDetail: this.showItemDetail,
      favorite: this.favoriteItem,
      fetchSimilarByUser: this.fetchSimilarItemsByUser,
      fetchSimilarByLocation: this.fetchSimilarItemsByLocation,
      fetchSimilarByTag: this.fetchSimilarItemsByTag,
    }

    return(
      <div className='feed__container'>
        <Feed data={ this.props.feedData }
          actions={ feedActions } />
      </div>
    );
  }
}

const ConnectedFeedContainer = connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
export default ConnectedFeedContainer;
