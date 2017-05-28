import { API_BASE_URL } from '../core/constants';
import { makePostRequest, makeGetRequest } from '../helpers/HttpHelper';

export const oauthSignupAPI = (authType, requestData) => {
  console.log('about to send login req: ', requestData);
  return makePostRequest(`${ API_BASE_URL }/users`, requestData);
}

export const oauthLoginAPI = (authType, requestData) => {
  console.log('about to send login req: ', requestData);
  return makePostRequest(`${ API_BASE_URL }/users/authenticate`, requestData);
}
export const verifyOAuthAPI = (requestData) => {
  return makePostRequest(`${ API_BASE_URL }/auth/verify`, requestData);
};
