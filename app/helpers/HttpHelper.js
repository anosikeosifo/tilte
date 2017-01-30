export const buildPostParams = (paramsObject) => {
  const form_data = new FormData();
  form_data.append('data', JSON.stringify(paramsObject));
  return form_data;
};

export const buildUrlQueryParams = (paramsObject) => {
  const params = Object.keys(paramsObject).map((key) => {
    return `${ key }=${ encodeURIComponent(paramsObject[key]) }`;
  }).join('&');

  return `?${ params }`;
};