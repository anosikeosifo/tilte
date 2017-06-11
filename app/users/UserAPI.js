import { API_BASE_URL } from '../core/constants';
import { makePostRequest, makeGetRequest } from '../helpers/HttpHelper';

export const fetchUserStatsAPI = (requestData) => {
  return makeGetRequest(`${ API_BASE_URL }/users/metadata`, requestData);
}

export const followUserAPI = (requestData) => {
  return makePostRequest(`${ API_BASE_URL }/users/follow`, JSON.stringify(requestData));
}

export const unfollowUserAPI = (requestData) => {
  return makePostRequest(`${ API_BASE_URL }/users/unfollow`, JSON.stringify(requestData));
}

export const getFollowStatusAPI = (requestData) => {
  return makeGetRequest(`${ API_BASE_URL }/users/getFollowStatus`, requestData);
};

export const fetchUserDetailsAPI = (requestData) => {
  return makePostRequest(`${ API_BASE_URL }/users/show`, JSON.stringify(requestData));
}
