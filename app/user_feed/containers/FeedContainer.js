import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadUserFeed } from './FeedActionCreators';
import Feed from '../components/Feed';


const mapStateToProps = (state) => ({
  feedData: state.userFeed
});

const mapDispatchToProps = (dispatch) => ({
  // fetchUserFeed: () => dispatch(loadUserFeed('7')),
  // reportItem: (itemId, actorId) => dispatch(reportEvent(itemId, actorId)),
  // likeItem: (itemId, actorId) => dispatch(likeEvent(itemId, actorId)),
  // showItemDetail: (itemId, actorId) => dispatch(showEventDetail(itemId, actorId)),
  // fetchSimilarItemsByTag: (itemId, actorId) => dispatch(fetchSimilarEventsByTag(itemId, actorId)),
  // fetchSimilarItemsByLocation: (itemId, actorId) => dispatch(fetchSimilarEventsByLocation(itemId, actorId)),
  // fetchSimilarItemsByUser: (itemId, actorId) => dispatch(fetchSimilarEventsByUser(itemId, actorId)),
});

class FeedContainer extends Component {
  componentWillMount() {
    this.props.fetchUserFeed();
  }

  reportItem(itemId, actorId) {
    this.props.reportItem(itemId, actorId);
  }

  showItemDetail(itemId, actorId) {
    this.props.showItemDetail(itemId, actorId);
  }

  likeItem(itemId, actorId) {
    this.props.likeItem(itemId, actorId);
  }

  fetchSimilarItemsByTag(itemId, actorId) {
    this.props.fetchSimilarItemsByTag(itemId, actorId);
  }

  fetchSimilarItemsByLocation(itemId, actorId) {
    this.props.fetchSimilarItemsByLocation(itemId, actorId);
  }

  fetchSimilarItemsByUser(itemId, actorId) {
    this.props.fetchSimilarItemsByUser(itemId, actorId);
  }

  loadMore() {

  }

  render() {
    // let feedActions = {
    //   report: this.reportItem.bind(this),
    //   showDetail: this.showItemDetail.bind(this),
    //   like: this.likeItem.bind(this),
    //   fetchSimilarByUser: this.fetchSimilarItemsByUser.bind(this),
    //   fetchSimilarByLocation: this.fetchSimilarItemsByLocation.bind(this),
    //   fetchSimilarByTag: this.fetchSimilarItemsByTag.bind(this),
    // }

    return(
      <div className='feed__container'>
        <Feed data={ this.props.feedData }
          actions={ feedActions }
          actor={ this.props.currentUser}/>
      </div>
    );
  }
}

const ConnectedFeedContainer = connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
export default ConnectedFeedContainer;
