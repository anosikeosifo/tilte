import { MOMENT_ACTIONS } from '../constants';
import { likeMomentAPI, fetchMomentAPI, fetchCommentsAPI, postCommentAPI } from '../api/MomentAPI';
import { buildPostParams, buildUrlQueryParams } from '../helpers/HttpHelper';


const momentActionSuccess = (actionType, payload) => ({
  type: MOMENT_ACTIONS[`${actionType}Success`], success: true, payload
});

const momentActionError = (actionType, error) => ({
  type: MOMENT_ACTIONS[`${actionType}Error`], success: false, error
});

const triggerlikeMoment = () => ({
  type: MOMENT_ACTIONS.likeRequest
});

const triggerFetchMomentDetails = () => ({
  type: MOMENT_ACTIONS.fetchDetails
});

const triggerFetchComments = () => ({
  type: MOMENT_ACTIONS.fetchCommentsRequest
});

const triggerPostComment = () => ({
  type: MOMENT_ACTIONS.postCommentRequest
});

export const likeMoment = (momentId, actorId) => {
  const actionType = 'like';
  const requestParams = buildPostParams({
    moment_id: momentId, user_id: actorId
  });

  return (dispatch) => {
    triggerlikeMoment();

    likeMomentAPI(requestParams)
      .then(payload => dispatch(momentActionSuccess(actionType, payload)))
      .catch(error => dispatch(momentActionError(actionType, error)));
  }
};

export const fetchMomentDetails = (momentId, actorId) => {
  const actionType = 'fetchDetails';
  const requestParams = buildUrlQueryParams({
    id: momentId, user_id: actorId
  });

  return (dispatch) => {
    triggerFetchMomentDetails();

    //this should take requestParams as arg
    fetchMomentAPI(momentId)
      .then(payload => dispatch(momentActionSuccess(actionType, payload)))
      // .catch(error => dispatch(momentActionError(actionType, error)));
  }
};

export const fetchComments = (momentId, actorId) => {
  const actionType = 'fetchComments';
  const requestParams = buildUrlQueryParams({
    post_id: momentId, user_id: actorId
  });

  return (dispatch) => {
    triggerFetchComments();
    fetchCommentsAPI (requestParams)
      .then(payload => momentActionSuccess(actionType, payload))
      .catch(error => momentActionError(actionType, error));
  };
}

export const postComment = (momentId, actorId, content) => {
  const actionType = 'postComment';
  const requestParams = buildPostParams({
    moment_id: momentId,
    user_id: actorId,
    text: content,
  });

  return (dispatch) => {
    triggerPostComment();
    postCommentAPI(requestParams)
      .then(payload => dispatch(momentActionSuccess(actionType, payload)))
      // .catch(error => dispatch(momentActionError(error)));
  };
};
