import { EVENT_ACTIONS } from './constants';
import { fetchEventDetailsAPI, fetchTrendingEventsAPI, fetchFeaturedEventsAPI, eventRegistrationAPI, saveEventAPI } from './EventAPI';
import { loadMapAPI } from '../location/LocationAPI';
import { buildUrlQueryParams } from '../helpers/HttpHelper';
import { followUserAPI, unfollowUserAPI } from '../users/UserAPI';

const eventActionSuccess = (actionType, payload) => ({
  type: EVENT_ACTIONS[`${actionType}Success`], success: true, payload
});

const eventActionError = (actionType, error) => ({
  type: EVENT_ACTIONS[`${actionType}Error`], success: false, error
});

const triggerlikeEvent = () => ({
  type: EVENT_ACTIONS.likeRequest
});

const triggerFetchEventDetails = () => ({
  type: EVENT_ACTIONS.fetchDetails
});

const triggerFetchComments = () => ({
  type: EVENT_ACTIONS.fetchCommentsRequest
});

const triggerPostComment = () => ({
  type: EVENT_ACTIONS.postCommentRequest
});

const triggerLoadMap = () => ({
  type: EVENT_ACTIONS.loadMapRequest
});

const triggerEventRegistration = () => ({
  type: EVENT_ACTIONS.eventRegistrationRequest
});

const triggerSaveEvent = () => ({
  type: EVENT_ACTIONS.saveEventRequest
});

const triggerFetchFeatured = () =>({
  type: EVENT_ACTIONS.fetchFeaturedRequest
});

const triggerFetchTrending = () =>({
  type: EVENT_ACTIONS.triggerFetchTrendingRequest
});

const triggerFollowOrganizer = () => ({
  type: EVENT_ACTIONS.followOrganizerRequest
});

const triggerUnfollowOrganizer = () => ({
  type: EVENT_ACTIONS.unfollowOrganizerRequest
});

export const likeEvent = (eventId, actorId) => {
  const actionType = 'like';
  const requestParams = {
    eventId, actorId
  };

  return (dispatch) => {
    triggerlikeEvent();

    likeEventAPI(requestParams)
      .then(payload => dispatch(eventActionSuccess(actionType, payload)))
      .catch(error => dispatch(eventActionError(actionType, error)));
  };
};

const followOrganizer = (requestData) => {
  const actionType = 'followOrganizer';

  return (dispatch) => {
    triggerFollowOrganizer();
    followUserAPI(requestData)
      .then(payload => dispatch(eventActionSuccess(actionType, payload)))
      // .catch(error => dispatch(userActionError(actionType, error)));
  };
};

const unfollowOrganizer = (requestData) => {
  const actionType = 'unfollowOrganizer';

  return (dispatch) => {
    triggerUnfollowOrganizer();
    unfollowUserAPI(requestData)
      .then(payload => dispatch(eventActionSuccess(actionType, payload)))
      // .catch(error => dispatch(userActionError(actionType, error)));
  };
};

export const fetchEventDetails = (eventId, actorId) => {
  const actionType = 'fetchDetails';
  const requestParams = {
    eventId, actorId
  };

  return (dispatch) => {
    triggerFetchEventDetails();

    //this should take requestParams as arg
    fetchEventDetailsAPI(requestParams)
      .then(payload => dispatch(eventActionSuccess(actionType, payload)))
      // .catch(error => dispatch(eventActionError(actionType, error)));
  };
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
};

export const postComment = (eventId, actorId, content) => {
  const actionType = 'postComment';
  const requestParams = {
    eventId,
    actorId,
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
    eventId,
    actorId,
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

export const registerForEvent = (eventId, actorId, longitude=null, latitude=null) => {
  const actionType = 'eventRegistration';
  const requestParams = {
    eventId,
    actorId,
    longitude,
    latitude,
  };

  return (dispatch) => {
    triggerEventRegistration();
    eventRegistrationAPI(requestParams)
      .then(payload => dispatch(eventActionSuccess(actionType, payload)))
      // .catch(error => dispatch(eventActionError(error)));
  };
};

export const saveEvent = (eventId, actorId) => {
  const actionType = 'saveEvent';
  const requestParams = {
    eventId,
    actorId,
  };

  return (dispatch) => {
    triggerSaveEvent();
    saveEventAPI(requestParams)
      .then(payload => dispatch(eventActionSuccess(actionType, payload)))
      // .catch(error => dispatch(eventActionError(error)));
  };
};

export const fetchTrendingEvents = (userId) => {
  const actionType = 'fetchTrending';
  const requestParams = { user_id: userId };

  return (dispatch) => {
    triggerFetchTrending();
    fetchTrendingEventsAPI(requestParams)
      .then(payload => dispatch(eventActionSuccess(actionType, payload)))
      // .catch(error => dispatch(eventActionError(error)));
  };
};

export const fetchFeaturedEvents = (actorId, locationLat, locationLong) => {
  const actionType = 'fetchFeatured';
  const requestParams = {
    actorId,
    longitude: locationLong,
    latitude: locationLat,
  };

  return (dispatch) => {
    triggerFetchFeatured();
    fetchFeaturedEventsAPI()
      .then(payload => dispatch(eventActionSuccess(actionType, payload)))
      // .catch(error => dispatch(eventActionError(error)));
  };
};
