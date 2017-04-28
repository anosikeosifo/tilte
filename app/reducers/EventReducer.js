import { EVENT_ACTIONS } from '../constants';
import update from 'immutability-helper';

let currentEventState;

export const eventData = (state={}, action) => {
  currentEventState = state;

  switch (action.type) {
    case EVENT_ACTIONS.fetchDetailsSuccess:
    console.log('event detail success')
      return fetchEventDetails(action);
    case EVENT_ACTIONS.fetchFeaturedSuccess:
      console.log('currentEventState: ', currentEventState);
      const newstate = fetchFeaturedEvents(action);
      return newstate;
    case EVENT_ACTIONS.fetchCommentsSuccess:
      return fetchComments(action);
    case EVENT_ACTIONS.eventRegistrationSuccess:
    const eventData = registerForEvent(action);
    console.log('Registration success: ', eventData);
    return eventData;
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
  console.log('currentEventState: ', currentEventState);
  return update(currentEventState, {
    eventDetail: {
      isAttending: { $set: true }
    }
  });
  // return action.payload.data[0];
}
