import { getAuthToken } from '../authentication/AuthService';

export const buildUrlEncodedParams = (paramsObject) => {
  const params = Object.keys(paramsObject).map((key) => {
    return `${ key }=${ encodeURIComponent(paramsObject[key]) }`;
  }).join('&');

  return params;
};

const getDefaultHttpParams = () => {
  const headers = new Headers({
                  "Content-Type": "application/json",
                  "Authorization": `JWT ${ getAuthToken() }`,
                });
  return { headers, credentials: 'same-origin' };
};

export const makePostRequest = (requestURL, requestData, configParams={}) => {
  const params = Object.assign({},
    getDefaultHttpParams(),
    configParams,
    { method: 'POST', body: requestData }
  );

  return fetch(requestURL, params)
    .then(response => response.json());
};

export const makeGetRequest = (requestURL, requestData, configParams={}) => {
  const defaultParams = getDefaultHttpParams();
  const params = Object.assign({},
    getDefaultHttpParams(),
    configParams,
    { method: 'GET'},
  );

  return fetch(`${ requestURL }?${ buildUrlEncodedParams(requestData) }`, params)
    .then(response => response.json());
};
