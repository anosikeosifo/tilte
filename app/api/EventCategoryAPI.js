export const fetchWelcomeEvents = (requestParams) => {
  return fetch(`${ API_BASE_URL }/event_categories/home`, {
    method: 'GET',
    credentials: 'same-origin'
  })
  .then(response => response.json());
};
