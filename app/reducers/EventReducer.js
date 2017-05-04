import { EVENT_ACTIONS } from '../constants';
import update from 'immutability-helper';

let currentEventState;

export const eventData = (state={}, action) => {
  currentEventState = state;

  switch (action.type) {
    case EVENT_ACTIONS.fetchDetailsSuccess:
      return fetchEventDetails(action);
    case EVENT_ACTIONS.fetchFeaturedSuccess:
      return fetchFeaturedEvents(action);
    case EVENT_ACTIONS.fetchCommentsSuccess:
      return fetchComments(action);
    case EVENT_ACTIONS.eventRegistrationSuccess:
      return registerForEvent(action);
    case EVENT_ACTIONS.followOrganizerSuccess:
      return followOrganizer(action);
    case EVENT_ACTIONS.unfollowOrganizerSuccess:
      return unfollowOrganizer(action);
    default:
      return currentEventState;
  }
}

const getComment = (commentId) => {
  return currentEventState.find((comment) => comment.id == id);
};

const getCommentIndex = (commentId) => {
  return currentEventState.findIndex((comment) => comment.id == commentId);
};

const fetchEventDetails = (action) => {
  return update(currentEventState, {
    $set: {
      eventDetail: action.payload.data
    }
  });
};

const fetchComments = (action) => {
  return update(currentEventState, {
    comments: {
      $push: action.payload.data
    }
  });
};

const fetchFeaturedEvents = (action) => {
  return update(currentEventState, {
    $set: {
      featuredEvents: action.payload.data
    }
  });
}

const addComment = (action) => {
  return update(currentEventState, {
    comments: {
      $splice: [[0, 0, action.payload.data[0]]]
    }
  });
};

const deleteComment = (state, action) => {
  const commentIndex = getCommentIndex(action.payload.data.id);
  return update(currentEventState.comments, {
    $splice: [[commentIndex], 1]
  })
};

const hideComment = (state, action) => (
  update(currentEventState.comments, {
    $push: action.payload.data
  })
);

const registerForEvent = (action) => {
  return update(currentEventState, {
    eventDetail: {
      isAttending: { $set: true }
    }
  });
  // return action.payload.data[0];
}

const followOrganizer = (action) => {
  return update(currentEventState, {
    eventDetail: {
      organizer: {
        canBeFollowed: { $set: false }
      }
    }
  });
};
