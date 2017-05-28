import { MOMENT_ACTIONS } from './constants';
import { likeMomentAPI, fetchMomentAPI, fetchCommentsAPI, postCommentAPI ,loadMapAPI, fetchTopMomentsAPI } from './MomentAPI';
import { buildUrlQueryParams } from '../helpers/HttpHelper';

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

const triggerSaveMoment = () => ({
  type: MOMENT_ACTIONS.saveMomentRequest
});

const triggerFetchTopMoments = () => ({
  type: MOMENT_ACTIONS.fetchTopMomentsRequest
});

export const likeMoment = (eventId, actorId) => {
  const actionType = 'like';
  const requestParams = {
    event_id: eventId, user_id: actorId
  };

  return (dispatch) => {
    triggerlikeMoment();

    likeMomentAPI(requestParams)
      .then(payload => dispatch(eventActionSuccess(actionType, payload)))
      .catch(error => dispatch(eventActionError(actionType, error)));
  }
};

export const fetchMomentDetails = (eventId, actorId) => {
  const actionType = 'fetchDetails';
  const requestParams = buildUrlQueryParams({
    id: eventId, user_id: actorId
  });

  return (dispatch) => {
    triggerFetchMomentDetails();

    //this should take requestParams as arg
    fetchMomentAPI(eventId)
      .then(payload => dispatch(eventActionSuccess(actionType, payload)))
      // .catch(error => dispatch(eventActionError(actionType, error)));
  }
};

export const fetchComments = (eventId, actorId) => {
  const actionType = 'fetchComments';
  const requestParams = {
    event_id: eventId, user_id: actorId, page: '1'
  };

  return (dispatch) => {
    triggerFetchComments();
    fetchCommentsAPI (requestParams)
      .then(payload => eventActionSuccess(actionType, payload))
      .catch(error => eventActionError(actionType, error));
  };
}

export const postComment = (eventId, actorId, content) => {
  const actionType = 'postComment';
  const requestParams = {
    event_id: eventId,
    user_id: actorId,
    text: content,
  };

  return (dispatch) => {
    triggerPostComment();
    postCommentAPI(requestParams)
      .then(payload => dispatch(eventActionSuccess(actionType, payload)))
      // .catch(error => dispatch(eventActionError(error)));
  };
};

export const loadMapView = (eventId, actorId, longitude=null, latitude=null) => {
  const actionType = 'loadMap';
  const requestParams = {
    event_id: eventId,
    user_id: actorId,
    longitude,
    latitude,
  };

  return (dispatch) => {
    triggerLoadMap();
    loadMapAPI(requestParams)
      .then(payload => dispatch(eventActionSuccess(actionType, payload)))
      // .catch(error => dispatch(eventActionError(error)));
  };
}

export const saveMoment = (eventId, actorId) => {
  const actionType = 'saveMoment';
  const requestParams = {
    event_id: eventId,
    user_id: actorId,
  };

  return (dispatch) => {
    triggerSaveMoment();
    saveMomentAPI(requestParams)
      .then(payload => dispatch(eventActionSuccess(actionType, payload)))
      // .catch(error => dispatch(eventActionError(error)));
  };
}

export const fetchTopMoments = (userId) => {
  const actionType = 'fetchTopPosts';
  const requestParams = { userId };

  return (dispatch) => {
    triggerFetchTopMoments();
    fetchTopMomentsAPI(requestParams)
      .then(payload => dispatch(eventActionSuccess(actionType, payload)))
      // .catch(error => dispatch(eventActionError(error)));
  };
}
