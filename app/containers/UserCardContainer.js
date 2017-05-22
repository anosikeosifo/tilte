import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import UserCard from '../components/UserCard';
import { followAction, getUserStats, fetchUserDetails, fetchFollowers, fetchFollowing } from '../actions/UserActionCreators';

const mapStateToProps = (state) => ({
  userDetails: state.userData.userDetails
});

const mapDispatchToProps = (dispatch) => ({
  getUserDetails: (userId, actorId) => dispatch(fetchUserDetails(userId, actorId)),
  getUserStats: (organizerId, actorId) =>  dispatch(fetchUserStats(organizerId, actorId)),
  followAction: (actionType, userId, actorId) => dispatch(followAction(actionType, userId, actorId)),
  getFollowers: (userId, actorId, pageNumber) => dispatch(fetchFollowers(userId, actorId, pageNumber)),
  getFollowing: (userId, actorId, pageNumber) => dispatch(fetchFollowing(userId, actorId, pageNumber)),
});


class UserCardContainer extends Component {
  componentDidMount() {
    this.props.getUserDetails(this.props.user.id, (this.props.actor && this.props.actor.id))
  }

  render() {
    const { followAction, getFollowers, getFollowing } = this.props;
    return (
      <div className='follow__action__container'>
        <UserCard
          user={ this.props.user }
          actorId={ this.props.actor && this.props.actor.id }
          userDetails={ this.props.userDetails }
          callbacks={ { followAction, getFollowers, getFollowing } } />
      </div>
    );
  }
}

UserCardContainer.propTypes = {
  user: PropTypes.object.isRequired,
  actor: PropTypes.object,
};

const ConnectedUserCardContainer = connect(mapStateToProps, mapDispatchToProps)(UserCardContainer);
export default ConnectedUserCardContainer;
