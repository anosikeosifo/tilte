export const buildPostParams = (paramsObject) => {
  // const form_data = new FormData();
  // form_data.append('data', JSON.stringify(paramsObject));
  return JSON.stringify(paramsObject);
};

export const buildUrlQueryParams = (paramsObject) => {
  const params = Object.keys(paramsObject).map((key) => {
    return `${ key }=${ encodeURIComponent(paramsObject[key]) }`;
  }).join('&');

  return `?${ params }`;
};


export const makePostRequest = (requestURL, requestData) => {
  const header = new Headers({
    "Content-Type": "application/json"
  });

  return fetch(requestURL, {
    method: 'POST',
    credentials: 'same-origin',
    headers: header,
    body: requestData,
  })
  .then(response => response.json());
}
