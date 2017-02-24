import { MOMENT_ACTIONS } from '../constants';
import update from 'immutability-helper';


let currentState;

export const comments = (state=[], action) => {
  let currentState = state;

  switch (action.type) {
    case MOMENT_ACTIONS.fetchCommentsSuccess:
      return fetchComments(action);
    case MOMENT_ACTIONS.postCommentSuccess:
      return postComment(action);
    default:
      return state;
  }
}

const fetchComments = (action) => (
  update(state.moment.comments, {
    $push: action.payload.data
  })
);

const postComment = (state, action) => (
  update(currentState.moment.comments, {
    $push: action.payload.data
  })
);
