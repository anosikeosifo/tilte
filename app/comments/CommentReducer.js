import { EVENT_ACTIONS } from './constants';
import update from 'immutability-helper';


let currentState;

export const comments = (state=[], action) => {
  let currentState = state;

  switch (action.type) {
    case EVENT_ACTIONS.fetchCommentsSuccess:
      return fetchComments(action);
    case EVENT_ACTIONS.postCommentSuccess:
      return postComment(action);
    default:
      return state;
  }
}

const fetchComments = (action) => (
  update(state.event.comments, {
    $push: action.payload.data
  })
);

const postComment = (state, action) => (
  update(currentState.event.comments, {
    $push: action.payload.data
  })
);
