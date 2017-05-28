//   import { FEED_ACTIONS } from '../constants';
// import { fetchUserFeed } from '../api/FeedAPI';
// import { buildPostParams } from '../helpers/HttpHelper';
//
// const feedActionSuccess = (actionType, payload) => ({
//   type: FEED_ACTIONS[`${actionType}Success`], success: true, payload
// });
//
// const feedActionError = (actionType, error) => ({
//   type: FEED_ACTIONS[`${actionType}Error`], success: false, error
// });
//
// const requestUserFeed = () => ({
//   type: FEED_ACTIONS.fetchFeedRequest
// });
//
// export const loadUserFeed = (actorId, actorLocation = null, pageNumber = 1) => {
//   const actionType = 'fetchFeed';
//
//   const requestData = buildPostParams({
//     user_id: actorId, location: actorLocation, page: pageNumber
//   });
//
//   return (dispatch) => {
//     requestUserFeed();
//
//     fetchUserFeed(requestData)
//       .then(payload => dispatch(feedActionSuccess(actionType, payload)))
//       .catch(error => dispatch(feedActionError(actionType, error)));
//   }
// }
