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
    body: JSON.stringify(requestData),
  })
  .then(response => response.json());
}

export const makeGetRequest = (requestURL, requestData) => {
  const header = new Headers({
    "Content-Type": "application/json"
  });

  return fetch(`${ requestURL }${ requestData }`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: header,
  })
  .then(response => response.json());
}
