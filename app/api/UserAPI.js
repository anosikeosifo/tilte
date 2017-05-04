import { API_BASE_URL } from '../constants';
import { makePostRequest, makeGetRequest } from '../helpers/HttpHelper';


export const fetchUserStatsAPI = (requestData) => {
  return makeGetRequest(`${ API_BASE_URL }/users/metadata`, requestData);
}

export const followUserAPI = (requestData) => {
  return makePostRequest(`${ API_BASE_URL }/users/follow`, requestData);
}

export const unfollowUserAPI = (requestData) => {
  return makePostRequest(`${ API_BASE_URL }/users/unfollow`, requestData);
}
