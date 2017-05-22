import { API_BASE_URL } from '../constants';
import { makePostRequest, makeGetRequest } from '../helpers/HttpHelper';

export const oauthLoginAPI = (authType, requestData) => {
  console.log('about to send login req: ', requestData);
  return makePostRequest(`${ API_BASE_URL }/auth`, requestData);
}
