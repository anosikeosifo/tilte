import { EVENT_ACTIONS } from '../constants';
import update from 'immutability-helper';

let currentState;

export const eventData = (state=null, action) => {
  currentState = state;

  switch (action.type) {
    case EVENT_ACTIONS.fetchDetailsSuccess:
      return fetchEventDetails(action);
    case EVENT_ACTIONS.postCommentSuccess:
      console.log('old state: ', currentState);
      const newstate = addComment(action);
      console.log('newstate: ', newstate);
      return newstate;
    case EVENT_ACTIONS.fetchCommentsSuccess:
      return fetchComments(action);
    default:
      return currentState;
  }
}

const getComment = (commentId) => {
  return currentState.find((comment) => comment.id == id);
};

const getCommentIndex = (commentId) => {
  return currentState.findIndex((comment) => comment.id == commentId);
};

const fetchEventDetails = (action) => (action.payload.data);

const fetchComments = (action) => {
  return update(currentState, {
    comments: {
      $push: action.payload.data
    }
  });
};

const addComment = (action) => {
  console.log('currentState: ', currentState);
  return update(currentState, {
    comments: {
      $splice: [[0, 0, action.payload.data[0]]]
    }
  });
};

const deleteComment = (state, action) => {
  const commentIndex = getCommentIndex(action.payload.data.id);
  return update(currentState.comments, {
    $splice: [[commentIndex], 1]
  })
};

const hideComment = (state, action) => (
  update(currentState.comments, {
    $push: action.payload.data
  })
);
