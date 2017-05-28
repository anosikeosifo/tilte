export const API_BASE_URL                         = process.env.NODE_ENV === 'production' ? 'https://tilte-api.herokuapp.com/api': 'http://localhost:1601';

export const ASSETS_BASE_URL                      = (process.env.NODE_ENV === 'production' ? 'https://tilteui.herokuapp.com' : 'http://localhost:1600');

export const REQUEST_SEARCH_SUGGESTIONS           = 'Fetch search suggestions';
export const FETCH_SEARCH_SUGGESTIONS_SUCCESS     = 'Fetch search suggestions';
export const FETCH_SEARCH_SUGGESTIONS_ERROR       = 'Receive search suggestions';

export const ICON_SEARCH                          = ['M621.668 653.668c-44.476 31.692-98.895 50.332-157.668 50.332-150.221 0-272-121.779-272-272s121.779-272 272-272c150.221 0 272 121.779 272 272 0 58.773-18.641 113.192-50.332 157.668l178.714 178.714c17.606 17.606 17.46 45.778-0.006 63.244l-0.75 0.75c-17.421 17.421-45.781 17.469-63.244 0.006l-178.714-178.714zM464 640c114.875 0 208-93.125 208-208s-93.125-208-208-208c-114.875 0-208 93.125-208 208s93.125 208 208 208v0z'];
