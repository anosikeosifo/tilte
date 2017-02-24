import React, { Component, PropTypes } from 'react';
import MomentDetail from '../components/MomentDetail';
import { postComment, fetchComments, fetchMomentDetails } from '../actions/MomentActionCreators';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  currentUser: state.config.currentUser,
  moment: state.moment,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDetails: (momentId, actorId) => dispatch(fetchMomentDetails(momentId, actorId)),
  makeComment: (momentId, actorId, content) => dispatch(postComment(momentId, actorId, content)),
  loadComments: (momentId, actorId) => dispatch(fetchComments(momentId, actorId)),
});

class MomentDetailContainer extends Component {
  componentWillMount() {
    this.props.fetchDetails(this.props.params.id, this.props.currentUser);
    this.props.loadComments(this.props.params.id, this.props.currentUser);
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
    return(
      <MomentDetail
        actor={ this.props.currentUser }
        submitCommentAction={ this.props.makeComment }
        moment={ this.props.moment } />
    );
  }

  render() {
    if (this.props.moment) {
      return this.renderComponentElements();
    } else {
      return this.renderLoadState();
    }
  }
}

MomentDetailContainer.propTypes = {
  currentUser: PropTypes.object,
};

const ConnectedMomentDetailConrainer = connect(mapStateToProps, mapDispatchToProps)(MomentDetailContainer);
export default ConnectedMomentDetailConrainer;
