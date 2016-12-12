import React, { Component, PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import FeedActionCreators from '../actions/FeedActionCreators';
import Feed from '../components/Feed';

const mapStateToProps = (state) => ({
  feedData: state.userFeed
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserFeed: () => dispatch(FeedActionCreators.fetchUserFeed()),
  reportItem: (itemId, itemType, userId) => dispatch(FeedActionCreators.report(itemId, itemType, userId)),
  favoriteItem: (itemId, itemType, userId) => dispatch(FeedActionCreators.favorite(itemId, itemType, userId)),
  showItemDetail: (itemId, itemType, userId) => dispatch(FeedActionCreators.showItemDetail(itemId, itemType, userId)),
  fetchSimilarItemsByTag: (itemId, itemType, userId) => dispatch(FeedActionCreators.fetchSimilarItemsByTag(itemId, itemType, userId)),
  fetchSimilarItemsByLocation: (itemId, itemType, userId) => dispatch(FeedActionCreators.fetchSimilarItemsByLocation(itemId, itemType, userId)),
  fetchSimilarItemsByUser: (itemId, itemType, userId) => dispatch(FeedActionCreators.fetchSimilarItemsByUser(itemId, itemType, userId)),
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
      <Feed data={ this.props.feedData }
      actions={ feedActions } />
    );
  }
}

const ConnectedFeedContainer = connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
export default ConnectedFeedContainer;
