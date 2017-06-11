import { API_BASE_URL, LINKEDIN_AUTH_URL, LINKEDIN_AUTHTOKEN_URL } from './constants';
import { makePostRequest, makeGetRequest } from '../helpers/HttpHelper';

export const oauthSignupAPI = (authType, requestData) => {
  return makePostRequest(`${ API_BASE_URL }/users`, JSON.stringify(requestData));
}

export const oauthLoginAPI = (authType, requestData) => {
  console.log('about to send login req: ', requestData);
  return makePostRequest(`${ API_BASE_URL }/users/authenticate`, JSON.stringify(requestData));
}

export const verifyOAuthAPI = (requestData) => {
  return makePostRequest(`${ API_BASE_URL }/auth/verify`, JSON.stringify(requestData));
};

export const loginWithLinkedinAPI = (requestData) => {
  return makeGetRequest(LINKEDIN_AUTH_URL, requestData);
}
